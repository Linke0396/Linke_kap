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
  
    



















## 路由

### v5

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
         // 必须使用 BrowserRouter/BrowserRouter 包裹路由链接
         <BrowserRouter>
             <App/>
         </BrowserRouter>
         , document.getElementById('root'));
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
                     <Route path="/home" component={<Home />} />
                     <Route path="/login" component={<Login />} />
                 </Routes>
             </div>
         );
     }
     ~~~























### v6

#### 安装

~~~cmd
npm install react-router-dom
~~~













#### 基本使用

~~~jsx
import React, { Component } from 'react';

// 1.导入 react-router
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

// 2.引入路由组件
import Home from "./components/Home";
import Login from "./components/Login";

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 必须使用 BrowserRouter 包裹路由链接 */}
                <BrowserRouter>
                    {/* 2.定义路由链接 */}
                    <Link to="/home">home</Link>
                    <Link to="/login">login</Link>
                    
                    {/* 3.注册路由 */}
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
~~~





