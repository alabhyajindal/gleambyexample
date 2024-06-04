<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
	const exampleData = data.exampleData;
</script>

<main>
	<h1>{exampleData.title}</h1>

	<p>{exampleData.desc}</p>

	<div class="code">
		{@html exampleData.htmlCode}
	</div>
	<div class="code">
		{@html exampleData.htmlOutput}
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
</style>
