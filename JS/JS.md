[TOC]

# JavaScript

****

***客户端脚本语言：不需要编译，直接就可以被浏览器解析执行***

<center><img src="images/JavaScrpit.png" alt="JavaScript" style="zoom:30%;" title="JavaScript" /></center>





## 🍀*概念*

==**运行在客户端游览器中，每一个浏览器都有*`JavaScript`*的解析引擎**==

<img src="images/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83.png" alt="浏览器运行环境" style="zoom:70%;" title="浏览器运行环境"/>







## 🧩组成

$$
JavaScript  =   ECMAScript  ➕  JavaScript(BOM➕DOM)
$$

<img src="images/JavaScript%E7%9A%84%E7%BB%84%E6%88%90.png" alt="JavaScript的组成" style="zoom:60%;border: 2px solid;" title="JavaScript的组成" />











<center><img src="images/ECMAScript.png" alt="ECMAScript" title="ECMAScript" /></center>

## *ECMAScript*

==***客户端脚本语言标准***==





### 🔆基本语法

+ ###### 🔖与 `html` 的结合方式

  1. ###### 1️⃣内部`js`	:	定义**`<script>`**，标签体内容就是**`js`**代码

  2. ###### 2️⃣外部`js` 	:	定义**`<script>`**，通过**`src`**属性引入外部的**`js`**文件

  3. ###### 3️⃣行内`js`

     + ```html
       <input type="button" value="点" onclick="javascript:alert('js行内脚本')"/> 
       ```

  4. ###### ❗注意

     + ❗*<span style=color:red;>`<script>`标签可以放在`html`文件中的任意位置，但是定义的位置会影响执行顺序</span>*
     + ❗*<span style=color:red;>`<script>`标签可以定义多个**`<script>`**标签可以定义多s个</span>*

+ ###### 🍁注释

  + ```javascript
    // 单行注释
    /* 多行注释 */
    ```







### 💡JavaScript作用域

+ <span style=color:red;>**全局作用域**</span>
+ <span style=color:red;>**局部作用域**</span>

```html
<script>
    // 全局作用域(整个script标签/js文件)
    function fun() {
        // 局部作用域(只在函数内部起作用)
    }
</script>
```







## 🌲数据类型

+ ###### *基本数据类型*

+ ###### *引用数据类型*





### 🍃基本数据类型

> :grey_exclamation:<span style=color:red;>**存储变量时存储的是值本身**</span>

+ **`number`**	:	**数字**

  + >1. ###### 整型
    >
    >2. ###### 小数
    >
    >3. ###### `NaN(not a number)` : 一个不是数字的数字
    >
    >```javascript
    > // 八进制,数字前加 0
    >var num1 = 010;
    >num1 // 8
    >
    >// 十六进制,数字前面加 0x
    >var num2 = 0x9;
    >num2 // 9
    >```

+ **`String`**	:	**字符串**

  + |  转义符  |   解释   |
    | :------: | :------: |
    | **`\n`** | *换行符* |
    | **`\\`** |  *斜杠*  |
    | **`\‘`** | *单引号* |
    | **`\"`** | *双引号* |
    | **`\t`** |  *缩进*  |
    | **`\b`** |  *空格*  |

+ **`boolean`	:	布尔**

  + >1. ###### `true` : 真
    >
    >2. ###### `false` : 假

+ **`null` :  空**

+ **`undefined` :  未定义**

  + >***如果一个变量没有初始值,则会被默认赋值为`undefined`***







### 🍂引用数据类型

> <span style=color:red;>**通过** **`new`** **关键字创建的对象，在存储时变量存储的仅仅是地址**</span>

+ ###### 对象

  + ```javascript
    /*
    对象的定义:对象属性是 name:value 对，由逗号分隔
    	a -- key
    	"aaa" -- value
    */
    var xxr = {firstName:"Bill", lastName:"Gates"};
    xxr // [object Object]
    typeof(xxr) // object
    
     //两种方式访问对象的属性
    xxr.firstName
    xxr["lastName"]
    ```

