<script lang="ts">
  let name = "";
  let lastname = "";
  // We could use two way binding here, but we just want
  // to compare reactive code useEffect vs Svelte
  let fullname = "";
  $: {
    console.log("**Reactive code in action...");
    fullname = `${name} ${lastname} ${Math.random()}`;
  }

  // Just adding a new field to test that full name
  // calc is not called when address is changed
  let address = "";

  console.log("Hey Rerender going on !!");
</script>

<h1>Update name and lastname = name + lastname</h1>

<div>
  <input placeholder="name" bind:value={name} />
  <input placeholder="lastname" bind:value={lastname} />
  <input placeholder="address" bind:value={address} />

  Fullname: {fullname}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
</style>
