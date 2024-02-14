<script>
    export let type = "primary"; // primary, secondary, ghost
    export let small = false;
    export let disabled = false;
    export let icon = false;
    
const baseClass = " text-base h-fit w-fit focus:outline-none font-semibold rounded z-50 ";
const activeClass = " cursor-pointer active:scale-95 "
let sizes = " py-2 px-4 "

if (small) {
  sizes = " py-1 px-2 text-sm "
  if (icon) {
    sizes = " p-1 text-sm "
  }
}
else {
  if (icon) {
    sizes = " p-1 "
  }
}

</script>

{#if !disabled}

{#if type == "primary"}
<button class={baseClass + activeClass + sizes + icon + " bg-orange-500 hover:bg-orange-600 text-white shadow-md"} on:click on:focus on:focusin on:focusout><slot /></button>
{/if}

{#if type == "secondary"}
<button class={baseClass + activeClass + sizes + icon + " bg-neutral-200 hover:bg-orange-200 text-orange-700 shadow-md"} on:click on:focus on:focusin on:focusout><slot /></button>
{/if}

{#if type == "ghost"}
<button class={baseClass + activeClass + sizes + icon + " bg-transparent hover:bg-neutral-200 hover:bg-opacity-25 text-orange-700"} on:click on:focus on:focusin on:focusout><slot /></button>
{/if}

{:else}
<button class={baseClass + sizes + icon + "bg-neutral-200 text-neutral-400 cursor-not-allowed"}><slot /></button>
{/if}
