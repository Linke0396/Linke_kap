[TOC]

# React-Class

<div style="display: flex; align-items: center;">
    <hr/>
<svg class="icon" style="width: 5em;height: 5em;margin: 0 5px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4608"><path d="M512 511.8m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z" fill="#61DAFB" p-id="4609"></path><path d="M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-0.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3z m58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1 0.8 34.5 1.3 52.2 1.3 17.7 0 35.1-0.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-0.8-34.4-1.3-52.1-1.3-17.7 0-35 0.5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7z m158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6z m345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8z m268.5 49.2c-29.9 17.3-81.4-0.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9z m44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-0.1 40.7-60.4 84.2-160 112.6z" fill="#61DAFB" p-id="4610"></path></svg>
    <hr/>
</div>

==***[React](https://reactjs.org/)用于构建用户界面的`JavaScript`库***==

<center><img src="images/React.png" alt="React" style="zoom:55%;" title="title"/></center>













## 🍀特性

1. ==*虚拟DOM + Diffing算法*== ：通过对DOM的虚拟(虚拟`DOM`)，最大限度的减少与`DOM`的交互
2. ==*JSX*== : `JSX`是`JavaScript`语法的扩展
3. ==*组件化，声明式编码*== : 提高开发效率及组件复用率
4. ==*单向响应数据流*==

















## 🌱脚手架创建项目

1. ==*确保安装了最新版本的 `Node.js`*==

2. ==*使用脚手架创建项目*==

   1. 方式一

      ~~~cmd
      # 全局安装
      npm i create-react-app -g
      
      # 创建项目
      create-react-app 项目名称
      
      # 查询版本
      create-react-app -V
      ~~~

   2. 方式二*(推荐)*

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

















### 项目结构

<center><img src="images/React%E8%84%9A%E6%89%8B%E6%9E%B6%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84.png" alt="项目结构" style="zoom:65%;" title="项目结构" /></center>















#### index.html

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <!-- %PUBLIC_URL% 表示 public 文件夹的路径 -->
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <!-- 视口标签 -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- 用于配置浏览器页签的颜色(仅支持安卓移动端浏览器) -->
        <meta name="theme-color" content="#000000" />
        <!-- 网页描述标签 -->
        <meta name="description" content="Web site created using create-react-app" />
        <!-- 用于指定网页添加到手机桌面的图标(只支持苹果手机) -->
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <!-- 应用加壳时的配置文件 -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
    </head>
    <body>
        <!-- 如果浏览器不支持js, 则显示标签中的内容 -->
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <!-- 容器 -->
        <div id="root"></div>
    </body>
</html>
~~~

















#### index.js

~~~jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode 用来检查项目中潜在问题的工具,不会渲染任何真实的UI,为其后代元素触发额外的检查和警告
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
~~~























## ⚛基本使用

+ ==*Class*==

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

+ ==*Hooks*==

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



















## 🔩组件

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
<!-- result -->
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
    <!-- result -->
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
    <!-- result -->
    <div class="box">box</div>
    ~~~

















### 💡Key的作用

> ==***一个特殊的属性,用来追踪列表的元素被修改，被添加或者是被删除的<span style=color:red;>唯一标识</span>***==
>
> <span style=color:black;>***当状态中的数据发生变化时，`React`会根据【新数据】生成【新的虚拟`DOM`】，随后`React`进行【新虚拟`DOM`】与【旧虚拟`DOM`】的`diff`比较,比较规则:***</span>
>
> 1. *旧虚拟`DOM`中找到了与新虚拟`DOM`相同的`key`*
>    1. 若虚拟`DOM`中内容没变，直接使用之前的真实`DOM`
>    2. 若虚拟`DOM`中内容改变，则生成新的真实`DOM`，随后替换掉页面中之前的真实`DOM`
> 2.  *旧虚拟`DOM`中未找到与新虚拟`DOM`相同的`key`*
>    1. 根据数据创建的新的真实`DOM`，随后渲染到页面















### 组件样式模块化

1. ###### ==*样式文件名格式为`文件名.module.css`*==

   1. ~~~css
      /* public.module.css */
      .bgc {
          color: skyblue;
      }
      ~~~

2. ==*引入样式文件时接收*==

   1. ~~~jsx
      // 组件样式模块化
      import public from './public.module.css';
      ~~~

3. ###### ==*使用方式*==

   1. ~~~jsx
      render() {
          return (
              <div className={public.bgc}></div>
          );
      }
      ~~~

      ~~~html
      <!-- result -->
      <div class="public_bgc__xxxxx"></div>
      ~~~
      





















### 🔄组件之间的数据共享

#### :arrow_down:父向子共享

> ==***父向子共享数据  ：通过 `props` 传递***==

+ ==***父组件***==

  ~~~jsx
  class App extends Component {
  	state = {
          number： 0
      }
      render() {
          return <Son number={this.state.number} />
      }
  }
  ~~~

+ ==***子组件***==

  ~~~jsx
  class Son extends Component {
      // 可使用 propTypes 限制 props 类型
      // 可使用 defaultProps 设置 props 默认值
      
      render() {
          return <div>{this.props.number}</div>
      }
  }
  ~~~

  













#### :arrow_up:子向父共享

> ==***子向父共享数据 ：通过 `props`传递<span style=color:red;>函数</span>***==

+ ==***子组件***==

  ~~~jsx
  class Son extends Component {
      render() {
  		return <button onClick={this.props.add}>number++</button>
      }
  }
  ~~~

+ ==***父组件***==

  ~~~jsx
  class App extends Component {
      state = { number: 0 }
      // 定义函数
      add = () => {
          this.setState({ number: this.state.number + 1 });
      }
      
  	render() {
          return (
              <div>{this.state.number}</div>
              <Son add={this.add} />
          );
      }
  }
  ~~~














#### PubSub JS

> ***`pubsubjs`是一个用脚本编写的<span style=color:red;>发布/订阅</span>库***







##### 安裝

~~~cmd
npm i pubsub-js
~~~









##### 基本使用

~~~js
// 引入 pubsub 模块
import PubSub from "pubsub-js";

/* -- 订阅 --
	subscribe(事件名, 事件处理函数);
		msg : 被触发的事件名称
		data : 事件触发时传递的参数
*/
let token = PubSub.subscribe('MY TOPIC', (msg, data) => {
    console.log( msg, data);
});


/* -- 发布 --
	publish(触发的事件名称, 额外传递的参数);
*/
PubSub.publish('MY TOPIC', 'hello world!');


/* -- 取消特定订阅 --
	unsubscribe(token);
*/
PubSub.unsubscribe(token);
~~~

















### 根标签

> ==***通常我们不需要在模块中添加根标签，可使用以下方式***==

~~~jsx
render() {
    return (
        // <> 不会被渲染为html元素
        <>
        	<div>main 1</div>
	        <div>main 2</div>
        </>
    );
}
~~~























## ⭐核心属性

### 🟠State

> ==***`state`是组件对象最重要的属性，值是对象(可包含多个`key:value`的组合)***==
>
> <span style=color:black;>***组件被称之为<span style=color:red;>状态机</span>，通过更新组件的 `state` 来更新对应的页面显示(重新渲染组件)***</span>
>
> :grey_exclamation:<span style=color:red;>***状态数据不能直接更改,需要调用API中的`setState()`方法修改更新***</span>

~~~jsx
class App extends React.Component {
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
class App extends React.Component {
    state = {/* ... */}; // 简写方式
    render() {/* ... */}
}
~~~















#### setState

> ~~~jsx
> this.setState(state[, callback])
> ~~~
>
> + `state`: 需要修改的状态对象
> + `callback`: 视图更新完毕之后调用的回调函数,**可选**























### 🔵Props

> ❗<span style=color:red;>***`Props`是只读的***</span>

+ ==*类式组件*==

  ~~~jsx
  class Son extends React.Component {
      render() {
          console.log(this.props) // {/* ... */}
          const { name, age } = this.props;
          return (
              <ul>
                  <li>name:{ name }</li>
                  <li>age:{ age }</li>
              </ul>
          );
      }
  }
  
  render() {
      const stu = { name: 'keke', age: 11 }
      return (
          <div>
              {/* 方式(1) */}
              <Son name="linke" age={19}/> 
              {/* 方式(2) */}
              <Son {...stu}/>
          </div>
      );
  }
  ~~~

  ~~~html
  <!-- result -->
  <div>
      <ul>
          <li>name:linke</li>
          <li>age:19</li>
      </ul>
      <ul>
          <li>name:keke</li>
          <li>age:11</li>
      </ul>
  </div>
  ~~~

+ ==*函数式组件*==

  ~~~jsx
  // 函数式组件获取props
  function Person(props) {
      return (
          <ul>
              <li>name: {props.name}</li>
          </ul>
      )
  }
  
  render() {
      return (
          {/* 使用函数式组件传递props */}
          <Person name="KeKe"/>
      );
  }
  ~~~

  ```html
  <!-- result -->
  <ul><li>name: KeKe</li></ul>
  ```

  



















#### Props 验证

```jsx
// 引入 PropTypes 进行类型验证
import PropTypes from 'prop-types';
```

|    类型    |        类型验证        |
| :--------: | :--------------------: |
|  `Array`   | **`PropTypes.array`**  |
| `Function` |  **`PropTypes.func`**  |
|  `Number`  | **`PropTypes.number`** |
|  `Object`  | **`PropTypes.object`** |
|  `String`  | **`PropTypes.string`** |
|    ...     |          ...           |

+ ==*类型检查*==

  ~~~jsx
  class App extends React.Component {
      render() {/* ... */}
  }
  
  // 类型检查
  App.propTypes = {
      name: PropTypes.string
  };
  ~~~

+ ==*必选项*==

  ~~~jsx
  // isRequired 必填项
  App.propTypes = {
      name: PropTypes.string.isRequired
  };
  ~~~

+ ==*默认值*==

  ~~~jsx
  // 属性默认值
  App.defaultProps = {
      name: 'Linke'
  };
  ~~~















#### 简写

~~~jsx
class App extends React.Component {
    // 类型检查
    static propTypes = {
        name: PropTypes.string
    }
    // 属性默认值
    static defaultProps = {
        name: 'linke'
    }
    
    render() {/* ... */}
}
~~~















#### 组件类的构成函数

~~~jsx
class APP extends React.Component {
	// 构造器是否接收props,是否传递给super,取决于是否希望在构造器中通过this访问props
    constructor(props) {
        super(props);
        console.log(this.props) // { ... }
    }
    
    render() {/* ... */}
}
~~~

















### 🟣Refs

#### 字符串引用

~~~jsx
class App extends React.Component {
	getData = () => { // 旧版 API 使用 refs 获取
	    console.log(this.refs) // { inputKey: input }
		console.log(this.refs.inputKey.value) // 通过字符串引用访问节点的引用
    }
    
    render() {
        return (
            {/* 旧版 API(ref：字符串引用) */}
            <input ref="inputKey" onBlur={this.getData}/>
        );
    }
}
~~~















#### Ref API

~~~jsx
class App extends React.Component {

    /*
    创建 Ref 容器,用于存储ref标识的节点;
    如果同时标识多个,存储最后标识的节点
    */
    textInput = React.createRef();
    
    getData = () => {
        console.log(this.textInput) // {current: input}
		console.log(this.textInput.current.value) // 通过 current 访问对节点的引用
    }
   
    render() {
        return (
            {/* 新版 API 的使用 */}
            <input ref={this.textInput} onBlur={this.getData}/>
        );
    }
}
~~~















#### 回调引用

~~~jsx
class App extends React.Component {
    getData = () => {
        console.log(this.textInput) // <input/>
        console.log(this.textInput.value)
    }
    
    render() {
        return (
            {/* 回调函数引用 */}
            <input ref={el => this.textInput = el} onBlur={this.getData}/>
        );
    }
}

// 上面代码等同于以下
class App extends React.Component {
    /* 定义存储对 DOM 节点的引用 */
    textInput;
    setTextInputRef = element => {
        this.textInput = element;
    }
    
    getData = () => {
        console.log(this.textInput) // <input/>
        console.log(this.textInput.value)
    }
    
    render() {
        return (
            {/* 回调函数引用 */}
            <input ref={this.setTextInputRef} onBlur={this.getData}/>
        );
    }
}

/*
两种方式绑定的区别:
	如果回调被定义为内联函数，它将在更新期间被调用两次,第一次为null,第二次为DOM元素
	如果回调定义为类上的绑定方法可避免以上这种情况
*/
~~~



















## 处理事件

> `React` 元素处理事件与处理 `DOM` 元素上的事件非常相似，但也存在一些差异
>
> + 事件使用驼峰大小写
> + 使用的是自定义(合成)事件，而不是原生`DOM`事件
> + 中的事件通过事件委托方式处理的(委托给最外层的元素)

~~~jsx
<button onClick={tihs.add}>Number++</button>
~~~

















## 非受控组件

> :grey_exclamation:==***非受控组件也就是一个独立组件,不需要传值也无任何与当前组件的父组件有所交集; <span style=color:red;>一切逻辑只与自身有关,与其他的组件没有通信与交集</span>***==

~~~jsx
class From extends Component {

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.txtInput.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={el => this.txtInput = el}/>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}
~~~













### 默认值

> 对于不受控制的组件,可与使用 `defaultValue/defaultChecked` 指定初始值

~~~jsx
render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" defaultValue="linke" ref={el => this.txtInput = el}/>
            </label>
            <button>Submit</button>
        </form>
    );
}
~~~













