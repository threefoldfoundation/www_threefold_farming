<template>
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
  >
    <div class="space-y-12">
      <div
        class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"
        v-if="main"
      >
        <h1 class="text-4xl mb-2 leading-tight font-semibold font-heading">
          {{ main.title }} <span class="font-extrabold">{{ main.slogan }}</span>
        </h1>
        <div
          class="mt-3 max-w-2xl mx-auto text-gray-600 sm:mt-4"
          v-html="main.content"
        ></div>
      </div>
      <div
        class="mx-auto grid-cols-3 sm:grid sm:grid-cols-1 lg:grid-cols-3 lg:max-w-5xl"
      >
        <div
          class="my-5 mx-5"
          v-for="partnership in partnerships"
          :key="partnership.id"
        >
          <img
            class="mx-auto"
            :src="img(partnership.image)"
            :alt="partnership.id"
          />
          <div class="space-y-2">
            <div class="text-2xl leading-7  space-y-1">
              <h4>{{ partnership.title }}</h4>
              <div
                class="text-2xl text-gray-800 leading-7"
                v-html="partnership.content"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="main">
        <a
          v-if="main.link.includes('http')"
          target="_blank"
          :href="main.link"
          class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
          >{{ main.button }}</a
        >
        <a
          v-else
          :href="main.link"
          class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
          >{{ main.button }}</a
        >

        <a
          v-if="main.link2.includes('http')"
          target="_blank"
          :href="main.link2"
          class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
          >{{ main.button2 }}</a
        >
        <a
          v-else
          :href="main.link2"
          class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
          >{{ main.button2 }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["partnerships", "main"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>