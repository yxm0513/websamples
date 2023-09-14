<script lang="ts">

  let showName = false;

  function toggleShowName() {
    showName = !showName;
  }
</script>

<h1>Conditional rendering demo</h1>

<button on:click={toggleShowName}>Toggle show name</button>

{#if showName}
  <h2>John Doe</h2>
{:else}
  <h5>Click on toggle to show the name</h5>
{/if}
