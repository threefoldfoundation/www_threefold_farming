<template>
  <section class="pt-8 px-4 text-center" v-if="id == 'get_3node'">
    <div class="max-w-2xl mx-auto mb-8">
      <h2 class="text-5xl mb-6 uppercase blue font-bold leading-10">
        {{ main.title }}
      </h2>
      <h2
        v-if="main.title2"
        class="text-5xl leading-4 mb-6 blue uppercase font-bold"
      >
        {{ main.title2 }}
      </h2>

      <p v-if="main.span" class="text-2xl blue text-gray-400 leading-relaxed">
        {{ main.span }}
      </p>
    </div>
    <div class="flex flex-wrap mx-auto">
      <g-link
        v-for="(logo, idx) in logos"
        :key="idx"
        :to="logo.url"
        class="w-1/3 px-4 mb-8 mx-auto"
      >
        <g-image :src="img(logo.image)" />
      </g-link>
    </div>
  </section>

  <section class="pt-8 px-4 text-center" v-else>
    <div class="max-w-2xl mx-auto mb-8" v-if="main">
      <h2
        class="text-4xl leading-tight mb-6 uppercase font-normal font-heading"
      >
        {{ main.title }}
      </h2>
      <div
        v-if="main.content"
        class="mt-4 text-2xl text-gray-800 leading-8"
        v-html="main.content"
      ></div>
    </div>
    <div class="flex flex-wrap mx-0">
      <g-link
        v-for="(logo, idx) in logos"
        :key="idx"
        :to="logo.url"
        class="w-1/2 md:w-1/6 px-4 mb-8"
      >
        <g-image :src="img(logo.image)" />
      </g-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "logos", "main"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>

<style scoped>
.blue {
  color: #313f92;
}
</style>