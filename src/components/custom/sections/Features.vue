<template>
  <section
    class="py-12 px-4 text-center"
    v-if="id == 'home' || id == 'get_3node' || id == 'farm'"
  >
    <div v-if="main">
      <h2 class="text-4xl leading-tight mb-6 font-bold font-heading uppercase">
        {{ main.title }}
      </h2>
      <p v-if="main.subtitle" class="mb-6 text-gray-700">
        {{ main.subtitle }}
      </p>
    </div>
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
          <h5>
            {{ feature.title }}
          </h5>
          <div v-html="feature.content" class="text-gray-700"></div>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-20" v-if="main">
      <g-link
        v-if="main.btn"
        class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
        :to="main.link"
        >{{ main.btn }}
      </g-link>
      <g-link
        v-if="main.btn2"
        class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
        :to="main.link2"
        >{{ main.btn2 }}</g-link
      >
      <g-link
        v-if="main.btn3"
        class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
        :to="main.link3"
        >{{ main.btn3 }}</g-link
      >
      <!-- <div v-html="main.content" class="text-sm text-gray-400 mt-5"></div> -->
    </div>
  </section>

  <section class="py-12 px-4" v-else>
    <div v-if="main">
      <h2
        class="text-4xl leading-tight text-center mb-12 font-normal font-heading uppercase"
      >
        {{ main.title }}
      </h2>
      <p
        v-if="main.subtitle"
        class="mb-6 text-2xl text-center font-ligh text-gray-800"
      >
        {{ main.subtitle }}
      </p>
    </div>
    <div class="flex flex-wrap -mx-4 mb-6">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="lg:w-1/2 px-4 mb-6 text-center"
      >
        <g-image
          class="w-1/3 mx-auto"
          v-if="feature.svg"
          :src="feature.svg.src"
          :alt="feature.svg"
        ></g-image>
        <h2 class="text-3xl mt-5 mb-3 font-normal font-heading">
          {{ feature.title }}
        </h2>
        <div
          v-html="feature.content"
          class="text-lg text-gray-700 leading-relaxed"
        ></div>
      </div>
    </div>
    <div class="text-center" v-if="main">
      <g-link
        v-if="main.btn"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        :to="main.link"
        >{{ main.btn }}</g-link
      >
      <div
        v-if="main.content"
        v-html="main.content"
        class="text-sm text-gray-400 mt-5"
      ></div>
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
.feature {
  max-height: 315px !important;
}
</style>