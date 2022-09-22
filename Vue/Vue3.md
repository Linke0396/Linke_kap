[TOC]

# Vue3

****

*==🔗[Vue.js - v3](https://vuejs.org/)**:** **渐进式 `JavaScript` 框架**==*

<center><img src="images/Vue.png" alt="Vue" style="zoom:110%;" title="Vue" /></center>









## ⭐生命周期

<center><img src="images/lifecycle.vue3.png" alt="Vue3实例生命周期" style="zoom:110%;border: 1.5px solid silver;" title="Vue3实例生命周期" /></center>













### 🔅生命周期钩子

|  生命周期钩子函数   |                    执行时机                    |                   所属阶段                   |
| :-----------------: | :--------------------------------------------: | :------------------------------------------: |
| **`beforeCreate`**  |          ***实例初始化完成之后调用***          | ***<span style=color:red;>初始阶段</span>*** |
|    **`created`**    |    ***实例处理完所有状态相关的选项后调用***    | ***<span style=color:red;>初始阶段</span>*** |
|  **`beforeMount`**  |            ***实例被挂载之前调用***            | ***<span style=color:red;>挂载阶段</span>*** |
|    **`mounted`**    |            ***实例被挂载之后调用***            | ***<span style=color:red;>挂载阶段</span>*** |
| **`beforeUpated`**  |   ***响应式状态变更而更新其 `DOM`之前调用***   | ***<span style=color:red;>更新阶段</span>*** |
|    **`updated`**    | ***响应式状态变更而更新其 `DOM`完成之后调用*** | ***<span style=color:red;>更新阶段</span>*** |
| **`beforeUnmount`** |            ***实例被卸载之前调用***            | ***<span style=color:red;>卸载阶段</span>*** |
|   **`unmounted`**   |            ***实例被卸载之前调用***            | ***<span style=color:red;>卸载阶段</span>*** |





















## 🔧Vue CLI

### 创建项目方式

- ==***基于命令行创建***==

  - ~~~cmd
    vue create 项目名称
    ~~~

- ==***基于可视化面板创建***==

  - ~~~cmd
    vue ui
    ~~~













### 🔷UI创建项目步骤

> ==***<span style=color:red;>UI本质</span>：可视化的面板采集到用户的配置信息后，在后台基于命令行的方式自动初始化项目***==

1. ***创建`Create`***

   + <left><img src="images/vue-ui(1).png" alt="步骤1" style="zoom:120%;border: 1px solid silver;" title="步骤1" /></left>

2. ***详请`Details`***

   + <left><img src="images/vue-ui(2).png" alt="步骤2" style="zoom:45%;border: 3px solid silver;" title="步骤2" /></left>

3. ***预设`Presets`***

   + <left><img src="images/vue-ui(3).png" alt="步骤3" style="zoom:45%;border: 3px solid silver;" title="步骤3" /></left>

4. ***功能`Features`***

   + <left><img src="images/vue-ui(4).png" alt="步骤4" style="zoom:45%;border: 3px solid silver;" title="步骤4" /></left>

5. ***配置`Configuration`***

   + <left><img src="images/vue-ui(5).png" alt="步骤5" style="zoom:45%;border: 3px solid silver;" title="步骤5" /></left>

6. ***保证新预设`Save new preset`***

   + <left><img src="images/vue-ui(6).png" alt="步骤6" style="zoom:50%;border: 3px solid silver;" title="步骤6" /></left>

7. ***创建成功，自动进入<span style=color:red;>项目仪表盘</span>***

   + <left><img src="images/vue-ui(7).png" alt="步骤7" style="zoom:40%;border: 2px solid silver;" title="步骤7" /></left>























## :zap:Vite

==***[Vite](https://cn.vitejs.dev/)：基于原生`ES`模块 提供了丰富的内建功能，速度快模块热更新，下一代前端开发与构建工具***==

<center><img src="images/vite.png" alt="vite" style="zoom:45%;" title="vite" /></center>











### 🔷创建项目步骤

1. 1️⃣***在需要创建项目的目录终端中输入命令***

   + ~~~cmd
     npm init vite-app 项目的名称
     ~~~

2. 2️⃣***需要安装创建 `vite-app` 是否继续***

   + <left><img src="images/vite(1).png" alt="步骤1" style="zoom:90%;" title="步骤1" /></left>

3. 3️⃣***创建项目成功***

   + <left><img src="images/vite(2).png" alt="步骤2" style="zoom:110%;" title="步骤2" /></left>













### main.js

~~~js
// 导入 createApp 函数,用于创建 vue 的单页面应用程序
import { createApp } from 'vue'
// 导入 App 根组件
import App from './App.vue'
// 导入全局样式
import './index.css'

/* 创建 SPA 应用的实例,并将App组件传递给createApp函数
createApp(rootComponent, [rootProps])
	rootComponent : 根组件
	rootProps : 要传递给根组件的 props，可选
*/
const app = createApp(App)

// 将其渲染到mount()指定的挂载点
app.mount('#app')
~~~















## 应用实例

### globalProperties

> ==***用于注册能够被应用内所有组件实例访问到的全局属性的对象***==

~~~js
app.config.globalProperties.$http = 'axios'
~~~













### mount()

> ~~~js
> app.mount(rootContainer)
> ~~~
>
> ​		**`rootContainer`**	：一个实际的 `DOM` 元素或一个 `CSS` 选择器
>
> ==***将应用实例挂载在一个容器元素中***==











### unmount()

> ~~~js
> app.unmount()
> ~~~
>
> ==***卸载一个已挂载的应用实例***==

















## 🔩组件

### 组件的运行过程

<center><img src="images/%E7%BB%84%E4%BB%B6%E7%9A%84%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B.png" alt="组件的运行过程" style="zoom:90%;border: 2px solid silver;" title="组件的运行过程" /></center>















### template

> ==***`<template>` 是 `vue` 提供的容器标签，只起到包裹性质的作用，它不会被渲染为真正的 `DOM` 元素***==
>
> ###### :grey_exclamation:==***`vue3` 中，`<template>` 中支持定义多个根节点***==

~~~vue
<template>
	<h2>Title</h2>
	<div>Content ...</div>
</template>
~~~











### 注册组件

+ ==***局部注册***==
+ ==***全局注册***==











#### 局部注册

~~~js
// 导入组件
import Test from './components/Test.vue'

export default {
    name: 'App',
    components: { // components 节点中注册局部组件
        Test
    }
}
~~~

~~~vue
<template>
	<!-- 使用局部注册的组件 -->
	<Test/>
</template>
~~~

















#### 全局注册

~~~js
/* main.js */
import { createApp } from 'vue'
import App from './App.vue'

// (1)导入组件
import Test from './components/Test.vue'

const app = createApp(App)

// (2)全局注册组件
app.component('ke-test', Test);

app.mount('#app')
~~~

~~~vue
<template>
	<!-- 使用全局注册的组件 -->
	<ke-test/>
</template>
~~~















### name 注册组件名

~~~js
export default {
    name: 'KeTest' // name属性为当前的组件名
}
~~~

~~~js
import Test from './components/Test.vue'

// 使用组件的name 属性注册
app.component(Test.name, Test);
~~~















### emits

> ==***用于声明由组件触发的自定义事件***==

+ ==***数组语法***==

  + ~~~js
    export default {
        emits: ['init'],
        created() {
            this.$emit('init')
        }
    }
    ~~~

+ ==***对象语法***==

  + ~~~js
    ~~~















### 组件上使用 v-model

> ==***同步组件内外的数据***==

+ ==*子组件*==

  + ~~~html
    <button type="button" @click="$emit('update:number',number + 1)">{{ number }}++</button>
    ~~~

  + ~~~js
    export default {
        name: 'Counter',
        props: ['number'],
        emits: ['update:number'] // 格式 update:属性名
    }
    ~~~

+ ==*父组件*==

  + ~~~vue
    <Counter v-model:number='count' />
    ~~~

  + ~~~js
    data() {
        return {
            count: 0
        }
    },
    components: {
        Counter
    }
    ~~~









### 🔄组件之间的数据共享

#### :arrow_down:父向子共享

> ==***父向子共享数据  ：需要使用<span style=color:red;>自定义属性</span>***==

+ ==*父组件*==

  ```html
  <!-- 通过 Prop 向子组件传值 -->
  <Son :msg="message" :user="userinfo"></Son>
  ```

  ```js
  data() {
      return {
          message: "Hello Vue ...",
          userinfo: { username: "linke", age: 19 },
      };
  }
  ```

+ ==*子组件*==

  ```html
  <div>{{ msg }}</div>
  <div>{{ user }}</div>
  ```

  ```js
  export default {
      props: ["msg", "user"],
  };
  ```












#### :arrow_up:子向父共享

> ==***子向父共享数据 ：需要使用<span style=color:red;>自定义事件</span>***==

+ ==*子组件*==

  ~~~html
  <input type="text" v-model="text" @change="changeText"/>
  ~~~

  ~~~js
  emits: ["getText"],
  data() {
      return {
          text: "",
      };
  },
  methods: {
      changeText() {
          this.$emit('getText', this.text);
      },
  }
  ~~~

+ ==*父组件*==

  ~~~vue
  <!-- 传递自定义事件 -->
  <Son @get-text="getText"></Son>
  ~~~

  ~~~js
  data() {
      return {
          textFromSon: "",
      };
  },
  methods: {
      // 自定义事件的处理函数
      getText(val) {
          this.textFromSon = val;
      },
  }
  ~~~

  













#### 🔁父子双向数据同步

> ==***父子双向数据同步：需要使用 `v-model` 指令***==

+ ==*子组件*==

  ~~~html
  <button type="button" @click="add">{{ number }}++</button>
  ~~~

  ~~~js
  name: 'Counter',
  props: ['number'],
  emits: ['update:number'],
  methods: {
      add() {
          this.$emit('update:number', this.number + 1)
      }
  }
  ~~~

+ ==*父组件*==

  ~~~vue
  <!-- 使用子组件 -->
  <Counter v-model:number='count' />
  ~~~

  ~~~js
  data() {
      return {
          count: 0
      }
  },
  components: {
      Counter
  }
  ~~~





















#### :twisted_rightwards_arrows:兄弟组件共享

> ==***兄弟组件共享数据  ：使用 `EventBus` 方案***==

<center><img src="images/EventBus.png" alt="EventBus" style="zoom:110%;border: 2px solid silver;"  title="EventBus" /></center>

+ ==*创建 `eventBus.js` 模块*==

  + ~~~js
    // 1.安装 mitt 包
    /* npm i mitt */
    
    // 2.导入 mitt 包
    import mitt from 'mitt'
    
    // 3.创建并导出 eventBus 实例对象
    export default mitt()
    ~~~

+ ==***在数据<span style=color:red;>发送方</span>，<span style=color:red;>触发自定义事件</span>***==

  + ~~~js
    import bus from "./eventBus.js";
    
    data() {
        return {
            // 定义发送兄弟组件数据
            text: "",
        };
    },
    watch: {
        text(newVal) {
            // bus.emit('事件名称', 要发送的数据)
            bus.emit("textChange", newVal);
        },
    }
    ~~~

+ ==*在数据<span style=color:red;>接收方</span>，<span style=color:red;>注册一个自定义事件</span>*==

  + ~~~js
    import bus from "./eventBus.js";
    
    data() {
        return {
            // 定义变量接收兄弟组件传递的数据
            textFrom: "",
        };
    },
    created() {
        // 定义自定义数据 bus.$on('事件名称', 事件处理函数)
        bus.on("textChange", (val) => {
            this.textFrom = val;
        });
    }
    ~~~



















#### ⏬后代组件共享

>==***后代组件关系数据 ：可以使用 `provide` 和 `inject` 实现后代关系组件之间的数据共享***==

+ ==*父组件*==

  + ~~~js
    data() {
        return {
            count: 0
        }
    },
    provide() { // provide 函数返回的对象中定义需要向子孙组件共享的数据
        return {
    		num: computed(() => this.count), // 使用 computed 函数将数据包装为响应式数据
            msg: 'info ..' // 默认情况下共享的数据不是响应式的
        }
    }
    ~~~

+ ==*子组件*==

  + ~~~js
    /* 在 inject 中声明需要接收的数据
    	(1)num 数据是响应式的，在使用时必须使用 ".value" 获取数据值
    	(2)可配置以下让 computed 函数不再自动解包,不需要 ".value" 以获取 computed 计算后的值
    	    app.config.unwrapInjectedRef = true
    */
    inject: ['num', 'msg'],
    ~~~

    ~~~html
    num={{num.value}},msg={{msg}}
    
    <!-- 渲染结果 -->
    num=0,msg=info ...
    ~~~

















## 💠自定义指令

+ ###### *<span style=color:red;>局部</span>自定义指令*

+ ###### *<span style=color:red;>全局</span>自定义指令*













### 局部自定义指令

>==***在 `directives` 节点之中定义局部自定义指令***==

```js
export default {
    directives: { // 局部自定义指令的节点
        focus: { // 定义名为 focus 的指令,指向配置对象
            mounted: function (el) { // 当被绑定的元素插入到 DOM 中时
                el.focus(); // 聚焦元素
            },
        },
	},
};
```

```vue
<!-- 使用(需要加上 v- 前缀) -->
<input v-focus />
```















### 全局自定义指令

> ~~~js
> app.directive(name, [directive])
> ~~~
>
> ​		**`name`**：全局自定义指令名
>
> ​		**`directive`**：全局自定义指令的配置对象
>
> ==***注册或获取全局指令***==

~~~js
const app = createApp({})

app.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时
    mounted: function (el) {
        el.focus()
    },
});
~~~



















