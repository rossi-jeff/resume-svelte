<script>
	export /**
	 * @type {{ Company: any; From: { Month: any; Year: any; }; To: { Month: any; Year: any; }; Address: { Address: string; Suite: any; City: any; State: any; Zip: any; }; Title: any; Duties: any; }}
	 */
	let job;
	import { FormatAddress } from '../../lib';
</script>

<div class="card-normal shadow">
	<div class="card-body">
		<div class="card-title">{job.Company}</div>
		{#if job.From && job.To}
			<div class="flex flex-wrap">
				<span class="mr-8">
					<strong>From</strong>
					{job.From.Month}
					{job.From.Year}
				</span>
				<span>
					<strong>To</strong>
					{job.To.Month}
					{job.To.Year}
				</span>
			</div>
		{/if}
		{#if job.Address}
			<div>
				<strong>Address</strong>
				{FormatAddress(job.Address)}
			</div>
		{/if}
		{#if job.Title}
			<div>
				<strong>Title</strong>
				{job.Title}
			</div>
		{/if}
		{#if job.Duties}
			<div>
				<strong>Duties</strong>
				{job.Duties}
			</div>
		{/if}
	</div>
</div>
