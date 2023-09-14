<script lang="ts">
  import { onMount } from "svelte";

  let message = "Inital message";
  let seconds = 0;

  onMount(() => {
    setTimeout(() => {
      seconds = 1;
    }, 1000);

    setTimeout(() => {
      message = `Total seconds: ${seconds}`;
    }, 2000);
  });
</script>

<h1>Async closure demo</h1>
<h3>{message}</h3>
<h4>{seconds}</h4>
