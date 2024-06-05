<script lang="ts">
	import type { PageData } from '../$types';
	import { goto } from '$app/navigation';
	import Footer from '../../components/footer.svelte';

	export let data: PageData;
	$: ({ example } = data);

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.shiftKey || e.ctrlKey || e.metaKey) return;
		if (e.key == 'ArrowLeft' && example.prev) {
			goto(example.prev.url);
		} else if (e.key == 'ArrowRight' && example.next) {
			goto(example.next.url);
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

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
			<p>Next example, <a href={example.next.url}>{example.next.title}</a></p>
		{/if}
	</div>
</main>

<Footer />

<style>
	h1 {
		font-weight: 500;
	}

	.code {
		margin-top: 2em !important;
		border-radius: 0.1em;
		border: 1px solid var(--color-light-pink);
	}

	:global(pre) {
		padding: 1em;
		overflow-x: auto;
	}

	.next {
		margin-top: 1.6em;
	}

	@media (prefers-color-scheme: dark) {
		.code {
			border: 1px solid var(--color-unexpected-aubergine);
		}

		/* Using global because the CSS styles are injected using the @html directive */
		:global(.shiki, .shiki span) {
			color: var(--shiki-dark) !important;
			background-color: var(--shiki-dark-bg) !important;
			font-style: var(--shiki-dark-font-style) !important;
			font-weight: var(--shiki-dark-font-weight) !important;
			text-decoration: var(--shiki-dark-text-decoration) !important;
		}
	}
</style>
