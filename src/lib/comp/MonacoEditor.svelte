<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	let editor: Monaco.editor.IStandaloneCodeEditor;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

	onMount(async () => {
		// Import our 'monaco.ts' file here
		// (onMount() will only be executed in the browser, which is what we want)
		monaco = (await import('./monaco')).default;

		// Your monaco instance is ready, let's display some code!
		editor = monaco.editor.create(editorContainer, {
			theme: 'vs-dark'
		});
		const model = monaco.editor.createModel(
			'function benoetigteElfen(flottenGroesse){\n\t//flottenGroesse ist eine Zahl z.B. 7\n\treturn flottenGroesse;\n}',
			'javascript'
		);
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
		console.log(val);
		return val;
	}
</script>

<div class="h-full w-full" bind:this={editorContainer}></div>
<button onclick={getCode}>test</button>