### 钩子函数

==***一个指令定义对象可以提供如下几个钩子函数 <span style=color:red;>(均为可选)</span>***==

:grey_exclamation:==***钩子函数中的 `this` 均指向 `window`***==

+ `created`：只调用一次，指令第一次绑定到元素时调用
+ `beforeMount`：在元素被插入到 `DOM` 前调用
+ `mounted`：被绑定元素插入父节点时调用
+ `beforeUpdate`：所在组件的更新之前调用
+ `updated`：所在组件的更新之后调用
+ `beforeUnmount`：绑定元素的父组件卸载前调用
+ `unmounted`：只调用一次，指令与元素解绑时调用















### 钩子函数参数

==***指令钩子函数会被传入以下参数***==

+ `el`：指令绑定到的元素
+ `binding`：一个对象，包含以下属性
  + `value`：传递给指令的值
  + `oldValue`：之前的值
  + `arg`：传递给指令的参数
  + `modifiers`：一个包含修饰符的对象
  + `instance`：使用该指令的组件实例
  + `dir`：指令的定义对象
+ `vnode`：代表绑定元素的底层















### 函数简写

==***仅仅需要在 `mounted` 和 `updated` 上实现相同的行为***==

~~~js
app.directive('color', (el, binding) => {
    // 这会在 `mounted` 和 `updated` 时都调用
    // ...
});
~~~















