(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{425:function(t,n,o){},475:function(t,n,o){"use strict";var e=o(425);o.n(e).a},489:function(t,n,o){"use strict";o.r(n);var e=o(0),c=o(391),a=o(433);e.a.use(a.a);var i={name:"toast-basic",components:{YvButton:c.a},data:function(){return{}},methods:{getRandom:function(t){this.$toast({message:"随机数： ".concat(Math.floor(1e4*Math.random())),position:t})},showHTML:function(){this.$toast({message:'<span style="color: #C0C4CC">这是一段color为#C0C4CC的html</span>',enableHtml:!0,position:"top",autoClose:3})}}},s=(o(475),o(54)),u=Object(s.a)(i,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"toast-basic-con"},[o("yv-button",{on:{click:function(n){return t.getRandom("top")}}},[t._v("上边top")]),t._v(" "),o("yv-button",{on:{click:function(n){return t.getRandom("right")}}},[t._v("右边right")]),t._v(" "),o("yv-button",{on:{click:function(n){return t.getRandom("bottom")}}},[t._v("下边bottom")]),t._v(" "),o("yv-button",{on:{click:function(n){return t.getRandom("left")}}},[t._v("左边left")]),t._v(" "),o("yv-button",{on:{click:function(n){return t.getRandom("middle")}}},[t._v("中间middle")]),t._v(" "),o("yv-button",{on:{click:t.showHTML}},[t._v("显示html")])],1)}),[],!1,null,"0d1cdd6d",null);n.default=u.exports}}]);