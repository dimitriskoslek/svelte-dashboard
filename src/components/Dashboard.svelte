<script>
    import SettingsStore from '../stores/SettingsStore.js'
    import DashboardWelcome from './DashboardWelcome.svelte'
</script>


<div id="dashboard">
    {#if $SettingsStore.activeItem === 'Dashboard'}
        <DashboardWelcome />
    {:else if $SettingsStore.activeItem === 'Users'}
        <p>Welcome to the Users view</p>
    {:else if $SettingsStore.activeItem === 'Logout'}
        <p>I should implement a logout here</p>
    {/if}
</div>


<style>
    #dashboard {

    }
</style>
