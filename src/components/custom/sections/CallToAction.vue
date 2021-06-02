<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-3xl mx-auto">
      <g-image v-if="cta.image" :src="img(cta.image)" :alt="cta.title" />
      <h2 class="text-4xl leading-tight font-normal uppercase font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="my-4 text-2xl text-gray-800 leading-8"
      ></div>
      <g-link
        v-if="cta.button"
        class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 my-4 rounded shadow rounded-full"
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