<script lang="ts">
  import { getContext } from "svelte";
import { Writable } from "svelte/store";

  const user : Writable<string> = getContext("user-info");
</script>

<h1>The user logged in is: {$user}</h1>
