<template>
  <div
    class="lg:py-12 lg:flex lg:justify-center flex flex-col"
    v-if="id == 'farming' && !reverseCard"
  >
    <div
      class="bg-white lg:mx-8 lg:flex items-center lg:max-w-5xl"
      v-for="(card, index) in cards"
      :key="index"
    >
      <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 class="text-4xl font-normal leading-tight font-heading uppercase">
          {{ card.title }}
        </h2>
        <div
          class="mt-4 text-2xl text-gray-800 leading-8"
          v-html="card.content"
        ></div>
        <div class="mt-8" v-if="card.button">
          <a
            v-if="card.link.includes('http')"
            target="_blank"
            :href="card.link"
            class="
              bg-gray-900
              learn-button
              hover:bg-gray-700
              text-gray-100
              px-5
              py-3
              font-semibold
              rounded
            "
            >{{ card.button }}</a
          >
          <g-link
            v-else
            :to="card.link"
            class="
              bg-gray-900
              learn-button
              hover:bg-gray-700
              text-gray-100
              px-5
              py-3
              font-semibold
              rounded
            "
            >{{ card.button }}</g-link
          >
        </div>
      </div>
      <div class="lg:w-1/2">
        <div
          class="h-64 bg-center bg-no-repeat bg-contain lg:rounded-lg"
          :style="multiImgs(card.image)"
        ></div>
      </div>
    </div>
  </div>

  <div
    class="lg:py-12 lg:flex lg:justify-center flex flex-col"
    v-else-if="id == 'farming' && reverseCard"
  >
    <div
      class="bg-white lg:mx-8 lg:flex items-center lg:max-w-5xl"
      v-for="(card, index) in cards"
      :key="index"
    >
      <div class="lg:w-1/2">
        <div
          class="h-64 bg-center bg-no-repeat bg-contain lg:rounded-lg"
          :style="multiImgs(card.image)"
        ></div>
      </div>
      <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-center">
        <h2 class="text-4xl font-normal leading-tight font-heading uppercase">
          {{ card.title }}
        </h2>
        <div
          class="mt-4 text-2xl text-gray-800 leading-8"
          v-html="card.content"
        ></div>
        <div class="mt-8 border-wrap mx-auto" v-if="card.button">
          <a
            v-if="card.link.includes('http')"
            target="_blank"
            :href="card.link"
            class="
              inline-block
              py-2
              module
              px-2
              leading-none
              text-white
              hover:bg-gray-700
              rounded
              shadow
            "
            >{{ card.button }}</a
          >
          <g-link
            v-else
            :to="card.link"
            class="
              inline-block
              py-2
              module
              px-2
              leading-none
              text-white
              hover:bg-gray-700
              rounded
              shadow
            "
            >{{ card.button }}</g-link
          >
        </div>
      </div>
    </div>
  </div>

  <div
    class="lg:py-12 lg:flex lg:justify-center flex flex-col"
    v-else-if="id == 'home'"
  >
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white lg:mx-8 lg:flex items-center lg:max-w-5xl"
    >
      <div class="lg:w-1/2" :class="{ 'order-2': index % 2 !== 0 }">
        <div
          class="h-64 bg-center bg-no-repeat bg-contain lg:rounded-lg"
          :style="multiImgs(card.image)"
        ></div>
      </div>
      <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2
          class="
            text-4xl
            font-normal
            leading-tight
            font-heading
            uppercase
            text-center
          "
        >
          {{ card.title }}
        </h2>
        <div
          class="mt-4 text-lg text-black font-light text-center"
          v-html="card.content"
        ></div>
        <div class="border-wrap mx-auto mt-5">
          <a
            v-if="card.link.includes('http')"
            target="_blank"
            :href="card.link"
            class="
              inline-block
              py-2
              module
              px-2
              leading-none
              text-white
              hover:bg-gray-700
              rounded
              shadow
            "
            >{{ card.button }}</a
          >
          <g-link
            v-else
            :to="card.link"
            class="
              inline-block
              py-2
              module
              px-2
              leading-none
              text-white
              hover:bg-gray-700
              rounded
              shadow
            "
            >{{ card.button }}</g-link
          >
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="lg:py-12 lg:flex lg:justify-center flex flex-col" v-else>
    <div
      class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
    >
      <div class="lg:w-1/2">
        <div class="h-64 bg-cover lg:rounded-lg lg:h-full" :style="multiImgs(card.image)"></div>
      </div>
      <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 class="text-3xl text-gray-700 font-bold">{{ card.title }}</h2>
        <div class="mt-4 text-gray-700" v-html="card.content"></div>
        <div class="mt-8" v-if="card.button">
          <a
            v-if="card.link.includes('http')"
            target="_blank"
            :href="card.link"
            class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded"
            >{{ card.button }}</a
          >
          <g-link
            v-else
            :to="card.link"
            class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded"
            >{{ card.button }}</g-link
          >
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  methods: {
    multiImgs(image) {
      if (image.src) return "background-image:url(" + image.src + ")";
      return image;
    },
  },
  props: ["id", "card", "cards", "reverseCard"],
};
</script>
<style scoped>
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
