<template>
  <section class="pt-8 px-4 text-center">
    <div class="max-w-2xl mx-auto mb-8">
      <h2 class="text-4xl leading-tight mb-6 font-semibold font-heading">Our Partners</h2>
      <p class="text-gray-400 leading-relaxed"></p>
    </div>
    <div class="flex flex-wrap -mx-8">
      <div v-for="(logo ,idx) in logos" :key="idx" class="w-1/2 md:w-1/6 px-8 mb-8">
        <img :src="logo.image.src" alt />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["logos"],
  computed: {
    img: function() {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    }
  }
};
</script>



