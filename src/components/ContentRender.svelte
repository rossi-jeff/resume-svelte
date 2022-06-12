<script>
	export /**
	 * @type {any}
	 */
	let rows;
</script>

<div class="card-normal shadow">
	<div class="card-body">
		{#each rows as row (row.Id)}
			<div>
				{#each row.Columns as column (column.Id)}
					<div>{@html column.Content}</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
