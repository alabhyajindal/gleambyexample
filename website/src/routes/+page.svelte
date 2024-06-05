<script lang="ts">
	import Footer from '../components/footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const examples = data.examplesData;

	let image = '/lucydebug.svg';

	function toggleImage() {
		if (image == '/lucydebug.svg') image = '/lucydebughappy.svg';
		else image = '/lucydebug.svg';
	}
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

<Footer />
<img
	src={image}
	on:click={toggleImage}
	on:mouseenter={() => {
		image = 'lucydebughappy.svg';
	}}
	on:mouseleave={() => {
		image = 'lucydebug.svg';
	}}
	alt="Lucy the star, Gleam's mascot"
/>

<!-- Added to preload the image -->
<img style="display:none;" src="/lucydebughappy.svg" alt="Lucy the star, Gleam's mascot" />

<style>
	a {
		color: inherit;
	}

	a:hover {
		text-decoration: none;
	}

	ul {
		margin-top: 1.6em;
		list-style-type: none;
	}

	img {
		display: block;
		margin-left: auto;
		width: 200px;
	}
</style>
