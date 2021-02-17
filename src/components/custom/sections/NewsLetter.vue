<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <h2 class="text-4xl leading-tight font-semibold font-heading">
        {{ NewsLetter.title }}
      </h2>
      <div
        v-html="NewsLetter.content"
        class="mt-6 mb-8 text-gray-700 leading-relaxed"
      ></div>
      <!-- <g-link
        v-if="NewsLetter.button"
        onclick="ml_account('webforms', '3562741', 'n7q9l7', 'show')"
        class="bg-blue-700 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        :to="NewsLetter.link"
        >{{ NewsLetter.button }}</g-link
      > -->
      <a 
        class="bg-green-500 learn-button hover:bg-green-600 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        href="javascript:;"
        onclick="ml_account('webforms', '3562741', 'n7q9l7', 'show')"
      >
        {{ NewsLetter.button }}
      </a>

    </div>
  </section>
</template>

<script>
export default {
  props: ["NewsLetter"],
};
</script>