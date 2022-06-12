<script>
	import { contentUrl, ContentUUID, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender, TableLinks } from '../components';

	/**
	 * @type {any[]}
	 */
	let rows = [];
	/**
	 * @type {never[]}
	 */
	let links = [];

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home', href: '/' }, { text: 'Links' }];
	breadcrumbs.set(trail);

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.Links}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
		fetch('/links.json')
			.then((results) => results.json())
			.then((data) => {
				links = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<ContentRender {rows} />

<TableLinks {links} />
