<template>
  <div class="mx-auto">
    <slot />
    <Footer :record="$static.footer" @setTheme="setTheme" :theme="this.theme" />
  </div>
</template>


<script>
import Footer from "~/components/marketing/sections/cta-sections/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    },
  },
};
</script>
<static-query>
query {
  metadata {
    siteName
  }

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

  footer(id: "footer"){
      facebook
      github
      twitter
      dribbble
      instagram
      description
      items{
        title
        links{
          name
          link
        }
      }
    }
}
</static-query>
<style>
@font-face {
  font-family: "Ego";
  src: url("../assets/scss/fonts/Ego-Regular.ttf") format("truetype");
  font-weight: normal;
}
body {
  margin: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
