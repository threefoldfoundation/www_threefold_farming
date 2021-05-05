<template>
  <div class="bg-white">
    
      <div
        class="brandpanel flex flex-wrap items-center lg:px-16 text-center lg:text-left py-4 -mx-2"
      >
        <div
          class="lg:w-1/2 lg:pr-10 mt-10 lg:mt-0 px-10"
        >
          <div class="lg:self-center text-center">
            <h2
              class="text-3xl leading-9 font-medium text-white sm:text-3xl sm:leading-10"
            >
              <span class="block">{{ brand.title }}</span>
              <span class="block" v-if="brand.subtitle">{{
                brand.subtitle
              }}</span>
            </h2>
            <div
              class="mt-4 text-white"
              v-html="brand.content"
            ></div>
            <!-- <div class="border-wrap">
            <g-link
              :to="brand.sourceUrl"
              class="mt-8 inline-block module py-2 px-10 mr-6 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
              >{{ brand.btnTxt }}</g-link
            >
            </div> -->
             <div v-if="brand.btnTxt" class="my-8">
          <a
            v-if="brand.sourceUrl.includes('http')"
            target="_blank"
            class="inline-block py-2 module px-2 leading-none text-white hover:bg-gray-700 rounded shadow"
            :href="brand.sourceUrl"
            >{{ brand.btnTxt }}</a
          >

          <a
            v-else
            class="inline-block py-2 module px-2 leading-none text-white hover:bg-gray-700 rounded shadow"
            :href="brand.sourceUrl"
            >{{ brand.btnTxt }}</a
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
          </div>
        </div>
        <div class="py-4 lg:w-1/2 px-2">
          <g-image
            
            :src="image"
            :alt="brand.title"
          />
        </div>
      </div>
   
  </div>
</template>

<script>
export default {
  props: ["brand"],
  computed: {
    image() {
      return this.brand.image.src
        ? this.brand.image.src
        : require(`!!assets-loader!@images/brandPanel/${this.brand.image}`);
    },
  },
};
</script>
<style scoped>

/* .border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, #b8a5e9, #23256e);
  padding: 3px;
  border-radius: 20px;
} */

.module {
  width: 245px;
  background: #252e6e;
  color: white;
  text-align: center;
  border-radius: 20px;
}
</style>