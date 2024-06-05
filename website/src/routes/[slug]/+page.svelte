<script lang="ts">
	import type { PageData } from '../$types';
	import { goto } from '$app/navigation';
	import Footer from '../../components/footer.svelte';

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
			<p>Next example, <a href={example.next.slug}>{example.next.title}</a></p>
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
		border: 1px solid var(--border);
	}

	:global(pre) {
		padding: 1em;
		overflow-x: auto;
	}

	.next {
		margin-top: 1.6em;
	}

	/* Light Mode Styles */
	:global(body:not(.dark) .shiki),
	:global(body:not(.dark) .shiki span) {
		--code-color: var(--shiki-light);
		--code-background-color: var(--shiki-light-bg);
		--code-font-style: var(--shiki-light-font-style);
		--code-font-weight: var(--shiki-light-font-weight);
		--code-text-decoration: var(--shiki-light-text-decoration);
	}

	/* Dark Mode Styles */
	:global(body.dark .shiki),
	:global(body.dark .shiki span) {
		--code-color: var(--shiki-dark);
		--code-background-color: var(--shiki-dark-bg);
		--code-font-style: var(--shiki-dark-font-style);
		--code-font-weight: var(--shiki-dark-font-weight);
		--code-text-decoration: var(--shiki-dark-text-decoration);
	}

	:global(.shiki),
	:global(.shiki span) {
		color: var(--code-color);
		background-color: var(--code-background-color);
		font-style: var(--code-font-style);
		font-weight: var(--code-font-weight);
		text-decoration: var(--code-text-decoration);
	}
</style>