+ ###### 数组

  + ```javascript
    var aar = ['a',1,"ABC"];
    aar // a,1,ABC  
    typeof arr // object
    ```









## 🍉宏队列与微队列

>     ❗==***`js`是单线程运行的，从头到尾顺序执行，如果是<span style=color:red;><u>同步代码立即执行</u></span>；如果是<u><span style=color:red;>异步事件，按类型分别放入宏队列和微队列排队执行</span>*</u>**==

***`JS`中用来<span style=color:red;>存储待执行回调函数的队列包含 `2` 个不同特定的列队</span>***

+ <span style=color:red;>**宏队列**：用来保存待执行的宏任务（回调）</span>，比如：==***`定时器`回调/`DOM`事件回调/`ajax`回调***==

+ <span style=color:red;>**微队列**：用来保存待执行的微任务（回调）</span>，比如：==***`Promise`回调/`Mutation`回调/`I/O` 操作/`UI` 渲染***==

```javascript
log = (...arg) => console.log(...arg);

Promise.resolve().then(() => log("p1")) // 微队列1
log('同步1'); // 同步1
setTimeout(() => { // 宏队列
    log('st..同步..'); // 同步
    Promise.resolve().then(() => log("st...p1")); // 微队列
}, 0);
Promise.resolve().then(() => log("p2")) // 微队列2
log('同步2'); // 同步2

// 执行结果
同步1
同步2
p1
p2
st..同步..
st...p1
```





### js 异步的执行机制

1. ###### 1️⃣*`JS`引擎首先必须 ==**先执行所有的初始化同步任务代码**==*

2. ###### 2️⃣*第二步 ==**将所有的微任务一个一个取出来执行**==*

3. ###### 3️⃣*最后再 ==**取出宏任务执行**==*









## 🔅Fetch

==***`Fetch`被称之为下一代 `Ajax`技术，内部采用 `Promise`方式来处理数据***==



### 🍓特点

+ ###### `API`语法简明易用

+ ###### 采用模块化设计，`API`分散与多个对象中

+ ###### 通过数据流`(Stream对象)`处理数据，可分块读取数据，有利于提高网络性能





### 简单使用

```javascript
// fetch 的 get方式请求
fetch('http://localhost:8080/TestRequest/user/queryUsers')
.then(res => {
    console.log(res); // Response 对象
    return res.json(); // 一个异步操作,表示取出的内容,装换为JSON对象
}).then(data => { // 经过 res.json() 处理之后的数据
    console.log(data);
}).catch(err => { // 捕获异常信息
    console.warn(err);
});
```







#### get

>```javascript
>fetch(url)
>```
>
>:grey_exclamation:*`fetch()`接受一个 `URL` 字符串作为参数，默认向该网址发出 `GET` 请求，返回一个 `Promise` 对象*

```javascript
// 使用 await 封装 fetch
async function getData() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
```





#### post

> ```javascript
> fetch(url,request)
> ```
>
> :grey_exclamation:*`fetch()`的第一个参数是 `URL`，还可以接受第二个参数 `Request`，作为配置对象，定制发出 `HTTP` 请求*

```javascript
const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' // post
    },
    body: 'id=1'
});
const json = await res.json();
```





##### 提交 JSON 数据

```javascript
const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8' // json
    },
    body: JSON.stringify({ id: 1 })
});
const json = await res.json();
```





##### 提交 FormData 数据

```javascript
const form = new FormData();
form.append('id', 1);
const res = await fetch(url, {
    method: 'POST',
    body: form
});
const json = await res.json();
```











### Headers API

==**操作标头**==

