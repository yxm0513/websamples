<script lang="ts">
  import { setContext } from "svelte";
  import { createUserStore } from "../store/user.store";

  // create the store 
  const userStore = createUserStore();

  // setContext has a key / value
  // whatcout we should avoid using magic strings
  setContext("user-info", userStore);
</script>

<slot />
