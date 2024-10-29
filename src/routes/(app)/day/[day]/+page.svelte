<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Editor, Day1 } from '$lib';

	let day: string;
	let editor: any;

	let current_tab = 2;

	onMount(() => {
		day = $page.params.day;
	});

	function runCode() {
		try {
			// Run the user's code
			let code = editor.getCode();
			code += '\nreturn benoetigteElfen(10);';
			console.log(code);
			let result;
			try {
				result = new Function(code)();
			} catch (e: any) {
				result = e.toString();
			}
			console.log(result);
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
			on:click={() => (current_tab = 1)}
			checked={current_tab == 1}
		/>
		<div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
			<Day1 />
			<button on:click={() => (current_tab = 2)}> Solve </button>
		</div>

		<!-- Tab 2 -->
		<input
			type="radio"
			name="my_tabs_2"
			role="tab"
			class="tab"
			aria-label="Solve"
			on:click={() => (current_tab = 2)}
			checked={current_tab == 2}
		/>
		<div role="tabpanel" class="tab-content rounded-box border-base-300 bg-base-100 p-6">
			<div class="h-[200px] overflow-hidden rounded-lg">
				<Editor bind:this={editor} />
			</div>
			<button on:click={runCode}>Run Code</button>
		</div>
	</div>
</div>