|               方法               |                          作用                          |
| :------------------------------: | :----------------------------------------------------: |
| **`Headers.append(name,value)`** |                       *添加标头*                       |
|   **`Headers.set(key,value)`**   | *将指定的键名设置为新的键值，如果该键名不存在则会添加* |
|      **`Headers.get(key)`**      |               *根据指定的键名，返回键值*               |
|      **`Headers.has(key)`**      |         *返回一个布尔值，表示是否包含某个标头*         |
|    **`Headers.delete(kay)`**     |                       *删除标头*                       |
|       **`Headers.keys()`**       |         *返回一个遍历器，可以依次遍历所有键名*         |
|      **`Headers.values()`**      |         *返回一个遍历器，可以依次遍历所有键值*         |
|     **`Headers.entries()`**      |        *返回一个遍历器，可以依次遍历所有键值对*        |
|     **`Headers.forEach()`**      |      *依次遍历标头，每个标头都会执行一次参数函数*      |







### 🔶Request API

#### <span style=font-family:consolas,Microsoft YaHei>method，headers，body</span>

+ **`method`**	:	==**请求使用的方法**==
+ **`headers`**	:	==**请求的头信息**==
+ **`body`**	:	==**`POST` 请求的数据体**==





#### <span style=font-family:consolas,Microsoft YaHei>cache</span>

==**指定如何处理缓存**==

|        value         |                             作用                             |
| :------------------: | :----------------------------------------------------------: |
|    **`default`**     |           ***默认值**，先在缓存里面寻找匹配的请求*           |
|    **`no-store`**    |             *直接请求远程服务器，并且不更新缓存*             |
|     **`reload`**     |              *直接请求远程服务器，并且更新缓存*              |
|    **`no-cache`**    | 将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存 |
|  **`force-cache`**   |     *缓存优先，只有不存在缓存的情况下，才请求远程服务器*     |
| **`only-if-cached`** |      *只检查缓存，如果缓存里面不存在，将返回`504`错误*       |





#### <span style=font-family:consolas,Microsoft YaHei>mode</span>

==**指定请求的模式**==

|       value       |                             作用                             |
| :---------------: | :----------------------------------------------------------: |
|    **`cors`**     |                  ***默认值**，允许跨域请求*                  |
| **`same-origin`** |                       *只允许同源请求*                       |
|   **`no-cors`**   | *请求方法只限于 `GET`、`POST` 和 `HEAD`，并且只能使用有限的几个简单标头，<br>不能添加跨域的复杂标头，相当于提交表单所能发出的请求* |





#### <span style=font-family:consolas,Microsoft YaHei>credentials</span>

==**指定是否发送 `Cookie`**==

|       value       |                          作用                           |
| :---------------: | :-----------------------------------------------------: |
| **`same-origin`** | ***默认值**，同源请求时发送 `Cookie`，跨域请求时不发送* |
|   **`include`**   |     *不管同源请求，还是跨域请求，一律发送 `Cookie`*     |
|    **`omit`**     |                      *一律不发送*                       |







#### <span style=font-family:consolas,Microsoft YaHei>redirect</span>

==**指定 `HTTP` 跳转的处理方法**==

|    value     |                             作用                             |
| :----------: | :----------------------------------------------------------: |
| **`follow`** |           ***默认值**，`fetch()`跟随 `HTTP` 跳转*            |
| **`error`**  |               *如果发生跳转，`fetch()`就报错*                |
| **`manual`** | *`fetch()`不跟随 HTTP 跳转，<br>但是`response.url`属性会指向新的 `URL`，`response.redirected`属性会变为`true`，<br>自己决定后续如何处理跳转* |





#### <span style=font-family:consolas,Microsoft YaHei>integrity</span>

==**指定一个哈希值，用于检查 `HTTP` 回应传回的数据是否等于这个预先设定的哈希值**==

> *下载文件时，检查文件的 `SHA-256` 哈希值是否相符，确保没有被篡改*





#### <span style=font-family:consolas,Microsoft YaHei>referrer</span>

==**用于设定`fetch()`请求的`referer`标头**==

> *可以为任意字符串，也可以设为空字符串（即不发送`referer`标头）*





#### <span style=font-family:consolas,Microsoft YaHei>referrerPolicy</span>

==**设定`Referer`标头的规则**==

