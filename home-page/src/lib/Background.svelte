<script lang="ts">
import { onMount } from "svelte";


    let canv: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
    let innerWidth = 0, innerHeight = 0;

    $: if (canv != null) resizeCanvas();

    const resizeCanvas = () => {
        canv.setAttribute('width', innerWidth.toString());
        canv.setAttribute('height', innerHeight.toString());

        ctx = canv.getContext("2d");
    }
    onMount(resizeCanvas);


    let mousePos = {x: 0, y: 0}

    const BOX_SIZE = 20;

    $: if (ctx != null) {
        let halfBox = BOX_SIZE / 2;
        ctx.fillStyle = '#AAAAAA';
        ctx.clearRect(0, 0, innerWidth, innerHeight)
        
        for (let x = 0; x < innerWidth; x += BOX_SIZE) {
            for (let y = 0; y < innerHeight; y += BOX_SIZE) {
                let dist = distance(x + halfBox, y + halfBox, mousePos.x, mousePos.y);

                let brightness = 255 - Math.min(200, Math.round(dist / 20));
                if (brightness != 0){

                    ctx.fillStyle = rgbToHex(255, 255, 255, brightness);
                    ctx.fillRect(x, y, BOX_SIZE, BOX_SIZE);
                }
            }
        }
    }

    const squaredDistance = (ax, ay, bx, by) => (ax - bx) ** 2 + (ay - by) ** 2;
    const distance = (ax, ay, bx, by) => Math.sqrt(squaredDistance(ax, ay, bx, by));

    const rgbToHex = (...rgb) => '#' + rgb.map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')

</script>

<svelte:window bind:innerWidth bind:innerHeight 
    on:mousemove={(e) => {
        mousePos.x = e.clientX; 
        mousePos.y = e.clientY;
    }}
/>

<div>
    <canvas bind:this={canv} />
</div>

<style>
    div {
        background-color: black;
    }

    canvas {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>