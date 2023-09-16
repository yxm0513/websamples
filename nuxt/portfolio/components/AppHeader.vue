<script setup>
import 'animate.css';
</script>

<template>
  <header class="my-shadow fixed z-50 w-screen bg-custom">
    <div
      class="nav-container animate__animated animate__fadeInDown container mx-auto flex flex-col flex-wrap items-center p-5 transition-all duration-300 md:flex-row"
    >
      <nuxt-link to="/" class="mb-4 flex items-center font-medium text-gray-900 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          class="clay-effect h-10 w-10 rounded-full bg-accent p-2 text-white"
        >
          <path
            d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"
          />
        </svg>
        <!-- <Icon name="logos:vue" class="h-12 w-12 p-2" /> -->
        <!-- <Icon name="logos:nuxt-icon" class="h-12 w-12 p-2" /> -->

        <span class="logo ml-3 text-3xl text-white">Rafamed</span>
      </nuxt-link>
      <nav
        class="relative flex flex-wrap items-center justify-center gap-4 text-base md:ml-auto md:mr-4 md:border-gray-400 md:py-1 md:pl-4"
      >
        <nuxt-link
          :to="{ name: 'projects' }"
          class="text-center text-base hover:text-primary lg:text-lg"
          >My work</nuxt-link
        >
        <nuxt-link
          :to="{ name: 'blog' }"
          class="text-center text-base hover:text-primary lg:text-lg"
          >Blog</nuxt-link
        >
        <nuxt-link
          :to="{ name: 'contact' }"
          class="text-center text-base hover:text-primary lg:text-lg"
        >
          Contact
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<style>
nav a.router-link-exact-active {
  @apply border-b-2 border-accent font-bold text-accent hover:text-accent;
}
</style>
