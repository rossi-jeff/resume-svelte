<script>
	import '../app.css';
	import { NavBar, NavDrawer, BreadCrumbs } from '../components/layout';

	let toggleDrawer = () => {
		drawerOpen = !drawerOpen;
	};
	let toggleMenu = () => {
		console.log('toggleMenu');
	};
	let closeDrawer = () => {
		drawerOpen = false;
	};
	let drawerOpen = false;
</script>

<div class="drawer">
	<input type="checkbox" id="nav-drawer" class="drawer-toggle" bind:checked={drawerOpen} />
	<div class="drawer-content">
		<NavBar {toggleDrawer} {toggleMenu} />
		<BreadCrumbs />
		<slot />
	</div>
	<NavDrawer {closeDrawer} />
</div>
