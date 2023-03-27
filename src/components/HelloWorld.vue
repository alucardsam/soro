<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div
    class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
    <svg viewBox="0 0 577 310" aria-hidden="true"
      class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
      <path id="1d77c128-3ec1-4660-a7f6-26c7006705ad" fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)" fill-opacity=".3"
        d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z" />
      <defs>
        <linearGradient id="49a52b64-16c6-4eb9-931b-8e24bf34e053" x1="614.778" x2="-42.453" y1="26.617" y2="96.115"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#9089FC" />
          <stop offset="1" stop-color="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
    <svg viewBox="0 0 577 310" aria-hidden="true"
      class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
      <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
    </svg>
    <div class="flex flex-wrap items-center gap-y-2 gap-x-4">
      <p class="text-sm leading-6 text-gray-900">
        <strong class="font-semibold">GeneriCon 2023</strong><svg viewBox="0 0 2 2"
          class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
          <circle cx="1" cy="1" r="1" />
        </svg>Join us in Denver from June 7 – 9 to see what’s coming next.
      </p>
      <a href="#"
        class="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register
        now <span aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="flex flex-1 justify-end">
      <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
        <span class="sr-only">Dismiss</span>
        <XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
    </div>
  </div>


  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>


  <!-- Full-width fluid until the `md` breakpoint, then lock to container -->
  <div class="md:container md:mx-auto">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      hola
    </button>
  </div>
  <div class="flex flex-row">
    <div class="basis-1/4">01</div>
    <div class="basis-1/4">02</div>
    <div class="basis-1/2">03</div>
  </div>

  <div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
    <div
      class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      style="background-position: 10px 10px;"></div>
    <div class="relative rounded-xl overflow-auto p-8">
      <div
        class="grid grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg">
        <div class="p-4 rounded-lg shadow-lg bg-violet-500">01</div>
        <div class="p-4 rounded-lg shadow-lg bg-violet-500">02</div>
        <div class="p-4 rounded-lg shadow-lg bg-violet-500">03</div>
        <div class="p-4 rounded-lg shadow-lg bg-violet-500">04</div>
      </div>
    </div>
    <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
  </div>

  <div class="mt-4 -mb-3">
    <div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
      <div
        class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        style="background-position: 10px 10px;"></div>
      <div class="relative rounded-xl overflow-auto p-8">
        <div
          class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg sm:flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 sm:py-4">
          <img class="block mx-auto sm:mx-0 sm:shrink-0 h-24 rounded-full" src="https://picsum.photos/200/300"
            alt="Woman's Face">
          <div class="text-center sm:text-left space-y-2">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Erin Lindford
              </p>
              <p class="text-slate-500 font-medium">
                Product Engineer
              </p>
            </div>
            <button
              class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
    </div>
  </div>

  <div class="lg:pl-20">
    <div class="max-w-xs px-2.5 lg:max-w-none">
      <img alt="" sizes="(min-width: 1024px) 32rem, 20rem"
        src="https://picsum.photos/512/412" width="800"
        height="800" decoding="async" data-nimg="1"
        class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" loading="lazy"
        style="color: transparent;">
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.chat-notification-logo-wrapper {
  flex-shrink: 0;
}

.chat-notification-logo {
  height: 3rem;
  width: 3rem;
}

.chat-notification-content {
  margin-left: 1.5rem;
  padding-top: 0.25rem;
}

.chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
}

.chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}
</style>