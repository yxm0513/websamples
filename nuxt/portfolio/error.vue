<template>
  <NuxtLayout>
    <div class="hero-pattern grid min-h-[75vh] place-items-center py-32">
      <img src="@/assets/image/notfound.png" alt="" class="mx-auto h-[500px]" />
      <h1 class="mb-4 text-center text-3xl font-bold text-secondary">Page not found</h1>
      <NuxtLink
        to="/"
        class="flex items-center rounded-lg border-0 bg-primary py-2 px-2 text-base text-black no-underline hover:bg-primary/75 focus:outline-none md:mt-0 md:inline-flex md:px-6"
        >Return to Home</NuxtLink
      >
    </div>
  </NuxtLayout>
</template>

<script setup></script>
