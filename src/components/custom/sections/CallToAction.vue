<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-3xl mx-auto">
      <g-image v-if="cta.image" :src="img(cta.image)" :alt="cta.title" />
      <h2 class="text-4xl leading-tight font-normal uppercase font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-4 text-2xl text-gray-800 leading-8"
      ></div>
      <g-link
        v-if="cta.button"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-normal rounded shadow"
        :to="cta.link"
        >{{ cta.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["cta"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>