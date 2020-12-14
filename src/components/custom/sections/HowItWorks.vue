<template>
  <section class="py-12 px-4">
    <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
      <div class="lg:w-1/2 px-2">
        <img src="../../../../static/img/how_it_works.png" alt="" />
      </div>
      <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
        <h2 class="text-4xl px-4 mb-4 leading-tight font-semibold font-heading">
          How Does It Work?
        </h2>
        <div
          class="p-4 mb-4"
          :class="{ 'rounded shadow-md': index % 2 !== 0 }"
          v-for="(howItWorkSec, index) in HIWData"
          :key="index"
        >
          <h3 class="text-2xl mb-2 font-semibold font-heading">
            {{ howItWorkSec.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ howItWorkSec.excerpt }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["HIWData"],
};
</script>