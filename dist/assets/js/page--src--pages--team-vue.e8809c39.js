(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/8Du":function(t,e,r){"use strict";var s={props:{record:{},showtags:!1,border:{type:Boolean,default:!0}},mounted:function(){function t(t){t.src="https://data.threefold.io/"+t.src;for(var e=0;e<t.srcset.length;e++)t.srcset[e]="https://data.threefold.io/"+t.srcset[e];return t}if(this.record.image.src&&(this.record.image=t(this.record.image),this.record.authors))for(var e=0;e<this.record.authors.length;e++)this.record.authors[e].image=t(this.record.authors[e].image)},methods:{displaytags:function(){return this.showtags}}},a=(r("AAWq"),r("KHd+")),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[r("g-link",{staticClass:"post-card-image-link",attrs:{to:t.record.path}},[r("g-image",{staticClass:"post-card-image",attrs:{src:t.record.image,alt:t.record.title}})],1),r("div",[r("g-link",{attrs:{to:t.record.path}},[r("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),r("p",{staticClass:"post-card-excerpt"},[t._v(t._s(t.record.excerpt))]),r("section",{staticClass:"flex flex-wrap post-tags container mx-auto relative py-1"},t._l(t.record.memberships,(function(e){return r("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),r("div",{staticClass:"w-full post-card-meta pt-2"},[r("div",{staticClass:"avatars"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex justify-between items-center"},[r("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.record.authors,(function(t){return r("li",{key:t.id,staticClass:"author-list-item"},[r("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[r("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),r("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[r("p",[r("g-link",{attrs:{to:t.record.path}},[r("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),r("p",[r("g-link",{attrs:{to:t.record.path}},[r("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),t.displaytags()?r("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return r("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1):t._e()])])],1)],1)}),[],!1,null,"5cbae3d7",null);e.a=i.exports},AAWq:function(t,e,r){"use strict";r("EKu4")},EKu4:function(t,e,r){},dA2O:function(t,e,r){"use strict";r.r(e);var s={components:{PostListItem:r("/8Du").a}},a=r("KHd+"),i=null,o=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden"},[e("div",{staticClass:"flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4"},this._l(this.$page.entries.edges,(function(t){return e("PostListItem",{key:t.id,attrs:{record:t.node}})})),1)])])}),[],!1,null,null,null);"function"==typeof i&&i(o);e.default=o.exports}}]);