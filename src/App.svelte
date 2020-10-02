<script>
	import Navigation from './components/Navigation.svelte'
	import Dashboard from './components/Dashboard.svelte'

	//export let name;
</script>


<main>
	<Navigation />
	<Dashboard />
</main>


<style>
	main {
		display: grid;
		grid-template-columns: 4fr 20fr;
		width: 100%;
		margin: 0 auto;
	}
</style>
