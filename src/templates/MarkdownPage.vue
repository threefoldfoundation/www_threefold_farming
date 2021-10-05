<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden">
      <Header
        v-if="
          $page.markdownPage.id !== 'get_3node' &&
          $page.markdownPage.id !== 'farming' &&
          $page.markdownPage.header_title &&
          $page.markdownPage.header_title != ''
        "
        :id="$page.markdownPage.id"
        :span="$page.markdownPage.header_span"
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$page.markdownPage.link"
      />

      <Header
        v-if="
          $page.markdownPage.id == 'get_3node' ||
          $page.markdownPage.id == 'farming'
        "
        :id="$page.markdownPage.id"
        :span="$page.markdownPage.header_span"
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$url($page.markdownPage.link)"
      />

      <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
        <!-- <Features
          v-if="$page.markdownPage.features2.length > 0"
          :id="$page.markdownPage.id"
          :main="$page.markdownPage.featuresMain2"
          :features="$page.markdownPage.features2"
        /> -->

        <ShowProductCaseHome
          v-if="
            $page.markdownPage.productData &&
            $page.markdownPage.productData.length > 0 &&
            $page.markdownPage.id !== 'get_3node'
          "
          :id="$page.markdownPage.id"
          :main="$page.markdownPage.productsMain"
          :products="$page.markdownPage.productData"
        />

        <NewCard
          :id="$page.markdownPage.id"
          v-if="$page.markdownPage.cards"
          :cards="$page.markdownPage.cards"
        />

        <StatsDetails
          v-if="
            $page.markdownPage.statsDetails &&
            $page.markdownPage.statsDetails.length > 0
          "
          :partnerships="$page.markdownPage.statsDetails"
        />

        <Comparison
          v-if="
            $page.markdownPage.comparisonSecs &&
            $page.markdownPage.comparisonSecs.length > 0
          "
          :main="$page.markdownPage.comparisonMain"
          :sections="$page.markdownPage.comparisonSecs"
        />

        <ShowcaseProducts
          v-if="
            $page.markdownPage.productData &&
            $page.markdownPage.productData.length > 0
          "
          :id="$page.markdownPage.id"
          :products="$page.markdownPage.productData"
        />

        <g-image
          class="mx-auto mb-20"
          v-if="$page.markdownPage.solution_image5"
          :src="$page.markdownPage.solution_image5.src"
        />

        <logoShowcase
          v-if="$page.markdownPage.logos.length > 0"
          :id="$page.markdownPage.id"
          :main="$page.markdownPage.logosMain"
          :logos="$page.markdownPage.logos"
        />

        <CallToAction
          v-if="$page.markdownPage.cta2"
          :cta="$page.markdownPage.cta2"
        />

        <g-image
          class="mx-auto mb-20"
          v-if="$page.markdownPage.solution_image"
          :src="$page.markdownPage.solution_image.src"
        />

        <g-image
          class="w-1/2 mx-auto mt-10"
          v-if="$page.markdownPage.solution_image3"
          :src="$page.markdownPage.solution_image3.src"
        />
      </div>
      <SolutionsHeader
        v-if="$page.markdownPage.farmingHeader"
        :header="$page.markdownPage.farmingHeader"
      />
      <BrandPanel
        :brand="$page.markdownPage.brandPanel"
        v-if="$page.markdownPage.brandPanel"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />

      <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
        <g-image
          class="mx-auto mt-10"
          v-if="$page.markdownPage.farming_solution_image"
          :src="$page.markdownPage.farming_solution_image.src"
        />
        <Features
          class="lg:mt-10"
          v-if="$page.markdownPage.features.length > 0"
          :main="$page.markdownPage.featuresMain"
          :features="$page.markdownPage.features"
        />
      </div>

      <SolutionsHeader
        v-if="$page.markdownPage.header2"
        :header="$page.markdownPage.header2"
      />

      <Map
        v-if="$page.markdownPage.stats"
        :section="$page.markdownPage.stats"
      />

      <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
        <SolutionsHeader
          class="lg:mt-20"
          v-if="$page.markdownPage.headerSolution4"
          :header="$page.markdownPage.headerSolution4"
        />
        <!-- <NewCard
          :id="$page.markdownPage.id"
          v-if="$page.markdownPage.cards2"
          :cards="$page.markdownPage.cards2"
          reverseCard="true"
        /> -->

        <NewCard
          :id="$page.markdownPage.id"
          v-if="$page.markdownPage.cards && $page.markdownPage.id !== 'farming'"
          :cards="$page.markdownPage.cards"
        />

        <g-image
          class="w-1/2 mx-auto mt-10"
          v-if="$page.markdownPage.farming_solution_image_2"
          :src="$page.markdownPage.farming_solution_image_2.src"
        />
      </div>

      <SolutionsHeader
        v-if="$page.markdownPage.farmingHeader2"
        :header="$page.markdownPage.farmingHeader2"
      />

      <CenteredAccordion
        v-if="$page.markdownPage.faqContent.length > 0"
        :main="$page.markdownPage.faqMain"
        :faqs="$page.markdownPage.faqContent"
      />

      <CallToAction
        class="lg:mt-20"
        v-if="$page.markdownPage.cta"
        :cta="$page.markdownPage.cta"
      />

      <g-image
        v-if="$page.markdownPage.solution_image2"
        :src="$page.markdownPage.solution_image2.src"
      />

      <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
        <g-image
          v-if="$page.markdownPage.solution_image4"
          :src="$page.markdownPage.solution_image4.src"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    markdownPage(id: $id) {
        id
        path
        content
        metaTitle
        metaDesc
        metaImg
        header_excerpt
        header_altImg
        header_title
        header_image
        header_span
        button
        link
        solution_image
        solution_image2
        solution_image3
        solution_image4
        solution_image5
        farming_solution_image
        farming_solution_image_2
        cards{
          id
          title
          image
          button
          link
          order
          content
        }
        header{
          title
          subtitle
          content
          btn1
          link1
          btn2
          link2
          btn3
          link3
       }
        header2{
          title
          subtitle
          content
          btn1
          link1
          btn2
          link2
       }
        headerSolution4{
        subtitle
        content
        btn1
        link1
       }
       brandPanel{
         id
         title
         subtitle
         content
         sourceUrl
         btnTxt
         image
       }
        productData{
         id
         title
         content
         image
         button
         url
       }
        featuresMain{
          id
          title 
         # subtitle
          btn 
          link
          content
        }
        logosMain {
          id
          title
          title2
          span
        }
        logos{
          id
          image
        }
        features{
          id
          title 
          svg
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
        cta2{
          id
          title
          content
          button
          link
          image
        }
        comparisonMain{
          id
          title
          description
          button
          link
        }
        comparisonSecs{
          id
          svg
          title
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
        featuresMain2{
          id
          title 
          subtitle
          btn 
          link
          btn2
          link2
          btn3
          link3
          content
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
          btn1
          link1
          btn2
          link2
          btn3
          link3
        }
        productData{
         id
         title
         content
         image
       }  
        statsDetails {
        id
        image
        content
      }
        farmingHeader{
        title
        subtitle
        content
        btn1
        link1
        btn2
        link2
       }
        farmingHeader2{
        title
        subtitle
        content
        btn1
        link1
        btn2
        link2
       }
       cards2{
        id
        title
        image
        button
        link
        order
        content
      }
      faqMain{
        id
        title
      }
      faqContent{
        id
        question
        content
      }
    }
  }

</page-query>

<script>
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import Features from "~/components/custom/sections/Features.vue";
import Map from "~/components/marketing/sections/cta-sections/StateMap.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import Comparison from "~/components/custom/sections/Comparison.vue";
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";
import ShowProductCaseHome from "~/components/marketing/sections/cta-sections/ShowcaseProductsHome.vue";
import StatsDetails from "~/components/marketing/sections/team-sections/grid_with_large_round_images.vue";
import CenteredAccordion from "~/components/marketing/sections/faq-sections/CenteredAccordion.vue";

export default {
  components: {
    NewCard,
    Header,
    Map,
    SolutionsHeader,
    ShowcaseProducts,
    Features,
    logoShowcase,
    CallToAction,
    Comparison,
    BrandPanel,
    ShowProductCaseHome,
    StatsDetails,
    CenteredAccordion,
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
};
</script>
<style scoped>
/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */

.gridsome-highlight {
  background-color: #fdf6e3;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}
.gridsome-highlight-code-line {
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
}

/**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
.gridsome-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
}

/* Adjust the position of the line numbers */
.gridsome-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}
</style> >
