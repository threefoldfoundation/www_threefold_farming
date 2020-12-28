<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$page.markdownPage.link"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />

      <img
      v-if="$page.markdownPage.solution_image_2"
      :src="$page.markdownPage.solution_image_2.src"
      />

      <Features
        :main="$page.markdownPage.featuresMain"
        :features="$page.markdownPage.features"
      />

      <NewCard
        v-for="card in $page.markdownPage.cards"
        :key="card.id"
        :card="card"
      />
    </div>

    <Features
      :main="$page.markdownPage.featuresMain2"
      :features="$page.markdownPage.features2"
    />

    <logoShowcase
      v-if="$page.markdownPage.logos.length > 0"
      :logos="$page.markdownPage.logos"
    />

    <template>
      <ClientOnly>
        <SignUp :signup="$page.markdownPage.signup" v-if="$page.markdownPage.signup" />
      </ClientOnly>
    </template>

    <template>
      <ClientOnly>
        <CallToAction
          v-if="$page.markdownPage.cta"
          :cta="$page.markdownPage.cta"
        />
      </ClientOnly>
    </template>

    <img
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
          excerpt
        }
        header{
         title
         subtitle
         excerpt
         btn1
         link1
         btn2
         link2
       }
       featuresMain{
          id
          title 
          btn 
          link
          excerpt
        }
        featuresMain2{
          id
          title 
          btn 
          link
          excerpt
        }
        logos{
          id
          image
        }
        features{
          id
          title 
          svg
          excerpt
        }
        features2{
          id
          title 
          svg
          excerpt
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
          excerpt
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
  },
  metaInfo() {
    return {
      title: this.$page.markdownPage.title,
    };
  },
};
</script>
<style scoped>
/* h2 {
  padding-bottom: 8rem;
} */
</style> >
