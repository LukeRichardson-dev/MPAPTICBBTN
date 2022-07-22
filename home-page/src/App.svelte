<script lang="ts">
import Background from './lib/Background.svelte';

//   import { onMount } from 'svelte';
  import Drawer from './lib/Drawer.svelte';
import DynamicTriangles from './lib/DynamicTriangles.svelte';
  
//   import { Triangle } from './triangle';

//   let canvas: HTMLCanvasElement;
//   let ctriangle: Triangle;
//   onMount(() => {
//     let ctx = canvas.getContext('2d');

//     ctriangle = Triangle.equilateral({x: 300, y: 300}, 30, 0);
    
//     drawTriangle(ctx, ctriangle);
//   });
  
//   function onMouseMove(event: MouseEvent) {
//     if (ctriangle.distanceTo({x: event.clientX, y: event.clientY}) < 100)
//       drawTriangle(
//         canvas.getContext('2d'),
//         Triangle.equilateral({x: event.clientX, y: event.clientY}, 1, 0),
//       );
//   }

//   function drawTriangle(
//     ctx: CanvasRenderingContext2D, 
//     triangle: Triangle,
//   ) {
//     ctx.beginPath();
    
//     ctx.moveTo(triangle.points[2].x, triangle.points[2].y)

//     triangle.points.forEach(element => {
//       ctx.lineTo(element.x, element.y)
//     });


//     ctx.fill();
//   }
  

</script>

<Drawer />
<Background />

