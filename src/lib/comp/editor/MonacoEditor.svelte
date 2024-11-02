<script lang="ts">
	import { onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

	const DEFAULT_CODE = `function benoetigteElfen(flottenGroesse){
		// flottenGroesse ist eine Zahl z.B. 7
		return flottenGroesse;
		// return 2;
		// return 6;
		// return 1608;
		// return Math.ceil(2 * flottenGroesse / 3);
	}`;

	onMount(async () => {
		// Import our 'monaco.ts' file here
		monaco = (await import('./monaco')).default;

		// Create the editor
		editor = monaco.editor.create(editorContainer, {
			theme: 'vs-dark',
			language: 'javascript',
			automaticLayout: false // Disable automatic layout for custom resizing
		});

		const model = monaco.editor.createModel(DEFAULT_CODE, 'javascript');
		editor.setModel(model);

		// Add window resize listener
		const resizeEditor = () => {
			editor.layout();
			console.log('resize');
		};
		window.addEventListener('resize', resizeEditor);

		// Clean up the resize listener
		// onDestroy(() => {
		// 	window.removeEventListener('resize', resizeEditor);
		// 	monaco?.editor.getModels().forEach((model) => model.dispose());
		// 	editor?.dispose();
		// });
	});

	export function getCode() {
		const val = editor.getModel()?.getValue() || ''; // Returns the code as a string
		console.log('editor code:', val);
		return val;
	}
</script>

{#if !editorContainer || !editor}
	<div class="flex h-full items-center justify-center">
		<span class="loading loading-spinner loading-lg"></span>
	</div>
{/if}
<div class="min-h-96 max-w-full" bind:this={editorContainer}></div>