### 只读

> 设置输入输入组件为只读`readOnly={true}`

~~~jsx
class App extends Component {

    render() {
        return <input type="text" defaultValue="linke" readOnly={true} />;
    }
}
~~~





















## 受控组件

> ==***通过使 `React` 的 `state` 为<span style=color:red;>唯一数据源</span>; 然后呈现表单的 `React` 组件还控制后续用户输入时该表单中发生的操作。以这种方式由 `React` 控制其值的输入表单元素称为<span style=color:red;>受控组件</span>***==

~~~jsx
class Form extends Component {

    // 初始化状态
    state = { value: '' }

    // 更新数据到状态中
    handleChange = ({ target: { value } }) => {
        this.setState({ value })
    }
    
    // 表单提交
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button>Submit</button>
            </form>
        );
    }
}
~~~















### 处理多个输入

+ ==*方式一*==

  ~~~jsx
  class Form extends Component {
  
      // 初始化状态
      state = {
          username: '',
          password: ''
      }
  
      // 表单提交
      handleSubmit = e => {
          e.preventDefault();
          console.log(this.state)
      }
  
      // 更新数据到状态中
      handleInputChange = ({ target: { name, value } }) => {
          this.setState({ [name]: value });
      }
  
      render() {
          const { username, password } = this.state
          return (
              <form onSubmit={this.handleSubmit}>
                  <label>
                      Username:
                      <input type="text" name="username"
                          value={username} onChange={this.handleInputChange} />
                  </label>
                  <label>
                      Password:
                      <input type="password" name="password"
                          value={password} onChange={this.handleInputChange} />
                  </label>
                  <button>Submit</button>
              </form>
          );
      }
  }
  ~~~

