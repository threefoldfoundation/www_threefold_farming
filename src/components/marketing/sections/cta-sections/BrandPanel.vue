<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div
          class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="lg:self-center">
            <h2
              class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10"
            >
              <span class="block">{{ brand.title }}</span>
              <span class="block">{{ brand.title2 }}</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">
              {{ brand.excerpt }}
            </p>
            <g-link
              :to="brand.sourceUrl"
              class="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 hover:bg-gray-50 transition duration-150 ease-in-out"
              >{{ brand.btnTxt }}</g-link
            >
          </div>
        </div>
        <div class="relative pb-3/5 -mt-6 md:pb-1/2">
          <g-image
            class="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
            :src="brand.image"
            :alt="brand.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["brand"],
};
</script>