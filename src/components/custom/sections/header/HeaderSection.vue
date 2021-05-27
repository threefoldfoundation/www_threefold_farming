<template>
  <section class="mt-8 px-4 text-center">
    <div class="w-full max-w-4xl mx-auto">
      <span class="text-sm font-medium">{{ header.title }}</span>
      <h2 class="text-4xl leading-tight  text-center mb-12 font-normal font-heading uppercase">
        {{ header.subtitle }}
      </h2>
      <div
        v-html="header.content"
        class="mb-8 text-2xl font-light text-gray-900"
      ></div>
      <div class="border-wrap mx-auto">
        <g-link
          class="inline-block py-2 module px-2 leading-none text-white hover:bg-gray-700 rounded shadow"
          v-if="header.btn1"
          :to="header.link1"
          >{{ header.btn1 }}</g-link
        ><g-link
          class="inline-block py-2 module px-2 leading-none text-white hover:bg-gray-700 rounded shadow"
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
