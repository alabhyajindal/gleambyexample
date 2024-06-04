<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const examples = data.examplesData;
</script>

<svelte:head>
	<title>Gleam by Example</title>
</svelte:head>

<main>
	<section>
		<p>
			<a href="https://gleam.run" target="_blank">Gleam</a> is a friendly language for building type-safe
			systems that scale!
		</p>
		<p>
			<i>Gleam by Example</i> is a collection of code snippets to help you get familiar with it.
		</p>
	</section>
	<ul>
		{#each examples as example}
			<li><a href={example.url}>{example.title}</a></li>
		{/each}
	</ul>
</main>

<style>
	a {
		color: inherit;
	}

	a:hover {
		text-decoration: none;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}

	ul {
		margin-top: 1.6em;
		list-style-type: none;
	}
</style>
