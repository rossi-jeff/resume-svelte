<script>
	export /**
	 * @type {{ Subject: any; Message: any; }}
	 */
	let contact;
</script>

<div class="p-4">
	<div class="form-control">
		<div class="input-group">
			<span>Subject</span>
			<input type="text" bind:value={contact.Subject} class="input input-bordered w-full" />
		</div>
	</div>
</div>

<div class="p-4">
	<div class="form-control">
		<div class="input-group">
			<span>Message</span>
			<textarea class="textarea textarea-bordered w-full" bind:value={contact.Message} />
		</div>
	</div>
</div>
