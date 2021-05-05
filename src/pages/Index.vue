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

      <Stats
        v-if="$page.markdownPage.stats"
        :section="$page.markdownPage.stats"
      />

      <g-image
        v-if="$page.markdownPage.solution_image_2"
        :src="$page.markdownPage.solution_image_2.src"
      />

      <div class="text-center my-10" v-if="$page.markdownPage.stats.button">
        <a
          :href="$page.markdownPage.stats.link"
          class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
          >{{ $page.markdownPage.stats.button }}</a
        >
      </div>

      <NewCard
        v-for="card in $page.markdownPage.cards2"
        :key="card.id"
        :card="card"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />

      <Features
        :main="$page.markdownPage.featuresMain"
        :features="$page.markdownPage.features"
      />

      <!-- <SolutionsHeader
        v-if="$page.markdownPage.headerSolution"
        :header="$page.markdownPage.headerSolution"
      /> -->

      <NewCard
        v-for="card in $page.markdownPage.cards"
        :key="card.id"
        :card="card"
      />
    </div>

    <logoShowcase
      v-if="$page.markdownPage.logos.length > 0"
      :logos="$page.markdownPage.logos"
    />

    <InTheNews
      v-if="$page.markdownPage.inTheNews"
      :news="$page.markdownPage.inTheNews"
    />

    <NewsLetter
      v-if="$page.markdownPage.NewsLetter"
      :NewsLetter="$page.markdownPage.NewsLetter"
    />

    <SignUp
      :signup="$page.markdownPage.signup"
      v-if="$page.markdownPage.signup"
    />

    <CallToAction v-if="$page.markdownPage.cta" :cta="$page.markdownPage.cta" />

    <g-image
      v-if="$page.markdownPage.solution_image"
      :src="$page.markdownPage.solution_image.src"
    />

    <!-- <Getintouch :contacts="contacts"/> -->
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
        cards2{
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
        headerSolution{
         subtitle
         content
       }
       featuresMain{
          id
          title 
          btn 
          link
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
        features{
          id
          title 
          svg
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
        }
        productData{
         id
         title
         content
         img
       }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
        cta{
          id
          title
          content
          button
          link
        }
        NewsLetter{
          id
          title
          content
          button
          link
        }
        inTheNews {
          id
          content
          partners {
            path
            logo
          }
        }
        stats {
          id
          title
          content
          button
          link
        }
    }  
  }

</page-query>

<script>
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import Features from "~/components/custom/sections/Features.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Getintouch from "~/components/custom/Navbar/Getintouch.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import NewsLetter from "~/components/custom/sections/NewsLetter.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import Stats from "~/components/marketing/sections/stats-sections/simple_in_card.vue";
import ShowProductCaseHome from "~/components/marketing/sections/cta-sections/ShowcaseProductsHome.vue";

export default {
  components: {
    SolutionsHeader,
    Header,
    Features,
    NewCard,
    Getintouch,
    logoShowcase,
    SignUp,
    CallToAction,
    NewsLetter,
    InTheNews,
    ShowcaseProducts,
    Stats,
    ShowProductCaseHome,
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
/* h2 {
  padding-bottom: 8rem;
} */
</style> >