|                 value                 |                             作用                             |
| :-----------------------------------: | :----------------------------------------------------------: |
|   **`no-referrer-when-downgrade`**    | ***默认值**，总是发送`Referer`标头，<br>除非从 `HTTPS` 页面请求 `HTTP` 资源时不发送* |
|           **`no-referrer`**           |                    *不发送`Referer`标头*                     |
|             **`origin`**              |              *标头只包含域名，不包含完整的路径*              |
|    **`origin-when-cross-origin`**     |  *同源请求`Referer`标头包含完整的路径，跨域请求只包含域名*   |
|           **`same-origin`**           |           *跨域请求不发送`Referer`，同源请求发送*            |
|          **`strict-origin`**          | *`Referer`标头只包含域名，<br>`HTTPS` 页面请求 `HTTP` 资源时不发送`Referer`标头* |
| **`strict-origin-when-cross-origin`** | *同源请求时`Referer`标头包含完整路径，<br>跨域请求时只包含域名，<br>`HTTPS` 页面请求 `HTTP` 资源时不发送该标头* |
|           **`unsafe-url`**            |            *不管什么情况，总是发送`Referer`标头*             |







### 🔷Response API

#### 属性

+ **`ok`**

  + > 返回一个布尔值，表示请求是否成功，`true`对应 `HTTP` 请求的状态码 `200` 到 `299`，`false`对应其他的状态码

+ **`status`**

  + > 返回一个数字，表示 `HTTP` 回应的状态码

+ **`statusText`**

  + > 返回一个字符串，表示 `HTTP` 回应的状态信息

+ **`url`**

  + > 返回请求的 `URL`。如果 `URL` 存在跳转，该属性返回的是最终 `URL`

+ **`redirected`**

  + > 返回一个布尔值，表示请求是否发生过跳转

+ **`body`**

  + > 返回一个 `ReadableStream` 对象，可以用来分块读取内容

+ **`type`**

  + |        value         |                             说明                             |
    | :------------------: | :----------------------------------------------------------: |
    |     **`basic`**      |                    *普通请求，即同源请求*                    |
    |      **`cors`**      |                          *跨域请求*                          |
    |     **`error`**      |                          *网络错误*                          |
    |     **`opaque`**     |                   *发出的是简单的跨域请求*                   |
    | **`opaqueredirect`** | *`fetch()`请求的`redirect`属性设为`manual`，<br>响应的状态为 0，标头为空，正文为空，尾部为空* |

    





#### 方法

|        方法         |              作用               |
| :-----------------: | :-----------------------------: |
|    **`text()`**     |        *返回文本字符串*         |
|    **`json()`**     |       *返回 `JSON` 对象*        |
|    **`blob()`**     |    *返回二进制 `Blob` 对象*     |
|  **`formData()`**   |   *返回 `FormData` 表单对象*    |
| **`arrayBuffer()`** | *返回二进制 `ArrayBuffer` 对象* |
|    **`clone()`**    |   *创建`Response`对象的副本*    |











### ⭐封装拦截器

🔗[fetchs](./js/fetchs.js)





#### 导入

```js
import fetchs from './fetchs.js';
```







#### 基本使用

```js
// 请求发送之前的拦截器
fetchs.interceptors.request.use(function (config) {
    console.log('在请求发送之前执行的回调函数...', config);
    return config;
});

// 请求完成之后的拦截器
fetchs.interceptors.response.use(function (response) {
    console.log('在请求完成之后执行的回调函数...', response);
    return response;
});

// 发起请求
fetchs('http://localhost:8080/TestRequest/user/queryUsers').then(async res => {
    let data = await res.json();
    console.log(data); // { /* ... */ }
});

// 执行结果
在请求发送之前执行的回调函数... {method: 'GET', …}
在请求完成之后执行的回调函数... Response {type, url, redirected, …}
{ … }
```







#### 删除拦截器

```js
/*
	fetchs.interceptors.request.eject(reqIntercept);  // 删除请求发送之前的拦截器
    fetchs.interceptors.response.eject(resIntercept); // 删除请求完成之后的拦截器
*/

let reqIntercept = fetchs.interceptors.request.use(function () {/*...*/});
fetchs.interceptors.request.eject(reqIntercept); // 删除拦截器
```







