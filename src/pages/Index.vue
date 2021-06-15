<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden">
      <Header
        :id="$page.markdownPage.id"
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$url($page.markdownPage.link)"
      />
    </div>

    <!-- new home -->

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <Features
        class="lg:mt-10"
        v-if="$page.markdownPage.features.length > 0"
        :main="$page.markdownPage.featuresMain"
        :features="$page.markdownPage.features"
      />
    </div>
    <Map v-if="$page.markdownPage.stats" :section="$page.markdownPage.stats" />

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <SolutionsHeader
        class="lg:mt-20"
        v-if="$page.markdownPage.headerSolution4"
        :header="$page.markdownPage.headerSolution4"
      />

      <NewCard
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.cards"
        :cards="$page.markdownPage.cards"
      /> 
    </div>

    <CallToAction
      class="lg:mt-20"
      v-if="$page.markdownPage.cta"
      :cta="$page.markdownPage.cta"
    />

    <g-image
      v-if="$page.markdownPage.solution_image2"
      :src="$page.markdownPage.solution_image2.src"
    />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        content
        metaTitle
        metaDesc
        metaImg
        header_title
        header_image
        header_excerpt
        button
        link
        solution_image2
        
       featuresMain{
          id
          title 
         # subtitle
          btn 
          link
          content
        }
        features{
          id
          title 
          svg
          content
        }
          stats {
          id
          title
          content
          button
          link
          btn1
          btn2
          link1
          link2
          image
        }
        headerSolution4{
        subtitle
        content
        btn1
        link1
       }
       cards{
          id
          title
          image
          button
          link
          order
          content
        }
        cta{
          id
          title
          content
          button
          link
          image
        }
    }  
  }
</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import ShowProductCaseHome from "~/components/marketing/sections/cta-sections/ShowcaseProductsHome.vue";
import StatsDetails from "~/components/marketing/sections/team-sections/grid_with_large_round_images.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import Features from "~/components/custom/sections/Features.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import Map from "~/components/marketing/sections/cta-sections/StateMap.vue";
import CenteredAccordion from "~/components/marketing/sections/faq-sections/CenteredAccordion.vue";

export default {
  components: {
    Header,
    NewCard,
    ShowProductCaseHome,
    SolutionsHeader,
    StatsDetails,
    Map,
    Features,
    CallToAction,
    CenteredAccordion,
  },
  computed: {
    getImg() {
      let image = "";
      if (process.isClient) {
        image = `${window.location.origin}${this.img}`;
      }
      return image;
    },
    img() {
      if (!this.$page.markdownPage.metaImg) return "";
      if (this.$page.markdownPage.metaImg.src)
        return this.$page.markdownPage.metaImg.src;
      return this.$page.markdownPage.metaImg;
    },
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: this.$page.markdownPage.metaTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.markdownPage.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.markdownPage.metaTitle,
        },
      ],
    };
  },
};
</script>

<style scoped>
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
</style>