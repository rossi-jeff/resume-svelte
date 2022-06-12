<script>
	export /**
	 * @type {{ Username: any; Password: any; }}
	 */
	let credentials;
</script>

<div class="flex flex-wrap">
	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Username</span>
				<input type="text" bind:value={credentials.Username} class="input input-bordered" />
			</div>
		</div>
	</div>

	<div class="flex-grow p-4">
		<div class="form-control">
			<div class="input-group input-group-vertical">
				<span>Password</span>
				<input type="password" bind:value={credentials.Password} class="input input-bordered" />
			</div>
		</div>
	</div>
</div>
