<template>
  <section class="py-12 px-4" v-if="id == 'home'">
    <h2 class="text-4xl text-center font-semibold font-heading">
      {{ main.title }}
    </h2>
    <p v-if="main.subtitle" class="mb-6 text-2xl text-center text-gray-800">
      {{ main.subtitle }}
    </p>
    <div class="flex flex-wrap items-center -mx-4 mb-6">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="lg:w-1/3 mt-5 lg:mt-0 feature px-4 text-center"
      >
        <div v-if="index == 1">
          <div class="w-1/2 lg:w-full lg:h-full mx-auto px-2 order-1">
            <g-image :src="feature.svg" :alt="feature.title" />
          </div>
        </div>

        <div v-else>
          <span v-if="index !== 4" class="img-border"></span>
          <h2 class="text-xl mt-5 mb-3 font-normal font-heading">
            {{ feature.title }}
          </h2>
          <div
            v-html="feature.content"
            class="text-sm text-gray-700 leading-relaxed"
          ></div>
        </div>
      </div>
    </div>
    <div class="text-center mt-20" v-if="main.btn">
      <g-link
        class="bg-blue-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        :to="main.link"
        >{{ main.btn }}</g-link
      >
      <div v-html="main.content" class="text-sm text-gray-400 mt-5"></div>
    </div>
  </section>

  <section class="py-12 px-4" v-else>
    <h2 class="text-4xl text-center mb-12 font-medium font-heading">
      {{ main.title }}
    </h2>
     <p v-if="main.subtitle" class="mb-6 text-2xl text-center text-gray-800">
      {{ main.subtitle }}
    </p>
    <div class="flex flex-wrap -mx-4 mb-6">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="lg:w-1/2 px-4 mb-6 text-center"
      >
        <g-image
          class="w-20 h-20 mx-auto"
          v-if="feature.svg"
          :src="feature.svg.src"
          :alt="feature.svg"
        ></g-image>
        <h2 class="text-xl mt-5 mb-3 font-normal font-heading">
          {{ feature.title }}
        </h2>
        <div
          v-html="feature.content"
          class="text-sm text-gray-700 leading-relaxed"
        ></div>
      </div>
    </div>
    <div class="text-center" v-if="main.btn">
      <g-link
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        :to="main.link"
        >{{ main.btn }}</g-link
      >
      <div v-html="main.content" class="text-sm text-gray-400 mt-5"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "main", "features"],
};
</script>

<style scoped>
.img-border {
  display: block;
  width: 50px;
  margin: auto;
  height: 5px;
  background: linear-gradient(to right, #b8a5e9, #2e3192);
}

.feature {
  max-height: 315px !important;
}
</style>