<script>
	export /**
	 * @type {{ Message: any; }}
	 */
	let comment;
	import { FormatName } from '../../lib';
	const author = (
		/** @type {{ Message?: any; Admins?: any; References?: any; Visitors?: any; }} */ comment
	) => {
		let name = '';
		if (comment) {
			if (comment.Admins && comment.Admins.length && comment.Admins[0].Name) {
				name = FormatName(comment.Admins[0].Name);
			} else if (comment.References && comment.References.length && comment.References[0].Name) {
				name = FormatName(comment.References[0].Name);
			} else if (comment.Visitors && comment.Visitors.length && comment.Visitors[0].Name) {
				name = FormatName(comment.Visitors[0].Name);
			}
		}
		return name;
	};
</script>

<div class="card-normal shadow">
	<div class="card-body">
		<div>{comment.Message}</div>
		{#if author(comment)}
			<div class="text-end">
				---
				{author(comment)}
			</div>
		{/if}
	</div>
</div>
