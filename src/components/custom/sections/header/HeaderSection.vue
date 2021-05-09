<template>
  <section class="mt-8 px-4 text-center">
    <div class="w-full max-w-4xl mx-auto">
      <span class="text-sm font-medium">{{ header.title }}</span>
      <h2 class="text-4xl mt-2 mb-6 leading-tight font-medium">
        {{ header.subtitle }}
      </h2>
      <div
        v-html="header.content"
        class="mb-8 text-gray-700"
      ></div>
      <div>
        <g-link
          class="inline-block bg-blue-900 learn-button hover:bg-blue-800 text-gray-100 px-12 py-1 mr-5 rounded shadow rounded-full"
          v-if="header.btn1"
          :to="header.link1"
          >{{ header.btn1 }}</g-link
        ><g-link
          class="text-gray-900 bg-transparent hover:underline"
          v-if="header.btn2"
          :to="header.link2"
          >{{ header.btn2 }}</g-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["header"],
};
</script>
