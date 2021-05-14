<template>
  <nav class="bg-transparent">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu
  
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x
  
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0">
            <a :href="$url('/')" class="flex">
              <g-image
                :src="require(`!!assets-loader!@images/TFN_black.svg`)"
                class="mr-3 fill-current logo"
                v-if="theme == 'light'"
                alt=""
              />

              <g-image
                :src="require(`!!assets-loader!@images/TFN_black.svg`)"
                class="mr-3 fill-current logo"
                v-else
                alt=""
              />
            </a>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <a
                v-for="(item, id) in navigation.navLinks"
                :key="id"
                :href="item.link"
                class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            aria-label="Notifications"
          >
            <span
              class="telegram_icon"
              :key="element.name"
              v-for="element in navigation.social"
            >
              <a :href="element.link" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', element.icon]" />
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.
  
      Menu open: "block", Menu closed: "hidden"
    -->
    <div :class="isOpen ? 'block' : 'hidden'" class="lg:hidden bg-gray-900">
      <div class="px-2 pt-2 pb-3">
        <a
          v-for="(item, id) in navigation.navLinks"
          :key="id"
          :href="item.link"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    disableScroll: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
    },
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.logo {
  max-width: 192px;
  height: 36px;
}
</style>