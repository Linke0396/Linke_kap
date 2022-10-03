[TOC]

# React

****

==***[React](https://reactjs.org/)用于构建用户界面的`JavaScript`库***==

<center><img src="images/React.png" alt="React" style="zoom:55%;" title="title"/></center>













## 🍀特性

1. ==*虚拟DOM + Diffing算法*== ：通过对DOM的虚拟(虚拟`DOM`)，最大限度的减少与`DOM`的交互
2. ==*JSX*== : `JSX`是`JavaScript`语法的扩展
3. ==*组件化，声明式编码*== : 提高开发效率及组件复用率
4. ==*单向响应数据流*==

















## 🌱搭建本地开发环境

1. ==*确保安装了最新版本的 `Node.js`*==

2. ==*`cmd`创建一个新项目*==

   1. 方式一

      ~~~cmd
      # 全局安装
      npm i create-react-app -g
      
      # 创建项目
      create-react-app 项目名称
      
      # 查询版本
      create-react-app -V
      ~~~

   2. 方式二

      ~~~cmd
      npx create-react-app 项目名称
      ~~~

3. ==*创建成功并提示以下信息*==

   ~~~cmd
   npm start
   	...
   npm run build
   	...
   npm test
   	...
   npm run eject
   	...
   
   We suggest that you begin by typing:
   
   	cd projectName
       npm start
   
   Happy hacking!
   ~~~















## 基本使用

+ ==*Before*==

  ~~~jsx
  // 导入 React
  import React from 'react';
  // 导入 render
  import { render } from 'react-dom';
  
  /* render ：将内容渲染到页面中
  	参数一 : 要渲染的 React 元素
  	参数二 : 页面的DOM元素
  */
  render(<h1>Hello React</h1>, document.getElementById('root'));
  ~~~

+ ==*After*==

  ~~~jsx
  // 导入 React
  import React from 'react';
  // 导入 crateRoot
  import { createRoot } from 'react-dom/client';
  
  // 将 React 组件渲染到页面中
  createRoot(document.getElementById('root')).render(<h1>Hello React</h1>);
  ~~~
  
  

















## :heavy_multiplication_x:JSX

==***[JSX](https://react.docschina.org/docs/introducing-jsx.html) 是一个看起来很像`XML`的`JavaScript`语法扩展***==











### 优点

+ ***执行更快，因为它在编译为 `JavaScript` 代码后进行了优化***
+ ***类型安全的，在编译过程中就能发现错误***
+ ***编写模板更加简单快速***













### 表达式

> ==*在编译之后，`JSX`表达式会被转为普通`JavaScript`函数调用，并且对其取值后得到`JavaScript`对象*==

~~~jsx
const name = 'linke';
function getAge(age) {
	return <i>{age}</i>;
}
const array = ['item1', 'item2', 'item3'];

// 表达式
const element = (
<div>
    <div>name={name}, age={getAge(19)}</div>
    <ul>
        {/* 循环数组 */}
        { array.map((item,index)=> <li key={index}>{item}</li>) }
    </ul>
</div>
);

// 渲染
root.render(element);
~~~

~~~html
<!-- result -->
<div>
    <div>name=linke, age=<i>19</i></div>
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
</div>
~~~













### 注释

> ==***`JSX`中不允许有注释***==

~~~jsx
// 以下相似可以
const element = <div>{/!*唯一性的父标签*!/}
	<h1>Hello React</h1>
</div>;
~~~













### 特定属性

> ==*`JSX` 里的`class`变成了`className`，而`tabindex`则变为`tabIndex`,`for`变成为`htmlFor`*==
>
> :grey_exclamation:==**<u>*`React DOM`使用`camelCase`（小驼峰命名）来定义属性的名称*</u>**==

~~~jsx
const styles = { color: 'red' };
const element = (
<div>
	<h2 tabIndex='0'>info1</h2>
	<h3 className='cla'>info2</h3>
	<h4 style={styles}>info3</h4>
	<label htmlFor="username">Username:</label>{/* label标签的for的写法 */}
</div>
);
      
// 渲染
root.render(element);
~~~

~~~html
<!-- result -->
<div>
    <h2 tabindex="0">info1</h2>
    <h3 class="cla">info2</h3>
    <h4 style="color: red;">info3</h4>
    <label for="username">Username:</label>
</div>
~~~













### 子元素

> ==***假如一个标签里面没有内容，你可以使用 `/>` 来闭合标签***==

~~~jsx
const element = <img src={user.avatarUrl} />;
~~~















### 防止注入

> ==***`React DOM`在渲染所有输入内容之前，默认会进行转义; 所有的内容在渲染之前都被转换成了字符串***==



















## 🔧组件

### Class组件

> ==***`React`使用`ES6 Class`方式创建组件***==

~~~jsx
import { createRoot } from 'react-dom/client';
// 导入 Component 类
import { Component } from 'react';


// 继承并创建 App 组件类
class App extends Component { // 类名为组件名
    // 重新 render() 方法
    render() {
        console.log(this); // React 组件实例对象
        return (
            <div className='123'>
                info ... cla
            </div>
        )
    }
}

// 渲染(呈现一个React组件，必须大写字母开头它的名称)
createRoot(document.getElementById('root')).render(<App/>);
~~~

















### 函数式组件

> ==***`React`使用`Function`方式创建组件***==

~~~jsx
// 使用函数创建 React 组件
function App() { // 函数名为组件名
    console.log(this); // 函数组件的this为 undefined, 因为babel编译后开启了严格模式
    return (
        <div>
            info ... fun
        </div>
    )
}

/*
* 16.8 之前属于无状态组件
* */
// 渲染
createRoot(document.getElementById('root')).render(<App/>);
~~~

















### 嵌套组件

1. ###### <span style=color:black;>*标签首字母为<u>小写</u>，则将该标签转换为`html`中同名元素；若无`html`标签对应的同名元素，则报错*</span>

2. ###### <span style=color:black;>*标签首字母为<u>大写</u>，则将其渲染对应的组件; 若组件没有定义，则报错*</span>

~~~jsx
// 导入 React 为兼容 16 之前的老版本
import React, { Component } from 'react';

// class子组件
class Son extends Component {
    render() {
        return (
            <div>Son</div>
        )
    }
}

// 函数式子组件
function SonTwo() {
  return (
    <div>Son2</div>
  )
}

// 父组件
class App extends Component {
    render() {
        return (
            <div>
                app
                <Son/>{/* 单标签或双标签形式使用组件 */}
                <SonTwo/>
            </div>
        );
    }
}

// 渲染
createRoot(document.getElementById('root')).render(<App/>);
~~~

~~~html
<!-- 渲染结果 -->
<div>
    app
    <div>Son</div>
    <div>Son2</div>
</div>
~~~













### 组件的样式

+ ==***行内样式***==

  + > <span style=color:black;>***给虚拟`DOM`添加行内样式，需要使用表达式转入样式对象***</span>

  + ~~~jsx
    render() {
        let styles = {
            width: '100px',
            height: '100px',
            backgroundColor: 'skyblue' // 驼峰写法
        }
        return (
            <div style={styles}>{/* style写法 */}
                box
            </div>
        );
    }
    ~~~

  + ~~~html
    <!-- 渲染结果 -->
    <div style="width: 100px; height: 100px; background-color: skyblue;">box</div>
    ~~~

+ ==***class类***==

  + > <span style=color:black;>***给虚拟`DOM`添加`class`类名，需要将`class`改写为`className`，因为`class`在`js`中属于<u>关键字</u>***</span>

  + ~~~jsx
    // 导入 css 模块
    import './css/index.css'
    
    // ...
    render() {
        return (
    		<div className="box">{/* class写法 */}
                box
            </div>
        );
    }
    ~~~

  + ~~~html
    <!-- 渲染结果 -->
    <div class="box">box</div>
    ~~~

















## ⭐核心属性

### 🟣State

> ==***`state`是组件对象最重要的属性，值是对象(可包含多个`key:value`的组合)***==
>
> <span style=color:black;>***组件被称之为<span style=color:red;>状态机</span>，通过更新组件的 `state` 来更新对应的页面显示(重新渲染组件)***</span>
>
> :grey_exclamation:<span style=color:red;>***状态数据不能直接更改,需要调用API中的`setState()`方法修改更新***</span>

~~~jsx
class App extends Component {
    constructor(props) { // 初始化组件状态
        super(props);
        this.state = { // state 值必须是对象
            flag: false,
            number: 1
        }
        this.togFlag = this.togFlag.bind(this); // 解决方式(1): 修改this指向
    }
    
    togFlag() {
	// togFlag=()=> { // 解决方式(2): 使用箭头函数,推荐使用 
        //  状态必须使用 setState() 方法更新, 并更新是合并 state 对象
        //  this.setState(state => ({ flag: !state.flag})) // 方式(1)
        this.setState({ flag: !this.state.flag}) // 方式(2)
    }
    
    render() {
        return (
		<div>
			state
            <h2 style={{ cursor: 'pointer' }} onClick={this.togFlag}>
                {this.state.flag ? '开启' : '关闭'}
			</h2>
			<span>{this.state.number}</span>
		</div>
		);
  	}
}
~~~













#### 简写

~~~js
class App extends Component {
    state = {/* ... */}; // 简写方式
    render() {/* ... */}
}
~~~



















### 🔵Props
