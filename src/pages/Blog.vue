<template>
  <Layout>
    <NewsFilterHeader
      @selectedTopic="setTopic"
      @selectedYear="setYear"
      @selectedMonth="setMonth"
      @resetAll="resetAll"
      :topics="topics"
      :years="years"
      :months="months"
    />
    <div
      class="container sm:pxi-0 mx-auto mt-8"
      :style="{ 'min-height': contentHeight + 'px' }"
    >
      <div class="flex flex-wrap news pt-12 mt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="post in blogs.edges"
          :key="post.node.id"
          :record="post.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="baseurl"
          :currentPage="blogs.pageInfo.currentPage"
          :totalPages="blogs.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="blogs.pageInfo.totalPages > 1 && blogs.edges.length >= 10"
        />
      </div>
    </div>
  </Layout>
</template>
<page-query>

query($page: Int){
  entries: allBlog(perPage: 10, page: $page, sortBy: "created", order: DESC, filter: {category: { contains: ["farming"]}}) @paginate{
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        tags{
          id
          title
          path
        }
        excerpt
        category{
          id
          title
        }
        image(width:800)
        path
        humanTime : created(format:"DD MMM YYYY")
        datetime : created
        authors {
          id
          name
          image(width:64, height:64, fit:inside)
          path
        }
      }
    }
  }
    markdownPage(id: "farming") {
        id
        metaImg
  }

   topics:  allBlogTag{
    edges{
      node{
				title        
      }
    }
  }
}

</page-query>
<script>
import PostListItem from "~/components/custom/Cards/PostListItem.vue";
import Pagination from "~/components/custom/Pagination.vue";
import NewsFilterHeader from "~/components/custom/NewsFilterHeader.vue";

export default {
  data() {
    const allMonths = [
      "All Months",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currYear = new Date().getFullYear();
    var years = ["All Years"];
    var r = this.range(2019, currYear);
    r.forEach((year) => years.push(String(year)));

    return {
      selectedTopic: "All Topics",
      selectedYear: "All Years",
      selectedMonth: "All Months",
      months: allMonths,
      years: years,
      listArchive: false,
      archiveButtonText: "Archive",
    };
  },

  metaInfo() {
    return {
      title: "",
      titleTemplate: "ThreeFold Farming | Blog",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            " A collection of posts from the ThreeFold Foundation team about our products, our technology, our ecosystem, our why, and more.",
        },
        {
          key: "og:title",
          property: "og:title",
          content: "ThreeFold Farming | Blog",
        },
        {
          key: "og:description",
          property: "og:description",
          content:
            " A collection of posts from the ThreeFold Foundation team about our products, our technology, our ecosystem, our why, and more.",
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
            " A collection of posts from the ThreeFold Foundation team about our products, our technology, our ecosystem, our why, and more.",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: "ThreeFold Farming | Blog",
        },
      ],
    };
  },
  components: {
    PostListItem,
    Pagination,
    NewsFilterHeader,
  },
  methods: {
    setTopic: function (topic) {
      this.selectedTopic = topic;
    },
    setYear(year) {
      this.selectedYear = year;
    },
    setMonth(month) {
      this.selectedMonth = month;
    },
    resetAll() {
      this.selectedTopic = "All Topics";
      this.selectedYear = "All Years";
      this.selectedMonth = "All Months";
    },
    range(start, end, step) {
      var range = [];
      var typeofStart = typeof start;
      var typeofEnd = typeof end;

      if (step === 0) {
        throw TypeError("Step cannot be zero.");
      }

      if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
      } else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
      }

      typeof step == "undefined" && (step = 1);

      if (end < start) {
        step = -step;
      }

      if (typeofStart == "number") {
        while (step > 0 ? end >= start : end <= start) {
          range.push(start);
          start += step;
        }
      } else if (typeofStart == "string") {
        if (start.length != 1 || end.length != 1) {
          throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
          range.push(String.fromCharCode(start));
          start += step;
        }
      } else {
        throw TypeError("Only string and number types are supported");
      }

      return range;
    },
  },
  computed: {
    topics: function () {
      var res = ["All Topics"];
      this.$page.topics.edges.forEach((edge) => res.push(edge.node.title));
      return res;
    },
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 100;
      }
    },

    blogs() {
      var res = {};
      var old = this.$page.entries;
      res.totalCount = old.totalCount;
      res.pageInfo = old.pageInfo;
      res.edges = [];

      for (var i = 0; i < old.edges.length; i++) {
        var node = old.edges[i].node;

        // Now check topic
        var topics = ["All Topics"];
        node.tags.forEach((tag) => topics.push(tag.title));

        var nodeDate = new Date(node.datetime);
        if (!topics.includes(this.selectedTopic)) continue;

        // Check year
        var years = ["All Years", String(nodeDate.getFullYear())];

        if (!years.includes(this.selectedYear)) continue;

        // Check Month
        var months = ["All Months", this.months[nodeDate.getMonth() + 1]];
        if (!months.includes(this.selectedMonth)) continue;
        res.edges.push({ node: node, id: node.id });
      }
      return res;
    },
    baseurl() {
      return "/blog/";
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
