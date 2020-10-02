<script>
	import Navigation from './components/Navigation.svelte'
	import Dashboard from './components/Dashboard.svelte'
	import AdminBar from './components/AdminBar.svelte'

	let isAdmin = true
	//export let name;
</script>


{#if isAdmin === true}
	<AdminBar />
{/if}
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