+ ==*方式二*==

  ~~~jsx
  class Form extends Component {
  
      // 初始化状态
      state = {
          username: '',
          password: ''
      }
  
      // 表单提交
      handleSubmit = e => {
          e.preventDefault();
          console.log(this.state)
      }
  
      // 使用柯里化函数更新数据到状态中
      handleInputChange = (dataType) => {
          return ({ target: { value } }) => {
              this.setState({ [dataType]: value });
          }
      }
  
      render() {
          const { username, password } = this.state
          return (
              <form onSubmit={this.handleSubmit}>
                  <label>
                      Username:
                      <input type="text" value={username}
                          onChange={this.handleInputChange('username')}/>
                  </label>
                  <label>
                      Password:
                      <input type="password" value={password}
                          onChange={this.handleInputChange('password')}/>
                  </label>
                  <button>Submit</button>
              </form>
          );
      }
  }
  ~~~

  























## ⭐生命周期

<center><img src="images/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png" alt="生命周期" style="zoom:110%;border: 1px solid silver;" title="React生命周期" /></center>















### 生命周期钩子

+ ==***挂载***==

  |                钩子函数                 |                        调用时机                        |
  | :-------------------------------------: | :----------------------------------------------------: |
  |           **`constructor()`**           |            组件挂载之前,会调用它的构造函数             |
  | **`static getDerivedStateFromProps()`** |               在调用`render`方法之前调用               |
  |       **`componentWillMount()`**        | 在挂载之前被调用<span style=color:red;>(已过时)</span> |
  |             **`render()`**              |                初始渲染和组件更新时调用                |
  |        **`componentDidMount()`**        |          在组件挂载后(插入`DOM`树中)立即调用           |

+ ==***更新***==

  |                钩子函数                 |                           调用时机                           |
  | :-------------------------------------: | :----------------------------------------------------------: |
  | **`static getDerivedStateFromProps()`** |                  在调用`render`方法之前调用                  |
  |      **`shouldComponentUpdate()`**      | 当 `props` 或 `state` 发生变化时,会在渲染执行之前被调用<br/>首次渲染或使用 `forceUpdate()` 时不会调用该方法 |
  |    **`componentWillReceiveProps()`**    | 在装载的组件接收新属性之前调用<span style=color:red;>(已过时)</span> |
  |       **`componentWillUpdate()`**       | 当组件收到新的 `props` 或 `state` 时,会在渲染之前调用<br/>初始渲染不会调用此方法<span style=color:red;>(已过时)</span> |
  |             **`render()`**              |                   初始渲染和组件更新时调用                   |
  |     **`getSnapshotBeforeUpdate()`**     |        在最近一次渲染输出(提交到`DOM`节点)之前被调用         |
  |       **`componentDidUpdate()`**        |         在更新后会被立即调用,首次渲染不会执行此方法          |

+ ==***卸载***==

  |           钩子函数           |           调用时机           |
  | :--------------------------: | :--------------------------: |
  | **`componentWillUnmount()`** | 在组件卸载及销毁之前直接调用 |

~~~js
// 组件挂载之前,会调用它的构造函数
constructor(props) {
    super(props);
    console.log('constructor()')
}

// 在调用 render 方法之前调用
static getDerivedStateFromProps(props, state) { // 当 state 的值在任何时候都取决于 props,则可使用该钩子
    console.log('static getDerivedStateFromProps()', props, state)
    return true // 返回一个状态对象,或者null
}

// 在组件挂载后(插入 DOM 树中)立即调用
componentDidMount() {
    console.log('componentDidMount()')
}

// 当 props 或 state 发生变化时,会在渲染执行之前被调用,首次渲染或使用 forceUpdate() 时不会调用该方法
shouldComponentUpdate(nextProps, nextState) {
    /*
    根据方法的返回值,判断组件的输出是否受当前 state 或 props 更改的影响; 
    默认行为是 state 每次发生变化组件都会重新渲染,返回值默认为 true
    */
    console.log('shouldComponentUpdate()', nextProps, nextState)
    return true;
  }

// 在最近一次渲染输出(提交到DOM节点)之前被调用
getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate()', prevProps, prevState)
    return { name: 'linke' } // 此生命周期方法返回的任何值都将作为参数传递给componentDidUpdate()
}

// 在更新后会被立即调用,首次渲染不会执行此方法
componentDidUpdate(prevProps, prevState, snapshot) {
    // snapshot 为 getSnapshotBeforeUpdate() 生命周期钩子的返回值
    console.log('componentDidUpdate()', prevProps, prevState, snapshot);
}

// 在组件卸载及销毁之前直接调用
componentWillUnmount() {
    console.log('componentWillUnmount()')
}

// 初始渲染和组件更新时调用
render() {
    return {/* ... */}
}

/* 钩子调用顺序 */
// 挂载
// => constructor()
// => static getDerivedStateFromProps()
// => render()
// => componentDidMount()

// 更新
// => static getDerivedStateFromProps()
// => shouldComponentUpdate()
// => render()
// => getSnapshotBeforeUpdate()
// => componentDidUpdate()

// 销毁
// => componentWillUnmount()
~~~

















#### ❕❕注意

> :grey_exclamation:<span style=color:red;>***在使用已过时的钩子函数时，需要指定函数名前缀为`UNSAFE_`才可正常使用***</span>

~~~js
// 在挂载之前被调用,在render()之前调用(已过时)
UNSAFE_componentWillMount() {
    console.log('componentWillMount()')
}
~~~



















## 🌍配置代理

+ *方式一*

  1. ==*在 `package.json` 文件中添加配置*==

    ~~~json
    {
        // ...
        "proxy": "http://localhost:5000" // 缺点: 如果请求的资源本地存在，则请求本地
    }
    ~~~

