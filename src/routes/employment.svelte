<script>
	import { contentUrl, ContentUUID, breadcrumbs, graphQLClient } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { CardJob } from '../components/cards';
	import { GET_JOBS_QUERY } from '../graphql/queries';

	/**
	 * @type {any[]}
	 */
	let rows = [];
	/**
	 * @type {any[]}
	 */
	let jobs = [];

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home', href: '/' }, { text: 'Employment' }];
	breadcrumbs.set(trail);

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.Employment}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
		graphQLClient.request(GET_JOBS_QUERY).then(result => {
			if (result.getJobs) jobs = result.getJobs
		}).catch(error => {
			console.log(error);
		})
	});
</script>

<ContentRender {rows} />

{#each jobs as job (job.Id)}
	<CardJob {job} />
{/each}
