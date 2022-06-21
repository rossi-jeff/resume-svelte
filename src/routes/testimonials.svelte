<script>
	import { contentUrl, ContentUUID, breadcrumbs, graphQLClient } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { CardTestimonial } from '../components/cards';
	import { GET_COMMENTS_QUERY } from '../graphql/queries';

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
		graphQLClient.request(GET_COMMENTS_QUERY).then(result => {
			if (result.getComments) testimonials = result.getComments
		}).catch(error => console.log(error));
	});
</script>

<ContentRender {rows} />

{#each testimonials as testimonial (testimonial.Id)}
	<CardTestimonial comment={testimonial} />
{/each}
