<script setup>
defineProps({
  project: {
    type: Object,
    required: false,
  },
});
</script>

<template>
  <div class="p-4 md:w-1/3">
    <div class="h-full overflow-hidden">
      <img
        class="clay-effect rounded-[2rem] object-cover object-center p-4 md:h-36 lg:h-48"
        :src="project.img"
        alt="blog"
      />
      <div class="p-6">
        <h1 class="title-font mb-3 text-2xl font-medium text-primary">{{ project.title }}</h1>
        <p class="mb-3 text-base leading-relaxed text-white xl:text-lg">
          {{ project.description }}
        </p>
        <ul
          class="container mx-auto mb-4 flex list-none items-center justify-around gap-4 text-center text-sm"
        >
          <li
            v-for="(tag, index) in project.tags"
            :key="index"
            class="text-secondary"
            :class="`w-1/${project.tags.length}`"
          >
            #{{ tag }}
          </li>
        </ul>
        <div class="flex w-full flex-wrap items-center justify-between gap-2">
          <nuxt-link
            :to="{
              path: project._path,
            }"
            class="hover:clay-effect inline-flex rounded-xl border border-accent py-2 px-6 text-lg text-primary hover:border-transparent hover:bg-accent/75 hover:text-black focus:outline-none"
            >More info
          </nuxt-link>
          <nuxt-link
            :to="project.live_link"
            target="_blank"
            rel="noopener"
            class="clay-effect inline-flex w-fit items-center rounded-xl border-0 bg-accent py-2 px-6 text-lg text-black hover:bg-accent/75 focus:outline-none"
            >Live demo
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
