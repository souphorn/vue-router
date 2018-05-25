(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{240:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),n("p",[t._v("记住"),n("strong",[t._v("参数或查询的改变并不会触发进入/离开的导航守卫")]),t._v("。你可以通过"),n("router-link",{attrs:{to:"../essentials/dynamic-matching.html#响应路由参数的变化"}},[t._v("观察 "),n("code",[t._v("$route")]),t._v(" 对象")]),t._v("来应对这些变化，或使用 "),n("code",[t._v("beforeRouteUpdate")]),t._v(" 的组件内守卫。")],1),t._m(3),t._m(4),t._m(5),t._m(6),n("p",[t._v("每个守卫方法接收三个参数：")]),n("ul",[n("li",[n("p",[t._m(7),t._v(": 即将要进入的目标 "),n("router-link",{attrs:{to:"../../api/route-object.html"}},[t._v("路由对象")])],1)]),t._m(8),n("li",[t._m(9),n("ul",[t._m(10),t._m(11),n("li",[n("p",[t._m(12),t._v(": 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 "),n("code",[t._v("next")]),t._v(" 传递任意位置对象，且允许设置诸如 "),n("code",[t._v("replace: true")]),t._v("、"),n("code",[t._v("name: 'home'")]),t._v(" 之类的选项以及任何用在 "),n("router-link",{attrs:{to:"../../api/router-link.html"}},[n("code",[t._v("router-link")]),t._v(" 的 "),n("code",[t._v("to")]),t._v(" prop")]),t._v(" 或 "),n("router-link",{attrs:{to:"../../api/router-instance.html#方法"}},[n("code",[t._v("router.push")])]),t._v(" 中的选项。")],1)]),n("li",[n("p",[t._m(13),t._v(": (2.4.0+) 如果传入 "),n("code",[t._v("next")]),t._v(" 的参数是一个 "),n("code",[t._v("Error")]),t._v(" 实例，则导航会被终止且该错误会被传递给 "),n("router-link",{attrs:{to:"../../api/router-instance.html#方法"}},[n("code",[t._v("router.onError()")])]),t._v(" 注册过的回调。")],1)])])])]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),n("p",[t._v("这些守卫与全局前置守卫的方法参数是一样的。")]),t._m(24),n("p",[t._v("最后，你可以在路由组件内直接定义以下路由导航守卫：")]),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"导航守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 导航守卫")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("译者注")]),s("p",[this._v("“导航”表示路由正在发生改变。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("正如其名，"),s("code",[this._v("vue-router")]),this._v(" 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局守卫")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以使用 "),s("code",[this._v("router.beforeEach")]),this._v(" 注册一个全局前置守卫：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("beforeEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 "),s("strong",[this._v("等待中")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("strong",[s("code",[this._v("to: Route")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[s("code",[this._v("from: Route")])]),this._v(": 当前导航正要离开的路由")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[s("code",[this._v("next: Function")])]),this._v(": 一定要调用该方法来 "),s("strong",[this._v("resolve")]),this._v(" 这个钩子。执行效果依赖 "),s("code",[this._v("next")]),this._v(" 方法的调用参数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[s("code",[this._v("next()")])]),this._v(": 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 "),s("strong",[this._v("confirmed")]),this._v(" (确认的)。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[s("code",[this._v("next(false)")])]),this._v(": 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 "),s("code",[this._v("from")]),this._v(" 路由对应的地址。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("strong",[s("code",[this._v("next('/')")]),this._v(" 或者 "),s("code",[this._v("next({ path: '/' })")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("strong",[s("code",[this._v("next(error)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("确保要调用 "),s("code",[this._v("next")]),this._v(" 方法，否则钩子就不会被 resolved。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局解析守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局解析守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局解析守卫")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("2.5.0 新增")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 2.5.0+ 你可以用 "),s("code",[this._v("router.beforeResolve")]),this._v(" 注册一个全局守卫。这和 "),s("code",[this._v("router.beforeEach")]),this._v(" 类似，区别是在导航被确认之前，"),s("strong",[this._v("同时在所有组件内守卫和异步路由组件被解析之后")]),this._v("，解析守卫就被调用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局后置钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局后置钩子","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局后置钩子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 "),s("code",[this._v("next")]),this._v(" 函数也不会改变导航本身：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("router"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("afterEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"路由独享的守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由独享的守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 路由独享的守卫")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以在路由配置上直接定义 "),s("code",[this._v("beforeEnter")]),this._v(" 守卫：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/foo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      beforeEnter"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件内的守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件内的守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件内的守卫")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("beforeRouteEnter")])]),s("li",[s("code",[this._v("beforeRouteUpdate")]),this._v(" (2.2 新增)")]),s("li",[s("code",[this._v("beforeRouteLeave")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`...`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 在渲染该组件的对应路由被 confirm 前调用")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 不！能！获取组件实例 `this`")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 因为当守卫执行前，组件实例还没被创建")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 在当前路由改变，但是该组件被复用时调用")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 可以访问组件实例 `this`")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 导航离开该组件的对应路由时调用")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 可以访问组件实例 `this`")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("beforeRouteEnter")]),this._v(" 守卫 "),s("strong",[this._v("不能")]),this._v(" 访问 "),s("code",[this._v("this")]),this._v("，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不过，你可以通过传一个回调给 "),s("code",[this._v("next")]),this._v("来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 通过 `vm` 访问组件实例")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("注意 "),n("code",[t._v("beforeRouteEnter")]),t._v(" 是支持给 "),n("code",[t._v("next")]),t._v(" 传递回调的唯一守卫。对于 "),n("code",[t._v("beforeRouteUpdate")]),t._v(" 和 "),n("code",[t._v("beforeRouteLeave")]),t._v(" 来说，"),n("code",[t._v("this")]),t._v(" 已经可用了，所以"),n("strong",[t._v("不支持")]),t._v("传递回调，因为没有必要了。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// just use `this`")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" to"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n  "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 "),s("code",[this._v("next(false)")]),this._v(" 来取消。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" answer "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("confirm")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Do you really want to leave? you have unsaved changes!'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("next")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"完整的导航解析流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整的导航解析流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 完整的导航解析流程")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("导航被触发。")]),n("li",[t._v("在失活的组件里调用离开守卫。")]),n("li",[t._v("调用全局的 "),n("code",[t._v("beforeEach")]),t._v(" 守卫。")]),n("li",[t._v("在重用的组件里调用 "),n("code",[t._v("beforeRouteUpdate")]),t._v(" 守卫 (2.2+)。")]),n("li",[t._v("在路由配置里调用 "),n("code",[t._v("beforeEnter")]),t._v("。")]),n("li",[t._v("解析异步路由组件。")]),n("li",[t._v("在被激活的组件里调用 "),n("code",[t._v("beforeRouteEnter")]),t._v("。")]),n("li",[t._v("调用全局的 "),n("code",[t._v("beforeResolve")]),t._v(" 守卫 (2.5+)。")]),n("li",[t._v("导航被确认。")]),n("li",[t._v("调用全局的 "),n("code",[t._v("afterEach")]),t._v(" 钩子。")]),n("li",[t._v("触发 DOM 更新。")]),n("li",[t._v("用创建好的实例调用 "),n("code",[t._v("beforeRouteEnter")]),t._v(" 守卫中传给 "),n("code",[t._v("next")]),t._v(" 的回调函数。")])])}],!1,null,null,null);s.default=e.exports}}]);