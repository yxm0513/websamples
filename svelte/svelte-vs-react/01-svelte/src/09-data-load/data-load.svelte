<script lang="ts">
    const ELEMENTS = 10_000;
    const list = Array.from({ length: ELEMENTS }, () => true);
    const texts = Array.from({ length: ELEMENTS }, (_, i) => `element ${i + 1}`);
</script>

<h1>Data load demo</h1>

{#each list as _, i}
<div>
  <input type="checkbox" bind:checked={list[i]} />
  <input type="text" bind:value={texts[i]} />
</div>
{/each}