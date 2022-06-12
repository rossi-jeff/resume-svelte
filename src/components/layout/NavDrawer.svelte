<script>
	export let closeDrawer = () => {};
</script>

<div class="drawer-side">
	<label for="nav-drawer" class="drawer-overlay" />
	<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
		<li><a href="/" on:click={closeDrawer}>Home</a></li>
		<li><a href="/contact" on:click={closeDrawer}>Contact</a></li>
		<li><a href="/education" on:click={closeDrawer}>Education</a></li>
		<li><a href="/employment" on:click={closeDrawer}>Employment</a></li>
		<li><a href="/references" on:click={closeDrawer}>References</a></li>
		<li><a href="/testimonials" on:click={closeDrawer}>Testimonials</a></li>
		<li><a href="/links" on:click={closeDrawer}>Links</a></li>
		<li><a href="/download" on:click={closeDrawer}>Download Resume</a></li>
	</ul>
</div>
