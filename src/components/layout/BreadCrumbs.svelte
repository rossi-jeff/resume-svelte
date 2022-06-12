<script>
	import { breadcrumbs } from '../../lib';
</script>

<div class="card-normal shadow">
	<div class="py-2 px-8">
		<div class="text-sm breadcrumbs">
			<ul>
				{#each $breadcrumbs as crumb}
					<li>
						{#if crumb.href}
							<a href={crumb.href}>{crumb.text}</a>
						{:else}
							<strong>{crumb.text}</strong>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
