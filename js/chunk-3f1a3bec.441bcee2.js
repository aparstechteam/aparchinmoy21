(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f1a3bec"],{"0c18":function(e,t,s){},"2fef":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-card",{staticClass:"transparent numberbg mx-auto",attrs:{"max-width":"600"}},[s("v-card-title",[s("h2",{staticClass:"mx-auto"},[e._v("Identify Yourself")])]),s("v-card-text",[s("div",{staticClass:"my-2"},[s("v-select",{attrs:{label:"Select Course",items:e.authoptions,outlined:"",dense:""},model:{value:e.course,callback:function(t){e.course=t},expression:"course"}})],1),s("div",{staticClass:"my-2"},[s("p",{staticClass:"text-center kalpurush",staticStyle:{color:"black","font-size":"17px"}},[e._v(" "+e._s("mathhaters"==this.course?"Math Haters":"Apar Chinmoy")+" Admission Course এ টাকা পাঠানোর সময় যে "+e._s("mathhaters"==this.course?"ফোন নম্বর":"ইমেইল")+" ব্যবহার করেছিলে এইখানেও একই "+e._s("mathhaters"==this.course?"ফোন নম্বর":"ইমেইল")+" ব্যবহার করে প্রবেশ করবে। ")])]),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},["aparchinmoy"==e.course?s("v-text-field",{attrs:{type:"email",label:"Email",placeholder:"Email",rules:e.emailRules},model:{value:e.cred,callback:function(t){e.cred=t},expression:"cred"}}):e._e(),"mathhaters"==e.course?s("v-text-field",{attrs:{label:"Mobile No.",placeholder:"Mobile No.",prefix:"+880",rules:[function(e){return!!e||"Phone number is required"},function(e){return/\d{10}/.test(e)&&10==e.length||"Phone number must be valid"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}):e._e(),"aparchinmoy"==e.course?s("v-text-field",{attrs:{type:"password",label:"Group Joining ID",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),s("v-btn",{attrs:{outlined:"",to:"/resetpass",color:"primary"}},[e._v(" Forget Password?")]),e.unknown?s("div",[s("v-text-field",{attrs:{label:"Name",placeholder:"Name",rules:[function(e){return!!e||"Name is required"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),"aparchinmoy"==e.course?s("v-text-field",{attrs:{label:"Mobile No.",placeholder:"Mobile No.",prefix:"+880",rules:[function(e){return!!e||"Phone number is required"},function(e){return/\d{10}/.test(e)||"Phone number must be valid"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}):e._e(),s("v-text-field",{attrs:{label:"College Name",placeholder:"College Name",rules:[function(e){return!!e||"College name is required"}]},model:{value:e.school,callback:function(t){e.school=t},expression:"school"}}),s("v-select",{attrs:{items:["Male","Female"],label:"Gender",rules:[function(e){return!!e||"Gender is required"}]},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}}),s("v-select",{attrs:{items:["Dhaka","Mymensingh","Chattagram","Rajshahi","Barishal","Syhlet","Rangpur","Khulna"],label:"Division",rules:[function(e){return!!e||"Division is required"}]},model:{value:e.division,callback:function(t){e.division=t},expression:"division"}})],1):e._e(),this.$store.state.error?s("v-sheet",{staticClass:"pa-3",attrs:{color:"success",dark:""}},[e._v(e._s(this.$store.state.error))]):e._e()],1),e.message?s("v-alert",{staticClass:"error",attrs:{dark:""}},[e._v(" "+e._s(e.message)+" ")]):e._e()],1),s("v-card-actions",[e.unknown?s("v-btn",{staticClass:"primary ma-auto",attrs:{tile:"",large:"",loading:e.loading},on:{click:e.submitInformation}},[e._v("Submit")]):s("v-btn",{staticClass:"primary ma-auto",attrs:{tile:"",large:"",loading:e.loading},on:{click:e.checkPhoneNumber}},[e._v("Submit")])],1)],1)],1)},i=[],r=(s("d3b7"),s("b0c0"),"https://script.google.com/macros/s/AKfycbwv180iqw6TozOj1s5HLslw3W6uzxJzz-TDgnA_zgiJGx8E9nftP3eLzvK2NKrAmu_5wg/exec"),n={data:function(){return{authoptions:[{text:"Apar Chinmoy Physics Course",value:"aparchinmoy"},{text:"Math Haters Math Course",value:"mathhaters"}],course:"aparchinmoy",valid:!0,loading:!1,phone:"",name:"",cred:"",gender:"",school:"",division:"",password:"",unknown:!1,message:"",emailRules:[function(e){return/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i.test(e)||"Email must be valid"}]}},methods:{checkPhoneNumber:function(){var e=this;this.$refs.form.validate()&&(this.loading=!this.loading,"mathhaters"==this.course?fetch("https://script.google.com/macros/s/AKfycbxkUJ0ib6MbkwYUnnOEJgmiKQknB8zauTrrQQuA89o1mZP7iuoJkj_fdlzlnHzmRuHs/exec?phone="+this.phone).then((function(e){return e.json()})).then((function(t){var s=e.phone.substr(e.phone.length-10)+"@ac.com";"exists"==t.message?fetch(r+"?phone=".concat(e.phone.substr(e.phone.length-10),"&check=phone")).then((function(e){return e.json()})).then((function(t){e.loading=!e.loading,"exists"==t.message?(localStorage.setItem("acuser",s),e.$router.push("/")):e.unknown=!e.unknown})):(e.loading=!e.loading,e.message="Doesn't exists.")})):fetch(r+"?email=".concat(this.cred,"&check=email")).then((function(e){return e.json()})).then((function(t){"exists"==t.message?e.login():(e.loading=!e.loading,e.unknown=!e.unknown)})))},submitInformation:function(){var e=this,t=localStorage.getItem("acuser");if(this.$refs.form.validate()&&!t){this.loading=!this.loading;var s=this.cred?this.cred:this.phone.substr(this.phone.length-10)+"@ac.com";fetch(r,{method:"POST",cache:"no-cache",redirect:"follow",body:JSON.stringify([s,this.name,this.school,this.phone.substr(this.phone.length-10),this.gender,this.division])}).then((function(e){return e.json()})).then((function(){"mathhaters"==e.course?(localStorage.setItem("acuser",s),e.$router.push("/")):e.login(),e.loading=!e.loading}))}},login:function(){if(/[\d]{11}/g.test(this.cred)&&this.password){this.$store.commit("SET_ERROR","");var e={cred:this.cred+"@asg.com",password:this.password};this.$store.dispatch("userLogin",e)}else if(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(this.cred)&&this.password){this.$store.commit("SET_ERROR","");var t={cred:this.cred,password:this.password};this.$store.dispatch("userLogin",t),this.loading=!this.loading}else this.$store.commit("SET_ERROR","Please provide valid credential.")}}},a=n,l=(s("4934"),s("2877")),c=s("6544"),h=s.n(c),u=s("5530"),d=s("ade3"),m=(s("caad"),s("0c18"),s("10d2")),p=s("afdd"),f=s("9d26"),v=s("f2e7"),g=s("7560"),b=s("2b0e"),_=b["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),x=s("58df"),C=s("d9bd"),y=Object(x["a"])(m["a"],v["a"],_).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(d["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(p["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(f["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(f["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(u["a"])(Object(u["a"])({},m["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||g["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(C["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}}),k=s("8336"),w=s("b0af"),$=s("99d9"),S=s("a523"),B=s("4bd4"),E=s("b974"),A=s("8dd9"),I=s("8654"),O=Object(l["a"])(a,o,i,!1,null,"79a5d32d",null);t["default"]=O.exports;h()(O,{VAlert:y,VBtn:k["a"],VCard:w["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VContainer:S["a"],VForm:B["a"],VSelect:E["a"],VSheet:A["a"],VTextField:I["a"]})},4934:function(e,t,s){"use strict";s("e5f0")},afdd:function(e,t,s){"use strict";var o=s("8336");t["a"]=o["a"]},e5f0:function(e,t,s){}}]);
//# sourceMappingURL=chunk-3f1a3bec.441bcee2.js.map