<template>
  <div class="py-8 mb-5">


    
      <div class="w-full text-center">
        <p class="text-sm tracking-widest text-gray-700">{{ main.subtitle}}</p>
        <h1 class="font-bold text-5xl text-gray-700">{{ main.title }}</h1>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          v-for="(product, idx) in products"
          :key="idx"
          class="p-2 sm:p-10 text-center cursor-pointer"
        >
          <div
            class="max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white"
          >
            <div class="px-6 py-4">
              <g-image :src="img(product.image)" />
              <!-- <div class="font-bold text-xl mb-2">{{ product.title }}</div> -->
              <p v-html="product.content" class="text-gray-700 text-base"></p>
            </div>
          </div>
        </div>
      </div>
    
  </div>
</template>


<script>
export default {
  props: ["products" ,"main"],
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
.bannerFondo {
  height: 400px;
}
</style>
