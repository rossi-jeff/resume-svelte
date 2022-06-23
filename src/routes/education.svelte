<script>
	import { contentUrl, ContentUUID, breadcrumbs, graphQLClient } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { CardSchool } from '../components/cards';
	import { GET_SCHOOLS_QUERY } from '../graphql/queries';

	/**
	 * @type {any[]}
	 */
	let rows = [];
	/**
	 * @type {any[]}
	 */
	let schools = [];

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home', href: '/' }, { text: 'Education' }];
	breadcrumbs.set(trail);

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.Education}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
		graphQLClient.request(GET_SCHOOLS_QUERY).then(result => {
			if (result.getSchools) schools = result.getSchools
		}).catch(error => {
			console.log(error);
		})
	});
</script>

<svelte:head>
	<title>Jeff Rossi | Software Developer > Education</title>
</svelte:head>

<ContentRender {rows} />

{#each schools as school}
	<CardSchool {school} />
{/each}
