<script>
	export /**
	 * @type {{ Company: any; Title: any; }}
	 */
	let reference;
</script>

<div class="flex flex-wrap">
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Company</span>
				<input type="text" bind:value={reference.Company} class="input input-bordered" />
			</div>
		</div>
	</div>

	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Title</span>
				<input type="text" bind:value={reference.Title} class="input input-bordered" />
			</div>
		</div>
	</div>
</div>
