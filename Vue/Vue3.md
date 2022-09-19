[TOC]

# Vue3

****

*==🔗[Vue.js -v3](https://vuejs.org/)**:** **渐进式 `JavaScript` 框架**==*

<center><img src="images/Vue.png" alt="Vue" style="zoom:110%;" title="Vue" /></center>













## Vuex

==***`Vuex` 是一个专为 `Vue` 应用程序开发的<span style=color:red;>状态管理模式 + 库</span>***==











### 安装

~~~cmd
npm i vuex@3 	# vue2对应版本
npm i vuex		# vue3对应版本
~~~













### 工作原理

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
*/
created() {
    this.$store.dispatch('increment', 1)
}
~~~











### Getters

> ==***定义 `store`实例中 `store` 的计算属性***==