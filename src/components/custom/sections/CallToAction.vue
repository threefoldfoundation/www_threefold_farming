<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <h2 class="text-5xl leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <p class="mt-6 mb-8 text-gray-600 leading-relaxed">
        {{ cta.excerpt }}
      </p>
      <g-link
        class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
        :to="cta.link"
        >{{ cta.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["cta"],
};
</script>