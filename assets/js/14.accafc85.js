(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{426:function(t,s,o){},476:function(t,s,o){"use strict";var a=o(426);o.n(a).a},490:function(t,s,o){"use strict";o.r(s);var a=o(0),e=o(391),n=o(433);a.a.use(n.a);var c={name:"toast-close",components:{YvButton:e.a},methods:{autoClose:function(){this.$toast({message:"自定义关闭时间",autoClose:5,position:"top"})},closeCallback:function(){var t=this;this.$toast({message:"自定义回调函数",closeButton:{text:"关闭",callback:function(){t.$toast({message:"成功关闭",autoClose:1})}},autoClose:3,position:"top"})}}},i=(o(476),o(54)),l=Object(i.a)(c,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"toast-close-con"},[s("yv-button",{on:{click:this.autoClose}},[this._v("定时5s关闭")]),this._v(" "),s("yv-button",{on:{click:this.closeCallback}},[this._v("自定义回调事件")])],1)}),[],!1,null,"467f92eb",null);s.default=l.exports}}]);