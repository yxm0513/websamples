# 03-Dom Update Reactive

# Intro

When we use Svelte we get component scoped styles by default
(more info about how this works: https://geoffrich.net/posts/svelte-scoped-styles/)

In this demo we are going to check how this work

# Step by step guide:

We will take as starting point 00-boilerplate, let's copy that project
in to a fresh folder and execute

```bash
npm install
```

Let's create under \_./src/03-handling-css' the follwing files:

A component the will just set some styles for h1 and a given
class name:

_./src/03-handling-css/component-a.svelte_

```svelte
<script lang="ts">
</script>

<h1 class="myh1">Component A - looking for a CSS conflict</h1>

<style>
  h1 {
    background-color: lightblue;
  }

  .myh1 {
    color: goldenrod;
  }
</style>
```

A second component that will set some styles for the h1 element
and use the same class name (let's look for conflicts)

_./src/03-handling-css/component-b.svelte_

```svelte
<script lang="ts">
</script>

<h1 class="myh1">Component B - looking for a CSS conflict</h1>

<style>
  h1 {
    background-color: rebeccapurple;
  }

  .myh1 {
    color: gray;
  }
</style>
```

Let's consume this in the main component:

_./src/03-handling-css/handling-css.svelte_

```svelte
<script lang="ts">
  import ComponentA from "./component-a.svelte";
  import ComponentB from "./component-b.svelte";
</script>

<ComponentA />
<ComponentB />
```

Let's expose only the main componente through a barrel:

_./src/03-handling-css/index.ts_

```ts
export { default as HandlingCSS } from "./handling-css.svelte";
```

Let's un the sample and check that both components keep their own styles,
even if we have naming conflicts.

```bash
npm run dev
```
