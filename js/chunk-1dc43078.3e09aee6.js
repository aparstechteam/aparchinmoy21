(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dc43078"],{a936:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"leaderboard"},[s("v-container",[s("h1",{staticClass:"text-center white--text"},[t._v(" Leaderboard-"+t._s(this.$route.params.id)+" ")]),s("v-card",{staticClass:"ma-auto mt-5 transparent resultcontainer",attrs:{"max-width":"600px"}},[s("v-card-title",[s("v-text-field",{staticClass:"ma-auto",attrs:{label:"Search by Name/College","append-icon":"mdi-magnify"},on:{keyup:t.searchResult},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("v-card-text",[t.allresult.length>0?s("v-list",{staticClass:"transparent"},t._l(t.positionedResult,(function(e,a){return s("v-list-item",{key:a,class:t.getborderStyle(e.position)},[s("v-list-item-avatar",{staticClass:"mb-5"},[s("v-btn",{class:""+t.getStyle(e.position),attrs:{fab:"",small:"",dark:""}},[s("h2",[t._v(t._s(e.position))])])],1),s("v-list-item-content",[s("v-list-item-title",[s("b",[t._v(t._s(e.name))])]),s("v-list-item-subtitle",{staticClass:"black--text"},[t._v(" "+t._s(e.school)+" ")])],1),s("v-list-item-action",[s("button",{staticClass:"totalmarks"},[t._v(t._s(e.score))])])],1)})),1):s("div",{staticClass:"text-center"},[s("v-progress-circular",{staticClass:"ma-auto",attrs:{size:100,color:"primary",indeterminate:""}})],1)],1)],1)],1)],1)},n=[],i=s("5530"),r=(s("d3b7"),s("4e827"),s("d81d"),s("b0c0"),s("4de4"),s("caad"),s("2532"),s("ac1f"),s("841c"),{data:function(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbxHQvpCJacrv42u8RzaknFKc58rIQldmeY3zUB2EU4eOao0mUVk7ErwPN10r_MJREg4/exec?id=".concat(this.$route.params.id)).then((function(t){return t.json()})).then((function(e){fetch(e.exam.question).then((function(t){return t.json()})).then((function(e){var s=e;t.testResults=s.map((function(t){return{name:t.name,school:t.school,score:t.score}})).sort((function(t,e){return e.score-t.score})),t.allresult=t.testResults}))}))},searchResult:function(){var t=this;this.testResults=this.allresult.filter((function(e){if(e.school.toLowerCase().includes(t.search.toLowerCase())||e.name.toLowerCase().includes(t.search.toLowerCase()))return e}))},getStyle:function(t){return 1==t?"success":2==t?"orange darken-2":3==t?"indigo":""},getborderStyle:function(t){return 1==t?"s singleResult mb-2":2==t?"f singleResult mb-2":3==t?"d singleResult mb-2":"singleResult mb-2"}},computed:{positionedResult:function(){return this.testResults.map((function(t,e){return Object(i["a"])(Object(i["a"])({},t),{},{position:e+1})}))}},created:function(){this.modeltestResults(),window.scrollTo(0,0)}}),o=r,c=(s("e292"),s("2877")),l=s("6544"),u=s.n(l),d=s("8336"),m=s("b0af"),h=s("99d9"),f=s("a523"),b=s("8860"),v=s("da13"),p=s("1800"),C=s("8270"),g=s("5d23"),R=s("490a"),w=s("8654"),x=Object(c["a"])(o,a,n,!1,null,"6d288bb2",null);e["default"]=x.exports;u()(x,{VBtn:d["a"],VCard:m["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:f["a"],VList:b["a"],VListItem:v["a"],VListItemAction:p["a"],VListItemAvatar:C["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VProgressCircular:R["a"],VTextField:w["a"]})},e292:function(t,e,s){"use strict";s("fe1b")},fe1b:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1dc43078.3e09aee6.js.map