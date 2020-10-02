<script>
    let items = ['Dashboard', 'Users', 'Logout']
    let activeItem = ['Dashboard']

    import SettingsStore from '../stores/SettingsStore.js'

    const navigationChange = (item) => {
        $SettingsStore.activeItem = item;
    }
</script>


<nav id="navigation">
    <ul>
        {#each $SettingsStore.items as item}
            <li class:active={item === $SettingsStore.activeItem} on:click={() => navigationChange(item)}><p>{item}</p></li>
        {/each}
    </ul>
    <p id="copyright">@ Manufactured by <a href="//sociality.coop" target="_blank">Sociality</a></p>
</nav>


<style>
    #navigation {
        height: 100vh;
        width: 100%;
        background-color: #0a1727;

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            height: 100%;

            li {
                cursor: pointer;
                color: #ffffff;
                font-weight: 600;
                font-size: 16px;
                height: 60px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.13);
                transition: 0.2s ease-in-out;

                p {
                    margin: 0;
                    padding: 20px 0 20px 0;
                    text-align: center;
                    user-select: none;
                }

                &.active {
                    background-color: #9d1515;
                }
            }
        }

        #copyright {
            position: absolute;
            bottom: 0;
            color: #ffffff;
            font-size: 10px;
            width: fit-content;
            width: -moz-fit-content;
            padding: 0 0 5px 10px;

            a {
                color: #d10408;
            }
        }
    }
</style>
