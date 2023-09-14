<script lang="ts">
  import UserContext from "./context/user.context.svelte";
  import Login from "./components/login.svelte";
  import ShowUser from "./components/showuser.svelte";
import Another from "./components/another.svelte";
</script>

<h1>Svelte Context Demo</h1>

<UserContext>
  <Login />
  <ShowUser />
</UserContext>
<Another />
