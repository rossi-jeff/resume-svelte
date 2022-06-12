<script>
	import { contentUrl, ContentUUID, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { CardTestimonial } from '../components/cards';

	/**
	 * @type {any[]}
	 */
	let rows = [];
	/**
	 * @type {any[]}
	 */
	let testimonials = [];

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home', href: '/' }, { text: 'Testimonials' }];
	breadcrumbs.set(trail);

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.Testimonials}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
		fetch('/testimonials.json')
			.then((results) => results.json())
			.then((data) => {
				testimonials = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<ContentRender {rows} />

{#each testimonials as testimonial (testimonial.Id)}
	<CardTestimonial comment={testimonial} />
{/each}
