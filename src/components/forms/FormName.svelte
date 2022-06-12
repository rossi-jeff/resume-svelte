<script>
	export /**
	 * @type {{ Salutation: string; First: any; Middle: any; Last: any; Suffix: any; }}
	 */
	let name;
	const salutations = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'];
</script>

<div class="flex flex-wrap">
	<div class="flex-none p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Salutation</span>
				<select bind:value={name.Salutation} class="select select-bordered">
					<option value="" />
					{#each salutations as salutation}
						<option selected={salutation == name.Salutation} value={salutation}>{salutation}</option
						>
					{/each}
				</select>
			</div>
		</div>
	</div>
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>First</span>
				<input type="text" bind:value={name.First} class="input input-bordered" />
			</div>
		</div>
	</div>
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Middle</span>
				<input type="text" bind:value={name.Middle} class="input input-bordered" />
			</div>
		</div>
	</div>
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Last</span>
				<input type="text" bind:value={name.Last} class="input input-bordered" />
			</div>
		</div>
	</div>
	<div class="flex-none p-4 w-40">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Suffix</span>
				<input type="text" bind:value={name.Suffix} class="input input-bordered" />
			</div>
		</div>
	</div>
</div>
