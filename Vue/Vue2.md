[TOC]

# Vue2

****

*==🔗[Vue.js - v2](https://v2.cn.vuejs.org/) **:** **渐进式 `JavaScript` 框架**==*

<center><img src="images/Vue.png" alt="Vue" style="zoom:50%;" title="Vue" /></center>





## 🍀概念

***`Vue` (读音 `/vjuː/`，类似于 `view`) 是一套<span style=color:red;>用于构建用户界面</span>的前端<span style=color:red;>框架</span>***











## 🔅特性

==***`vue` 框架的主要特性***==

1. <span style=color:red;>***数据驱动视图***</span>
2. <span style=color:red;>***双向数据绑定***</span>









### 数据驱动视图

> ==***`vue` 会监听数据的变化，从而自动重新渲染页面的结构***==
>
> + ###### *当页面数据发生变化时，页面会自动重新渲染*
>
> + ###### *数据驱动视图是<span style=color:red;>单向的数据绑定</span>*

<center><img src="images/%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8%E8%A7%86%E5%9B%BE.png" alt="数据驱动视图" style="zoom:65%;border: 2px solid silver" title="数据驱动视图" /></center>











### 双向数据绑定

> ==***在模板中的数据发生变化的时候，模型对象也要发生改变；模型对象中的数据改变时，视图中的数据也要发生改变***==

<center><img src="images/%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.png" alt="双向数据绑定" style="zoom:65%;border:2px solid silver" title="双向数据绑定" /></center>













## 🚩MVVM

🎇==***`MVVM(Model-View-ViewModel)`，是一种软件架构设计模式，它是一种简化用户界面的事件驱动编程方式***==

> ***`MVVM` 是 `vue` 实现<span style=color:red;>数据驱动视图</span>和<span style=color:red;>双向数据绑定</span>的<u>核心原理</u>，<u>它把每个 `HTML` 页面都拆分成了三个部分</u>***
>
> + ==***`Model` :	表示当前页面渲染时所依赖的数据源***==
> + ==***`View` :	表示当前页面所渲染的 `DOM` 结构***==
> + ==***`ViewModel` :	表示 `vue` 的实例，它是 `MVVM` 的核心***==

<center><img src="images/MVVM.png" alt="MVVM" style="zoom:40%;border: 3px solid silver;" title="MVVM" /></center>











### **:sunny:**工作原理

> ==***<span style=color:red;>`ViewModel` 作为 `MVVM` 的核心</span>，是它把当前页面的<span style=color:red;>数据源`(Model)`</span>和<span style=color:red;>页面的结构`(View)`</span>连接在了一起***==
>
> + ###### *当<span style=color:red;>数据源发生变化</span>时，会被 `ViewModel` 监听到，`VM` 会根据最新的数据源自动更新页面的结构*
>
> + ***当<span style=color:red;>模块的值发生变化</span>时，也会被 `VM` 监听到，`VM` 会把变化过后最新的值自动同步到 `Model` 数据源中***

<center><img src="images/MVVM%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.png" alt="MVVM的工作原理" style="zoom:110%;border:2px solid silver" title="MVVM的工作原理" /></center>











## 基本使用

1. ###### *导入 `vue.js` 的 `script` 脚本文件*

2. ###### *在页面声明一个即将被 `vue` 所控制的 `DOM` 区域*

3. ###### *创建 `vm` 实例对象`(vue实例对象)`*

```html
<head>
    <!-- 1.导入 vue.js -->
    <script src="./vue.js"></script>
</head>
<body>
    <!-- 2.声明一个即将被vue所控制的 DOM 区域(VIEW视图) -->
    <div id="app">
        {{username}}
    </div>
    <script>
        // 3.创建 vm 实例对象(vue实例对象)
        const ke = new Vue({
            /*
            3.1设置当前 vm 实例所绑定的元素
	            vue 的绑定元素只支持双标签,不能使用html与body标签
                只会挂载第一个被选择器(css选择器)选中的元素(推荐使用id选择器)
            */
            el: '#app',
            // 3.2 指定 Model数据源(Model模型)
            data: {
                username: 'linke'
            }
        });
    </script>
</body>
```











## 💠指令

==***指令`（Directives）`是 `vue` 提供的模板语法，用于渲染页面的基本结构***==

+ ***<span style=color:red;>内容渲染</span>指令***
+ ***<span style=color:red;>属性绑定</span>指令***
+ ***<span style=color:red;>事件绑定</span>指令***
+ ***<span style=color:red;>双向绑定</span>指令***
+ ***<span style=color:red;>条件渲染</span>指令***
+ ***<span style=color:red;>列表渲染</span>指令***











### 内容渲染指令

==***内容渲染指令用来渲染 `DOM` 元素的文本内容***==

+ **`v-text`** ：设置标签的文本值<span style=color:red;>(纯文本)</span>，会覆盖元素内默认的值
+ **`{{ }}`** ：差值表达式`(Mustache)`
+ **`v-html`** ：同 `v-text`，不同的是会将包含 `HTML` 标签的字符串渲染为页面的 `HTML` 元素

```html
<script src="./vue.js"></script>
<body>
    <!-- 
	v-text : 设置标签的文本值(纯文本)
		*会覆盖元素内默认的值*
	{{}} : 差值表达式
		*会将对应的值渲染到元素的表达式中,保留表达式以外的值*
	v-html : 插入html标签
		*同 v-text, 不同的是会将包含 HTML 标签的字符串渲染为页面的 HTML 元素*
	-->
    <div id="app">
        <div v-text="username"></div>
        <div v-text="sex">female</div>
        <div>age: {{age}}</div>
        <div v-html="info"></div>
    </div>
</body>
<script>
    const ke = new Vue({
        el: '#app',
        data: {
            username: 'linke',
            sex: 'male',
            age: 19,
            info: '<h2>info ...</h2>'
        }
    });
</script>
```











###  属性绑定指令

==***为元素的属性动态绑定属性值，则需要用到 `v-bind` 属性绑定指令，简写形式`:`***==
