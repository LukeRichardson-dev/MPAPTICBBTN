<script lang="ts">
  import Icon from "./Icon.svelte";

  let isDown = false;
  let applist: HTMLElement;
  let pos: {x, left};
  function mouseDownHandler(e: MouseEvent) {
    
    isDown = true;
    pos = {x: e.clientX, left: applist.scrollLeft};

    document.addEventListener('mouseup', mouseUpHandler);
    
  }

  function mouseUpHandler(_) {
    isDown = false;
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  function onMouseMove(e: MouseEvent) {
    
    if (isDown) {
      let dx = e.clientX - pos.x;

      applist.scrollLeft = pos.left - dx;
    }
  }

</script>

<div id='applist' bind:this={applist} on:mousedown={mouseDownHandler} on:mousemove={onMouseMove}>
    <Icon to="https://google.co.uk" inner="Hello World"/>
    <Icon to="https://google.co.uk" inner="Hello World"/>
    <Icon to="https://google.co.uk" inner="Hello World"/>
    <Icon to="https://google.co.uk" inner="Hello World"/>
    <Icon to="https://google.co.uk" inner="Hello World"/>
    <Icon to="https://google.co.uk" inner="Hello World"/>
    <Icon to="https://google.co.uk" inner="Hello World"/>
    <Icon to="https://google.co.uk" inner="Hello World"/>
</div>

<style>
  #applist {
    position: fixed;
    top: calc(80% - 200px);
    margin-left: 25%;
    margin-right: 25%;
    width: 50%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    cursor: grab;
    border: 1px solid #AAA;
    border-radius: 20px;
    padding: 20px;
  }

  /* #applist > div {
    width: 200px;
    user-select: none;
    background: blue;
    height: 200px;
  } */

  #applist::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  #applist {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

</style>