<script lang="ts">
  import {FullnameStore} from '../store/fullname-store';
</script>

<input type="text" placeholder="enter lastname" bind:value={$FullnameStore.lastname}/>
