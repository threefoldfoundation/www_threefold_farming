(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/8Du":function(t,e,a){"use strict";a("QWBl"),a("yq1k"),a("FZtP");var s={props:{record:{},showtags:!1,pathPrefix:"",border:{type:Boolean,default:!0}},computed:{path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path},memberships:function(){var t=[],e=this.record.memberships;return e?(e.forEach((function(e){["foundation","tech","cofounders"].includes(e.title)&&t.push(e)})),t):[]}},methods:{displaytags:function(){return this.showtags}}},r=(a("pRwO"),a("KHd+")),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.path}},[a("g-image",{staticClass:"post-card-image",attrs:{src:t.record.image,alt:t.record.title}})],1),a("div",[a("g-link",{attrs:{to:t.path}},[a("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),a("p",{staticClass:"post-card-excerpt text-gray-700"},[t._v(t._s(t.record.excerpt))]),a("section",{staticClass:"flex flex-wrap post-tags container mx-auto relative py-1"},t._l(t.memberships,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),a("div",{staticClass:"w-full post-card-meta pt-2"},[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.record.authors,(function(t){return a("li",{key:t.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),a("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),t.displaytags()?a("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1):t._e()])])],1)],1)}),[],!1,null,"2bba86b4",null);e.a=i.exports},WXMF:function(t,e,a){"use strict";a.r(e);var s={components:{PostListItem:a("/8Du").a},metaInfo:function(){return{title:this.$page.blog.title}}},r=(a("dbBR"),a("KHd+")),i=null,o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden pt-20"},[a("div",{staticClass:"pt-8"},[a("section",{staticClass:"post-header container mx-auto px-0 mb-4 border-b"},[a("h1",{staticClass:"text-5xl font-medium leading-none mt-0"},[t._v("\n          "+t._s(t.$page.blog.title)+"\n        ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-2xl pt-4 pb-10 text-gray-700",domProps:{innerHTML:t._s(t.$page.blog.excerpt)}})]),a("section",{staticClass:"post-author-list mb-10 mx-0"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.$page.blog.authors,(function(t){return a("li",{key:t.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[a("g-image",{staticClass:"h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),a("div",{staticClass:"pl-3 flex flex-col text-xs leading-none uppercase"},[a("p",t._l(t.$page.blog.authors,(function(e,s){return a("span",{key:e.id},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],staticClass:"hover:underline",attrs:{to:e.path}},[t._v(t._s(e.name))]),s<t.$page.blog.authors.length-1?a("span",[t._v(",")]):t._e()],1)})),0),a("p",{staticClass:"text-gray-700"},[a("g-link",{attrs:{to:t.$page.blog.path}},[a("time",{attrs:{datetime:t.$page.blog.datetime}},[t._v(t._s(t.$page.blog.humanTime))])]),t._v("\n               · \n              "),a("g-link",{attrs:{to:t.$page.blog.path}},[a("time",{attrs:{datetime:t.$page.blog.datetime}},[t._v(t._s(t.$page.blog.startDate))])])],1)])])])]),a("section",{staticClass:"post-image mx-auto w-full"},[a("g-image",{attrs:{src:t.$page.blog.image}})],1),a("div",{},[a("section",{staticClass:"post-content container mx-auto relative font-serif text-gray-700"},[a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content-text text-xl",domProps:{innerHTML:t._s(t.$page.blog.content)}})]),a("section",{staticClass:"post-tags container mx-auto relative py-10"},t._l(t.$page.blog.tags,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)])]),a("section",{staticClass:"post-related text-gray-700 pt-10 border-b border-b-gray-900"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4"},[t.$page.previous?a("PostListItem",{attrs:{record:t.$page.previous,border:!1}}):t._e(),t.$page.next?a("PostListItem",{attrs:{record:t.$page.next,border:!1}}):t._e()],1)])])])}),[],!1,null,"ef9d2c58",null);"function"==typeof i&&i(o);e.default=o.exports},dbBR:function(t,e,a){"use strict";a("iJPc")},iJPc:function(t,e,a){},pRwO:function(t,e,a){"use strict";a("u24q")},u24q:function(t,e,a){}}]);