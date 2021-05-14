<template>
  <section class="py-12 px-2">
    <div class="flex flex-wrap blue p-12 text-center lg:text-left -mx-2">
      <div
        class="lg:w-1/4 light-blue text-center rounded-lg mt-10 lg:mt-0 order-1 lg:order-none"
      >
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl class="">
            <div
              v-for="(item, index) in stats"
              :key="index"
              class="flex flex-col p-6 text-center"
            >
              <div v-for="(value, key) in item" :key="key">
                <dd
                  class="text-5xl leading-none font-bold green-color"
                  :class="{ green: index % 2 !== 0 }"
                  aria-describedby="item-1"
                >
                  {{ value }}
                </dd>
                <dt
                  class="mt-2 text-lg leading-6 font-medium text-white uppercase"
                  id="item-1"
                >
                  {{ key }}
                </dt>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="lg:w-3/4 text-center rounded lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"
      >
        <h2
          class="text-4xl mb-6 leading-tight text-center text-white font-normal font-heading"
        >
          {{ section.title }}
        </h2>
        <div
          class="text-2xl font-light text-white leading-relaxed"
          v-html="section.content"
        ></div>
        <g-image :src="img(section.image)" :alt="section.title" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  props: ["section"],
  data() {
    return {
      stats: [],
    };
  },
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
  async mounted() {
    try {
      const results = await axios.get(
        "https://explorer.threefold.io/api/stats"
      );
      let sru = (results.data.sru / 1000).toFixed();
      let hru = (results.data.hru / 1000000).toFixed();
      this.stats.push(
        { countries: results.data.countries },
        { "cores online": results.data.cru },
        { "SSD storage capacity": sru },
        { "HDD storage capacity": hru }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.blue {
  background-color: #313f92;
}

.light-blue {
  background-color: #48489f;
}

dd {
  height: 200px;
  width: 200px;
  margin: auto;
  border-radius: 50%;
  line-height: 180px;
  border: 10px solid #847fc2;
  background-color: #313f92;
  color: #dacef5;
}

.green {
  background-color: #92f5d9;
  color: #313f92;
}
</style>