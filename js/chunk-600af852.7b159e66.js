(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-600af852"],{5871:function(t,e,s){},"756d":function(t,e,s){"use strict";s("c278")},"9f95":function(t,e,s){"use strict";s("5871")},a8b6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-card",{staticClass:"transparent",attrs:{flat:""}},[s("v-card-text",[s("v-card",{staticClass:"my-4 text-center partexam"},[s("v-card-text",[s("p",[t._v(" [বিঃদ্রঃ এখানে শুধুমাত্র অপার-চিন্ময় ২১ ব্যাচের এক্সামগুলো দেয়া যাবে এবং এক্সাম রিলেটেড সকল রিসোর্স পাওয়া যাবে। পাশাপাশি QnA সেকশনের মাধ্যমে এখান থেকেই সরাসরি অপার ভাইয়া/চিন্ময় ভাইয়াকে প্রশ্ন করা যাবে। আমাদের সকল ক্লাস এবং লেকচার শীট একসাথে পাবার জন্যে এই বাটনে ক্লিক করোঃ ")]),s("v-btn",{staticClass:"success",attrs:{href:"https://buet-physics.herokuapp.com",target:"_blank",tile:"",large:""}},[t._v("Classes & Lecture Sheets")])],1)],1),s("v-row",t._l(t.exams,(function(e,a){return s("v-col",{key:a,attrs:{cols:"12"}},[s("v-card",{staticClass:"text-center partexam"},[0==a?s("v-card",{staticClass:"transparent mx-auto pt-4 px-3",attrs:{"max-width":"600",flat:""}},[e.start>Date.now()?s("Timer",{attrs:{end:e.start}}):e.end>Date.now()?s("h1",{staticClass:"text-center mx-auto white--text"},[t._v(" Ongoing... ")]):t._e()],1):t._e(),s("v-card-title",[s("h2",{staticClass:"ma-auto balooda"},[t._v(t._s(e.topic))])]),s("v-card-text",[s("h2",[t._v("Starting Time")]),s("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(e.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),s("h2",[t._v("Ending Time")]),s("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(e.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),s("h2",{staticClass:"white--text mt-2"},[t._v(" Per Question marks: 10 "),s("br"),t._v(" Per Question Time: 3 minutes ")])]),s("v-card-actions",[s("div",{staticClass:"mx-auto"},[e.start<Date.now()?s("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:"",to:"/exam/"+e.id}},[t._v("Start Exam")]):s("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 success my-2",attrs:{dark:"",large:"",tile:"",to:"/ranking/"+e.id}},[t._v("Leaderboard")]),e.end<Date.now()?s("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:"",href:e.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):s("v-btn",{staticClass:"success my-2",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1)])],1)],1)})),1),t.exams.length<1?s("div",{staticClass:"mt-10 text-center"},[s("v-progress-circular",{attrs:{size:100,width:10,color:"success my-2",indeterminate:""}})],1):t._e()],1)],1)],1)},n=[],r=(s("d3b7"),s("4e827"),s("d81d"),s("4de4"),s("25f0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer__container"},[s("div",[s("h2",[t._v(t._s(t.days))]),s("p",[t._v("days")])]),s("div",[s("h2",[t._v(t._s(t.hours))]),s("p",[t._v("hours")])]),s("div",[s("h2",[t._v(t._s(t.minute))]),s("p",[t._v("minute")])]),s("div",[s("h2",[t._v(t._s(t.second))]),s("p",[t._v("second")])])])}),i=[],c={name:"timer",props:{end:{required:!0}},data:function(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining:function(){var t=this,e=setInterval((function(){var s=t.end-Date.now();if(s<0)clearInterval(e);else{var a=Math.floor(s/t._days),n=Math.floor(s%t._days/t._hours),r=Math.floor(s%t._hours/t._minutes),i=Math.floor(s%t._minutes/t._seconds);t.second=i<10?"0"+i:i,t.minute=r<10?"0"+r:r,t.hours=n<10?"0"+n:n,t.days=a<10?"0"+a:a}}))}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},mounted:function(){this.showRemaining()}},o=c,u=(s("756d"),s("2877")),l=Object(u["a"])(o,r,i,!1,null,"4467ec98",null),d=l.exports,m={components:{Timer:d},data:function(){return{exams:[]}},methods:{getRoutineInfo:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbxHQvpCJacrv42u8RzaknFKc58rIQldmeY3zUB2EU4eOao0mUVk7ErwPN10r_MJREg4/exec").then((function(t){return t.json()})).then((function(e){t.exams=e.exams.filter((function(t){return t.start})).map((function(t){return{id:t.id.toString(),topic:t.topic,question:t.question,start:new Date(t.start).getTime(),end:new Date(t.end).getTime(),solve_sheet:t.solve_sheet}})).sort((function(t,e){return e.start-t.start}))}))},endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},upcomingalert:function(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})}},created:function(){this.getRoutineInfo()}},v=m,h=(s("9f95"),s("6544")),_=s.n(h),f=s("8336"),p=s("b0af"),g=s("99d9"),x=s("62ad"),C=s("a523"),w=s("490a"),b=s("0fd9"),k=Object(u["a"])(v,a,n,!1,null,"28f7fb64",null);e["default"]=k.exports;_()(k,{VBtn:f["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:x["a"],VContainer:C["a"],VProgressCircular:w["a"],VRow:b["a"]})},c278:function(t,e,s){}}]);
//# sourceMappingURL=chunk-600af852.7b159e66.js.map