<script>
	import { contentUrl, ContentUUID, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';

	/**
	 * @type {any[]}
	 */
	let rows = [];

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home' }];
	breadcrumbs.set(trail);

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.Home}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<ContentRender {rows} />
