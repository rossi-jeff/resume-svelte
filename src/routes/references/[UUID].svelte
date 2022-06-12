<script>
	export /**
	 * @type {any}
	 */
	let reference;
	import { FormatAddress, FormatName, breadcrumbs } from '../../lib';

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [
		{ text: 'Home', href: '/' },
		{ text: 'References', href: '/references' },
		{ text: FormatName(reference.Name) }
	];
	breadcrumbs.set(trail);
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