## 🚩路由

### 安装

~~~cmd
npm i vue-router@next	# vue3对应版本
~~~













### 基本使用

1. ***创建路由模块 `src/router/index.js`***

   + ~~~js
     /* 导入 createRouter, createWebHashHistory 方法
         createRouter 用于创建路由实例对象
         createWebHashHistory 用于指定路由的工作模式(hash模式)
      */
     import { createRouter, createWebHashHistory } from 'vue-router'
     
     // 导入路由组件
     import Header from '@/components/Header.vue'
     import Main from '@/components/Main.vue'
     import Footer from '@/components/Footer.vue'
     
     // 创建路由对象,并配置路由匹配规则
     const router = createRouter({
         history: createWebHashHistory(), // 指定路由的工作模式
         routes: [ // 定义 "hash地址" 与 "组件" 之间的对应关系
             // path 表示匹配的 hash 地址, component 表示对应的路由组件
             { path: '/header', component: Header },
             { path: '/main', component: Main },
             { path: '/footer', component: Footer }
         ]
     })
     
     // 导出对象
     export default router
     ~~~

2. ***导入并挂载路由模块 `src/main.js`***

   + ~~~js
     import { createApp } from 'vue'
     import App from './App.vue'
     // 导入路由模块
     import router from './router'
     
     const app = createApp(App)
     
     // 挂载路由模块
     app.use(router)
     
     app.mount('#app')
     ~~~

