<script>
	export /**
	 * @type {{ Address: any; Suite: any; City: any; State: any; Zip: any; }}
	 */
	let address;
</script>

<div class="p-4">
	<div class="form-control">
		<div class="input-group">
			<span>Adrress</span>
			<input type="text" bind:value={address.Address} class="input input-bordered w-full" />
		</div>
	</div>
</div>

<div class="p-4">
	<div class="form-control">
		<div class="input-group">
			<span>Suite</span>
			<input type="text" bind:value={address.Suite} class="input input-bordered w-full" />
		</div>
	</div>
</div>

<div class="flex flex-wrap">
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>City</span>
				<input type="text" bind:value={address.City} class="input input-bordered" />
			</div>
		</div>
	</div>
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>State</span>
				<input type="text" bind:value={address.State} class="input input-bordered" />
			</div>
		</div>
	</div>
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Zip</span>
				<input type="text" bind:value={address.Zip} class="input input-bordered" />
			</div>
		</div>
	</div>
</div>
