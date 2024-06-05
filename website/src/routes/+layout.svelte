<script lang="ts">
	function handleClick() {
		const currentTheme = document.body.dataset.theme;
		console.log(currentTheme);
		document.body.dataset.theme = currentTheme == 'dark' ? 'light' : 'dark';
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
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root) {
		--color-underwater-blue: #292d3e;
		--color-white: #fefefc;
		--color-faff-pink: #ffaff3;
		--color-light-pink: #fedcfb;
		--color-black: #1e1e1e;
		--color-blacker: #151515;
		--color-charcoal: #2f2f2f;
		--color-unexpected-aubergine: #584355;
		--color-aged-plastic-yellow: #fffbe8;

		--background: var(--color-white);
		--text: var(--color-black);
		--border: var(--color-light-pink);
	}

	:global(html) {
		color-scheme: light dark;
	}

	:global(body) {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		line-height: 1.6;

		background-color: var(--background);
		color: var(--text);
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			--background: var(--color-underwater-blue);
			--text: var(--color-white);
			--border: var(--color-unexpected-aubergine);
		}
	}

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

	:global(a) {
		color: inherit;
	}

	:global(a:hover) {
		text-decoration: none;
	}

	section {
		margin-top: 2em;
		max-width: 600px;
		margin-inline: auto;
		padding-inline: 1em !important;
	}

	:global(body.dark) {
		color-scheme: dark;
		--background: var(--color-underwater-blue);
		--text: var(--color-white);
	}
</style>
