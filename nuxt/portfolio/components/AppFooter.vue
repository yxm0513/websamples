<template>
  <footer class="body-font text-gray-600">
    <div class="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
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

        <span class="ml-3 text-3xl text-primary">Rafamed</span>
      </nuxt-link>
      <p
        class="mt-4 text-sm text-light sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4"
      >
        © 2022 Rafamed —
        <nuxt-link
          href="https://twitter.com/rafamed_dev"
          class="ml-1 text-secondary"
          rel="noopener noreferrer"
          target="_blank"
          >@rafamed_dev</nuxt-link
        >
      </p>
      <span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
        <nuxt-link to="https://twitter.com/rafamed_dev" class="ml-3 text-secondary" title="Twitter">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            ></path>
          </svg>
        </nuxt-link>
        <nuxt-link
          to="https://github.com/rafamedtech/"
          target="_blank"
          class="ml-3 text-secondary"
          title="Github"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </nuxt-link>
        <nuxt-link
          to="https://www.linkedin.com/in/rafael-amed-valenzuela/"
          target="_blank"
          class="ml-3 text-secondary"
          title="LinkedIn"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </nuxt-link>
      </span>
    </div>
  </footer>
</template>
