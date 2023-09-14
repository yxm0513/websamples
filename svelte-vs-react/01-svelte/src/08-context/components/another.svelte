<script lang="ts">
  import { getContext } from "svelte";
  import { Writable } from "svelte/store";
  
  const user : Writable<string> = getContext("user-info");
</script>

<h2>Another component out of the context: user logged {$user}</h2>


  