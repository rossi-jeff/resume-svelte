<script>
	/**
* @type {{ Name: { Salutation: any; First: any; Middle: any; Last: any; Suffix: string; }; Company: any; Title: any; Address: { Address: string; Suite: any; City: any; State: any; Zip: any; }; Emails: string | any[]; Phones: string | any[]; Comments: string | any[]; }}
*/
	let reference = {
		Name: {
			Salutation: undefined,
			First: undefined,
			Middle: undefined,
			Last: undefined,
			Suffix: ''
		},
		Company: undefined,
		Title: undefined,
		Address: {
			Address: '',
			Suite: undefined,
			City: undefined,
			State: undefined,
			Zip: undefined
		},
		Emails: '',
		Phones: '',
		Comments: ''
	};
	import { FormatAddress, FormatName, breadcrumbs, graphQLClient } from '../../lib';
	import { SHOW_REFERENCE_QUERY } from '../../graphql/queries';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [
		{ text: 'Home', href: '/' },
		{ text: 'References', href: '/references' }
	];
	breadcrumbs.set(trail);

	onMount(() => {
		const { UUID } = $page.params
		graphQLClient.request(SHOW_REFERENCE_QUERY, { UUID }).then(result => {
			if (result.showReference) reference = result.showReference
			if (reference.Name && trail.length === 2) {
				trail.push({ text: FormatName(reference.Name) });
				breadcrumbs.set(trail);
			}
		}).catch(error => console.log(error));
	});
</script>

<div class="card-normal shadow">
	<div class="card-body">
		<div class="card-title">{FormatName(reference.Name)}</div>
		{#if reference.Company}
			<div>
				<strong>Company</strong>
				{reference.Company}
			</div>
		{/if}
		{#if reference.Title}
			<div>
				<strong>Title</strong>
				{reference.Title}
			</div>
		{/if}
		{#if reference.Address && FormatAddress(reference.Address)}
			<div>
				<strong>Address</strong>
				{FormatAddress(reference.Address)}
			</div>
		{/if}
	</div>
</div>
{#if reference.Emails && reference.Emails.length}
	<div class="card-normal shadow">
		<div class="card-body">
			<div class="card-title">Email(s)</div>
			{#each reference.Emails as email (email.Id)}
				<div><a href="mailto:{email.Address}">{email.Address}</a></div>
			{/each}
		</div>
	</div>
{/if}
{#if reference.Phones && reference.Phones.length}
	<div class="card-normal shadow">
		<div class="card-body">
			<div class="card-title">Phone(s)</div>
			{#each reference.Phones as phone (phone.Id)}
				<div>
					{phone.Number}
					{#if phone.Extension}
						ex: {phone.Extension}
					{/if}
				</div>
			{/each}
		</div>
	</div>
{/if}
{#if reference.Comments && reference.Comments.length}
	<div class="card-normal shadow">
		<div class="card-body">
			<div class="card-title">Comment(s)</div>
			{#each reference.Comments as comment (comment.Id)}
				<div>{comment.Message}</div>
			{/each}
		</div>
	</div>
{/if}