+ *方式二*

  1. ==***项目中创建 `src/setupProxy.js`文件，并配置***==

    ~~~json
    // 导入 createProxyMiddleware
    const { createProxyMiddleware } = require('http-proxy-middleware');
    
    module.exports = function (app) {
        app.use(
            '/api', // 请求前缀
            createProxyMiddleware({
                target: 'http://localhost:5000', // 配置请求服务器地址
                changeOrigin: true, // 控制服务器接收的请求头中Host的值,默认值false
                pathRewrite: {'^/api': ''} // 重写目标的网址路径
            })
        );
    };
    ~~~
  
    



















## 🌐路由

### v5

***[React Router - v5](https://v5.reactrouter.com/)***

#### 安装

~~~cmd
npm install react-router-dom@5
~~~













#### 基本使用

1. ***导入 `react-router`***

   - ~~~jsx
     /* App */
     
     // 导入 react-router
     import {
       BrowserRouter,
       Routes,
       Route,
       Link
     } from 'react-router-dom'
     ~~~

2. ***引入路由组件***

   - ~~~jsx
     /* App */
     
     // 引入路由组件
     import Home from "./components/Home";
     import Login from "./components/Login";
     ~~~

3. ***定义路由规则***

   - ~~~jsx
     /* index.js */
     
     // 导入 BrowserRouter 或 HashRouter
     import { BrowserRouter } from "react-router-dom";
     // import { HashRouter } from "react-router-dom";
     
     
     render(
         // 必须使用 BrowserRouter/HashRouter 包裹路由链接
         <BrowserRouter>
             <App/>
         </BrowserRouter>,
         document.getElementById('root')
     );
     ~~~

4. ***声明路由链接和注册路由***

   - ~~~jsx
     /* App */
     
     render() {
         return (
             <div>
                 {/* 定义路由链接 */}
                 <Link to="/home">home</Link>
                 <Link to="/login">login</Link>
                 
                 {/* 注册路由 */}
                 <Routes>
                     <Route path="/home" component={ Home } />
                     <Route path="/login" component={ Login } />
                 </Routes>
             </div>
         );
     }
     ~~~

















#### 路由组件

> ==*`v5`路由组件默认接收三个`props`属性：`history,location,match`*==
>
> :grey_exclamation:==***在`v6`中不支持***==

~~~jsx
this.props.location // { ... }
~~~



















#### NavLink

>==***`NavLink` 组件是在 `<Link>` 组件的基础上做了<span style=color:red;>高亮特性</span>的增强，会在匹配上当前的`url`的时候给<span style=color:red;>已渲染的元素添加参数</span>***==
>
>+ `activeClassName(string)`：设置选中样式，默认值为`active`
>+ `activeStyle(object)`：当元素被选中时，为此元素添加样式
>+ `exact(boolean)`：是否精准匹配，默认`false`
>+ `strict(boolean)`: 是否严格匹配，默认`false`

1. ***导入***

   ~~~jsx
   import { NavLink } from "react-router-dom";
   ~~~

2. ***使用***

   ~~~jsx
   {/* 简单使用 */}
   <NavLink to="/home">home</NavLink>
   
   {/* 
   	如果path='/',会匹配'/home'和'/main'两个路由;
   	使用 exact 精准匹配,则只会匹配 '/' 的路由
   */}
   <Route exact to="/home" component={ Home } />
   ~~~

















#### Switch

>==***以<span style=color:red;>独占方式</span>呈现路由，相反，与位置匹配的每个对象都<u>以包含方式</u>呈现***==
>
>:grey_exclamation:==***呈现与位置匹配的第一个子路由***==

~~~jsx
render() {
    return (
        {/*呈现与位置匹配的第一个子路由*/}
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/main">
                <Main />
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    );
}
~~~

















#### Redirect

> ==***将导航到新位置,新位置将覆盖历史记录堆栈中的当前位置***==

~~~jsx
{/* 重定向到 '/home' */}
<Redirect to="/home" />
~~~















#### withRouter 

>通过 `withRouter` 高阶组件访问 `history` 对象的属性和最接近`<Route>`的`match`;
>
>当路由渲染时，`withRouter` 会将已经更新的 `match` ，`location` 和 `history` 属性传递给被包裹的组件

~~~jsx
// 导入 withRouter
import { withRouter } from 'react-router'

class ShowTheLocation extends React.Component {
    render() {
        const { match, location, history } = this.props
        return (
            <div>You are now at {location.pathname}</div>
        )
    }
}

// 使用方式
export default withRouter(ShowTheLocation)
~~~

~~~jsx
import ShowTheLocation from './components/ShowTheLocation'

render() {
    return <ShowTheLocation />
}
~~~























### v6

***[React Router](https://reactrouter.com/)***

#### 安装

~~~cmd
npm install react-router-dom
~~~















#### 注册路由

- [x] 将`<Router>`的`component`更换为`element`
- [x] 不支持`<Route>`标签内包裹子组件

~~~jsx
{/* 注册路由 */}
<Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
</Routes>
~~~















#### 默认属性

- [x] v6路由使用 `useLocation`, `useNavigate`获取默认属性

~~~jsx
import { useLocation, useNavigate } from 'react-router'

const location = useLocation(); // { ... }
const navigate = useNavigate(); // { ... }
~~~



















#### NavLink

- [x] 移除`activeClassName, activeStyle`
- [x] 不需要`exact`属性，默认精准匹配

~~~jsx
// 引入
import { NavLink } from "react-router-dom";

// 使用
<NavLink
    to="/"
	className={({ isActive }) =>
			isActive ? "green" : "blue"
    	}
    >
	Home
</NavLink>
~~~















#### Routes

- [x] 将`v5`的`<Switch>`更改为`<Routes>`

~~~jsx
render() {
    return (
        <Routes>
            ....
        </Routes>
    );
}
~~~



















#### Navigate

- [x] 将`<Redirect>`替换为`<Navigate>`

~~~jsx
{/* 当path='/'时,重定向到 '/home' */}
<Route path="/" element={<Navigate to="/home" replace />}/>
~~~























### ⬜组件标签体内容

> ==***通过 `this.props.children` 可获取组件标签体内容***==

~~~jsx
class BaseNavLink extends Component {
    render() {
        // children 获取标签体内容
        return <div>{ this.props.children }</div>
    }
}

class App exnteds Component {
    render() {
        return (
            <BaseNavLink>content</BaseNavLink>
        );
    }
}
~~~

~~~html
<!-- result -->
<div>content</div>
~~~

















### 🚫解决样式丢失

1. ==*使用以 `/`开头形式的路径访问*==
2. ==*使用以 `%PUBLIC_URL%/` 形式的路径访问*==
3. ==*使用路由的 <span style=color:red;>`HashRouter`哈希模式</span>*==















### 路由替换

> ==***`replace` 替换历史记录堆栈中的当前条目***==

~~~jsx
{/* 方式一 */}
<Link replace={true} to="/home">home</Link>
<Link replace to="/home">home</Link>

{/* 方式二(v6) */}
<NavLink replace to="/home">home</NavLink>
~~~























### 🔲嵌套路由

+ ==**`v5`**==

  + ==***父路由***==

    ~~~jsx
    render() {
        return (
            <NavLink to="/header">header</NavLink>
            <Routes>
                {/* 嵌套路由 */}
                <Route path="/header" component={Header}/>
            </Routes>
        );
    }
    ~~~

  + ==***子路由***==

    ~~~jsx
    render() {
        return (
            {/* 路由链接 */}
            <NavLink to="/header/left">Tab left</NavLink>
            <NavLink to="/header/right">Tab right</NavLink>
            {/* 路由默认是模糊匹配；所以可向下匹配 '/header/*' */}
            <Routes>
        		<Route path="/header/left" component={Left} />
        		<Route path="/header/right" component={Right} />
            </Routes>
        );
    }
    ~~~

+ ==**`v6`**==

  - ==***父路由***==

    ~~~jsx
    render() {
        return (
            <NavLink to="/header">header</NavLink>
            <Routes>
                {/* 嵌套路由, v6路由默认精准匹配；所以需要在 path 后面添加 '/*' */}
                <Route path="/header/*" element={<Header/>}/>
            </Routes>
        );
    }
    ~~~

  - ==***子路由***==

    ~~~jsx
    render() {
        return (
            {/* 路由链接 */}
            <NavLink to="/header/left">Tab left</NavLink>
            <NavLink to="/header/right">Tab right</NavLink>
            {/* 不需要添加前缀(父级路由path) */}
            <Routes>
        		<Route path="/left" element={<Left/>} />
        		<Route path="/right" element={<Right/>} />
            </Routes>
        );
    }
    ~~~

    



















### ⚫使用参数

#### Params形式

+ **`v5`**

  + ==***父组件***==

    ~~~jsx
    render () {
        const item = {  id: 1, name: 'linke' };
        return (
            <div>
                {/* 向路由组件传递props参数 */}
    			<Link to={`/item/${item.id}/${item.name}`} >{item.id}</Link>
    	        {/* 声明接收params参数 */}
    			<Route path="/item/:id/:name" component={Item} />
            </div>
        );
    }
    ~~~

  + ==***子组件***==

    ~~~jsx
    // 获取参数
    this.props.match.params; // { id, name }
    ~~~

+ **`v6`**

  + ==***父组件***==

    ~~~jsx
    <Link to={`/item/${item.id}/${item.name}`} >{item.id}</Link>
    <Routes>
        {/* 声明接收parasms参数 */}
    	<Route path="/item/:id/:name" element={<Item/>} />
    </Routes>
    ~~~

  + ==***子组件***==

    ~~~jsx
    import { useParams } from 'react-router-dom';
    
    // 获取参数
    const params = useParams(); // { id, name }
    ~~~

    













#### Search形式

+ **`v5`**

  + ==***父组件***==

    ~~~jsx
    render () {
        const item = {  id: 1, name: 'linke' };
        return (
            <div>
                {/* 向路由组件传递search参数 */}
    			<Link to={`/itme?id=${item.id}&name=${item.name}`} >{item.id}</Link>
    	        {/* search参数无需声明接收 */}
    			<Route path="/item" component={Item} />
            </div>
        );
    }
    ~~~

  + ==***子组件***==

    ~~~jsx
    // 获取参数
    const queryStr = this.props.location.search; // ?id=xx&name=xx
    
    // 解析参数(方式1)
    // 引入 React内置的 querystringify
    import qs from 'querystringify'
    qs.parse(queryStr) // { id, name }
    
    // 方式2
    new URLSearchParams(queryStr)
    ~~~

+ **`v6`**

  + ==***父组件***==

    ~~~jsx
    {/* 向路由组件传递search参数 */}
    <Link to={`/itme?id=${item.id}&name=${item.name}`} >{item.id}</Link>
    {/* search参数无需声明接收 */}
    <Route path="/item" element={<Item/>} />
    ~~~

  + ==***子组件***==

    ~~~jsx
    // 获取参数
    const searchStr = this.props.location.search; // ?id=xx&name=xx
    
    // 解析参数(新增解析参数API)
    import { useSearchParams } from "react-router-dom";
    const [searchParams] = useSearchParams();
    ~~~

















#### State形式

+ **`v5`**

  + ==***父组件***==

    ~~~jsx
    render () {
        const item = {  id: 1, name: 'linke' };
        return (
            <div>
                {/* 向路由组件传递state参数 */}
    			<Link to={{ pathname: '/item', state: { id: item.id, name: item.name } }} >{item.id}</Link>
    	        {/* state参数无需声明接收 */}
    			<Route path="/item" component={Item} />
            </div>
        );
    }
    ~~~

  + ==***子组件***==

    ~~~jsx
    // 获取参数
    this.props.location.state; // { id, name }
    ~~~

+ **`v6`**

  + ==***父组件***==

    ~~~jsx
    {/* 向路由组件传递state参数 */}
    <Link to='/item', state: { id: item.id, name: item.name } >{item.id}</Link>
    {/* state参数无需声明接收 */}
    <Route path="/item" element={<Item/>} />
    ~~~

  + ==***子组件***==

    ~~~jsx
    // 获取参数
    import { useLocation } from 'react-router';
    const { state } = useLocation(); // { id, name }
    ~~~























### :airplane:编程式导航

#### push

> ~~~jsx
> // v5
> this.props.history.push(path[, state])
> ~~~
>
> ==***该个方法会向 `history` 栈添加一个新的记录，当点击浏览器后退按钮时，会回到之前的 `URL`***==

~~~jsx
const item = {  id: 1, name: 'linke' };

// 带参数
this.props.history.push(`/item/${item.id}`) // params参数
this.props.history.push(`/item?id=${item.id}`) // search参数
this.props.history.push('/item', item) // state参数
~~~

















#### replace

> ~~~jsx
> // v5
> this.props.history.replace(path[, state])
> ~~~
>
> ==***方法作用类似于 `history.push`，不同的是不会向 `history` 添加新记录，而是取代了当前的记录***==

















#### 🔜🔙前进回退

> ~~~jsx
> // v5
> this.props.history.forForward() // 前进一步
> this.props.history.goBack() // 回退一步
> this.props.history.go(n) // n大于0,则前进n步;反之,回退n步
> ~~~















#### :left_right_arrow:useNavigate

- [x] 将`v5`中将编程式导航替换为 `useNavigate` 函数

> ~~~jsx
> // v6
> import { useNavigate } from "react-router-dom";
> 
> const navigate = useNavigate();
> 
> // 方式1
> navigate(
>     to: To,
>     options?: {
> 	    replace?: boolean;
> 	    state?: any;
>     }
> )
> 
> // 方式2
> navigate(number)
> ~~~
>
> + `to`: 路由的`path`路径
> + `options`: **可选**参数对象
>   + `replace`：是否更换当前记录,**可选**
>   + `state`：携带的`state`数据,**可选**
> + `number`: 在历史记录堆栈中输入的增量

~~~jsx
const item = {  id: 1, name: 'linke' };

navigate('/item') // push
navigate('/item', { replace: true }) // replace

// 方式1
navigate(`/item/${item.id}`) // params参数
navigate(`/item?id=${item.id}`) // search参数
navigate('/item', { state: item }) // state参数

// 方式2
navigate(1) // 前进一步(forward)
navigate(-1) // 回退一步(back)
navigate(5) // 前进五步(go)
~~~























## 🔆Redux

<div style="display: flex; align-items: center;">
    <hr/>
<svg class="icon" style="width: 5em;height: 5em;margin: 0 5px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3626"><path d="M677.461333 673.578667a61.312 61.312 0 0 0-6.570666-122.282667h-2.176a61.098667 61.098667 0 0 0-58.965334 63.317333c1.109333 16.384 7.68 30.592 17.493334 40.405334-37.12 73.130667-93.866667 126.634667-179.072 171.392-57.856 30.549333-117.888 41.472-177.92 33.834666-49.152-6.528-87.338667-28.373333-111.36-64.426666-34.944-53.461333-38.229333-111.36-8.746667-169.173334 20.736-41.514667 53.504-72.106667 74.24-87.338666a588.970667 588.970667 0 0 1-14.208-55.68c-158.293333 114.602667-141.909333 269.653333-93.866667 342.784 36.010667 54.613333 109.184 88.448 189.952 88.448a268.373333 268.373333 0 0 0 65.493334-7.68c139.776-27.306667 245.632-110.250667 305.706666-233.6z" fill="#AB47BC" p-id="3627"></path><path d="M869.589333 538.197333c-82.986667-97.152-205.226667-150.656-344.96-150.656h-17.493333a59.989333 59.989333 0 0 0-53.504-32.768h-2.133333A61.098667 61.098667 0 0 0 392.533333 418.133333a61.312 61.312 0 0 0 61.098667 58.965334h2.218667a61.482667 61.482667 0 0 0 53.461333-37.12h19.626667c83.029333 0 161.621333 24.021333 232.533333 70.954666 54.613333 36.053333 93.909333 82.986667 115.754667 139.776 18.56 45.824 17.493333 90.581333-2.176 128.810667-30.549333 57.856-81.877333 89.514667-149.546667 89.514667a279.210667 279.210667 0 0 1-107.008-22.912c-11.989333 10.88-33.834667 28.373333-49.109333 39.253333 46.933333 21.845333 94.976 33.877333 140.8 33.877333 104.832 0 182.314667-57.856 211.797333-115.712 31.658667-63.317333 29.482667-172.501333-52.394667-265.301333z" fill="#AB47BC" p-id="3628"></path><path d="M315.008 692.138667a61.312 61.312 0 0 0 61.141333 58.965333h2.133334a61.098667 61.098667 0 0 0 59.008-63.36 61.312 61.312 0 0 0-61.141334-58.922667h-2.176c-2.218667 0-5.461333 0-7.68 1.066667-44.757333-74.24-63.317333-155.008-56.746666-242.346667 4.352-65.493333 26.197333-122.282667 64.426666-169.216 31.658667-40.405333 92.757333-60.032 134.272-61.141333 115.712-2.176 164.821333 141.909333 168.106667 199.808 14.208 3.242667 38.229333 10.88 54.613333 16.341333-13.141333-176.853333-122.282667-268.544-227.114666-268.544-98.218667 0-188.842667 70.954667-224.853334 175.786667-50.261333 139.733333-17.493333 274.005333 43.648 379.904a49.066667 49.066667 0 0 0-7.68 31.658667z" fill="#AB47BC" p-id="3629"></path></svg>
    <hr/>
</div>

==***[Redux](https://redux.js.org/introduction/getting-started)是一个使用叫做 `action` 的事件来管理和更新应用状态的模式和工具库,以集中式 `Store（centralized store）`的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新***==

<center><img src="images/redux.png" alt="Redux" style="zoom:50%;" title="Redux" /></center>











### 三大原则

+ <span style=color:red;>**单一数据源**</span>：<span style=color:black;>整个应用的 `state` 存放在唯一的一个 `store` 中</span>
+ <span style=color:red;>**state 是只读的**</span>: <span style=color:black;>唯一改变 `state` 的方法就是触发 `action`</span>
+ <span style=color:red;>**使用纯函数来执行修改**</span>





















### Redux

#### 安装

~~~cmd
# NPM
npm install redux

# Yarn
yarn add redux
~~~





















#### 🌟执行流程

<center><img src="images/redux%E7%9A%84%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.png" alt="执行流程" style="zoom:110%;border: 1px solid silver;" title="执行流程" /></center>

















#### 💡核心属性

+ <div style="display: flex; align-items: center;">
  <svg class="icon" style="width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3626"><path d="M677.461333 673.578667a61.312 61.312 0 0 0-6.570666-122.282667h-2.176a61.098667 61.098667 0 0 0-58.965334 63.317333c1.109333 16.384 7.68 30.592 17.493334 40.405334-37.12 73.130667-93.866667 126.634667-179.072 171.392-57.856 30.549333-117.888 41.472-177.92 33.834666-49.152-6.528-87.338667-28.373333-111.36-64.426666-34.944-53.461333-38.229333-111.36-8.746667-169.173334 20.736-41.514667 53.504-72.106667 74.24-87.338666a588.970667 588.970667 0 0 1-14.208-55.68c-158.293333 114.602667-141.909333 269.653333-93.866667 342.784 36.010667 54.613333 109.184 88.448 189.952 88.448a268.373333 268.373333 0 0 0 65.493334-7.68c139.776-27.306667 245.632-110.250667 305.706666-233.6z" fill="#AB47BC" p-id="3627"></path><path d="M869.589333 538.197333c-82.986667-97.152-205.226667-150.656-344.96-150.656h-17.493333a59.989333 59.989333 0 0 0-53.504-32.768h-2.133333A61.098667 61.098667 0 0 0 392.533333 418.133333a61.312 61.312 0 0 0 61.098667 58.965334h2.218667a61.482667 61.482667 0 0 0 53.461333-37.12h19.626667c83.029333 0 161.621333 24.021333 232.533333 70.954666 54.613333 36.053333 93.909333 82.986667 115.754667 139.776 18.56 45.824 17.493333 90.581333-2.176 128.810667-30.549333 57.856-81.877333 89.514667-149.546667 89.514667a279.210667 279.210667 0 0 1-107.008-22.912c-11.989333 10.88-33.834667 28.373333-49.109333 39.253333 46.933333 21.845333 94.976 33.877333 140.8 33.877333 104.832 0 182.314667-57.856 211.797333-115.712 31.658667-63.317333 29.482667-172.501333-52.394667-265.301333z" fill="#AB47BC" p-id="3628"></path><path d="M315.008 692.138667a61.312 61.312 0 0 0 61.141333 58.965333h2.133334a61.098667 61.098667 0 0 0 59.008-63.36 61.312 61.312 0 0 0-61.141334-58.922667h-2.176c-2.218667 0-5.461333 0-7.68 1.066667-44.757333-74.24-63.317333-155.008-56.746666-242.346667 4.352-65.493333 26.197333-122.282667 64.426666-169.216 31.658667-40.405333 92.757333-60.032 134.272-61.141333 115.712-2.176 164.821333 141.909333 168.106667 199.808 14.208 3.242667 38.229333 10.88 54.613333 16.341333-13.141333-176.853333-122.282667-268.544-227.114666-268.544-98.218667 0-188.842667 70.954667-224.853334 175.786667-50.261333 139.733333-17.493333 274.005333 43.648 379.904a49.066667 49.066667 0 0 0-7.68 31.658667z" fill="#AB47BC" p-id="3629"></path></svg><code>Action</code>: <span style=color:black;><b>动作对象</b></span>
  </div>

  + > <span style=color:black;>**对象有两个属性**</span>
    >
    > + `type(string)`: 标识属性，唯一，**必选**
    > + `data(object)`: 数据属性，**可选**

+ <div style="display: flex; align-items: center;">
  <svg class="icon" style="width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3852"><path d="M677.461333 673.578667a61.312 61.312 0 0 0-6.570666-122.282667h-2.176a61.098667 61.098667 0 0 0-58.965334 63.317333c1.109333 16.384 7.68 30.592 17.493334 40.405334-37.12 73.130667-93.866667 126.634667-179.072 171.392-57.856 30.549333-117.888 41.472-177.92 33.834666-49.152-6.528-87.338667-28.373333-111.36-64.426666-34.944-53.461333-38.229333-111.36-8.746667-169.173334 20.736-41.514667 53.504-72.106667 74.24-87.338666a588.970667 588.970667 0 0 1-14.208-55.68c-158.293333 114.602667-141.909333 269.653333-93.866667 342.784 36.010667 54.613333 109.184 88.448 189.952 88.448a268.373333 268.373333 0 0 0 65.493334-7.68c139.776-27.306667 245.632-110.250667 305.706666-233.6z" fill="#8BC34A" p-id="3853"></path><path d="M869.589333 538.197333c-82.986667-97.152-205.226667-150.656-344.96-150.656h-17.493333a59.989333 59.989333 0 0 0-53.504-32.768h-2.133333A61.098667 61.098667 0 0 0 392.533333 418.133333a61.312 61.312 0 0 0 61.098667 58.965334h2.218667a61.482667 61.482667 0 0 0 53.461333-37.12h19.626667c83.029333 0 161.621333 24.021333 232.533333 70.954666 54.613333 36.053333 93.909333 82.986667 115.754667 139.776 18.56 45.824 17.493333 90.581333-2.176 128.810667-30.549333 57.856-81.877333 89.514667-149.546667 89.514667a279.210667 279.210667 0 0 1-107.008-22.912c-11.989333 10.88-33.834667 28.373333-49.109333 39.253333 46.933333 21.845333 94.976 33.877333 140.8 33.877333 104.832 0 182.314667-57.856 211.797333-115.712 31.658667-63.317333 29.482667-172.501333-52.394667-265.301333z" fill="#8BC34A" p-id="3854"></path><path d="M315.008 692.138667a61.312 61.312 0 0 0 61.141333 58.965333h2.133334a61.098667 61.098667 0 0 0 59.008-63.36 61.312 61.312 0 0 0-61.141334-58.922667h-2.176c-2.218667 0-5.461333 0-7.68 1.066667-44.757333-74.24-63.317333-155.008-56.746666-242.346667 4.352-65.493333 26.197333-122.282667 64.426666-169.216 31.658667-40.405333 92.757333-60.032 134.272-61.141333 115.712-2.176 164.821333 141.909333 168.106667 199.808 14.208 3.242667 38.229333 10.88 54.613333 16.341333-13.141333-176.853333-122.282667-268.544-227.114666-268.544-98.218667 0-188.842667 70.954667-224.853334 175.786667-50.261333 139.733333-17.493333 274.005333 43.648 379.904a49.066667 49.066667 0 0 0-7.68 31.658667z" fill="#8BC34A" p-id="3855"></path></svg><code>Reducer</code>: <span style=color:black;><b>用与初始化状态和加工状态</b></span>
  </div>

  + > <span style=color:black;>**加工时根据旧的`state`值和传过来的`action`,生成新的`state`的值<span style=color:red;>(纯函数)</span>**</span>

+ <div style="display: flex; align-items: center;">
  <svg class="icon" style="width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3836"><path d="M677.461333 673.578667a61.312 61.312 0 0 0-6.570666-122.282667h-2.176a61.098667 61.098667 0 0 0-58.965334 63.317333c1.109333 16.384 7.68 30.592 17.493334 40.405334-37.12 73.130667-93.866667 126.634667-179.072 171.392-57.856 30.549333-117.888 41.472-177.92 33.834666-49.152-6.528-87.338667-28.373333-111.36-64.426666-34.944-53.461333-38.229333-111.36-8.746667-169.173334 20.736-41.514667 53.504-72.106667 74.24-87.338666a588.970667 588.970667 0 0 1-14.208-55.68c-158.293333 114.602667-141.909333 269.653333-93.866667 342.784 36.010667 54.613333 109.184 88.448 189.952 88.448a268.373333 268.373333 0 0 0 65.493334-7.68c139.776-27.306667 245.632-110.250667 305.706666-233.6z" fill="#EF5350" p-id="3837"></path><path d="M869.589333 538.197333c-82.986667-97.152-205.226667-150.656-344.96-150.656h-17.493333a59.989333 59.989333 0 0 0-53.504-32.768h-2.133333A61.098667 61.098667 0 0 0 392.533333 418.133333a61.312 61.312 0 0 0 61.098667 58.965334h2.218667a61.482667 61.482667 0 0 0 53.461333-37.12h19.626667c83.029333 0 161.621333 24.021333 232.533333 70.954666 54.613333 36.053333 93.909333 82.986667 115.754667 139.776 18.56 45.824 17.493333 90.581333-2.176 128.810667-30.549333 57.856-81.877333 89.514667-149.546667 89.514667a279.210667 279.210667 0 0 1-107.008-22.912c-11.989333 10.88-33.834667 28.373333-49.109333 39.253333 46.933333 21.845333 94.976 33.877333 140.8 33.877333 104.832 0 182.314667-57.856 211.797333-115.712 31.658667-63.317333 29.482667-172.501333-52.394667-265.301333z" fill="#EF5350" p-id="3838"></path><path d="M315.008 692.138667a61.312 61.312 0 0 0 61.141333 58.965333h2.133334a61.098667 61.098667 0 0 0 59.008-63.36 61.312 61.312 0 0 0-61.141334-58.922667h-2.176c-2.218667 0-5.461333 0-7.68 1.066667-44.757333-74.24-63.317333-155.008-56.746666-242.346667 4.352-65.493333 26.197333-122.282667 64.426666-169.216 31.658667-40.405333 92.757333-60.032 134.272-61.141333 115.712-2.176 164.821333 141.909333 168.106667 199.808 14.208 3.242667 38.229333 10.88 54.613333 16.341333-13.141333-176.853333-122.282667-268.544-227.114666-268.544-98.218667 0-188.842667 70.954667-224.853334 175.786667-50.261333 139.733333-17.493333 274.005333 43.648 379.904a49.066667 49.066667 0 0 0-7.68 31.658667z" fill="#EF5350" p-id="3839"></path></svg><code>Store</code>: <span style=color:black;><b>状态对象</b></span>
  </div>
  
  + > <span style=color:black;>**将`state`、`action`、`reducer`联系在一起的对象**</span>















#### 基本使用

1. <span style=color:black;>***创建 `src/redux` 目录，并在目录中创建以下文件：***</span>

   1. ***`constant.js`***

      ~~~jsx
      /*
      * 定义模块的action对象中的type类型
      * */
      
      export const
        INCREMENT = 'increment',
        DECREMENT = 'decrement';
      ~~~

   2. ***`action.js`***

      ~~~jsx
      /*
      * 为组件生成action对象
      * */
      
      // 导入常量
      import { INCREMENT, DECREMENT } from './constant'
      
      export const createIncAction = data => ({ type: INCREMENT, data });
      
      export const createDecAction = data => ({ type: DECREMENT, data });
      ~~~

   3. ***`reducer.js`***

      ~~~js
      /*
      * 创建一个为组件服务的reducer函数
      * 函数接收两个参数:
      *   preState: 之前的状态
      *   action: 动作对象
      * */
      
      // 导入常量
      import { INCREMENT, DECREMENT } from './constant'
      
      // 初始化状态
      const initStete = 0
      // 暴露reducer函数
      export default function reducer(preState = initStete, action) {
      
          // 获取数据
          const { type, data } = action
          
          // 根据type加工数据
          switch (type) {
              case INCREMENT:
                  return preState + data
              case DECREMENT:
                  return preState - data
              default:
                  return preState
          }
      }
      ~~~

   4. ***`store.js`***

      ~~~js
      // 引入 createStore 创建redux的核心store对象
      import { createStore } from "redux";
      
      // 引入为组件服务的reducer
      import reducer from './reducer'
      
      // 暴露创建的store
      export default createStore(reducer)
      ~~~

2. <span style=color:black;>***组件中使用***</span>

   1. ==***引入并使用***==

      ~~~jsx
      // 引 store
      import store from '../../redux/store'
      
      // action
      import { createDecAction, createIncAction } from '../../redux/one_action'
      
      export default App {
          render() {
              return (
                  <>
                  	<h3>{store.getState()}</h3>
      	            <button onClick={() => store.dispatch(createDecAction(1))}>++</button>
          	        <button onClick={() => store.dispatch(createIncAction(1))}>--</button>
                  </>
              );
          }
      }
      ~~~

   2. ==***监听状态改变并触发组件更新***==

      1. <a href="#monitorPart">局部监听</a>
      2. <a href="#monitorGlobal">全局监听</a>




















#### 🔈监听更新

 1. *<span style=color:black; id="monitorPart" name="monitorPart">**局部监听**</span>*

      ~~~jsx
      // 监听方式一(局部): 组件内部监听
      componentDidMount() {
          store.subscribe(() => {
              // this.setState({}); // 手动方式一
              this.forceUpdate(); // 手动方式二
          })
      }
      ~~~

2. *<span style=color:black; id="monitorGlobal" name="monitorGlobal">**全局监听**</span>*

      ~~~jsx
      /* src/index.js */
      
      // ...
      import store from './redux/store'
      
      const root = createRoot(document.getElementById('root'));
      root.render(<App/>)
      
      // 监听方式二(全局)
      store.subscribe(() => {
          root.render(
              <React.StrictMode>
                  <App/>
              </React.StrictMode>
          );
      })
      ~~~





















#### Action

+ <span style=color:black;>**同步`action`**</span>

  > :grey_exclamation:==***函数返回值为一般`object`***==

+ <span style=color:black;>**异步`action`**</span>

  > :grey_exclamation:==***函数返回值为`function`***==















##### 异步Action实现

1. <span style=color:black;>***安装***</span>

   ~~~cmd
   npm i redux-thunk
   ~~~

2. <span style=color:black;>***引入***</span>

   ~~~jsx
   /* src/index.js */
   
   // 引入 applyMiddleware 函数
   import { createStore, applyMiddleware } from "redux";
   
   // 引入 redux-thunk
   import thunk from 'redux-thunk'
   
   const reducers = {/* ... */}
   
   // 配置 thunk 中间件
   export default createStore(reducers, applyMiddleware(thunk))
   ~~~

3. <span style=color:black;>***创建异步`action`***</span>

   ~~~jsx
   /* src/redux/action.js */
   
   // 异步action: 函数返回值为function, 默认接收dispatch
   export const createIncAsyncAction = data => dispatch => {
       setTimeout(() => { // 模拟异步任务
           dispatch({/* ... */}) // 可调用同步action
       }, 1000)
   }
   ~~~

















#### 获取状态

~~~jsx
store.getState()
~~~











#### 派发动作

~~~jsx
store.dispatch({
    type: string,
    data: object
})
~~~











#### 订阅事件

~~~jsx
store.subscribe(function)
~~~















#### 合并多个reducer

~~~jsx
combineReducers(reducers)
~~~

~~~jsx
// combineReducers 用于创建store, 并且需要合并多个reducer
import { createStore, combineReducers } from "redux";

// 引入多个reducer
import oneReducer from './one_reducer'
import twoReducer from './two_reducer'

// 合并多个reducer
const reducers = combineReducers({
    oneReducer,
    twoReducer
})

export default createStore(reducers)
~~~























### React Redux

==***[React Redux](https://react-redux.js.org/introduction/getting-started)是 `Redux` 的官方 `React` 绑定库***==

<center><img src="images/React-Redux.png" alt="React-Redux" style="zoom:80%;" title="React-Redux" /></center>



















#### 安装

~~~cmd
# npm
npm install react-redux

# yarn
yarn add react-redux
~~~

















#### 🔰分类

==***`React Redux` 将所有组件分成两大类：***==

1. `UI`组件`(presentational component)`
2. 容器组件`(container component)`













##### UI 组件

+ 只负责 `UI` 的呈现，不带有任何业务逻辑
+ 没有状态(即不使用`this.state`这个变量)
+ 所有数据都由参数(`this.props`)提供
+ 不使用任何 `Redux` 的 `API`















##### 容器组件

+ 负责管理数据和业务逻辑，不负责 `UI` 的呈现
+ 带有内部状态
+ 使用 `Redux` 的 `API`















##### 总结

> :grey_exclamation:==***`UI` 组件负责 `UI` 的呈现，容器组件负责管理数据和逻辑***==
>
> :grey_exclamation:==***如果一个组件既有 `UI` 又有业务逻辑,则将拆分成下面的结构: <span style=color:red;><u>外面是一个容器组件，里面包了一个`UI`组件;前者负责与外部的通信，将数据传给后者，由后者渲染出视图</u></span>***==









## ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>

