<script>
	export /**
	 * @type {{ UUID: any; Name: { Salutation: any; First: any; Middle: any; Last: any; Suffix: string; }; Company: any; Title: any; Address: { Address: string; Suite: any; City: any; State: any; Zip: any; }; }}
	 */
	let reference;
	import { FormatName, FormatAddress } from '../../lib';
</script>

<div class="card-normal shadow">
	<div class="card-body">
		<div class="card-title">
			<a href="/references/{reference.UUID}">{FormatName(reference.Name)}</a>
		</div>
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
