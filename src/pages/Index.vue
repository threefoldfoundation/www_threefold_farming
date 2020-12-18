<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />
      <Header
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
      />
      <div v-html="$page.markdownPage.content"></div>
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

    <template>
        <ClientOnly>
            <SignUp :signup="$page.markdownPage.signup" />
        </ClientOnly>
      </template>

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
        header_altImg
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
         logos{
          id
          image
        }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
    }  
  }

</page-query>

<script>
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Getintouch from "~/components/custom/Navbar/Getintouch.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";

export default {
  components: {
    SolutionsHeader,
    NewCard,
    Header,
    Getintouch,
    logoShowcase,
    SignUp,
  },
  computed: {
    contacts() {
      return [
        {
          title: "Collaborate",
          mail: "support@example.com",
          phonenumber: "+1 (555) 123-4567",
        },
        {
          title: "Collaborate",
          mail: "support@example.com",
          phonenumber: "+1 (555) 123-4567",
        },
        {
          title: "Collaborate",
          mail: "support@example.com",
          phonenumber: "+1 (555) 123-4567",
        },
      ];
    },
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
