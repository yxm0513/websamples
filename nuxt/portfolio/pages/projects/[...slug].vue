<script setup>
definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
});
</script>

<template>
  <main
    class="hero-pattern prose prose-pink max-w-none py-24 px-5 pt-32 prose-headings:text-secondary prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-custom prose-blockquote:p-1 prose-strong:text-accent prose-code:text-light"
  >
    <!-- <ul class="container mx-auto flex list-none justify-center gap-8">
      <li v-for="(tag, index) in data.tags" :key="index" class="text-secondary">#{{ tag }}</li>
    </ul> -->

    <ContentDoc class="project-content container" />
  </main>
</template>
