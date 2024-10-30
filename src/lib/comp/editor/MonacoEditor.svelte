<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	// interface Props {
	// 	finishLoading: () => void;
	// }

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

	const DEFAULT_CODE = `function benoetigteElfen(flottenGroesse){
	//flottenGroesse ist eine Zahl z.B. 7
	return flottenGroesse;
	// return 2;
	// return 6;
	// return 1608;
	// return Math.ceil(2 * flottenGroesse / 3);
}`;

	onMount(async () => {
		// Import our 'monaco.ts' file here
		// (onMount() will only be executed in the browser, which is what we want)
		monaco = (await import('./monaco')).default;

		// Your monaco instance is ready, let's display some code!
		editor = monaco.editor.create(editorContainer, {
			theme: 'vs-dark'
		});
		const model = monaco.editor.createModel(DEFAULT_CODE, 'javascript');
		editor.setModel(model);
		// monaco.editor
		// 	.colorize(editor.getModel()?.getValue() || '', 'javascript', { tabSize: 2 })
		// 	.then((html) => (editorContainer.innerHTML = html));
	});

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
		editor?.dispose();
	});

	export function getCode() {
		let val = editor.getModel()?.getValue() || ''; // Returns the code as a string
		console.log('editor code:', val);
		return val;
	}
</script> 

<div class="flex h-full w-full" bind:this={editorContainer}></div>
