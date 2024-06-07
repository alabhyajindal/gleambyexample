<script lang="ts">
	import type { PageData } from '../$types';
	import { goto } from '$app/navigation';

	export let data: PageData;
	$: ({ example } = data);

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.shiftKey || e.ctrlKey || e.metaKey) return;
		if (e.key == 'ArrowLeft' && example.prev) {
			goto(example.prev.slug);
		} else if (e.key == 'ArrowRight' && example.next) {
			goto(example.next.slug);
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- <h1>{example.orderNumber}</h1> -->

<main>
	<h1>{example.title}</h1>

	<p>{example.desc}</p>

	<div class="code">
		{@html example.htmlCode}
	</div>
	<div class="code">
		{@html example.htmlOutput}
	</div>

	<div class="next">
		{#if example.next}
			<p>Next up, <a href={example.next.slug}>{example.next.title}</a></p>
		{/if}
	</div>
</main>

<footer>
	<p>
		<a
			href={`https://github.com/alabhyajindal/gleambyexample/blob/main/examples/src/${example.fileName}.gleam`}
			target="_blank">Edit this example</a
		>, or <a href="https://github.com/alabhyajindal/gleambyexample">add a new one!</a>
	</p>
</footer>

<style>
	h1 {
		font-weight: 500;
	}

	.code {
		margin-top: 2em !important;
		border-radius: 0.1em;
		border: 1px solid var(--border);
	}

	.next {
		margin-top: 1.6em;
	}

	footer {
		margin-top: 2em;
		font-size: 0.8em;
	}
</style>
