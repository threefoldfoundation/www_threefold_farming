<template>
  <section class="header pt-12 px-4" v-if="id == 'home' || id == 'get_3node'">
    <NavBar :navigation="$static.navigation" />
    <div
      class="flex flex-wrap items-center lg:px-16 text-center lg:text-left pt-10 -mx-2"
    >
      <div class="lg:w-1/2 lg:pr-10 mt-10 lg:mt-0 lg:px-12 order-2">
        <h1
          v-if="id == 'get_3node'"
          class="text-8xl mb-6 green uppercase font-normal font-heading"
        >
          {{ title }}
        </h1>
        <h1
          v-else
          class="text-8xl mb-6 green uppercase font-normal font-heading"
        >
          {{ title }}
        </h1>
        <div
          v-if="id == 'get_3node'"
          class="mb-8 text-white font-light text-3xl leading-10"
        >
          <span class="green font-bold">{{ span }}</span>
          {{ excerpt }}
        </div>
        <div
          v-else
          class="mb-8 text-black leading-relaxed"
          v-html="excerpt"
        ></div>
        <div v-if="button" class="border-wrap">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="inline-block module py-2 px-10 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="inline-block py-2 module px-10 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
            :href="link"
            >{{ button }}</a
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
      <div v-if="id == 'get_3node'" class="lg:w-1/2 px-20 order-1">
        <g-image :src="img" :alt="altImg" />
      </div>
      <div v-else class="pt-32 lg:w-1/2 px-2 order-1">
        <g-image :src="img" :alt="altImg" />
      </div>
    </div>
  </section>

  <section
    class="hiwHeader py-16 px-4 bg-cover bg-center h-screen"
    v-else-if="id == 'how_it_works'"
    :style="backgroundImg"
  >
    <NavBar :navigation="$static.navigation" />
    <div
      class="flex flex-wrap items-center lg:px-16 text-center lg:text-left lg:pt-16 -mx-2"
    >
      <div class="lg:w-1/2 lg:pr-10 mt-10 lg:mt-0 px-10 order-1">
        <h1 class="text-8xl mb-6 green uppercase font-normal font-heading">
          {{ title }}
        </h1>
        <div
          class="mb-8 text-black lg:text-3xl text-xl font-light leading-6 lg:leading-10"
          v-html="excerpt"
        ></div>
        <div v-if="button" class="border-wrap">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="inline-block module py-2 px-10 mr-6 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="inline-block py-2 module px-10 mr-6 leading-none text-white hover:bg-gray-700 font-semibold rounded shadow"
            :href="link"
            >{{ button }}</a
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
      <div class="pt-32 lg:w-1/2 px-2 order-2">
        <!-- <g-image :src="img" :alt="altImg" /> -->
      </div>
    </div>
  </section>

  <section class="py-12 px-4" v-else>
    <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
      <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2 class="text-8xl mb-6 leading-tight font-semibold font-heading">
          {{ title }}
        </h2>
        <div class="mb-8 text-gray-700 leading-relaxed" v-html="excerpt"></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow"
            :href="link"
            >{{ button }}</a
          >

          <a
            v-else
            class="inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow"
            :href="link"
            >{{ button }}</a
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
      <div class="lg:w-1/2 px-2"><g-image :src="img" :alt="altImg" /></div>
    </div>
  </section>
</template>
<static-query>
query {
  navigation(id: "navigation"){
    navLinks{
      name
      link
      external
      expandable
    #  submenu {
    #    title
    #    path
    #    external
    #  }
    }
    social{
      icon
      link
    }
  }
}
</static-query>

<script>
import NavBar from "~/components/custom/Navbar/Navbar.vue";
export default {
  components: {
    NavBar,
  },
  props: [
    "id",
    "span",
    "title",
    "excerpt",
    "altImg",
    "image",
    "button",
    "link",
  ],
  computed: {
    img() {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
    backgroundImg() {
      if (this.image.src) return "background-image:url(" + this.image.src + ")";
      return this.image;
    },
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(to bottom left, #b8a5e9, #2e3192);
  height: auto;
}
h1,
.hiwHeader h1 {
  font-family: Ego;
  line-height: 0.8;
}

.green {
  color: #95ffd9;
}

.hiwHeader h1 {
  color: #2e3192;
}
.border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, #b8a5e9, #2e3192);
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

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  .header {
    padding-bottom: 20px;
  }

  .hiwHeader {
    background-image: none !important;
  }

  .border-wrap {
    margin: auto;
  }
}
</style>