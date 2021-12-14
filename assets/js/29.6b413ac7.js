(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{504:function(s,a,e){"use strict";e.r(a);var n=e(65),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/vuepress-plugin-roughviz",target:"_blank"}},[e("img",{staticStyle:{display:"inline",margin:"0"},attrs:{src:"https://img.shields.io/npm/v/vuepress-plugin-roughviz.svg?style=flat-square&logo=npm",alt:"npm"}})]),s._v(" "),e("a",{attrs:{href:"https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/roughviz",target:"_blank"}},[e("img",{staticStyle:{display:"inline",margin:"0"},attrs:{src:"https://img.shields.io/badge/GitHub-vuepress--plugin--roughviz-26A2FF?style=flat-square&logo=github",alt:"github"}})]),s._v(" "),e("a",{attrs:{href:"https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/roughviz/LICENSE",target:"_blank"}},[e("img",{staticStyle:{display:"inline",margin:"0"},attrs:{src:"https://img.shields.io/badge/License-MIT-green?style=flat-square",alt:"license"}})])]),s._v(" "),e("p",[e("code",[s._v("vuepress-plugin-roughviz")]),s._v(" 插件，用于在 VuePress 的 Markdown 中使用手绘样式图表库 "),e("a",{attrs:{href:"https://github.com/jwilber/roughViz",target:"_blank",rel:"noopener noreferrer"}},[s._v("roughViz.js")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-plugin-roughviz\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vuepress-plugin-roughviz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后在 "),e("code",[s._v(".vuepress/config.js")]),s._v(" 中引入这个插件：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuepress-plugin-roughviz'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),e("p",[s._v("roughViz.js 支持以下五种图表类型：")]),s._v(" "),e("ul",[e("li",[s._v("Bar ("),e("code",[s._v("bar")]),s._v(")")]),s._v(" "),e("li",[s._v("Horizontal Bar ("),e("code",[s._v("barh")]),s._v(")")]),s._v(" "),e("li",[s._v("Donut ("),e("code",[s._v("donut")]),s._v(")")]),s._v(" "),e("li",[s._v("Line ("),e("code",[s._v("line")]),s._v(")")]),s._v(" "),e("li",[s._v("Pie ("),e("code",[s._v("pie")]),s._v(")")]),s._v(" "),e("li",[s._v("Scatter ("),e("code",[s._v("scater")]),s._v(")")]),s._v(" "),e("li",[s._v("Stacked Bar ("),e("code",[s._v("stackedbar")]),s._v(")")])]),s._v(" "),e("p",[s._v("因此代码块的 token info 需要为 "),e("code",[s._v("roughviz-{ 你想创建的图表类型 }")]),s._v("。比如想要创建一个 Donut 图表：")]),s._v(" "),e("div",{staticClass:"language-roughviz-donut line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "data": {\n    "labels": ["North", "South", "East", "West"],\n    "values": [10, 5, 8, 3]\n  },\n  "title": "Regions",\n  "colors": ["red", "orange", "blue", "skyblue"],\n  "roughness": 4\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('```roughviz-donut\n{\n  "data": {\n    "labels": ["North", "South", "East", "West"],\n    "values": [10, 5, 8, 3]\n  },\n  "title": "Regions",\n  "colors": ["red", "orange", "blue", "skyblue"],\n  "roughness": 4\n}\n```\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])]),s._v(" "),e("p",[s._v("如果希望加载本地 "),e("code",[s._v("csv")]),s._v(" 文件中的数据，一种可行的方法是把 "),e("code",[s._v("csv")]),s._v(" 文件放在 "),e("code",[s._v(".vuepress/public/")]),s._v(" 文件夹下（假设路径为 "),e("code",[s._v(".vuepress/public/csv/flavors.csv")]),s._v("），然后：")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("Code")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('```roughviz-bar\n{\n  "data": "/csv/flavors.csv",\n  "labels": "flavor",\n  "values": "price"\n}\n```\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("div",{staticClass:"language-roughviz-bar line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "data": "/csv/flavors.csv",\n  "labels": "flavor",\n  "values": "price"\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("更详细的用法可以参考 "),e("a",{attrs:{href:"https://github.com/jwilber/roughViz",target:"_blank",rel:"noopener noreferrer"}},[s._v("roughViz.js 文档")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"开源协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源协议"}},[s._v("#")]),s._v(" 开源协议")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/roughviz/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[s._v("MIT")])])])}),[],!1,null,null,null);a.default=t.exports}}]);