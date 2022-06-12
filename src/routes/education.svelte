<script>
	import { contentUrl, ContentUUID, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { CardSchool } from '../components/cards';

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
		fetch('/education.json')
			.then((results) => results.json())
			.then((data) => {
				schools = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<ContentRender {rows} />

{#each schools as school}
	<CardSchool {school} />
{/each}
