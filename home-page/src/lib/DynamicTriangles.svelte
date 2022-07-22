<script lang="ts">
    import { onMount } from "svelte";
    
    let canv;

    $: innerWidth = 0;
    $: innerHeight = 0;
    $: if (canv != null) {
        // alert(innerWidth.toString() + "x" + innerHeight.toString());

        canv.setAttribute('width', innerWidth.toString());
        canv.setAttribute('height', innerHeight.toString());
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<canvas bind:this={canv} id='tricanv'></canvas>

<style>
    #tricanv {
        width: 100%;
        height: 100%;
        border: 1px solid black;
    }
</style>