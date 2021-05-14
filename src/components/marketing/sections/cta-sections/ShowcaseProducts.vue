<template>
  <div class="py-8 mb-5">
    <div class="w-full text-center" v-if="main">
      <p class="text-sm tracking-widest text-gray-700">{{ main.subtitle }}</p>
      <h1 class="text-4xl mt-2 mb-6 leading-tight font-heading">
        {{ main.title }}
      </h1>
      <g-image :src="img(main.image)" class="hidden md:block" />
    </div>
    <div v-if="id == 'get_3node'" class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div
        v-for="(product, idx) in products"
        :key="idx"
        class="p-2 sm:p-0 text-center"
      >
        <div
          class="m-auto max-w-sm rounded overflow-hidden transition duration-500"
        >
          <div class="px-2 py-2">
            <g-image v-if="product.img" :src="img(product.img)" />
            <h3 class="font-normal text-2xl mb-2">
              {{ product.title }}
            </h3>
            <div
              v-html="product.content"
              class="content text-gray-700 text-md" 
            ></div>

            <div class="grad-border sm:hidden" :class="{ hidden: idx == 2 }"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:hidden">
      <div
        v-for="(product, idx) in products"
        :key="idx"
        class="p-2 sm:p-0 text-center cursor-pointer"
      >
        <div
          class="m-auto max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white"
        >
          <div class="px-2 py-2">
            <g-image v-if="product.img" :src="img(product.img)" />
            <div class="font-bold text-xl mb-2">{{ product.title }}</div>
            <p v-html="product.content" class="text-gray-700 text-base"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["id", "products", "main"],
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

.content {
  display: inline-block;
  padding-right: 27px;
  width: 95%;
}

.grad-border {
  display: inline-block;
  height: 100px;
  width: 5px;
  top: 0px;
  border-radius: 5px;
  background: linear-gradient(to bottom, #ce6ddf, #252e6e);
}

.hidden {
  display: none !important;
  padding-right: 0px;
  width: 100%;
}
</style>
