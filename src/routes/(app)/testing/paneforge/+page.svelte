<script lang="ts">
	import { CLI, Day1, Editor } from '$lib';
	import { PaneGroup, Pane, PaneResizer, type PaneAPI } from 'paneforge';

	// let day: string = $state('');
	let editor: any = $state(null);
	let editorResize: any = $state(() => {});
	let current_testcase = $state(0);

	// onMount(() => {
	// 	day = $page.params.day;
	// });

	function handleEditorPaneResizing() {
		if (editorResize) {
			editorResize();
		}
	}

	function useCode() {
		try {
			// Run the user's code
			let code = editor.getCode();
			return code;
		} catch (e) {
			console.error(e);
		}
	}

	let paneOne: PaneAPI;
	let collapsed = $state(false);
</script>

<!-- <div class="flex h-full w-full flex-col"> -->
<PaneGroup direction="horizontal" class="h-full max-h-full">
	<Pane
		class="relative"
		defaultSize={50}
		collapsedSize={4}
		collapsible={true}
		minSize={15}
		bind:pane={paneOne}
		onCollapse={() => {
			collapsed = true;
			setTimeout(handleEditorPaneResizing, 50);
		}}
		onExpand={() => {
			collapsed = false;
			setTimeout(handleEditorPaneResizing, 50);
		}}
	>
		{#if collapsed}
			<button
				class="btn btn-outline h-full"
				onclick={() => {
					paneOne.expand();
				}}
			>
				{'>>'}
			</button>
		{:else}
			<button
				class="btn btn-outline absolute right-4 top-0 bg-slate-100"
				onclick={() => {
					paneOne.collapse();
				}}
			>
				{'<<'}
			</button>
		{/if}
		<!-- {#if !collapsed} -->
		<div class="h-full overflow-auto p-4">
			<Day1></Day1>
		</div>
		<!-- {/if} -->
	</Pane>
	<PaneResizer class="relative h-full w-1 bg-gray-500">
		<div
			class="absolute left-1/2 top-1/2 z-10 flex h-6 w-3 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-500"
		>
			<!-- <DotsSixVertical class="size-4 text-black" weight="bold" /> -->
		</div>
	</PaneResizer>
	<Pane defaultSize={50} onResize={handleEditorPaneResizing}>
		<PaneGroup direction="vertical">
			<Pane defaultSize={50} onResize={handleEditorPaneResizing}>
				<Editor bind:this={editor} bind:resize={editorResize} />
			</Pane>
			<PaneResizer class="relative h-1 w-full bg-gray-500">
				<div
					class="absolute left-1/2 top-1/2 z-10 flex h-3 w-6 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-500"
				>
					<!-- <DotsSixVertical class="size-4 text-black" weight="bold" /> -->
				</div>
			</PaneResizer>
			<Pane class="" defaultSize={50}>
				<CLI {useCode} {current_testcase} />
			</Pane>
		</PaneGroup>
	</Pane>
</PaneGroup>
<!-- </div> -->
