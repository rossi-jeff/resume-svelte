<script>
	import { contentUrl, ContentUUID, graphQLClient, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { FormName, FormAddress, FormMessage, FormContactMethods } from '../components/forms';
	import { CREATE_CONTACT_MUTATION } from '../graphql/mutations';

	/**
	 * @type {any[]}
	 */
	let rows = [];

	let contact = {
		Name: {
			Salutation: '',
			First: '',
			Middle: '',
			Last: '',
			Suffix: ''
		},
		Address: {
			Address: '',
			Suite: '',
			City: '',
			State: '',
			Zip: ''
		},
		Email: '',
		EmailType: 'Work',
		Phone: '',
		PhoneType: 'Work',
		Preferred: 'Email',
		Subject: '',
		Message: ''
	};

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home', href: '/' }, { text: 'Contact' }];
	breadcrumbs.set(trail);

	const sendContact = async () => {
		const data = await graphQLClient.request(CREATE_CONTACT_MUTATION, contact);
		console.log(JSON.stringify(data));
	};

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.Contact}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<svelte:head>
	<title>Jeff Rossi | Software Developer > Contact</title>
</svelte:head>

<ContentRender {rows} />

<div class="card-normal shadow">
	<div class="card-body">
		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Name</div>
			<div class="collapse-content">
				<FormName name={contact.Name} />
			</div>
		</div>

		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Address</div>
			<div class="collapse-content">
				<FormAddress address={contact.Address} />
			</div>
		</div>

		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Contact Methods</div>
			<div class="collapse-content">
				<FormContactMethods {contact} />
			</div>
		</div>

		<div class="collapse collapse-arrow border">
			<input type="checkbox" />
			<div class="collapse-title">Message</div>
			<div class="collapse-content">
				<FormMessage {contact} />
			</div>
		</div>

		<button class="btn w-60" on:click={sendContact}>Send Contact Email</button>
	</div>
</div>
