<script>
    import SettingsStore from '../stores/SettingsStore.js'
</script>


<div id="dashboard">
    {#if $SettingsStore.activeItem === 'Dashboard'}
        <p>Welcome to the dashboard</p>
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
