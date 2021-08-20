<template>
  <section class="px-2">
    <div class="flex blue flex-wrap p-12 text-center lg:text-left -mx-2">
      <div
        class="
          lg:w-1/4
          light-blue
          text-center
          rounded-lg
          py-10
          mt-10
          lg:mt-0
          order-1
          lg:order-none
        "
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
                  class="leading-none font-bold green-color"
                  :class="{ green: index % 2 !== 0 }"
                  aria-describedby="item-1"
                >
                  {{ value }}
                </dd>
                <dt class="mt-2 leading-6 text-white uppercase" id="item-1">
                  {{ key }}
                </dt>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="
          lg:w-3/4
          text-center
          rounded
          lg:px-6
          mt-10
          lg:mt-0
          order-1
          lg:order-none
        "
      >
        <h2
          class="
            text-4xl text-white
            leading-tight
            mb-6
            font-bold font-heading
            uppercase
          "
        >
          {{ section.title }}
        </h2>
        <div class="text-white mt-4" v-html="section.content"></div>
        <g-image
          class="lg:w-3/4 mx-auto"
          :src="img(section.image)"
          :alt="section.title"
        />
        <div class="mx-auto mt-6">
          <g-link
            v-if="section.link1"
            class="
              inline-block
              green
              text-sm
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-12
              py-2
              mr-5
              mb-4
              rounded
              shadow
              rounded-full
            "
            :to="section.link1"
            >{{ section.btn1 }}
          </g-link>
          <g-link v-if="section.link2"
            class="
              inline-block
              green
              text-sm
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-12
              py-2
              mr-5
              mb-4
              rounded
              shadow
              rounded-full
            "
            :to="section.link2"
            >{{ section.btn2 }}</g-link
          >
          <g-link v-if="section.link3"
            class="
              inline-block
              green
              text-sm
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-12
              py-2
              mr-5
              mb-4
              rounded
              shadow
              rounded-full
            "
            :to="section.link3"
            >{{ section.btn3 }}</g-link
          >
          <!-- <div v-html="main.content" class="text-sm text-gray-400 mt-5"></div> -->
        </div>
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
      const getFarms = await axios.get(
        "https://explorer.threefold.io/api/farms?network=all"
      );
      const results = await axios.get(
        "https://explorer.threefold.io/api/stats"
      );
      let farms = getFarms.data.length;
      let hru = (results.data.hru / 1000).toFixed();
      let cru = results.data.cru.toFixed();
      this.stats.push(
        { farms: farms },
        { "Storage TB": hru },
        { "Compute Cores": cru }
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
  height: 100px;
  width: 100px;
  margin: auto;
  border-radius: 50%;
  line-height: 100px;
  border: 3px solid #847fc2;
  background-color: #313f92;
  color: #dacef5;
  font-size: 1.5rem;
}

.green {
  background-color: #92f5d9;
  color: #313f92;
}
</style>