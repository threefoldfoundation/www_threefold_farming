<template>
  <section class="py-12 px-4 text-center">
    <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">
      {{ main.title }}
    </h2>
    <p class="text-gray-600">{{ main.description }}</p>
    <div class="flex flex-wrap items-center -mx-8 mt-12 mb-2">
      <div
        class="lg:w-1/3 px-8 mb-8"
        v-for="(section, index) in sections"
        :key="index"
      >
        <img
          class="w-1/2 mx-auto mb-8 h-32"
          :src="section.svg.src"
          :alt="section.title"
        />
        <h3 class="text-2xl mb-4 font-semibold font-heading">
          <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          >
          <span>{{ section.title }}</span>
        </h3>
        <p class="text-gray-600">
          {{ section.excerpt }}
        </p>
      </div>
    </div>
    <div>
      <g-link
        class="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
        :to="main.link"
        >{{ main.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["main", "sections"],
};
</script>