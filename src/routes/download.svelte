<script>
	import { contentUrl, ContentUUID, breadcrumbs } from '../lib';
	import { onMount } from 'svelte';
	import { ContentRender } from '../components';
	import { FormatAddress, FormatName } from '../lib';

	/**
	 * @type {any[]}
	 */
	let rows = [];
	/**
	 * @type {any[]}
	 */
	let schools = [];
	/**
	 * @type {any[]}
	 */
	let jobs = [];
	/**
	 * @type {any[]}
	 */
	let references = [];

	/** @type {{ text: string; href?: string; }[]} */
	let trail = [{ text: 'Home', href: '/' }, { text: 'Download Resume' }];
	breadcrumbs.set(trail);

	const print = () => {
		const container = document.getElementById('print-container');
		if (container) {
			const content = container.innerHTML
			const printWindow = window.open('', '', 'height=500, width=500');
			if (printWindow) {
				printWindow.document.write('<html>');
				printWindow.document.write('<body>');
				printWindow.document.write(content);
				printWindow.document.write('</body>');
				printWindow.document.write('</html>');
				printWindow.document.close();
				printWindow.print();
			}
		}
	}

	onMount(() => {
		const url = `${contentUrl}/page/${ContentUUID.Resume}/row`;
		fetch(url)
			.then((results) => results.json())
			.then((data) => {
				rows = data;
			})
			.catch((e) => console.log(e));
		fetch('/education.json')
			.then((results) => results.json())
			.then((data) => {
				schools = data;
			})
			.catch((e) => console.log(e));
		fetch('/employment.json')
			.then((results) => results.json())
			.then((data) => {
				jobs = data;
			})
			.catch((e) => console.log(e));
		fetch('/references.json')
			.then((results) => results.json())
			.then((data) => {
				references = data;
			})
			.catch((e) => console.log(e));
	});
</script>

<ContentRender {rows} />

<div class="card-normal shadow">
	<div class="card-body">
		<button class="btn w-40" on:click={print}>Print</button>

		<div id="print-container">
			<strong>Jeffrey Rossi</strong>
			<div>Software Developer</div>
			<hr />
			<br />

			{#if jobs.length}
				<strong>Employment</strong>
				<hr />
				<br />
				{#each jobs as job (job.Id)}
					<div>
						<i>{job.Company}</i>
						{#if job.From && job.To}
							<div>
								<span style="margin-right: 2em">
									From:
									{job.From.Month}
									{job.From.Year}
								</span>
								<span>
									To:
									{job.To.Month}
									{job.To.Year}
								</span>
							</div>
						{/if}
						{#if job.Address}
							<div>
								Address:
								{FormatAddress(job.Address)}
							</div>
						{/if}
						{#if job.Title}
							<div>
								Title:
								{job.Title}
							</div>
						{/if}
						{#if job.Duties}
							<div>
								Duties:
								{job.Duties}
							</div>
						{/if}
					</div>
					<br/>
				{/each}
			{/if}

			{#if schools.length}
				<strong>Education</strong>
				<hr />
				<br />
				{#each schools as school (school.Id)}
					<div>
						<i>{school.Name}</i>
						{#if school.From && school.To}
							<div>
								<span style="margin-right: 2em">
									From:
									{school.From.Month}
									{school.From.Year}
								</span>
								<span>
									To:
									{school.To.Month}
									{school.To.Year}
								</span>
							</div>
						{/if}
						{#if school.Address}
							<div>
								Address:
								{FormatAddress(school.Address)}
							</div>
						{/if}
						{#if school.Program}
							<div>
								Program:
								{school.Program}
							</div>
						{/if}
						{#if school.Degree}
							<div>
								Degree:
								{school.Degree}
							</div>
						{/if}
					</div>
					<br/>
				{/each}
			{/if}

			<div style="page-break-after: always;"></div>

			{#if references.length}
				<strong>References</strong>
				<hr />
				<br />
				{#each references as reference (reference.Id)}
					<div>
						<i>{FormatName(reference.Name)}</i>
						{#if reference.Company}
							<div>
								Company:
								{reference.Company}
							</div>
						{/if}
						{#if reference.Title}
							<div>
								Title:
								{reference.Title}
							</div>
						{/if}
						{#if reference.Address && FormatAddress(reference.Address)}
							<div>
								Address:
								{FormatAddress(reference.Address)}
							</div>
						{/if}
						{#if reference.Phones && reference.Phones.length}
							<div>
								Phone:
								{#each reference.Phones as phone (phone.Id)}
									<span style="margin-right: 2em">{phone.Number}</span>
								{/each}
							</div>
						{/if}
						{#if reference.Emails && reference.Emails.length}
							<div>
								Email:
								{#each reference.Emails as email (email.Id)}
									<span style="margin-right: 2em">{email.Address}</span>
								{/each}
							</div>
						{/if}
					</div>
					<br/>
				{/each}
			{/if}

			<strong>Online</strong>
			<hr />
			<br />
			<div>
				<div>React:</div>
				<div>Vue:</div>
				<div>Angular:</div>
				<div>Svelte:</div>
			</div>
			<br/>

			<strong>Contact</strong>
			<hr />
			<br />
			<div>
				<div>Address: 1506 Tuscaloosa Ave, Holly Hill Florida 32117</div>
				<div>Home: (386) 226-8913</div>
				<div>Cell: (386) 316-8485</div>
				<div>Email: rossi.jeff@gmail.com</div>
			</div>
			<br/>
		</div>
	</div>
</div>
