<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
	const example = data.selectedExample;
</script>

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

<style>
	h1 {
		font-weight: 500;
	}

	.code {
		margin-top: 2em !important;
		padding: 1em;
		background-color: #282c34;
		border-radius: 0.1em;
		border: 1px solid var(--color-unexpected-aubergine);
	}

	.next {
		margin-top: 1.6em;
	}
</style>
