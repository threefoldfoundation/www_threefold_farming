<template>
  <div class="bg-gray-50 pt-12 sm:pt-16">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ section.title }}
        </h2>
        <div
          class="mt-3 text-xl leading-7 text-gray-600 sm:mt-4"
          v-html="section.content"
        ></div>
      </div>
    </div>
    <div class="text-center my-10">
      <a
        :href="section.link"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        >{{ section.button }}</a
      >
    </div>
    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
              <div
                v-for="(item, index) in stats"
                :key="index"
                class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
              >
                <div v-for="(value, key) in item" :key="key">
                  <dd
                    class="text-5xl leading-none font-extrabold text-indigo-600"
                    aria-describedby="item-1"
                  >
                    {{ value }}
                  </dd>
                  <dt
                    class="mt-2 text-lg leading-6 font-medium text-gray-500 capitalize"
                    id="item-1"
                  >
                    {{ key }}
                  </dt>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  async mounted() {
    try {
      const results = await axios.get(
        "https://explorer.threefold.io/api/stats"
      );
      let sru = results.data.sru / 1000;
      let hru = (results.data.hru / 1000000).toFixed(2);
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
