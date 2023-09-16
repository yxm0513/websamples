<script setup lang="ts">
// Similar posts
const { similarPosts } = await usePost();

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
});
</script>

<template>
  <main class="hero-pattern container prose max-w-none py-24 px-5 pt-40 md:pt-24">
    <div
      class="container prose-pink mt-4 prose-headings:text-accent prose-h3:text-primary prose-p:text-lg prose-p:text-light prose-blockquote:bg-[#1a1a1a] prose-blockquote:p-1 prose-strong:text-accent prose-em:text-primary prose-code:text-light"
    >
      <button
        @click="$router.push('/blog')"
        class="flex items-center gap-2 rounded-lg border-0 bg-primary py-2 px-2 text-base text-black hover:bg-primary/75 focus:outline-none md:mt-0 md:inline-flex md:px-6"
      >
        <Icon name="heroicons-solid:arrow-left" /> Back to Blog
      </button>

      <!-- Post content -->

      <ContentDoc class="post-content">
        <template v-slot="{ doc }">
          <img
            :src="doc.img"
            alt=""
            class="mx-auto rounded-2xl"
            :class="{ 'md:h-[500px]': doc.img }"
          />
          <h1>{{ doc.title }}</h1>

          <ContentRendererMarkdown :value="doc" />
        </template>
        <template #not-found>
          <div class="hero-pattern grid min-h-[75vh] place-items-center">
            <img src="@/static/notfound.png" alt="" class="mx-auto h-[500px]" />
            <h1 class="font-base mb-4 text-center text-3xl text-accent">Post not found</h1>
            <NuxtLink
              to="/"
              class="flex items-center rounded-lg border-0 bg-primary py-2 px-2 text-base text-black no-underline hover:bg-primary/75 focus:outline-none md:mt-0 md:inline-flex md:px-6"
              >Return to Home</NuxtLink
            >
          </div>
        </template>
      </ContentDoc>
    </div>

    <!-- Related posts -->
    <section v-if="similarPosts?.length" class="container">
      <h2 class="mb-0 text-center text-3xl font-medium text-accent sm:text-4xl">Related posts</h2>

      <PostCard v-for="post in similarPosts" :post="post" :key="post._id" />
    </section>
  </main>
</template>
