<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Editor, Day1, CLI } from '$lib';

	let loading = $state(false);

	let current_tab = $state(2);
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
</script>

<div class="py-4">
	<h1 class="text-2xl font-bold">Day {day}</h1>

	<div role="tablist" class="tabs tabs-lifted">
		<!-- Tab 1 -->
		<input
			type="radio"
			name="my_tabs_2"
			role="tab"
			class="tab"
			aria-label="Story"
			onclick={() => (current_tab = 1)}
			checked={current_tab == 1}
		/>
		<div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
			<Day1 />
			<button onclick={() => (current_tab = 2)}> Solve </button>
		</div>

		<!-- Tab 2 -->
		<input
			type="radio"
			name="my_tabs_2"
			role="tab"
			class="tab"
			aria-label="Solve"
			onclick={() => (current_tab = 2)}
			checked={current_tab == 2}
		/>
		<div role="tabpanel" class=" tab-content rounded-box border-base-300 bg-base-100 p-6">
			{#if loading}
				<div class="flex h-full items-center justify-center">
					<span class="loading loading-spinner loading-lg"></span>
				</div>
			{:else}
				<div class="mb-2 flex flex-wrap gap-2">
					{#each Array(3) as _, index}
						<label class="cursor-pointer">
							<input
								type="radio"
								name="testcase"
								class="hidden"
								bind:group={current_testcase}
								value={index}
							/>
							<span
								class="badge {current_testcase === index ? 'badge-secondary' : 'badge-outline'}"
							>
								Testcase {index + 1}
							</span>
						</label>
					{/each}
				</div>
				<div class="mb-2">
					{#if current_testcase === 0}
						Flotte Donner: 3 Rentiere benötigt 600 Zauberflocken und kann von 2 Elfen versorgt
						werden.
					{:else if current_testcase === 1}
						Fotte Blitz: 8 Rentiere kann von 6 Elfen versorgt werden.
					{:else if current_testcase === 2}
						Die Anzahl der Elfen für <b>Flotte X-Max: 2412</b> ist ungewiss.
					{/if}
				</div>
				<div class="divider"></div>
				<div class="flex h-[200px] w-full overflow-hidden rounded-lg">
					<Editor bind:this={editor} />
				</div>
				<CLI {useCode} {current_testcase}></CLI>
			{/if}
		</div>
	</div>
</div>
