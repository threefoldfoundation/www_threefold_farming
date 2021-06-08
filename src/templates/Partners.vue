<template>
  <Layout>
    <TagFilterHeader
      :tags="tags"
      selected="all"
      v-if="$page.tags.edges.length > 1"
    />
    <div class="container mt-8 sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          :showtags="true"
          v-for="partner in $page.entries.edges"
          :key="partner.id"
          :record="partner.node"
          pathPrefix="/partners"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($private: Int){
  entries: allProject (sortBy: "rank", order: ASC, filter: { private: { ne: $private }, category: { contains: ["farming"]}}){
    totalCount
    edges {
      node {
        id
        title
        path
        members {
          id
          name
          image(width:64, height:64, fit:inside)
          path
        },
        rank
        linkedin
        excerpt
        image(width:800)
        timeToRead
        logo
        tags{
          id
          title
          path
        }
      }
    }
  }
    markdownPage(id: "farming") {
        id
        metaImg
  }

  tags: allProjectTag (filter: { title: {in: ["blockchain", "experience", "technology", "farming", "community", "infrastructure", "impact"]}}) {
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
      titleTemplate: "ThreeFold Farming | Partners",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Meet the incredible organizations that make up the ThreeFold Farming ecosystem.",
        },
        {
          key: "og:title",
          property: "og:title",
          content: "ThreeFold Farming | Partners",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            "Meet the incredible organizations that make up the ThreeFold Farming ecosystem.",
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
            "Meet the incredible organizations that make up the ThreeFold Farming ecosystem.",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: "ThreeFold Farming | Partners",
        },
      ],
    };
  },
  computed: {
    tags() {
      var res = [{ title: "All", path: "/partners" }];
      this.$page.tags.edges.forEach((edge) =>
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
