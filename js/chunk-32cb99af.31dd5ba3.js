(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32cb99af"],{"498a":function(t,e,s){"use strict";var a=s("23e7"),o=s("58a8").trim,r=s("c8d2");a({target:"String",proto:!0,forced:r("trim")},{trim:function(){return o(this)}})},"505d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"sidebar"},[s("Sidebar")],1),s("div",{staticClass:"chat-container"},[s("div",{staticClass:"chat-head"},[s("div",{staticClass:"chat-head-header"},[s("div",{staticClass:"chat-head-header-title"},[t._v("上線使用者"),s("span",[t._v("("+t._s(t.roomUser.length)+")")])])]),s("div",{staticClass:"chat-head-users"},t._l(t.roomUser,(function(e){return s("div",{key:e.id,staticClass:"chat-head-user"},[s("img",{staticClass:"chat-head-user-avatar",attrs:{src:t._f("emptyAvatar")(e.avatar),alt:""}}),s("router-link",{staticClass:"chat-head-user-name",attrs:{to:{name:"user-tweets",params:{id:e.id}}}},[t._v(t._s(e.name))]),s("router-link",{staticClass:"chat-head-user-account",attrs:{to:{name:"user-tweets",params:{id:e.id}}}},[t._v("@"+t._s(e.account))])],1)})),0)]),s("div",{staticClass:"chat-body"},[s("PublicRoom")],1)])])},o=[],r=s("5530"),i=s("2f62"),n=s("2708"),c=s("29b2"),d=s("5ea5"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"chat-body-header"},[t._v("公開聊天室")]),a("div",{ref:"messages",staticClass:"chat-body-text"},t._l(t.getPublicMessage,(function(e){return a("div",{key:e.id,staticClass:"chat-body-text-wrapper"},["announce"===e.type?a("div",{staticClass:"chat-body-text-wrapper-announce"},[a("span",{staticClass:"chat-body-text-wrapper-announce-text"},[t._v(t._s(e.message))])]):a("div",[e.UserId===t.getCurrentUser.id?a("div",{staticClass:"chat-body-text-wrapper-user"},[a("div",{staticClass:"chat-body-text-wrapper-user-text"},[t._v(" "+t._s(e.message)+" ")]),a("div",{staticClass:"chat-body-text-wrapper-user-moment"},[t._v(t._s(t._f("fromNow")(e.createdAt)))])]):a("div",{staticClass:"chat-body-text-wrapper-other"},[a("div",{staticClass:"chat-body-text-wrapper-other-head"},[a("img",{staticClass:"chat-body-text-wrapper-other-head-image",attrs:{src:t._f("emptyAvatar")(e.User?e.User.avatar:""),alt:""}}),a("div",{staticClass:"chat-body-text-wrapper-other-head-text"},[t._v(" "+t._s(e.message)+" ")])]),a("div",{staticClass:"chat-body-text-wrapper-other-body"},[a("div",{staticClass:"chat-body-text-wrapper-other-body-name"}),a("div",{staticClass:"chat-body-text-wrapper-other-body-moment"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])])])])])})),0),a("form",{staticClass:"chat-body-foot"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"chat-body-foot-input",attrs:{type:"text",name:"message",id:"message",placeholder:"輸入訊息..."},domProps:{value:t.message},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.sendMessage.apply(null,arguments))},input:function(e){e.target.composing||(t.message=e.target.value)}}}),a("img",{staticClass:"chat-body-foot-image",attrs:{src:s("f34b"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.sendMessage.apply(null,arguments)}}})])])},u=[],A=(s("498a"),{name:"PublicRoom",mixins:[n["b"],n["c"],c["a"]],props:{messages:{type:Array}},data:function(){return{message:""}},created:function(){this.fetchPublicMessage()},updated:function(){this.scrollDown()},computed:Object(r["a"])({},Object(i["c"])(["getCurrentUser","getPublicMessage"])),sockets:{join:function(t){console.log(t),this.$store.dispatch("postMessage",t)},leave:function(t){console.log(t),this.$store.dispatch("postMessage",t)},newMessage:function(t){this.$store.dispatch("postMessage",t)}},methods:{sendMessage:function(){if(this.message.trim()){var t={User:this.getCurrentUser,UserId:this.getCurrentUser.id,roomName:"public",message:this.message,type:"message",createdAt:new Date};this.$socket.emit("sendMessage",t),this.postMessage(t),this.message=""}},scrollDown:function(){this.$refs.messages.scrollTop=this.$refs.messages.scrollHeight}}}),l=A,g=s("2877"),h=Object(g["a"])(l,m,u,!1,null,null,null),p=h.exports,C={name:"PublicChat",mixins:[n["b"],c["a"]],components:{Sidebar:d["a"],PublicRoom:p},data:function(){return{roomName:"public",roomUser:[]}},created:function(){this.joinRoom()},computed:Object(r["a"])({},Object(i["c"])(["getCurrentUser"])),sockets:{publicUser:function(t){this.roomUser=t},offlineUser:function(t){console.log(t)}},methods:{joinRoom:function(){this.$socket.emit("join",{roomName:"public"})},leaveRoom:function(){this.$socket.emit("leave",{roomName:"public"})}},beforeDestroy:function(){this.leaveRoom()}},f=C,w=Object(g["a"])(f,a,o,!1,null,null,null);e["default"]=w.exports},c8d2:function(t,e,s){var a=s("5e77").PROPER,o=s("d039"),r=s("5899"),i="​᠎";t.exports=function(t){return o((function(){return!!r[t]()||i[t]()!==i||a&&r[t].name!==t}))}},f34b:function(t,e){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-32cb99af.31dd5ba3.js.map