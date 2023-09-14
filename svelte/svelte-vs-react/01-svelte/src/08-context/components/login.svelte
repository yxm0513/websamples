<script lang="ts">
  import { getContext } from "svelte";
  import { loop_guard } from "svelte/internal";
  import { Writable } from "svelte/store";

  const user: Writable<string> = getContext("user-info");
</script>

<h2>Enter your name:</h2>
<input type="text" value={$user} on:input={(e) => user.set(e.target.value)} />


