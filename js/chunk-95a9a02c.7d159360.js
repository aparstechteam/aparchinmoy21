(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95a9a02c"],{"2c64":function(t,e,i){},3589:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.unknown||t.loading||t.retake?t._e():i("v-card",{staticClass:"pb-5 transparent examcontainer"},[i("v-card-title",{staticClass:"text-center"},[i("h2",{staticClass:"ma-auto"},[t._v("You Scored: "+t._s(t.result[1]))])]),i("v-card-text",{staticClass:"text-center"},[i("div",{staticClass:"text-center mb-n5"},[this.ended<Date.now()?i("v-btn",{staticClass:"mx-auto success my-2",attrs:{tile:"",large:""},on:{click:function(e){t.solutionv=!t.solutionv}}},[t._v(" "+t._s(t.solutionv?"Hide":"View")+" Solution ")]):t._e()],1),t.solutionv?i("iframe",{attrs:{src:"https://drive.google.com/file/d/"+t.solutionpdf.substr(32,33)+"/preview",height:"700",width:"100%"}}):t._e()]),!t.retake&&t.solution.length>0?i("v-card-actions",{staticClass:"mb-n3"},[i("v-btn",{staticClass:"success mx-auto my-2",attrs:{to:"/ranking/"+this.$route.params.id,large:"",tile:""}},[t._v("View Your Rank")])],1):t._e(),!t.retake&&t.solution.length>0?i("v-card-actions",[i("v-btn",{staticClass:"success mx-auto",attrs:{tile:"",large:""},on:{click:t.startRetake}},[t._v("Test Yourself Again")])],1):t._e(),!t.retake&&t.solution.length>0?i("div",{staticClass:"text-center white--text"},[t._v(" Retake exam score will not be recorded ")]):t._e()],1),t.retake?i("div",[i("div",{staticClass:"py-4 text-center"},[i("h1",{staticClass:"text-white"},[t._v("Exam - "+t._s(this.$route.params.id))])]),t._l(t.solution,(function(e,n){return i("v-card",{key:n,staticClass:"my-3 transparent examcontainerq"},[i("v-card-text",{staticClass:"black--text"},[i("p",{domProps:{innerHTML:t._s(e.question)}}),i("v-radio-group",{model:{value:t.solution[n].selected,callback:function(e){t.$set(t.solution[n],"selected",e)},expression:"solution[i].selected"}},[e.a?i("v-radio",{attrs:{value:e.a},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?i("v-radio",{attrs:{value:e.b},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?i("v-radio",{attrs:{value:e.c},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?i("v-radio",{attrs:{value:e.d},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1)],1)],1)})),i("v-card-actions",[i("v-btn",{staticClass:"success mx-auto my-2",attrs:{large:"",tile:""},on:{click:t.retakeResult}},[t._v("Submit")])],1)],2):t._e(),t.questions.length>0?i("div",[i("div",{staticClass:"py-4 text-center"},[i("h1",{staticClass:"white--text"},[t._v("Exam - "+t._s(this.$route.params.id))])]),t._l(t.questions,(function(e,n){return i("v-card",{key:n,staticClass:"my-3"},[i("v-card-text",{staticClass:"black--text"},[i("p",{domProps:{innerHTML:t._s(e.question)}}),i("v-radio-group",{model:{value:t.questions[n].selected,callback:function(e){t.$set(t.questions[n],"selected",e)},expression:"questions[i].selected"}},[e.a?i("v-radio",{attrs:{value:e.a},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?i("v-radio",{attrs:{value:e.b},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?i("v-radio",{attrs:{value:e.c},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?i("v-radio",{attrs:{value:e.d},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1)],1)],1)})),i("v-card-actions",{staticClass:"mb-5"},[i("v-btn",{staticClass:"success mx-auto my-2",attrs:{large:"",tile:"",loading:t.eload},on:{click:t.submitAns}},[t._v("Submit")])],1)],2):t._e(),t.loading?i("div",{staticClass:"loader"},[i("v-progress-circular",{attrs:{size:80,width:7,color:"error",indeterminate:""}})],1):t._e(),t.show?i("div",{staticClass:"white--text fixed__timer"},[i("div",{staticClass:"primary"},[t._v(t._s(t.minute)+" : "+t._s(t.second))])]):t._e()],1)},s=[],o=i("5530"),a=(i("d3b7"),i("d81d"),i("ac1f"),i("5319"),{data:function(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",ended:null,inttime:109090}},methods:{endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbxHQvpCJacrv42u8RzaknFKc58rIQldmeY3zUB2EU4eOao0mUVk7ErwPN10r_MJREg4/exec?id=".concat(this.$route.params.id)).then((function(t){return t.json()})).then((function(e){console.log(e),t.url=e.exam.question,t.inttime=6e4*e.exam.time,t.end=Date.now()+6e4*e.exam.time,t.ended=new Date(e.exam.end).getTime(),t.solutionpdf=e.exam.solve_sheet;var i=localStorage.getItem("acuser");fetch(t.url+"?type=check&&phone="+i).then((function(t){return t.json()})).then((function(e){"exists"==e.message||t.ended<Date.now()?(t.result=e.result?e.result:"",fetch(t.url+"?type=question").then((function(t){return t.json()})).then((function(e){t.solution=e})),t.loading=!1):(t.unknown=!0,fetch(t.url+"?type=question").then((function(t){return t.json()})).then((function(e){t.questions=e.map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{selected:""})})),t.loading=!1,t.showRemaining(),t.autoSubmit()})))}))}))},startRetake:function(){this.retake=!0,this.showRemaining()},retakeResult:function(){var t=this,e=this.solution.reduce((function(t,e){return e.correct==e.selected&&(t+=10),t}),0);this.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.retake=!1}))},submitAns:function(){var t=this;this.eload=!0;var e=this.questions.reduce((function(t,e){return e.correct==e.selected&&(t+=10),t}),0),i=localStorage.getItem("exam".concat(this.$route.params.id));if(i)this.$router.replace("/ranking/"+this.$route.params.id);else{var n=localStorage.getItem("acuser");fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({type:"mcq",mcq:[n,e]})}).then((function(){localStorage.setItem("exam".concat(t.$route.params.id),"submited"),clearTimeout(t.timing),t.eload=!1,t.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.$router.replace("/ranking/"+t.$route.params.id)}))}))}},autoSubmit:function(){var t=this;this.timing=setTimeout((function(){t.show=!1,console.log("auto"),t.submitAns()}),this.inttime)},showRemaining:function(){var t=this;this.show=!0;var e=setInterval((function(){var i=t.end-Date.now();if(i<0)clearInterval(e);else{var n=Math.floor(i/t._days),s=Math.floor(i%t._days/t._hours),o=Math.floor(i%t._hours/t._minutes),a=Math.floor(i%t._minutes/t._seconds);t.second=a<10?"0"+a:a,t.minute=o<10?"0"+o:o,t.hours=s<10?"0"+s:s,t.days=n<10?"0"+n:n}}),1e3)}},created:function(){this.getQuestionLink()},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours},user:function(){return this.$store.getters.getUser}}}),r=a,l=(i("c45a"),i("2877")),u=i("6544"),c=i.n(u),d=i("8336"),h=i("b0af"),p=i("99d9"),m=i("a523"),f=i("490a"),v=i("15fd"),g=(i("b0c0"),i("2c64"),i("ba87")),b=i("9d26"),_=i("c37a"),y=i("7e2b"),k=i("a9ad"),C=i("4e82"),x=i("5607"),S=i("2b0e"),w=S["a"].extend({name:"rippleable",directives:{ripple:x["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),V=i("7560"),$=(i("25f0"),i("4de4"),i("8547")),I=i("58df");function O(t){t.preventDefault()}var j=Object(I["a"])(_["a"],w,$["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=_["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:O},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:O},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),L=i("80d2"),A=i("d9f7"),R=["title"],T=Object(I["a"])(y["a"],k["a"],w,Object(C["a"])("radioGroup"),V["a"]),D=T.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(o["a"])(Object(o["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return j.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return _["a"].options.computed.computedId.call(this)},hasLabel:_["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return j.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return j.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(g["a"],{on:{click:O},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(L["n"])(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(v["a"])(t,R));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(b["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(o["a"])({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(A["b"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}}),M=(i("a9e3"),i("ec29"),i("3d86"),i("604c")),q=Object(I["a"])($["a"],M["a"],_["a"]),G=q.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(o["a"])(Object(o["a"])({},_["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},_["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=_["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=_["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:M["a"].options.methods.onClick}}),P=Object(l["a"])(r,n,s,!1,null,"81cfa0f8",null);e["default"]=P.exports;c()(P,{VBtn:d["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VContainer:m["a"],VProgressCircular:f["a"],VRadio:D,VRadioGroup:G})},"3d86":function(t,e,i){},c45a:function(t,e,i){"use strict";i("f81c")},ec29:function(t,e,i){},f81c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-95a9a02c.7d159360.js.map