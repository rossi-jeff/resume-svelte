<script>
	import { contentUrl, ContentUUID, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { CardJob } from '../components/cards';

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
		fetch('/employment.json')
			.then((results) => results.json())
			.then((data) => {
				jobs = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<ContentRender {rows} />

{#each jobs as job (job.Id)}
	<CardJob {job} />
{/each}
