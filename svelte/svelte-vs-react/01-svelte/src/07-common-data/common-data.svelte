<script lang="ts">
  import {FullnameStore} from './store/fullname-store';
  import Name from './components/name.svelte';
  import Lastname from './components/lastname.svelte';
</script>

<h1>Common data demo (Svelte Stores)</h1>

<h2>Fullname: {$FullnameStore.name} {$FullnameStore.lastname}</h2>

<Name/>
<Lastname/>