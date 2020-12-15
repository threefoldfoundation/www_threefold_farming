<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <span class="text-sm font-semibold">{{ header.title }}</span>
      <h2 class="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">
        {{ header.subtitle }}
      </h2>
      <p class="mb-8 text-gray-600 leading-relaxed">
        {{ header.excerpt }}
      </p>
      <div>
        <a
          class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
          v-if="header.btn1"
          :href="header.link1"
          >{{ header.btn1 }}</a
        ><a
          class="text-indigo-600 hover:underline"
          v-if="header.btn2"
          :href="header.link2"
          >{{ header.btn2 }}</a
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