<script>
    export let icon = ''
</script>


<div class="card">
    {#if icon !== ''}
        <div class="icon-container">
            <img class="icon" src={icon} />
        </div>
    {/if}
    <slot></slot>
</div>


<style>
    .card {
        box-shadow: 0 0 8px orange;
        padding: 20px;
        border: 1px solid orange;
        border-radius: 8px;
        color: #ffffff;
        background-color: orange;
        cursor: pointer;

        .icon-container {
            .icon {
                width: 40px;
                height: auto;
                display: block;
                margin: 10px auto 10px auto;
                transition: 0.5s ease-in-out;
            }
            &:hover {
                .icon {
                    transform: scale(1.2) perspective(300px) rotateX(0) rotateY(-45deg)
                }
            }
        }
    }
</style>
