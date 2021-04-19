<template>
  <Layout>
    <TagFilterHeader
      :tags="memberships"
      selected="all"
      v-if="$page.memberships.edges.length > 1"
    />
    <div class="container sm:pxi-0 mx-auto mt-8 overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="person in $page.entries.edges"
          :key="person.id"
          :record="person.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($private: Int){
  entries: allPerson (sortBy: "rank", order: ASC, filter: { private: { ne: $private }, category: { contains: ["farming"]}}){
    totalCount
    edges {
      node {
        path
        content
        excerpt
        name
        rank
        bio
        linkedin
        websites
        countries
        cities
        image(width:800)
        private
        memberships {
          id
          path
          title
        }
      }
    }
  }
    markdownPage(id: "home") {
        id
        metaImg
  }

   memberships: allMembership(filter: {title: {in: ["cofounders", "tech", "foundation", "ambassadors", "matchmakers", "farmers", "aci_members", "partners", "wisdom_council", "technology_council", "grid_guardians"]}}){
     edges{
      node{
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import TagFilterHeader from "~/components/custom/TagFilterHeader.vue";

export default {
  components: {
    PostListItem,
    TagFilterHeader,
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: " ThreeFold Farming | People",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Meet the wide range of passionate and dedicated individuals involved in the ThreeFold movement.",
        },
        {
          key: "og:title",
          property: "og:title",
          content: " ThreeFold Farming | People",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            "Meet the wide range of passionate and dedicated individuals involved in the ThreeFold movement.",
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content:
            "Meet the wide range of passionate and dedicated individuals involved in the ThreeFold movement.",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: " ThreeFold Farming | People",
        },
      ],
    };
  },
  computed: {
    memberships() {
      var res = [{ title: "All", path: "/people" }];
      this.$page.memberships.edges.forEach((edge) =>
        res.push({ title: edge.node.title, path: edge.node.path })
      );
      return res;
    },
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
