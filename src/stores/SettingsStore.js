import { writable } from 'svelte/store'

const SettingsStore = writable({
    items: ['Dashboard', 'Users', 'Logout'],
    activeItem: 'Dashboard'
})

export default SettingsStore
