<header>
	<h1><a href="/">Gleam by Example</a></h1>
</header>
<section>
	<slot />
	<footer>
		<p>by <a href="http://alabhyajindal.com" target="_blank">Alabhya Jindal</a></p>
	</footer>
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
		background-color: var(--color-white);
		color: var(--color-black);
		line-height: 1.6;
	}

	header {
		background-color: var(--color-faff-pink);
		color: var(--color-black);
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: var(--color-underwater-blue);
			color: var(--color-white);
		}
	}

	h1 {
		font-size: 1.4em;
		font-weight: 500;
		padding: 0.6em;
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

	footer {
		margin-top: 2em;
		font-size: 0.8em;
	}

	section {
		margin-top: 2em;
		max-width: 600px;
		margin-inline: auto;
		padding-inline: 1em !important;
	}
</style>