3. ***声明路由链接和占位符***

   + ~~~vue
     <!-- 1.定义路由链接 -->
     <router-link to="/header">header</router-link>
     <router-link to="/main">main</router-link>
     <router-link to="/footer">footer</router-link>
     
     <!-- 2.定义路由占位符 -->
     <router-view></router-view>
     ~~~















### 路由高亮

1. ==***默认高亮 `class` 类***==
2. ==***自定义高亮 `class` 类***==













#### 默认高亮

> ==***被激活的路由链接，默认会应用一个叫做 `router-link-active` 的类名***==
>
> ==***路由链接被精准激活时，默认会应用一个叫做 `router-link-exact-active` 的类名***==

~~~css
/* 
方式(1): 在 index.css 全局样式表中设置全局样式
方式(2): 在当前文件中设置局部样式
*/
.router-link-active {
    color: #42b983;
}

/* 用于精准激活的路由链接(<a>) */
.router-link-exact-active {
    // CSS ...
}
~~~













#### 自定义高亮

> ==***`linkActiveClass` ：用于激活的路由的默类，默认 `router-link-active`***==
>
> ==***`linkExactActiveClass` ：用于精准激活的路由的默认类，默认 `router-link-exact-active`***==

~~~js
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    linkActiveClass: 'router-active', // 方式(1)指定被激活的路由会全局应用该类名
    routes,
})
~~~

