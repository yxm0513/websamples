<template>
  <div>
    <form
      action="https://formsubmit.co/c6f524a15dd2e0cad5dd509cbb4f11ee"
      method="POST"
      class="clay-effect flex flex-col gap-8 rounded-2xl bg-custom p-10 text-black"
    >
      <div class="flex flex-col">
        <label for="name" class="text-primary">Name</label>
        <input
          class="rounded-lg focus:ring focus:ring-secondary"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="email" class="text-primary">Email</label>
        <input
          class="rounded-lg focus:ring focus:ring-secondary"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="message" class="text-primary">Message</label>
        <textarea
          class="rounded-lg focus:ring focus:ring-secondary"
          name="message"
          id="message"
          required
        ></textarea>
      </div>
      <div>
        <button
          class="clay-effect mt-4 items-center rounded-lg border-0 bg-accent py-2 px-6 text-base text-black hover:bg-accent/75 focus:outline-none md:mt-0 md:inline-flex lg:text-lg"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
