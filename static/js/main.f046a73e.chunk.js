(this["webpackJsonpworkshop-react"]=this["webpackJsonpworkshop-react"]||[]).push([[0],{12:function(n,t,e){},13:function(n,t,e){},15:function(n,t,e){},16:function(n,t,e){"use strict";e.r(t);var c=e(1),i=e.n(c),s=e(7),o=e.n(s),r=(e(12),e(13),e(6)),a=e(4),j=e(0);var u=function(n){var t=n.onAdd,e=Object(c.useState)(""),i=Object(a.a)(e,2),s=i[0],o=i[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",onChange:function(n){o(n.target.value)},value:s}),Object(j.jsx)("button",{onClick:function(){console.log("Add tasks"),t(s),o("")},children:"Add"})]})};e(15);var d=function(n){var t=n.tasks,e=t.filter((function(n){return!n.isDone})).length+" remaining out of "+t.length+" tasks";return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:e})})};var l=function(n){var t=n.task,e=n.onClickTask;return Object(j.jsx)("div",{className:t.isDone?"is-done":"",onClick:function(){e(t)},children:t.name})},b=1;var f=function(){var n=Object(c.useState)([]),t=Object(a.a)(n,2),e=t[0],i=t[1];function s(n){n.isDone=!n.isDone,i(Object(r.a)(e))}var o=e.map((function(n){return Object(j.jsx)("li",{children:Object(j.jsx)(l,{task:n,onClickTask:s})},n.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{onAdd:function(n){if(n){var t={id:b,name:n,isDone:!1};i([].concat(Object(r.a)(e),[t])),b++}}}),Object(j.jsx)(d,{tasks:e}),Object(j.jsx)("ul",{children:o})]})};var O=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(f,{})})},h=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;e(n),c(n),i(n),s(n),o(n)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.f046a73e.chunk.js.map