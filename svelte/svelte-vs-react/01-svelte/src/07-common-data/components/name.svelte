<script lang="ts">
  import {FullnameStore} from '../store/fullname-store';
</script>

<input type="text" placeholder="enter name" bind:value={$FullnameStore.name}/>
