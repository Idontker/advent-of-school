<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Editor, Day1, CLI } from '$lib';

	let day: string = $state('');
	let editor: any = $state(null);
	let current_testcase = $state(0);

	onMount(() => {
		day = $page.params.day;
	});

	function useCode() {
		try {
			// Run the user's code
			let code = editor.getCode();
			return code;
		} catch (e) {
			console.error(e);
		}
	}

	// -----------------------
	let isDrawerOpen = $state(true);
	let drawerWidth = $state(300);

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	function startResize(event: any) {
		event.preventDefault();
		document.body.style.cursor = 'ew-resize';

		function resize(event: any) {
			drawerWidth = Math.min(Math.max(200, event.clientX), 500);
		}

		function stopResize() {
			document.body.style.cursor = '';
			window.removeEventListener('mousemove', resize);
			window.removeEventListener('mouseup', stopResize);
		}

		window.addEventListener('mousemove', resize);
		window.addEventListener('mouseup', stopResize);
	}
</script>

<div class="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto] lg:grid-cols-[auto_1fr]">
	<!-- Header -->
	<div class="col-span-2 flex items-center justify-between border-b p-4">
		<h1 class="text-2xl font-bold">Day {day}</h1>
	</div>

	<!-- Sidebar (Drawer) -->
	<div
		class={`relative overflow-auto border-r transition-all duration-300 ${isDrawerOpen ? 'w-[var(--drawerWidth)]' : 'w-0'} lg:block`}
		style="--drawerWidth: {drawerWidth + 'px'}"
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-gray-300"
			onmousedown={startResize}
		></div>
		<button class="absolute right-2 top-4 rounded bg-gray-200 p-1 text-xs" onclick={toggleDrawer}>
			{isDrawerOpen ? 'Close' : 'Open'} Sidebar
		</button>

		<div class={`${isDrawerOpen ? 'block' : 'hidden'} p-4`}>
			<Day1 />
			<h2 class="mb-2 text-lg font-semibold">Test Cases</h2>
			<div class="flex flex-row gap-2">
				{#each Array(3) as _, index}
					<label class="cursor-pointer">
						<input
							type="radio"
							name="testcase"
							class="hidden"
							bind:group={current_testcase}
							value={index}
						/>
						<span class="badge {current_testcase === index ? 'badge-secondary' : 'badge-outline'}">
							Testcase {index + 1}
						</span>
					</label>
				{/each}
			</div>

			<div class="mt-4">
				{#if current_testcase === 0}
					<p>
						Flotte Donner: 3 Rentiere benötigt 600 Zauberflocken und kann von 2 Elfen versorgt
						werden.
					</p>
				{:else if current_testcase === 1}
					<p>Fotte Blitz: 8 Rentiere kann von 6 Elfen versorgt werden.</p>
				{:else if current_testcase === 2}
					<p>Die Anzahl der Elfen für <b>Flotte X-Max: 2412</b> ist ungewiss.</p>
				{/if}
			</div>
		</div>
	</div>
	<div class="h-full">
		<!-- Main Editor Panel -->
		<Editor bind:this={editor} />

		<!-- CLI Output/Console Panel -->
		<CLI {useCode} {current_testcase} />
	</div>
</div>
