<script>
  export let value = "";
  export let required = "";

</script>

<input {required} class="w-full appearance-none border border-neutral-400 leading-tight text-neutral-700 rounded focus:ring-0 focus:outline-none focus:bg-white focus:border-blue-500" {...$$props} bind:value on:input on:change on:submit/>
