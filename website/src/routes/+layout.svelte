<script lang="ts">
	import '../main.css';
</script>

<section>
	<slot />
</section>

<style>
	section {
		margin-top: 2em;
		max-width: 600px;
		margin-inline: auto;
		padding-inline: 1em !important;
	}
</style>
