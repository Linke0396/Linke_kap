[TOC]

# React

****

==***[React](https://reactjs.org/)用于构建用户界面的脚本库***==

<center><img src="images/React.png" alt="React" style="zoom:55%;" title="title"/></center>













## 🍀特性

1. ==*声明式设计*==
2. ==*高效*== ：通过对DOM的虚拟(虚拟`DOM`)，最大限度的减少与`DOM`的交互
3. ==*JSX*== : `JSX`是`JavaScript`语法的扩展
4. ==*组件*== : 构建的组件更容易复用
5. ==*单向响应数据流*==

















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

// 表达式
const element = <div>name={name}</div>;
function getAge(age) {
	return <i>{age}</i>;
}

// 渲染
root.render(element);
~~~

~~~html
<!-- result -->
<div>name=linke, age=<i>19</i></div>
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

> ==*`JSX` 里的`class`变成了`className`，而`tabindex`则变为`tabIndex`*==
>
> :grey_exclamation:==**<u>*`React DOM`使用`camelCase`（小驼峰命名）来定义属性的名称*</u>**==

~~~jsx
const styles = { color: 'red' };
const element = <div>
	<h2 tabIndex='0'>info1</h2>
	<h3 className='cla'>info2</h3>
	<h4 style={styles}>info3</h4>
</div>
      
// 渲染
root.render(element);
~~~

~~~html
<!-- result -->
<div>
    <h2 tabindex="0">info1</h2>
    <h3 class="cla">info2</h3>
    <h4 style="color: red;">info3</h4>
</div>
~~~













### 子元素

> ==***假如一个标签里面没有内容，你可以使用 `/>` 来闭合标签***==

~~~jsx
const element = <img src={user.avatarUrl} />;
~~~















### 防止注入

> ==***`React DOM`在渲染所有输入内容之前，默认会进行转义; 所有的内容在渲染之前都被转换成了字符串***==