~~~vue
<!-- 通过路由链接的 active-class 属性局部应用类名 -->
<router-link active-class="footer" to="/footer">footer</router-link>
~~~















### :stop_sign:导航守卫

~~~js
const router = createRouter({ ... })

// 注册一个全局前置守卫
router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    return false

    // 返回 一个路由字符串
    /* return to.path === '/header' ? next() : '/header' */

    // 返回 一个路由对象
    /* return to.path === '/main' ? next() : { path: '/main' } */
    
    // 如果什么都没有 undefined 或返回 true，则导航是有效的
})
~~~













#### 可选的第三个参数 next

~~~js
router.beforeEach((to, from, next) => {
    next() // 导航放行
    // 其他参考 vue2 中导航守卫
}
~~~

















## Composition API

==***组合式 `API`***==











### setup()

> ***`setup()` 钩子是在组件中使用组合式 `API` 的入口***

























## :snowflake:Vuex

==***`Vuex` 是一个专为 `Vue` 应用程序开发的<span style=color:red;>状态管理模式 + 库</span>***==











### 安装

~~~cmd
npm i vuex@3 	# vue2对应版本
npm i vuex		# vue3对应版本
~~~













### 🔅工作原理

<center><img src="images/vuex%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.png" alt="vuex工作原理" style="zoom:110%;border: 2px solid silver" title="vuex的工作原理" /></center>













### 基本使用

+ ###### ***v2***

  ```js
  /* src/store/index.js */
  
  import Vue from 'vue'
  // 引入 vuex
  import Vuex from 'vuex'
  
  // 安装
  Vue.use(Vuex)
  
  // 创建一个 store,并暴露 store对象(必须在use方法之后创建store)
  export default new Vuex.Store({
      state: { // state 对象用于存储数据
          // ...
      },
      actions: { // actions 对象用于响应组件中的动作
          // ...
      },
      mutations: { // mutations 用于操作 state对象的数据
          // ...
      },
      getters: { // getters 用于定义 store 的计算属性
          // ...
      }
  })
  ```

  ~~~js
  /* src/main.js */
  
  import Vue from 'vue'
  // 导入 store
  import store from '@/store'
  
  new Vue({
      store, // 配置 store
  }).$mount('#app')
  ~~~

+ ###### ***v3***

  ~~~js
  // ....
  ~~~

  











### State

> ==***`store` 实例的数据源***==

~~~js
new Vuex.Store({
    state: {
        count: 0
    }
})
~~~

```js
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return store.state.count // 获取 state 中的数据
        }
    }
}
```











#### mapState

> ***`mapState` 辅助函数***

~~~js
// 导入 mapState 辅助函数
import { mapState } from 'vuex'

export default {
	// ...
    computed: mapState({ // 方式(1)对象形式
    // 箭头函数
    count: state => state.count,

    // 传字符串参数, 等同于 state => state.count
    countAlias: 'count',

    // 为了能够使用 this 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
        return state.count + this.localCount
    }
}
~~~

> ==***当映射的计算属性的名称与 `state` 的子节点名称相同时，可以给 `mapState` 传一个字符串数组***==

~~~js
computed: mapState([ // 方式(2)数组形式
    // 映射 this.count 为 store.state.count
    'count'
]) 
~~~

> ==***对象展开运算符***==

~~~js
computed: {
    localComputed () { /* ... */ },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
        // ...
    })
}
~~~















### Mutations

> ***更改 `Vuex` 的 `store` 中的状态的唯一方法是提交 `mutation`***
>
> :grey_exclamation:***每个 `mutation` 都有一个字符串的<span style=color:red;>事件类型 `(type)`</span>和一个<span style=color:red;>回调函数 `(handler)`</span>***

~~~js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state, value) { // 第一个参数为 state
            console.log(state, value); // {count, …}, 1
            state.count++ // 变更状态
        }
    }
})
~~~

~~~js
/* 触发
commit(type, [arg])
	type : 事件名
    arg : 可选参数
*/
created() {
    this.$store.commit('increment', 1);
}
~~~









#### mapMutations

> ***`mapMutations` 辅助函数，在组件中提交 `Mutation`***

~~~js
// 导入 mapMutations 辅助函数
import { mapMutations } from 'vuex'

