(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{443:function(t,s,o){},504:function(t,s,o){"use strict";var a=o(443);o.n(a).a},523:function(t,s,o){"use strict";o.r(s);var a=o(0),n=o(395),e=o(452);a.a.use(e.a);var c={name:"toast-close",components:{YvButton:n.a},methods:{autoClose:function(){this.$toast({message:"自定义关闭时间",autoClose:5,position:"top"})},closeCallback:function(){var t=this;this.$toast({message:"自定义回调函数",closeButton:{text:"关闭",callback:function(){t.$toast({message:"成功关闭",autoClose:1})}},autoClose:3,position:"top"})}}},i=(o(504),o(54)),l=Object(i.a)(c,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"toast-close-con"},[s("yv-button",{on:{click:this.autoClose}},[this._v("定时5s关闭")]),this._v(" "),s("yv-button",{on:{click:this.closeCallback}},[this._v("自定义回调事件")])],1)}),[],!1,null,"f8301610",null);s.default=l.exports}}]);