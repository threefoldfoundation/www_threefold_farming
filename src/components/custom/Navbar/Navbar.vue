<template>
  <div
    class="fixed inset-0 h-16"
    :class="{ scrolled: !view.atTopOfPage }"
  >
    <header
      class="container mx-auto px-4 sm:px-0 py-4 transition-all transition-500"
      :class="{
        'opacity-100': !disableScroll && scrollPosition > headerHeight,
        'opacity-0': !disableScroll && scrollPosition < headerHeight,
      }"
    >
      <div class="">
        <div class="my-2 ">
          <!-- <a :href="$url('/')" class=""> -->
            <g-image
              :src="require(`!!assets-loader!@images/tfn_black.svg`)"
              class="mx-auto logo"
              
              alt=""
            />

     
            <!-- <span
              class="hidden md:block font-semibold text-xl tracking-tight"
              >{{ $static.metadata.siteName }}</span
            > -->
          <!-- </a> -->
        </div>

        <!-- <div class="sm:hidden ml-auto">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div> -->
        <!-- <div class="text-gray-400 sm:block md:hidden">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-0 sm:mr-6">
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>
            <li
              :key="element.name"
              v-for="(element, index) in navigation.social"
              class="hover:text-white sm:block"
              :class="{
                'px-1 mr-4': index != Object.keys(navigation.navLinks).length,
              }"
            >
              <span class="telegram_icon">
                <a
                  :href="element.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome :icon="['fab', element.icon]" />
                </a>
              </span>
            </li>
            <li class="mr-2">
              <a
                href="javascript:;"
                onclick="ml_account('webforms', '3562741', 'n7q9l7', 'show')"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="envelope"
                  class="h-5 w-5 mt-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div> -->
      </div>

      <!-- <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="bg-white navbar md:order-2 px-2 pt-2 ml-auto pb-4 sm:flex sm:p-0 sm:w-100 sm:bg-transparent"
      >
        <div
          :key="index"
          v-for="(element, index) in navigation.navLinks"
          class="w-auto"
        >
          <div
            v-if="element.expandable"
            class="relative mt-2 mr-4"
            x-data="{ open: false }"
          >
            <button
              @click="setActive(index)"
              class="flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link"
            >
              <span class="uppercase py-1 pl-2">{{ element.name }}</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                :class="{
                  'rotate-180': active == index,
                  'rotate-0': active == !index,
                }"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              v-if="active == index"
              x-show="open"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="transform opacity-0 scale-95"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-95"
              class="absolute w-auto mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30"
            >
              <div
                v-if="open"
                class="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"
              >
                <div v-for="(link, i) in element.submenu" :key="i">
                  <a
                    v-if="link.external"
                    class="block px-4 py-1 text-sm bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="open = false"
                    :href="link.path"
                    target="_blank"
                    >{{ link.title }}</a
                  >
                  <a
                    v-else
                    class="block px-4 py-1 text-sm bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="open = false"
                    :href="$url(link.path)"
                    >{{ link.title }}</a
                  >
                </div>
              </div>
            </div>
          </div>

          <a
            v-else-if="element.external"
            :href="element.link"
            @click="clicked"
            target="_blank"
            class="inline-flex sm:flex uppercase p-2 mr-5 animated-link"
            >{{ element.name }}</a
          >
          <g-link
            v-else
            :to="element.link"
            @click="clicked"
            class="inline-flex sm:flex uppercase p-2 mr-5 animated-link"
            >{{ element.name }}</g-link
          >
        </div>
        <div
          class="md:hidden inline-flex rounded-full border-2 border-gray-200 w-1/2"
        >
          <span class="w-auto flex justify-end items-center p-2">
            <font-awesome :icon="['fas', 'search']" />
          </span>
          <input
            class="w-full rounded mr-4 bg-white"
            type="text"
            placeholder="Search..."
            v-model="search"
            @keyup.enter="result"
          />
        </div>
      </nav> -->
      <!-- <div class="hidden md:ml-auto md:inline-block md:order-last">
        <div class="inline-flex rounded-full border-2 border-gray-200 w-1/2">
          <span class="w-auto flex justify-end items-center p-2">
            <font-awesome :icon="['fas', 'search']" />
          </span>
          <input
            class="w-full rounded mr-4 bg-white"
            type="text"
            placeholder="Search..."
            v-model="search"
            @keyup.enter="result"
          />
        </div>
        <ul class="list-none inline-flex justify-center md:justify-end">
          <li class="mr-0 sm:mr-2">
            <ThemeSwitcher v-on="$listeners" :theme="theme" />
          </li>
          <li
            :key="element.name"
            v-for="(element, index) in navigation.social"
            class="mr-1 sm:block"
            v-bind:class="{
              'mr-2': index != Object.keys(navigation.social).length - 1,
            }"
          >
            <span class="telegram_icon">
              <a :href="element.link" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', element.icon]" />
              </a>
            </span>
          </li>
          <li class="ml-4 mt-1">
            <a
              href="javascript:;"
              onclick="ml_account('webforms', '3562741', 'n7q9l7', 'show')"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                class="h-5 w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div> -->
    </header>
  </div>
</template>

<script>
/*
 * I'm a lazy guy, so i used this script
 * https://codepen.io/ninaregli/pen/OjeMLP
 * to calculate the current scroll position
 *
 * Will be used to add/remove the additional
 * css classes to show the sticky navbar
 */
import ThemeSwitcher from "~/components/custom/ThemeSwitcher.vue";
export default {
  components: {
    ThemeSwitcher,
  },
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
  data: function () {
    return {
      scrollPosition: null,
      headerHeight: 0,
      isOpen: false,
      search: "",
      open: false,
      active: null,
      currentLink: -1,
      view: {
        atTopOfPage: true,
      },
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setHeaderHeight(height) {
      this.headerHeight = height;
    },
    result() {
      window.location.href = `/search?query=${this.search}`;
    },
    setActive(index) {
      this.active = index;
      this.open = !this.open;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
        this.active = !this.active;
        // this.isOpen = !this.isOpen;
      }
    },
    clicked() {
      this.isOpen = false;
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  mounted() {
    if (!this.disableScroll) {
      var height = document.getElementById("header").clientHeight;
      this.setHeaderHeight(height);
      window.addEventListener("scroll", this.updateScroll);
    }
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>
<style scoped>
input:focus,
button:focus {
  outline: 0;
}
.inset-0 {
  z-index: 999;
}
/* nav li a {
  padding-right: 10px;
} */
a.active--exact.active {
  background-color: rgba(237, 242, 247, 1);
  border-radius: 0.5rem;
}

.navbar {
  width: auto;
}
.logo {
  max-width: 230px;
}

nav {
  z-index: 10;
}

.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
  background-color: white;
  -moz-transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
@media (max-width: 768px) {
  .navbar {
    width: 100%;
  }
}
</style>
