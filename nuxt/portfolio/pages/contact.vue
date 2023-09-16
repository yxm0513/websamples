<script setup>
useHead({
  title: 'Contact - Rafamed',
  meta: [
    {
      name: 'description',
      content: 'Contact me',
    },
  ],
});

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
});
</script>

<template>
  <section class="hero-pattern">
    <div class="container mx-auto px-5 pt-40 pb-24">
      <h2 class="pb-4 text-center text-3xl font-medium text-secondary sm:text-4xl">
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
</template>
