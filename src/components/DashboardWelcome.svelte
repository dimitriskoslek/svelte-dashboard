<script>
    import Card from './shared/Card.svelte'
</script>


<div id="welcome">
    <h1 id="heading">Welcome to your dashboard</h1>
    <div id="cards-list">
        <Card icon="/icons/users-icon.svg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem quo soluta, necessitatibus beatae eveniet voluptas nobis praesentium repudiandae unde? Culpa voluptatibus at expedita ipsam minus quaerat unde magni quasi.
        </Card>
        <Card icon="/icons/bug-icon.svg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima id rem, reiciendis ipsam voluptate quis eaque, delectus pariatur velit, quam earum veniam suscipit aliquid repudiandae asperiores blanditiis a? Obcaecati.
        </Card>
        <Card icon="/icons/help-icon.svg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima id rem, reiciendis ipsam voluptate quis eaque, delectus pariatur velit, quam earum veniam suscipit aliquid repudiandae asperiores blanditiis a? Obcaecati.
        </Card>
    </div>
</div>


<style>
    #welcome {
        #heading {
            text-align: center;
        }
        #cards-list {
            margin: auto;
            display: grid;
            grid-column-gap: 15px;
    		grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
