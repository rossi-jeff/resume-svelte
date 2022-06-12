<script>
	export /**
	 * @type {{ EmailType: any; Email: any; PhoneType: any; Phone: any; Preferred: any; }}
	 */
	let contact;
	const emailTypes = ['Work', 'Home'];
	const phoneTypes = ['Work', 'Mobile', 'Home'];
	const prefered = ['Email', 'Phone'];
</script>

<div class="flex flex-wrap">
	<div class="flex-none p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Email Type</span>
				<select class="select select-bordered" bind:value={contact.EmailType}>
					{#each emailTypes as type}
						<option value={type} selected={type == contact.EmailType}>{type}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>

	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Email</span>
				<input type="text" class="input input-bordered" bind:value={contact.Email} />
			</div>
		</div>
	</div>

	<div class="flex-none p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Phone Type</span>
				<select class="select select-bordered" bind:value={contact.PhoneType}>
					{#each phoneTypes as type}
						<option value={type} selected={type == contact.PhoneType}>{type}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>

	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Phone</span>
				<input type="text" class="input input-bordered" bind:value={contact.Phone} />
			</div>
		</div>
	</div>

	<div class="flex-none p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Preferred</span>
				<select class="select select-bordered" bind:value={contact.Preferred}>
					{#each prefered as type}
						<option value={type} selected={type == contact.Preferred}>{type}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
</div>
