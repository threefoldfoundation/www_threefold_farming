<template>
  <section class="py-12 px-4">
    <h2 class="text-3xl text-center mb-12 font-semibold font-heading">
      {{ main.title }}
    </h2>
    <div class="flex flex-wrap -mx-4 mb-6">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="lg:w-1/4 px-4 mb-6"
      >
        <g-image class="w-10 h-10" :src="feature.svg.src"></g-image>
        <h3 class="text-xl my-3 font-semibold font-heading">
          {{ feature.title }}
        </h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          {{ feature.excerpt }}
        </p>
      </div>
    </div>
    <div class="text-center">
      <g-link
        class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded"
        :to="main.link"
        >{{ main.btn }}</g-link
      >
      <p class="text-sm text-gray-400 mt-5">
        {{ main.excerpt }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["main", "features"]
};
</script>