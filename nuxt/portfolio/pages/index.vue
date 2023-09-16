<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import 'animate.css';

interface Stack {
  name: string;
  icon: string;
}

const stack = ref<Stack[]>([
  {
    name: 'Git',
    icon: 'teenyicons:git-solid',
  },
  {
    name: 'TailwindCSS',
    icon: 'mdi:tailwind',
  },

  {
    name: 'Typescript',
    icon: 'mdi:language-typescript',
  },
  {
    name: 'Vuejs',
    icon: 'mdi:vuejs',
  },
  {
    name: 'Nuxtjs',
    icon: 'mdi:nuxt',
  },
  {
    name: 'Vitest',
    icon: 'simple-icons:vitest',
  },
  {
    name: 'Supabase',
    icon: 'simple-icons:supabase',
  },
  {
    name: 'Django',
    icon: 'simple-icons:django',
  },
  {
    name: 'Netlify',
    icon: 'simple-icons:netlify',
  },
]);

const projects = await queryContent<ParsedContent>('/projects').find();
const blogPosts = await queryContent<ParsedContent>('/blog').limit(3).sort({ id: -1 }).find();

useHead({
  title: 'Rafamed - Welcome to my portfolio website',
  meta: [
    {
      name: 'description',
      content: 'Welcome to my portfolio website',
    },
  ],
});

definePageMeta({
  pageTransition: {
    name: 'fade-index',
    mode: 'out-in',
  },
});
</script>

<template>
  <main>
    <!-- Hero section -->
    <section class="hero-pattern">
      <div
        class="container mx-auto flex flex-col items-center px-5 pt-48 pb-24 md:flex-row-reverse"
      >
        <div
          class="animate__animated animate__fadeInRight mb-10 w-5/6 md:mb-0 md:w-1/2 md:pr-16 lg:w-full lg:max-w-lg lg:pr-24"
        >
          <img
            class="w-full rounded object-cover object-center"
            alt="hero"
            src="@/assets/image/hero.png"
          />
        </div>
        <div
          class="animate__animated animate__fadeInUp flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24"
        >
          <h2 class="tagline mb-4 text-5xl font-black text-primary sm:text-7xl">Hi, I'm Rafael</h2>
          <p class="mb-8 text-2xl leading-5 text-light">Freelance software developer</p>

          <div class="flex justify-center">
            <NuxtLink
              to="/contact"
              class="clay-effect inline-flex rounded-xl border-0 bg-accent py-2 px-6 text-lg text-black hover:bg-accent/75 focus:outline-none"
            >
              Contact me!
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="hover:clay-effect ml-4 inline-flex rounded-xl border border-accent py-2 px-6 text-lg text-light hover:border-transparent hover:bg-accent/75 hover:text-black focus:outline-none"
            >
              See my work
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section>
      <div
        class="container mx-auto flex flex-col items-center justify-center gap-8 px-5 py-24 md:flex-row"
      >
        <img src="@/assets/image/about.png" class="animate-pulse md:w-1/3" alt="" />
        <div class="border-b border-gray-200 md:mb-0 md:w-1/2 md:border-b-0 md:py-8">
          <h2 class="mb-2 text-center text-3xl text-accent sm:text-4xl md:text-left">
            Few words about me
          </h2>
          <p class="mb-8 text-center text-base leading-relaxed text-light md:text-left xl:text-lg">
            Technology is my passion, I love creating websites and Web Apps and I also enjoy sharing
            what I just learned with everyone.
          </p>
        </div>
      </div>
    </section>

    <!-- My stack section -->
    <section class="hero-pattern">
      <div class="container mx-auto px-5 py-24">
        <div class="flex w-full flex-col text-center">
          <h2 class="mb-4 animate-pulse text-3xl font-medium text-accent sm:text-4xl">
            This is my Stack
          </h2>
          <p class="mx-auto text-base leading-relaxed text-white lg:w-2/3 xl:text-lg">
            Here are the technologies I use most of the time for my projects.
          </p>
        </div>
        <div
          class="mx-auto grid w-auto grid-cols-2 place-items-center gap-8 py-12 px-4 md:grid-cols-3"
        >
          <div
            v-for="(technology, index) in stack"
            :key="index"
            class="clay-effect flex w-full flex-col items-center gap-4 rounded-3xl bg-custom py-6 md:w-2/3"
          >
            <!-- <i class="text-5xl text-light"></i> -->
            <Icon :name="technology.icon" class="text-5xl text-light" />

            <h3 class="mb-2 text-lg font-medium text-primary sm:text-xl">{{ technology.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest work -->
    <section>
      <div class="container mx-auto px-5 pt-24">
        <h2 class="animate-pulse text-center text-3xl font-medium text-accent sm:text-4xl">
          Here is some of my work
        </h2>

        <div class="mt-4 flex flex-wrap pt-6">
          <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
      </div>
    </section>

    <!-- Latest posts -->
    <section>
      <div class="container mx-auto px-5 py-24">
        <h2 class="animate-pulse text-center text-3xl font-medium text-accent sm:text-4xl">
          My latest blog posts
        </h2>

        <div class="flex flex-wrap py-6">
          <PostCard v-for="(post, index) in blogPosts" :key="index" :post="post" />
        </div>
      </div>
    </section>

    <!-- Contact section -->
    <section class="hero-pattern">
      <div class="container mx-auto px-5 py-24">
        <h2 class="animate-pulse pb-4 text-center text-3xl font-medium text-accent sm:text-4xl">
          Let's work together!
        </h2>

        <div class="m-4 flex flex-col items-center justify-evenly gap-8 py-6 md:flex-row">
          <figure class="md:w-1/3">
            <img src="@/assets/image/contact.png" alt="" />
          </figure>
          <ContactForm class="md:w-2/5" />
        </div>
      </div>
    </section>
  </main>
</template>
