!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[e._t("title",[e._v("\n                    "+e._s(e.title)+"\n                ")]),e._v(" "),n("span",{staticClass:"close",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[e._v("✖")])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("content",[e._v("\n                    "+e._s(e.content)+"\n                ")])],2)])])]):e._e()};o._withStripped=!0;var r=function(e,t,n,o,r,s,i,l){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=a):r&&(a=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(e,t){return a.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:c}}({data:function(){return{visible:!1,title:null,content:null}},props:{startVisible:{type:Boolean,default:!1},closable:{type:Boolean,default:!0}},mounted(){this.startVisible&&this.show()},methods:{close(){0!=this.closable&&(document.documentElement.style.overflow="auto",this.$emit("close"),this.visible=!1)},show(){document.documentElement.style.overflow="hidden",this.$emit("open"),this.visible=!0}}},o,[],!1,null,null,null);r.options.__file="src/scripts/components/Modal.vue";var s=r.exports,i=new Vue({el:"#app",data:{message:"Hello Vue!"},components:{Modal:s},methods:{showModal(){i.$refs.modal.show()}}})}]);