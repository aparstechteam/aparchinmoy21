(function(e){function t(t){for(var n,r,i=t[0],o=t[1],u=t[2],l=0,h=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s={app:0},c=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f38a2e38","chunk-0e38ab4a":"3fed5647","chunk-95560b58":"da5fcc92","chunk-a75ea5e6":"2790c1c7","chunk-b2188174":"514ff846"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-0e38ab4a":1,"chunk-95560b58":1,"chunk-a75ea5e6":1,"chunk-b2188174":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-0e38ab4a":"8bb7a2a7","chunk-95560b58":"9302fc95","chunk-a75ea5e6":"2ff22100","chunk-b2188174":"60f0a7de"}[e]+".css",s=o.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){u=h[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],d.parentNode.removeChild(d),a(c)},d.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",h.name="ChunkLoadError",h.type=n,h.request=r,a[1](h)}s[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/aparchinmoy21/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0343":function(e,t,a){"use strict";a("d50a")},"150b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",{staticClass:"apargradient"},[n("v-card",{staticClass:"mt-2 transparent",attrs:{flat:""}},[n("v-card-title",[n("div",{staticClass:"ma-auto"},[n("img",{attrs:{src:a("9b19"),height:"80px",alt:"logo"}})])]),"Auth"!==this.$route.name?n("div",{staticClass:"text-center mb-2"},[n("v-btn",{staticClass:"success mx-2",attrs:{to:"/",tile:"",large:""}},[e._v(" Exams ")]),n("v-btn",{staticClass:"success",attrs:{tile:"",large:""},on:{click:function(t){e.dialog=!e.dialog}}},[e._v(" QnA ")])],1):e._e()],1),n("router-view"),n("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("h2",[e._v("Q&A")]),n("v-spacer"),n("v-btn",{staticClass:"blue darken-2",attrs:{dark:""},on:{click:function(t){e.dialog=!e.dialog}}},[e._v("× close")])],1),n("QnA",{on:{closeDialog:function(t){e.dialog=!e.dialog}}})],1)],1)],1)],1)},s=[],c=(a("ac1f"),a("5319"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{label:"Subject",items:e.subjects,rules:e.requiredRules,outlined:"",dense:""},on:{change:e.getChapters},model:{value:e.question.subject,callback:function(t){e.$set(e.question,"subject",t)},expression:"question.subject"}})],1),"অন্যান্য"!=e.question.subject?a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{label:"Chapters",items:e.chapters.concat(["Others"]),rules:e.requiredRules,outlined:"",dense:""},model:{value:e.question.chapter,callback:function(t){e.$set(e.question,"chapter",t)},expression:"question.chapter"}})],1):e._e()],1),a("v-file-input",{attrs:{multiple:"",outlined:"",dense:"",label:"Picture",loading:e.loading},on:{change:e.uploadImage}}),e.question.images.length>0?a("v-row",e._l(e.question.images,(function(t,n){return a("v-col",{key:n,staticClass:"imageContainer",attrs:{cols:"6",md:"3"}},[a("v-avatar",{staticClass:"mb-5",attrs:{tile:"",size:"180"}},[a("img",{attrs:{src:t}}),a("v-btn",{staticClass:"error delete__button",attrs:{fab:"",tile:"",dark:"",small:"",text:""},on:{click:function(a){return e.deleteImage(t)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)],1)})),1):e._e(),a("v-textarea",{attrs:{rules:e.requiredRules,outlined:"",label:"Your question"},model:{value:e.question.text,callback:function(t){e.$set(e.question,"text",t)},expression:"question.text"}})],1),a("div",{staticClass:"text-center"},[a("v-btn",{staticClass:"success",attrs:{loading:e.loading,large:"",rounded:""},on:{click:e.submitQuestion}},[e._v("Submit Your Question")])],1)],1)],1)}),i=[],o=(a("159b"),a("a434"),a("d3b7"),a("d81d"),[{subject:"Physics 1st Paper",chapter:"Chapter 1: ভৌতজগত ও পরিমাপ(Physical World & Measurement) "},{subject:"Physics 1st Paper",chapter:"Chapter 2: ভেক্টর(Vector)"},{subject:"Physics 1st Paper",chapter:"Chapter 3: গতিবিদ্যা(Dynamics)"},{subject:"Physics 1st Paper",chapter:"Chapter 4: নিউটনীয় বলবিদ্যা(Newtonian Mechanics)"},{subject:"Physics 1st Paper",chapter:"Chapter 5: কাজ-শক্তি-ক্ষমতা(Work-Energy-Power)"},{subject:"Physics 1st Paper",chapter:"Chapter 6: মহাকর্ষ ও অভিকর্ষ(Gravity)"},{subject:"Physics 1st Paper",chapter:"Chapter 7: পদার্থের গাঠনিক ধর্ম(Material's Structural Property)"},{subject:"Physics 1st Paper",chapter:"Chapter 8: পর্যাবৃত্ত গতি(Periodic Motion)"},{subject:"Physics 1st Paper",chapter:"Chapter 9: তরঙ্গ(Wave)"},{subject:"Physics 1st Paper",chapter:"Chapter 10: আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব(Ideal Gas & Gas Kinematics)"},{subject:"Physics 2nd Paper",chapter:"Chapter 1: তাপগতিবিদ্যা(Thermodynamics)"},{subject:"Physics 2nd Paper",chapter:"Chapter 2: স্থির তড়িৎ(Static Electricity)"},{subject:"Physics 2nd Paper",chapter:"Chapter 3: চলতড়িৎ(Current Electricity)"},{subject:"Physics 2nd Paper",chapter:"Chapter 4: তড়িৎ প্রবাহের চুম্বকক্রিয়া(Magnetic Effects of Electric Current)"},{subject:"Physics 2nd Paper",chapter:"Chapter 5: তাড়িত-চৌম্বক আবেশ(Electro-Magnetic Induction)"},{subject:"Physics 2nd Paper",chapter:"Chapter 6: জ্যামিতিক আলোকবিজ্ঞান(Geometrical Optics)"},{subject:"Physics 2nd Paper",chapter:"Chapter 7: ভৌত আলোকবিজ্ঞান(Physical Optics)"},{subject:"Physics 2nd Paper",chapter:"Chapter 8: আধুনিক পদার্থবিজ্ঞান(Modern Physics)"},{subject:"Physics 2nd Paper",chapter:"Chapter 9: পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান(Atomic Model & Nuclear Physics)"},{subject:"Physics 2nd Paper",chapter:"Chapter 10: অর্ধ-পরিবাহী ও ইলেকট্রনিক্স(Semi-conductor & Electronics)"},{subject:"Physics 2nd Paper",chapter:"Chapter 11: জ্যোতির্বিজ্ঞান(Astronomy)"},{subject:"Others",chapter:""}]),u={data:function(){return{question:{subject:"",chapter:"",text:"",images:[],time:(new Date).toLocaleString()},allsubjects:[],subjects:[],chapters:[],subject:"",chapter:"",questionData:{},loading:!1,valid:!0,requiredRules:[function(e){return!!e||"This field is required"}]}},methods:{uploadImage:function(e){var t=this;e.forEach((function(e){var a=new FileReader;a.onloadend=function(){t.question.images.push(a.result)},a.readAsDataURL(e)}))},deleteImage:function(e){this.question.images.splice(e,1)},submitQuestion:function(){var e=this;if(this.$refs.form.validate()){this.loading=!this.loading;var t=this.question,a=t.subject,n=t.chapter,r=t.text,s=t.images,c=t.time;this.questionData={subject:a,images:s,question:[c,a,n,r]};var i="https://script.google.com/macros/s/AKfycbySJmTvP5rMSbFa0NknlJ9NgXKn4ehNsU3ddISUJnMFoYsxKiIHbr-Ty74ec0s3mqVS/exec";fetch(i,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(this.questionData)}).then((function(){e.loading=!e.loading,e.$swal({icon:"success",title:"Successfully submitted"}).then((function(){e.$emit("closeDialog"),e.question={subject:"",chapter:"",text:"",images:[],time:(new Date).toLocaleString()},e.subject="",e.chapter="",e.valid=!0}))})).catch((function(e){return console.log(e)}))}},getSubjects:function(){this.question.chapter="",this.allsubjects=o,this.subjects=this._.union(this.allsubjects.map((function(e){return e.subject})))},getChapters:function(){var e=this;this.chapters=[],this.allsubjects.forEach((function(t){t.subject===e.question.subject&&e.chapters.push(t.chapter)}))}},created:function(){this.getSubjects()}},l=u,h=(a("7bee"),a("2877")),d=a("6544"),p=a.n(d),f=a("8212"),b=a("8336"),m=a("99d9"),g=a("62ad"),v=a("a523"),y=a("23a7"),P=a("4bd4"),j=a("132d"),C=a("0fd9"),S=a("b974"),k=a("a844"),E=Object(h["a"])(l,c,i,!1,null,"0b0305ea",null),_=E.exports;p()(E,{VAvatar:f["a"],VBtn:b["a"],VCardText:m["b"],VCol:g["a"],VContainer:v["a"],VFileInput:y["a"],VForm:P["a"],VIcon:j["a"],VRow:C["a"],VSelect:S["a"],VTextarea:k["a"]});var q={name:"App",components:{QnA:_},data:function(){return{dialog:!1}},methods:{navigateTocurrentPath:function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),this.$router.replace(e))}},created:function(){this.navigateTocurrentPath()}},x=q,A=(a("0343"),a("7496")),w=a("b0af"),T=a("169a"),I=a("f6c4"),O=a("2fa4"),V=Object(h["a"])(x,r,s,!1,null,"c2db7842",null),D=V.exports;p()(V,{VApp:A["a"],VBtn:b["a"],VCard:w["a"],VCardTitle:m["c"],VDialog:T["a"],VMain:I["a"],VSpacer:O["a"]});a("3ca3"),a("ddb0");var R=a("8c4f");n["a"].use(R["a"]);var M=[{path:"/login",name:"Auth",component:function(){return a.e("chunk-95560b58").then(a.bind(null,"2fef"))}},{path:"/",name:"Exam",component:function(){return a.e("chunk-b2188174").then(a.bind(null,"a8b6"))},meta:{requiresAuth:!0}},{path:"/exam/:id",name:"ExamQuestion",meta:{requiresAuth:!0},component:function(){return a.e("chunk-0e38ab4a").then(a.bind(null,"3589"))}},{path:"/ranking/:id",name:"Ranking",meta:{requiresAuth:!0},component:function(){return a.e("chunk-a75ea5e6").then(a.bind(null,"a936"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],N=new R["a"]({mode:"history",base:"/aparchinmoy21/",routes:M});N.beforeEach((function(e,t,a){var n=e.matched.some((function(e){return e.meta.requiresAuth})),r=localStorage.getItem("user");n?r?a():a({path:"/login",query:{redirect:e.fullPath}}):a()}));var L=N,G=a("2f62"),$=a("260b"),B=(a("ea7b"),{apiKey:"AIzaSyAhAZchd_I8dbIeSMFBe7szfDYGGmeP-fg",authDomain:"buet-physics-admission.firebaseapp.com",projectId:"buet-physics-admission",storageBucket:"buet-physics-admission.appspot.com",messagingSenderId:"521681181921",appId:"1:521681181921:web:5d3bef777a1126829e2ba0",measurementId:"G-4LYHX5BMSP"}),Q=($["a"].initializeApp(B),$["a"].auth());n["a"].use(G["a"]);var U=new G["a"].Store({state:{user:{roll:null},error:"",loading:!1},mutations:{SET_USER:function(e,t){e.user=t},SET_ERROR:function(e,t){e.error=t},SET_LOADING:function(e,t){e.loading=t},SET_INITIALSTATE:function(e,t){e.initialState=t}},actions:{userLogin:function(e,t){var a=e.commit;a("SET_ERROR",""),a("SET_LOADING",!0),Q.signInWithEmailAndPassword(t.cred,t.password).then((function(){var e=Q.currentUser;a("SET_USER",e),L.push("/"),a("SET_LOADING",!1)})).catch((function(e){a("SET_ERROR",e),a("SET_LOADING",!1)}))},logOut:function(e){var t=e.commit;t("SET_LOADING",!0),Q.signOut().then((function(){L.push("/login")}))}},getters:{loginstatus:function(e){return null!==e.user&&void 0!==e.user},getUser:function(e){return e.user}}}),F=a("f309");n["a"].use(F["a"]);var J,K=new F["a"]({}),z=(a("150b"),a("14ba")),Y=a.n(z),W=a("2ef0"),H=a.n(W),X=a("9955"),Z=a.n(X),ee=a("2ead"),te=a.n(ee),ae=a("3b2f"),ne=a.n(ae),re=(a("be0f"),a("a753"),a("8096"),a("14e1"),a("953d")),se=a.n(re);n["a"].use(Y.a),n["a"].use(te.a),n["a"].config.productionTip=!1,n["a"].use(Z.a,{lodash:H.a}),n["a"].use(ne.a),window.katex=ne.a,n["a"].use(se.a),Q.onAuthStateChanged((function(e){e&&localStorage.setItem("user",e.email),J||(J=new n["a"]({router:L,store:U,vuetify:K,render:function(e){return e(D)}}).$mount("#app"))}))},"7bee":function(e,t,a){"use strict";a("a045")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.c4a6d9ad.svg"},a045:function(e,t,a){},d50a:function(e,t,a){}});
//# sourceMappingURL=app.35a53833.js.map