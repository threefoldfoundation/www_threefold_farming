(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/8Du":function(e,t,a){"use strict";a("QWBl"),a("yq1k"),a("FZtP");var s={props:{record:{},showtags:!1,pathPrefix:"",border:{type:Boolean,default:!0}},computed:{path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path},memberships:function(){var e=[],t=this.record.memberships;return t?(t.forEach((function(t){["foundation","tech"].includes(t.title)&&e.push(t)})),e):[]}},methods:{displaytags:function(){return this.showtags}}},r=(a("IltJ"),a("KHd+")),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!e.border}},[a("g-link",{staticClass:"post-card-image-link",attrs:{to:e.path}},[a("g-image",{staticClass:"post-card-image",attrs:{src:e.record.image,alt:e.record.title}})],1),a("div",[a("g-link",{attrs:{to:e.path}},[a("h2",{staticClass:"post-card-title mt-3"},[e._v(e._s(e.record.title||e.record.name))]),a("p",{staticClass:"post-card-excerpt"},[e._v(e._s(e.record.excerpt))]),a("section",{staticClass:"flex flex-wrap post-tags container mx-auto relative py-1"},e._l(e.memberships,(function(t){return a("g-link",{key:t.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2",attrs:{to:t.path}},[e._v(e._s(t.title))])})),1)]),a("div",{staticClass:"w-full post-card-meta pt-2"},[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list m-0"},e._l(e.record.authors,(function(e){return a("li",{key:e.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],attrs:{to:e.path}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:e.image,alt:e.name}})],1)],1)})),0)]),a("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[a("p",[a("g-link",{attrs:{to:e.path}},[a("time",{attrs:{datetime:e.record.datetime}},[e._v(e._s(e.record.humanTime))])])],1),a("p",[a("g-link",{attrs:{to:e.path}},[a("time",{attrs:{datetime:e.record.datetime}},[e._v(e._s(e.record.startDate))])]),e._v("\n              "+e._s(e.record.status)+"\n            ")],1)])]),e.displaytags()?a("section",{staticClass:"post-tags container mx-auto relative py-3"},e._l(e.record.tags,(function(t){return a("g-link",{key:t.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:t.path}},[e._v(e._s(t.title))])})),1):e._e()])])],1)],1)}),[],!1,null,"df98027a",null);t.a=i.exports},"8GkX":function(e,t,a){},HgpQ:function(e,t,a){"use strict";a("ma9I"),a("qePV");var s={props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(e,t){return 1==e},isLastPage:function(e,t){return e==t},isCurrentPage:function(e,t){return e==t},nextPage:function(e,t){return"".concat(this.baseUrl,"/").concat(e+1)},previousPage:function(e,t){return 2===e?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(e-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var e=[],t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t+=1)e.push({name:t,isDisabled:t===this.currentPage,link:1===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t)});return e}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"flex pl-0 list-none rounded my-2"},[e.isFirstPage(e.currentPage,e.totalPages)?e._e():a("li",{staticClass:"w-10 relative block text-center py-2 leading-tight bg-white border border-gray-300 text-black ml-0 mr-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:e.previousPage(e.currentPage,e.totalPages),tabindex:"-1"}},[e._v("«")])],1),e._l(e.pages,(function(t){return a("li",{key:t.name,staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black rounded hover:bg-gray-300 ml-1 mr-1",class:[e.isCurrentPage(e.currentPage,t.name)?"border-l-2 border-l-black":""]},[a("g-link",{staticClass:"page-link",attrs:{to:t.link,"aria-label":t.name,"aria-current":t.name}},[e._v(e._s(t.name))])],1)})),e.isLastPage(e.currentPage,e.totalPages)?e._e():a("li",{staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black ml-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:e.nextPage(e.currentPage,e.totalPages),tabindex:"-1"}},[e._v("»")])],1)],2)}),[],!1,null,null,null);t.a=i.exports},IltJ:function(e,t,a){"use strict";a("8GkX")},dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},s={},r={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function n(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,s){var r=n(t[1],arguments);return o(""===a?e[s-1]:a,r)}))}function c(e,t,s){if(!e.length||a.hasOwnProperty(e))return t;for(var r=s.length;r--;){var i=s[r];if(i[0].test(t))return l(t,i)}return t}function u(e,t,a){return function(s){var r=s.toLowerCase();return t.hasOwnProperty(r)?o(s,r):e.hasOwnProperty(r)?o(s,e[r]):c(r,s,a)}}function d(e,t,a,s){return function(s){var r=s.toLowerCase();return!!t.hasOwnProperty(r)||!e.hasOwnProperty(r)&&c(r,r,a)===r}}function m(e,t,a){return(a?t+" ":"")+(1===t?m.singular(e):m.plural(e))}return m.plural=u(r,s,e),m.isPlural=d(r,s,e),m.singular=u(s,r,t),m.isSingular=d(s,r,t),m.addPluralRule=function(t,a){e.push([i(t),a])},m.addSingularRule=function(e,a){t.push([i(e),a])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},m.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),r[e]=t,s[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return m.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return m.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return m.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m}()},xjdt:function(e,t,a){"use strict";a.r(t);a("QWBl"),a("yq1k"),a("sMBO"),a("FZtP");var s=a("/8Du"),r={components:{Pagination:a("HgpQ").a,PostListItem:s.a},computed:{postLabel:function(){return a("dhqo")("post",this.$page.person.belongsTo.totalCount)},memberships:function(){var e=[];this.$page.memberships.edges.forEach((function(t){return e.push(edge.node.title)}));var t=[];return this.$page.person.memberships.forEach((function(a){e.includes(a.title)&&t.push(a)})),t}},metaInfo:function(){return{title:this.$page.person.name}}},i=a("KHd+"),o=null,n=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("div",{staticClass:"container sm:pxi-0 mx-auto min-h-screen overflow-x-hidden pt-24"},[a("div",{staticClass:"flex flex-row flex-wrap items-center mx-4 sm:mx-0"},[a("div",{staticClass:"w-full md:w-1/6 mx-auto sm:mx-0"},[a("g-image",{staticClass:"rounded-full bg-gray-200 w-32 h-32 border-4 border-gray-400 mx-auto md:mx-0",attrs:{src:e.$page.person.image}})],1),a("div",{staticClass:"w-full md:w-5/6 text-center md:text-left md:pl-8 lg:pl-0"},[a("h1",{staticClass:"pb-0 mb-0 mt-0 text-4xl font-medium"},[e._v("\n          "+e._s(e.$page.person.name)+"\n          "),a("a",{staticClass:"text-gray-400 hover:text-black",attrs:{href:e.$page.person.linkedin,target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome",{attrs:{icon:["fab","linkedin"]}})],1)]),e.$page.person.bio?a("p",{staticClass:"text-gray-700 text-xl"},[e._v("\n          "+e._s(e.$page.person.bio)+"\n        ")]):e._e(),a("div",{staticClass:"author-social"}),a("section",[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list m-0 py-2"},e._l(e.$page.person.projects,(function(e){return a("li",{key:e.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.title,expression:"project.title"}],attrs:{to:e.path}},[a("g-image",{staticClass:"w-20 h-20 rounded-full bg-gray-200 border-2 border-white",attrs:{src:e.logo,alt:e.title}})],1)],1)})),0)])])])])])]),a("div",{staticClass:"pt-8 border-b mx-4 sm:-mx-4"}),a("section",{staticClass:"post-content container mx-auto relative font-serif text-gray-700"},[a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content-text text-xl",domProps:{innerHTML:e._s(e.$page.person.content)}})]),a("div",{staticClass:"pt-8 border-b mx-4 sm:-mx-4"}),a("div",{staticClass:"flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4"},e._l(e.$page.person.belongsTo.edges,(function(e){return a("PostListItem",{key:e.node.id,attrs:{record:e.node}})})),1)])])}),[],!1,null,null,null);"function"==typeof o&&o(n);t.default=n.exports}}]);