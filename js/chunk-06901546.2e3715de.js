(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06901546"],{8317:function(t,e,a){},a8b6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-text",[a("v-row",t._l(t.exams,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12"}},[a("v-card",{staticClass:"text-center partexam"},[a("v-card-title",[a("h2",{staticClass:"ma-auto balooda"},[t._v(t._s(e.topic))])]),a("v-card-text",[a("h2",[t._v("Starting Time")]),a("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(e.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),a("h2",[t._v("Ending Time")]),a("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(e.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),a("h2",{staticClass:"white--text mt-2"},[t._v(" Per Question marks: 10 "),a("br"),t._v(" Per Question Time: 3 minutes ")])]),a("v-card-actions",[a("div",{staticClass:"mx-auto"},[e.start<Date.now()?a("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:"",to:"/exam/"+e.id}},[t._v("Start Exam")]):a("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),a("v-btn",{staticClass:"mx-2 success my-2",attrs:{dark:"",large:"",tile:"",to:"/ranking/"+e.id}},[t._v("Leaderboard")]),e.end<Date.now()?a("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:"",href:e.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):a("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1)])],1)],1)})),1),t.exams.length<1?a("div",{staticClass:"mt-10 text-center"},[a("v-progress-circular",{attrs:{size:100,width:10,color:"success my-2",indeterminate:""}})],1):t._e()],1)],1)],1)},n=[],i=(a("d3b7"),a("d81d"),a("25f0"),{data:function(){return{exams:[]}},methods:{getRoutineInfo:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbxHQvpCJacrv42u8RzaknFKc58rIQldmeY3zUB2EU4eOao0mUVk7ErwPN10r_MJREg4/exec").then((function(t){return t.json()})).then((function(e){t.exams=e.exams.map((function(t){return{id:t.id.toString(),topic:t.topic,question:t.question,start:new Date(t.start).getTime(),end:new Date(t.end).getTime(),solve_sheet:t.solve_sheet}}))}))},endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},upcomingalert:function(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})}},created:function(){this.getRoutineInfo()}}),r=i,c=(a("d151"),a("2877")),o=a("6544"),l=a.n(o),d=a("8336"),m=a("b0af"),u=a("99d9"),v=a("62ad"),h=a("a523"),f=a("490a"),g=a("0fd9"),_=Object(c["a"])(r,s,n,!1,null,"59ed0e60",null);e["default"]=_.exports;l()(_,{VBtn:d["a"],VCard:m["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCol:v["a"],VContainer:h["a"],VProgressCircular:f["a"],VRow:g["a"]})},d151:function(t,e,a){"use strict";a("8317")}}]);
//# sourceMappingURL=chunk-06901546.2e3715de.js.map