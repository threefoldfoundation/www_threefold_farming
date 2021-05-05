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
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <ShowProductCaseHome
        v-if="
          $page.markdownPage.productData &&
          $page.markdownPage.productData.length > 0
        "
        :main="$page.markdownPage.productsMain"
        :products="$page.markdownPage.productData"
      />

      <Features
        :id="$page.markdownPage.id"
        :main="$page.markdownPage.featuresMain2"
        :features="$page.markdownPage.features2"
      />

      <NewCard
        v-for="card in $page.markdownPage.cards"
        :id="$page.markdownPage.id"
        :key="card.id"
        :card="card"
      />

      <StatsDetails
        v-if="
          $page.markdownPage.statsDetails &&
          $page.markdownPage.statsDetails.length > 0
        "
        :partnerships="$page.markdownPage.statsDetails"
      />

      <Stats
        v-if="$page.markdownPage.stats"
        :section="$page.markdownPage.stats"
      />

      <g-image
        v-if="$page.markdownPage.solution_image_2"
        :src="$page.markdownPage.solution_image_2.src"
      />

      <logoShowcase
        v-if="$page.markdownPage.logos.length > 0"
        :logos="$page.markdownPage.logos"
      />
      <CallToAction
        v-if="$page.markdownPage.cta"
        :cta="$page.markdownPage.cta"
      />

      <g-image
        v-if="$page.markdownPage.solution_image"
        :src="$page.markdownPage.solution_image.src"
      />
    </div>
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
        solution_image
        solution_image_2
        cards{
          id
          title
          image
          button
          link
          order
          content
        }
        featuresMain2{
          id
          title 
          subtitle
          btn 
          link
          content
        }
        logos{
          id
          image
          url
        }
        features2{
          id
          title 
          svg
          content
        }
        productsMain{
          id
          title
          subtitle
          image
        }
        productData{
         id
         title
         content
         img
       }
        cta{
          id
          title
          content
          button
          link
        }
        stats {
          id
          title
          content
          button
          link
        }
       statsDetails {
        id
        image
        content
      }
    }  
  }
</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import Features from "~/components/custom/sections/Features.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import Stats from "~/components/marketing/sections/stats-sections/simple_in_card.vue";
import ShowProductCaseHome from "~/components/marketing/sections/cta-sections/ShowcaseProductsHome.vue";
import StatsDetails from "~/components/marketing/sections/team-sections/grid_with_large_round_images.vue";

export default {
  components: {
    Header,
    Features,
    NewCard,
    logoShowcase,
    CallToAction,
    Stats,
    ShowProductCaseHome,
    StatsDetails,
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