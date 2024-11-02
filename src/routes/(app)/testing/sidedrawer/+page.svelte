<script>
	import { onMount } from 'svelte';
	let isDrawerOpen = true;
	let drawerWidth = 256; // Standardbreite des Drawers (in Pixel)
	const minDrawerWidth = 64; // Mindestbreite
	const maxDrawerWidth = 400; // Maximalbreite

	// Funktion zum Ein- und Ausklappen des Drawers
	const toggleDrawer = () => {
		isDrawerOpen = !isDrawerOpen;
		drawerWidth = isDrawerOpen ? 256 : 64;
	};

	let isResizing = false;

	// Event-Handler für das Starten und Stoppen des Resizings
	const startResize = () => (isResizing = true);
	const stopResize = () => (isResizing = false);

	// Event-Handler für das Resizing
	const resizeDrawer = (event) => {
		if (isResizing) {
			const newWidth = event.clientX;
			if (newWidth >= minDrawerWidth && newWidth <= maxDrawerWidth) {
				drawerWidth = newWidth;
			}
		}
	};

	onMount(() => {
		window.addEventListener('mousemove', resizeDrawer);
		window.addEventListener('mouseup', stopResize);
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="flex h-full w-full" onmouseup={stopResize}>
	<!-- Side Drawer -->
	<div
		class="relative flex-shrink-0 bg-gray-800 text-white transition-all duration-300"
		style="width: {drawerWidth}px"
	>
		<button onclick={toggleDrawer} class="m-4 rounded-lg bg-gray-700 p-2">
			{isDrawerOpen ? '<<' : '>>'}
		</button>
		{#if isDrawerOpen}
			<nav class="space-y-2 p-4">
				<a href="#" class="block rounded p-2 text-white hover:bg-gray-700">Home</a>
				<a href="#" class="block rounded p-2 text-white hover:bg-gray-700">Profile</a>
				<a href="#" class="block rounded p-2 text-white hover:bg-gray-700">Settings</a>
				<!-- Füge hier weitere Navigationselemente hinzu -->
			</nav>

			<!-- Resize-Handle für den Drawer -->
			<div
				class="absolute right-0 top-0 z-10 h-full w-2 cursor-col-resize bg-gray-500"
				onmousedown={startResize}
			></div>
		{/if}
	</div>
	<!-- Main Frame -->
	<div class="flex-1 bg-gray-100 p-4">
		<div class="grid h-full grid-rows-2 gap-4">
			<!-- Oberer Bereich -->
			<div class="rounded-lg bg-white p-4 shadow">
				<h2 class="mb-4 text-xl font-bold">Oberer Bereich</h2>
				<p>Inhalt für den oberen Bereich.</p>
			</div>

			<!-- Unterer Bereich -->
			<div class="rounded-lg bg-white p-4 shadow">
				<h2 class="mb-4 text-xl font-bold">Unterer Bereich</h2>
				<p>Inhalt für den unteren Bereich.</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
