<script lang="ts">

    export let to: string, inner;

    const onClick = () => window.location.href = to;

</script>

<div on:click={onClick}>{inner}</div>

<style>
    div {     
        display: flex;
        align-items: center;
        height: 150px;
        min-width: 150px;
        max-width: 200px;
        background-color: grey;
        border-radius: 75px;
        text-align: center;
        justify-content: center;
        overflow: hidden;
        margin-right: 30px;
    }
</style>