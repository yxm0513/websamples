---
title: Docs with VitePress
editLink: true
---

[[toc]]

# Hello VitePress

 * [Home](/) <!-- sends the user to the root index.md -->
 * [About](/about) <!-- sends the user to index.html of directory foo -->


# {{ $frontmatter.title }}

### Title

Guide content


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:


{{ 1 + 1 }}


::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

```js
export default {
  name: 'MyComponent',
  // ...
}
```

<span v-for="i in 3">{{ i }}</span> 


<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>

