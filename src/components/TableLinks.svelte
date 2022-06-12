<script>
	export /**
	 * @type {any}
	 */
	let links;
</script>

<div class="card-normal shadow">
	<div class="card-body">
		<table class="table table-zebra w-full">
			<thead>
				<tr>
					<th>Site</th>
					<th>Type</th>
					<th>Url</th>
				</tr>
			</thead>
			<tbody>
				{#each links as link (link.Id)}
					<tr class="hover">
						<td class="whitespace-normal">
							<strong>{link.Title}</strong><br />
							{link.Description}
						</td>
						<td width="10%">{link.Type}</td>
						<td width="15%">
							{#if link.Url}
								<a href={link.Url} target="_blank">Visit {link.Title}</a>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
