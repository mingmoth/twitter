(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d338e"],{"5c9c":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"register"},[t("div",{staticClass:"register-logo"}),t("div",{staticClass:"register-title"},[e._v("建立您的帳號")]),t("form",{attrs:{action:""},on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),e.signUp.apply(null,arguments)}}},[t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"account"}},[e._v("帳號")]),t("span",{staticClass:"symbol"},[e._v("@")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",name:"account",id:"account",required:"",autofocus:""},domProps:{value:e.account},on:{input:function(a){a.target.composing||(e.account=a.target.value)}}}),t("div",{staticClass:"register-error"})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"name"}},[e._v("名稱")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),t("div",{staticClass:"register-error"})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("div",{staticClass:"register-error"})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"password"}},[e._v("密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password",required:"",autofocus:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),t("div",{staticClass:"register-error"})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"checkPassword"}},[e._v("密碼確認")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],attrs:{type:"password",name:"checkPassword",id:"checkPassword",required:"",autofocus:""},domProps:{value:e.checkPassword},on:{input:function(a){a.target.composing||(e.checkPassword=a.target.value)}}})]),t("button",{staticClass:"btn-register",attrs:{type:"submit"}},[e._v("註冊")])]),t("div",{staticClass:"register-cancel"},[t("p",[t("router-link",{staticClass:"register-cancel-target",attrs:{to:"/signin"}},[e._v("取消")])],1)])])},r=[],o=t("1da1"),i=(t("96cf"),t("b0c0"),t("eae4")),n=t("7696"),c={name:"SignUp",data:function(){return{name:"",account:"",email:"",password:"",checkPassword:""}},methods:{signUp:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.account&&e.name&&e.email&&e.password&&e.checkPassword){a.next=4;break}return i["a"].fire({title:"請確認所有欄位皆已填寫"}),a.abrupt("return");case 4:if(e.password===e.checkPassword){a.next=7;break}return i["a"].fire({title:"兩次密碼輸入不一致"}),a.abrupt("return");case 7:return a.next=9,n["a"].signUp({name:e.name,account:e.account,email:e.email,password:e.password,checkPassword:e.checkPassword});case 9:if(t=a.sent,s=t.data,"200"===s.status){a.next=13;break}throw new Error(s.messages);case 13:i["b"].fire({title:s.messages}),e.$router.push("/signin"),a.next=21;break;case 17:a.prev=17,a.t0=a["catch"](0),console.log(a.t0),i["a"].fire({title:a.t0.message});case 21:case"end":return a.stop()}}),a,null,[[0,17]])})))()}}},l=c,u=t("2877"),d=Object(u["a"])(l,s,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d338e.1dd0e0f2.js.map