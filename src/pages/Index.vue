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
    </div>

    <SolutionsHeader
      v-if="$page.markdownPage.header"
      :header="$page.markdownPage.header"
    />
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <g-image
        v-if="$page.markdownPage.solution_image"
        :src="$page.markdownPage.solution_image.src"
      />

      <NewCard
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.cards2"
        :cards="$page.markdownPage.cards2"
        reverseCard="true"
      />

      <g-image
        class="w-1/2 mx-auto mt-10"
        v-if="$page.markdownPage.solution_image3"
        :src="$page.markdownPage.solution_image3.src"
      />
    </div>

    <SolutionsHeader
      v-if="$page.markdownPage.header2"
      :header="$page.markdownPage.header2"
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
        solution_image
        solution_image_2
        solution_image3
        cards{
          id
          title
          image
          button
          link
          order
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
      header{
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
      header2{
        title
        subtitle
        content
        btn1
        link1
        btn2
        link2
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

export default {
  components: {
    Header,
    NewCard,
    ShowProductCaseHome,
    SolutionsHeader,
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