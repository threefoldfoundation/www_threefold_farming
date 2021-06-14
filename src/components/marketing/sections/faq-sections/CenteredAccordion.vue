<template>
  <div class="bg-gray-50">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2
          class="
            text-center text-3xl
            leading-9
            font-extrabold
            text-gray-900
            sm:text-4xl
            sm:leading-10
          "
        >
          {{ main.title }}
        </h2>
        <div class="mt-6 border-t-2 border-gray-200 pt-6">
          <dl>
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              :class="{ 'mt-6 border-t border-gray-200 pt-6': index !== 0 }"
            >
              <dt class="text-lg leading-7">
                <!-- Expand/collapse question button -->
                <button
                  class="
                    text-left
                    w-full
                    flex
                    justify-between
                    items-start
                    text-gray-400
                    focus:outline-none
                    focus:text-gray-900
                  "
                  @click="setActive(index)"
                >
                  <span class="font-medium text-gray-900">
                    {{ faq.question }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                    Heroicon name: chevron-down

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                    <svg
                      class="h-6 w-6 transform"
                      :class="{
                        '-rotate-180': active == index,
                        'rotate-0': !active == index,
                      }"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd class="mt-2 pr-12" v-if="active == index">
                <div
                  class="text-base leading-6 text-gray-500"
                  v-html="faq.content"
                ></div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["main", "faqs"],
  data() {
    return {
      isOpen: false,
      active: 0,
    };
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.open = !this.open;
    },
  },
};
</script>