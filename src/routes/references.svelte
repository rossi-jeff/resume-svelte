<script>
	import { contentUrl, ContentUUID, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { CardReference } from '../components/cards';

	/**
	 * @type {any[]}
	 */
	let rows = [];
	/**
	 * @type {any[]}
	 */
	let references = [];

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home', href: '/' }, { text: 'References' }];
	breadcrumbs.set(trail);

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.References}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
		fetch('/references.json')
			.then((results) => results.json())
			.then((data) => {
				references = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<ContentRender {rows} />

{#each references as reference (reference.Id)}
	<CardReference {reference} />
{/each}

<div class="card-normal shadow">
	<div class="py-4 px-6">
		<a href="/references/new" class="btn">New Reference</a>
	</div>
</div>
