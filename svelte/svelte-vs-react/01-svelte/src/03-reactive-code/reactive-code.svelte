<script lang="ts">
  // Debounce example
  // https://svelte.dev/repl/818b4b38293a4a67901473d6d4f60230?version=3.32.3
  import { getMovies } from "./api/api";
  import { Movie } from "./api/model";
  let search = "";
  let movies: Movie[] = [];

  $: {
    getMovies(search).then((result) => {
      movies = result;
    });
  }
</script>

<h1>Reactive code demo</h1>

<ul>
  <input placeholder="move title" bind:value={search} />

  {#each movies as movie}
    <li>{movie.title}</li>
  {/each}
</ul>