export default {
    // ...
    methods: {
        ...mapMutations([ // 数组形式
            'increment', // 将 this.increment() 映射为 this.$store.commit('increment')
            // ...
        ]),
	    ...mapMutations({ // 对象形式
            add: 'increment', // 将 this.add() 映射为 this.$store.commit('increment')
            // ...
        })
    }
}
~~~















### Actions

> ==***`Action` 类似于 `mutation`，不同在 `Action` 提交的是 `mutation`，而不是直接变更状态***==
>
> :grey_exclamation:==***`Action` 函数接受一个与 `store` 实例具有相同方法和属性的 `context` 对象***==

~~~js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state, value) {
            console.log(state, value); // {count, …}, 1
            state.count++
        }
    },
    actions: {
        increment (context) { // 第一个参数为 上下文对象(context),可使用 ES6 参数解构 { commit }
            console.log(context, value); // {getters, state, dispatch, commit, …}, 1
            context.commit('increment', value)
        }
    }
})
~~~

~~~js
/* 触发
dispatch(type, [arg])
	type : 事件名
    arg : 可选参数
*返回值一个Promise对象*
*/
created() {
    this.$store.dispatch('increment', 1)
}
~~~











#### mapActions

>==***`mapActions` 辅助函数***==

~~~js
// 导入 mapActions 辅助函数
import { mapActions } from 'vuex'

export default {
    // ...
    methods: {
        ...mapActions([ // 数组形式
            'increment', // 将 this.increment() 映射为 this.$store.dispatch('increment')
            // ...
        ]),
        ...mapActions({ // 对象形式
            add: 'increment', // 将 this.add() 映射为 this.$store.dispatch('increment')
            // ...
        })
    }
}
~~~



















### Getters

> ==***定义 `store`实例中 `store` 的计算属性***==

~~~js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: { // 定义计算属性
        count(state) {
            return `count值=${state.count}`;
        }
    }
})
~~~

~~~js
created() {
	console.log(this.$store.getters.count) // 获取
}

// => "count值=0"
~~~











#### mapGetters

> ***`mapGetters` 辅助函数，用法相同 `mapState`***

~~~js
// 导入 mapGetters 辅助函数
import { mapGetters } from 'vuex'

export default {
    // ...
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([ // 数组形式
            'count',
            // ...
        ]),
        ...mapGetters({ // 对象形式
            size: 'count',
            // ...
        })
    }
}
~~~













### Modules

> :grey_exclamation:***`Vuex` 允许我们将 `store` 分割成模块`（module）`，每个模块拥有自己的 `state`、`mutation`、`action`、`getter`、甚至是嵌套子模块***

~~~js
const moduleA = {
    state: () => ({ ... }),
	mutations: { ... },
	actions: { ... },
	getters: { ... }
}

const moduleB = {
	state: () => ({ ... }),
	mutations: { ... },
	actions: { ... }
}

const store = new Vuex.Store({
    modules: { // 模块化
        a: moduleA,
        moduleB // 对象简写形式
    }
})

this.$store.state.a 		// -> moduleA 的状态
this.$store.state.moduleB	// -> moduleB 的状态
~~~











#### 命名空间

> ==***可以通过添加 `namespaced: true` 的方式使其成为带命名空间的模块***==

~~~js
const store = new Vuex.Store({
    modules: {
        moduleA { // 模块a
        	namespaced: true, // 设置为带命名空间的模块
	        // ...
    	},
	    // ...
    }
})    
~~~











##### 带命名空间的绑定函数

~~~js
// 方式(1)
computed: {
    ...mapState({
        name: state => state.a.name,
    })
},
methods: {
    ...mapActions([
        'a/fun',  // -> this['a/fun']()
    ])
}

// 方式(2),将模块的空间名称字符串作为第一个参数传递给辅助函数
computed: {
    ...mapState('a', {
		name: state => state.name,
    })
},
methods: {
    ...mapActions('a', [
        'fun', // -> this.fun()
    ])
}
~~~











##### createNamespacedHelpers

> ==***`createNamespacedHelpers` 用于创建基于某个命名空间辅助函数***==

~~~js
// 导入 createNamespacedHelpers 辅助函数
import { createNamespacedHelpers } from 'vuex'

// 创建 模块a 的辅助函数
const { mapState, mapActions } = createNamespacedHelpers('a')

export default {
    computed: {
        // 在模块 a 中查找
        ...mapState({
            name: state => state.name,
        })
    },
    methods: {
        // 在模块 a 中查找
        ...mapActions([
            'fun',
        ])
    }
}
~~~



























## ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>

