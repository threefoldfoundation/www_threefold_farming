<template>
  <section class="py-8 px-4">
    <div class="flex flex-wrap items-center -mx-4">
      <div class="w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left">
        <h2 class="text-xl font-semibold font-heading">
          {{ signup.title }}
        </h2>
      </div>
      <div class="w-full lg:w-2/6 px-4 text-center">
        <g-link
          class="inline-block py-4 px-8 mb-4 sm:mb-0 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
          :to="signup.link1"
          >{{ signup.button1 }}</g-link
        ><g-link
          class="inline-block text-indigo-600 hover:underline"
          :to="signup.link2"
          >{{ signup.button2 }}</g-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["signup"],
};
</script>