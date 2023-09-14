<script lang="ts">
  import './wc/button.web-component';
  let counters = [0, 0, 0];
</script>

<style>
  canarias-js-button.custom-button::part(button) {
    background-color: darkblue;
  }
</style>

<h1>WebComponent demo</h1>

<canarias-js-button on:click={() => (counters[0]++)}>Clicked {counters[0]} times!</canarias-js-button>

<canarias-js-button color="primary" on:click={() => (counters[1]++)}>Clicked {counters[1]} times!</canarias-js-button>

<canarias-js-button class="custom-button" on:click={() => (counters[2]++)}>
  Clicked {counters[2]} times!
</canarias-js-button>