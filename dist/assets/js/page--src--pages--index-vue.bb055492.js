(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"81oR":function(t,e,a){},MtIX:function(t,e,a){"use strict";var s={props:["title","excerpt","altImg","image"],computed:{img:function(){return this.image?this.image.src?this.image.src:this.image:""}}},i=a("KHd+"),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4"},[a("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[a("div",{staticClass:"lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"},[a("h2",{staticClass:"text-4xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n        "+t._s(t.title)+"\n      ")]),a("p",{staticClass:"mb-8 text-gray-700 leading-relaxed"},[t._v(t._s(t.excerpt))])]),a("div",{staticClass:"lg:w-1/2 px-2"},[a("img",{attrs:{src:t.img,alt:t.altImg}})])])])}),[],!1,null,null,null);e.a=l.exports},ZgZa:function(t,e,a){"use strict";a("81oR")},akyF:function(t,e,a){"use strict";var s={computed:{img:function(){return this.card.image.src?"background-image:url("+this.card.image.src+")":this.card.image}},props:["card"]},i=a("KHd+"),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"lg:py-12 lg:flex lg:justify-center flex flex-col"},[a("div",{staticClass:"bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"},[a("div",{staticClass:"lg:w-1/2"},[a("div",{staticClass:"h-64 bg-cover lg:rounded-lg lg:h-full",style:t.img})]),a("div",{staticClass:"py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2"},[a("h2",{staticClass:"text-3xl text-gray-700 font-bold"},[t._v(t._s(t.card.title))]),a("p",{staticClass:"mt-4 text-gray-700"},[t._v(t._s(t.card.excerpt))]),t.card.link?a("div",{staticClass:"mt-8"},[a("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{href:t.card.link}},[t._v(t._s(t.card.button))])]):t._e()])])])])}),[],!1,null,null,null);e.a=l.exports},bMn3:function(t,e,a){"use strict";var s={props:["contacts"]},i=a("KHd+"),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white"},[a("div",{staticClass:"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8"},[a("div",{staticClass:"grid grid-cols-1 gap-16"},[a("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-8"},[a("h2",{staticClass:"text-4xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n          Get in touch\n        ")]),a("div",{staticClass:"mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2"},t._l(t.contacts,(function(e,s){return a("div",{key:s},[a("h4",{staticClass:"text-lg leading-6 font-medium text-gray-700"},[t._v("\n              "+t._s(e.title)+"\n            ")]),a("div",{staticClass:"mt-2 text-base leading-6 text-gray-500"},[a("div",[t._v("\n                "+t._s(e.mail)+"\n              ")])]),a("div",{staticClass:"mt-1"},[t._v("\n              "+t._s(e.phone)+"\n            ")])])})),0)])])]),a("div",{staticClass:"border-t-2 border-gray-100"})])}),[],!1,null,null,null);e.a=l.exports},fuxi:function(t,e,a){"use strict";var s={props:["logos"],computed:{img:function(){return this.image?this.image.src?this.image.src:this.image:""}}},i=a("KHd+"),l=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"pt-8 px-4 text-center"},[this._m(0),e("div",{staticClass:"flex flex-wrap -mx-8"},this._l(this.logos,(function(t,a){return e("div",{key:a,staticClass:"w-1/2 md:w-1/6 px-8 mb-8"},[e("img",{attrs:{src:t.image.src,alt:""}})])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-2xl mx-auto mb-8"},[e("h2",{staticClass:"text-4xl leading-tight mb-6 font-semibold font-heading"},[this._v("Our Partners")]),e("p",{staticClass:"text-gray-400 leading-relaxed"})])}],!1,null,null,null);e.a=l.exports},iyQ6:function(t,e,a){"use strict";a.r(e);var s=a("akyF"),i=a("MtIX"),l=a("bMn3"),n=a("fuxi"),r=a("phRe"),o={components:{NewCard:s.a,Header:i.a,Getintouch:l.a,logoShowcase:n.a,SignUp:r.a},computed:{contacts:function(){return[{title:"Collaborate",mail:"support@example.com",phonenumber:"+1 (555) 123-4567"},{title:"Collaborate",mail:"support@example.com",phonenumber:"+1 (555) 123-4567"},{title:"Collaborate",mail:"support@example.com",phonenumber:"+1 (555) 123-4567"}]}},metaInfo:function(){return{title:this.$page.markdownPage.title}}},c=(a("ZgZa"),a("KHd+")),g=null,d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden py-5"},[a("Header",{attrs:{title:t.$page.markdownPage.header_title,image:t.$page.markdownPage.header_image,altImg:t.$page.markdownPage.header_altImg,excerpt:t.$page.markdownPage.header_excerpt}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.markdownPage.content)}}),t._l(t.$page.markdownPage.cards,(function(t){return a("NewCard",{key:t.id,attrs:{card:t}})}))],2),t.$page.markdownPage.logos.length>0?a("logoShowcase",{attrs:{logos:t.$page.markdownPage.logos}}):t._e(),[a("ClientOnly",[a("SignUp",{attrs:{signup:t.$page.markdownPage.signup}})],1)]],2)}),[],!1,null,"65fced92",null);"function"==typeof g&&g(d);e.default=d.exports},phRe:function(t,e,a){"use strict";var s={props:["signup"]},i=a("KHd+"),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-8 px-4"},[a("div",{staticClass:"flex flex-wrap items-center -mx-4"},[a("div",{staticClass:"w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left"},[a("h2",{staticClass:"text-xl font-semibold font-heading"},[t._v("\n        "+t._s(t.signup.title)+"\n      ")])]),a("div",{staticClass:"w-full lg:w-2/6 px-4 text-center"},[a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.signup.link1}},[t._v(t._s(t.signup.button1))]),a("g-link",{staticClass:"text-indigo-600 bg-transparent hover:underline",attrs:{to:t.signup.link2}},[t._v(t._s(t.signup.button2))])],1)])])}),[],!1,null,null,null);e.a=l.exports}}]);