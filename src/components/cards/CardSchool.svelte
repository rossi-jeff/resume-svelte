<script>
	export /**
	 * @type {{ Name: any; From: { Month: any; Year: any; }; To: { Month: any; Year: any; }; Address: { Address: string; Suite: any; City: any; State: any; Zip: any; }; Program: any; Degree: any; }}
	 */
	let school;
	import { FormatAddress } from '../../lib';
</script>

<div class="card-normal shadow">
	<div class="card-body">
		<div class="card-title">{school.Name}</div>
		{#if school.From && school.To}
			<div class="flex flex-wrap">
				<span class="mr-8">
					<strong>From</strong>
					{school.From.Month}
					{school.From.Year}
				</span>
				<span>
					<strong>To</strong>
					{school.To.Month}
					{school.To.Year}
				</span>
			</div>
		{/if}
		{#if school.Address}
			<div>{FormatAddress(school.Address)}</div>
		{/if}
		{#if school.Program}
			<div>
				<strong>Program</strong>
				{school.Program}
			</div>
		{/if}
		{#if school.Degree}
			<div>
				<strong>Degree</strong>
				{school.Degree}
			</div>
		{/if}
	</div>
</div>
