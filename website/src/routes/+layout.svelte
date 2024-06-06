<script lang="ts">
	import '../main.css';

	function handleClick() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<header>
	<nav>
		<h1><a href="/">Gleam by Example</a></h1>
		<button on:click={handleClick}>Toggle</button>
	</nav>
</header>
<section>
	<slot />
</section>

<style>
	header {
		background-color: var(--color-faff-pink);
		color: var(--color-black);
	}

	header nav {
		max-width: 600px;
		margin-inline: auto;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		font-size: 1.4em;
		font-weight: 500;
		padding: 0.2em 0.6em;
	}

	h1 a {
		text-decoration: none;
		color: inherit;
	}

	section {
		margin-top: 2em;
		max-width: 600px;
		margin-inline: auto;
		padding-inline: 1em !important;
	}
</style>
