<template>
  <div class="py-12 mb-5" v-if="id == 'home'">
    <div class="w-full text-center">
      <h2
        v-if="main !== null"
        class="text-4xl font-normal leading-tight font-heading"
      >
        {{ main.title }}
      </h2>
      <p v-if="main !== null" class="mb-6 text-2xl text-gray-800">
        {{ main.subtitle }}
      </p>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <a
          v-for="(product, idx) in products"
          target="_blank"
          :key="idx"
          :href="product.url"
          class="m-auto rounded overflow-hidden transition duration-500"
        >
          <div class="take_apart text-center pb-8 my-5">
            <g-image :src="img(product.img)" />
            <h3 class="font-bold text-2xl">{{ product.title }}</h3>
            <div
              v-html="product.content"
              class="px-5 text-gray-900 font-light text-2xl leading-7"
            ></div>

            <div v-if="product.button" class="border-wrap">
              <a
                v-if="product.url.includes('http')"
                target="_blank"
                :href="product.url"
                class="bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 shadow rounded-full"
                >{{ product.button }}</a
              >
              <a
                v-else
                :href="product.url"
                class="bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 shadow rounded-full"
                >{{ product.button }}</a
              >
            </div>
          </div>
        </a>
      </div>
      <div v-if="main.btn1" class="border-wrap inline-flex mx-auto">
        <a
          v-if="main.link1.includes('http')"
          target="_blank"
          :href="main.link1"
          class="inline-block py-2 module px-10 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
          >{{ main.btn1 }}</a
        >
        <a
          v-else
          :href="main.link1"
          class="inline-block py-2 module px-10 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
          >{{ main.btn1 }}</a
        >
      </div>
      <div v-if="main.btn2" class="border-wrap inline-flex mx-auto">
        <a
          v-if="main.link2.includes('http')"
          target="_blank"
          :href="main.link2"
          class="inline-block py-2 module px-10 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
          >{{ main.btn2 }}</a
        >
        <a
          v-else
          :href="main.link2"
          class="inline-block py-2 module px-10 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
          >{{ main.btn2 }}</a
        >
      </div>
    </div>
  </div>

  <div class="take_apart2 py-20 mb-5 bg-gray-100 text-white" v-else>
    <div class="w-full text-center lg:px-40 sm:px-4">
      <h2
        v-if="main !== null"
        class="text-4xl text-white mx-4 font-normal leading-tight font-heading"
      >
        {{ main.title }}
      </h2>
      <p
        v-if="main !== null"
        class="mb-6 max-w-4xl m-auto text-2xl font-light leading-8"
      >
        {{ main.subtitle }}
      </p>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <a
          v-for="(product, idx) in products"
          target="_blank"
          :key="idx"
          :href="product.url"
          class="m-auto mx-6 rounded overflow-hidden transition duration-500"
        >
          <div class="text-center pb-8 my-5">
            <g-image :src="img(product.img)" />
            <h3 class="font-normal text-2xl">{{ product.title }}</h3>
            <div
              v-html="product.content"
              class="px-5 mb-8 font-light text-lg"
            ></div>
            <div class="border-wrap mx-auto mt-5">
              <div v-if="product.button">
                <a
                  v-if="product.url.includes('http')"
                  target="_blank"
                  :href="product.url"
                  class="inline-block py-2 module px-2 leading-none text-white hover:bg-gray-700 rounded shadow"
                  >{{ product.button }}</a
                >
                <a
                  v-else
                  :href="product.url"
                  class="inline-block py-2 module px-2 leading-none text-white hover:bg-gray-700 rounded shadow"
                  >{{ product.button }}</a
                >
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "products", "main"],
  methods: {
    img(image) {
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

.take_apart {
  background-color: #f2f2f2;
  min-height: 335px;
}

.take_apart2 {
  background-color: #2e3192;
}

.border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, #b8a5e9, #23256e);
  padding: 3px;
  border-radius: 20px;
}

.module {
  width: 245px;
  background: #252e6e;
  color: white;
  text-align: center;
  border-radius: 20px;
}
</style>
