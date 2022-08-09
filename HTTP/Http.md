[TOC]

# 🪁Axios

*==**`Axiso` 是专注于<span style=color:red;>网络数据请求</span>的库，<span style=color:red;>使用简单</span>，<span style=color:red;>轻量级</span>，只专注于网络数据请求**==*







## get()

> ```javascript
> axios.get(url?key=value=).then(function(response){},function(err){})
> ```
>
> **`url` :  服务器地址**
>
> ​		**==`key=value=`== :  参数字符串，多个参数`&`连接**
>
> **`function(response){}` :  请求成功时执行的回调函数**
>
> ​		**==response== :  响应内容**
>
> **`function(err){}` :  请求失败时执行的回调函数**
>
> ​		**==err==  :  错误信息**

```javascript
axios.get(`http://localhost:8080/TestRequest/user/queryUsers?id=1`)
.then(res => {
    console.log(res.data);
}, err => {
    console.warn(err);
});
```









## post()

>```javascript
>axios.post(url,{kay:values}).then(function(response){},function(err){})
>```
>
>**`url` :  服务器地址**
>
>​		**==`{kay:value}`== : 参数对象，多个参数`,`连接**
>
>**`function(response){}` :  请求成功时执行的回调函数**
>
>​		**==response== :  响应内容**
>
>**`function(err){}` :  请求失败时执行的回调函数**
>
>​		**==err==  :  错误信息**

```javascript
axios.post(`http://localhost:8080/TestRequest/user/queryUsers`, { id: 1 })
.then(res => {
    console.log(res.data);
}, err => {
    console.warn(err);
});
```







## axios()

> ```javascript
> axios({config}).then(function(response){},function(err){})
> ```
>
> **`config` :  配置 `axios` 请求**
>
> ​		**`method` : 请求类型**
>
> ​		**`url` : 服务器地址**
>
> ​		**`data` : `POST`请求数据，数据以对象`{}`形式**
>
> ​		**`params` : `GET`请求数据，数据以对象`{}`形式**

```javascript
// get
axios({
    method: 'GET',
    url: 'http://localhost:8080/TestRequest/user/queryUsers',
    params: {
        id: 2
    }
}).then(res => {
    console.log(res.data);
}, err => {
    console.warn(err);
});

// axios(post)
axios({
    method: 'POST',
    url: 'http://localhost:8080/TestRequest/user/postAxios',
    data: {
        id: 1
    },
}).then(res => {
    console.log(res.data);
}, err => {
    console.warn(err);
});
```









# 🪐同源策略

> *==**如果两个页面的<span style=color:red;>协议</span>，<span style=color:red;>域名</span>和<span style=color:red;>端口</span>都相同，则两个页面具有<span style=color:red;>相同的源</span>**==*
>
> ==**<span style=color:red;>同源策略</span>（`Same origin policy`）是<span style=color:red;>浏览器</span>提供的一个<span style=color:red;>安全功能</span>**==





## 🍀概念

> :grey_exclamation:*==<span style=color:red;><u>同源策略限制了从同一个源加载的文档或脚本任何与来自另一个源的资源进行互相</u></span>==*
>
> *==这是一个用于隔离潜在恶意文件的重要安全机制==*









# 🌌跨域

## 🍀概念

> :grey_exclamation:==*两个`ULR`的<span style=color:red;>协议</span>，<span style=color:red;>域名</span>，<span style=color:red;>端口</span>中<u>至少一个不相同</u>，就是<span style=color:red;>跨域</span>*==
>
> *==出现跨域的根本原因：<span style=color:red;>**浏览器的同源策略**</span>不允许非同源的 `URL` 之间进行资源的交互==*

<img src="images/%E8%B7%A8%E5%9F%9F.png" alt="跨域" style="zoom:50%;border:1px solid;" title="浏览器对跨域请求的拦截" />

> :grey_exclamation:==***浏览器跨域请求成功，服务器也可以成功响应数据，但是响应回来的数据会被浏览器的<span style=color:red;>同源策略</span>拦截，让页面无法接收数据***==





## 解决方案

1. ==***JSONP* **==: ***一种<span style=color:red;>临时解决方案</span>，兼容性好，<u>只支持 `GET` 请求</u>***
2. ==***CORS***==: ***<span style=color:red;>W3C 标准，属于跨域 `Ajax` 的根本解决方案</span>，支持 `GET` 和 `POST `请求***







### **JSONP**

> :grey_exclamation:==***JSONP***==*`(JSON with Padding)` 是 `JSON` 的一种<span style=color:red;>"使用模式"</span>*
>
> ***可用于解决主流浏览器的跨域数据访问的问题***





#### 原理

> **实际上 `<script>`标签 中的 `src` 属性中可以放的不止 `JS` 这一种文件类型，也可以是一个网站地址**
>
> :grey_exclamation:==**通过`<script>`标签的`src`属性，请求跨域的接口，并通过<span style=color:red;>函数调用</span>的形式，接收跨域接口响应的数据**==





#### 简单使用

```html
// 函数必须声明在 jsonp 的前面
<script>
    function success(data) {
        console.log(data);
    }
</script>

// jsonp
<script src="http://localhost:8080/TestRequest/user/jsonp?callback=success&id=1"></script>
```





#### 封装函数

```javascript
// 封装 jsonp 函数
function jsonp(options) {
    const script = document.createElement('script');
    // 创造一个独一无二的函数名
    const myFn = 'myJsonp' + Math.random().toString().replace('.', '');
    // 全局创建此函数，以便后面执行 script 中代码的时候能找到 myFn
    window[myFn] = options.success;
    // 拼接参数
    let params = '';
    for (let k in options.data) params += '&' + k + '=' + options.data[k];
    // 拼接请求地址
    script.src = options.url + '?callback=' + myFn + params;
    document.body.appendChild(script);
    script.onload = () => {
        document.body.removeChild(script);
    }
}

// 调用 jsonp()
jsonp({
    url: 'http://localhost:8080/TestRequest/user/jsonp',
    data: {
        id: 1
    },
    success: function (data) {
        console.log(data);
    }
});
```







#### 接口

> :grey_exclamation:==***如果项目中已经配置了 `CORS` 跨域资源共享，为了防止冲突，必须在配置 `CORS` 中间件之前声明 `JSONP` 的接口***==

```js
app.get('/api/jsonp', (req, res) => {
    // 获取函数名称
    const callback = req.query.callback;
    // 服务器数据
    const data = req.query;
    // 拼接函数调用的字符串,并响应
    res.send(`${callback}(${JSON.stringify(data)})`);
});
```









### **CORS**

> :grey_exclamation:==***CORS***==*`(Cross-Origin Resource Sharing)`* *<span style=color:red;>**跨域资源共享**</span>，**由一系列 `HTTP `响应头组成，***
>
> ***这些<span style=color:red;>HTTP 响应头决定浏览器是否阻止前端`JS`代码跨域获取资源</span>***
>
> ###### :grey_exclamation:*使用 `CORS` 的时候，客户端的代码不需要修改，在服务端作相应的配置皆可*

<img src="images/cors.png" alt="cors" style="zoom:60%;border:2px solid;" title="CORS" />





#### 响应头

|             响应头字段             |                             作用                             |
| :--------------------------------: | :----------------------------------------------------------: |
| **`Access-Control-Allow-Origin`**  | **指定允许访问该资源的外域 `URL`，可用<span style=color:skyblue>通配符`*`</span>** |
| **`Access-Control-Allow-Headers`** |                        **预检请求头**                        |
| **`Access-Control-Allow-Methods`** |             **指明请求所允许使用的 `HTTP` 方法**             |





#### 🔅分类

+ ###### ==***简单请求`（simple request）`***==：*只会发生一次请求*

+ ###### ==***非简单请求`（not-so-simple request）`***==：*会发生两次请求，`OPTION`预检请求成功之后，才会发起真正的请求*





##### 简单请求

> :grey_exclamation:==***简单请求发送一次请求，数据拿回来，但是被浏览器同源策略拦截了***==
>
> ❗<span style=color:red;>**满足条件**</span>
>
> 1. ==***请求方式：`GET`、`POST`、`HEAD` 三者之一***==
>
> 2. ==***`HTTP`的头信息不超出以下几种字段***==
>
>    + ```txt
>      Accept、Accept-Language、Content-Language、DPR、
>      Downlink、Save-Data、Viewport-Width、Width
>      ```
>
>    + ```txt
>      Content-Type:
>      只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
>      ```







##### 非简单请求

>==***会在正式通信之前，增加一次`HTTP`查询请求，称为<span style=color:red;>预检</span>请求`	(preflight)`，只有<span style=color:red;>预检</span>通过后才再发送一次请求用于数据传输***==
>
>❗❗==***浏览器发送`OPTION` 请求先询问服务器，当前网页所在的域名是<span style=color:red;>否在服务器的许可名单</span>之中，以及<span style=color:red;>可以使用哪些`HTTP`动词和头信息字段</span>。只有得到肯定答复，浏览器才会发出正式的请求，否则就报错***==
>
>❗<span style=color:red;>**满足条件**</span>
>
>1. ==***请求方式为 `GET`、`POST`、`HEAD` 之外的请求类型***==
>2. ==***请求头中包含自定义头部字段***==
>3. ==***发送 `application/json` 格式的数据***==







#### 🌟支持跨域

+ **简单请求**

  + ```js
    // 服务器设置响应头：Access-Control-Allow-Origin = ‘域名’ 或 ‘*’
    res.setHeader('Access-Control-Allow-Origin', '*');
    ```

+ **非简单请求**

  + ```js
    /*
    	“预检”请求时，允许请求方式则需服务器设置响应头: Access-Control-Request-Method
    	“预检”请求时，允许请求头则需服务器设置响应头: Access-Control-Request-Headers
    */
    if (req.method == 'OPTIONS') {
    	res.setHeader('Access-Control-Allow-Methods', 'POST');
    	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
    ```







#### 中间件

+ ##### *自定义中间件函数*

  + ```js
    // 挂载全局中间件
    app.use((req, res, next) => {
        // 简单请求解决
        res.setHeader('Access-Control-Allow-Origin', '*');
        // 非简单请求的解决
        if (req.method == 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Methods', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        }
        next();
    });
    ```

+ ##### *第三方中间件*

  + ```cmd
    # 安装
    npm install cors
    ```

  + ```js
    // 引入 cors 第三方模块解决跨域
    const cors = require('cors');
    
    // 挂载全局中间件
    app.use(cors());
    ```











# ⭐HTTP

==***`Hyper Text Transfer Protocol`***==***协议[ <span style=color:skyblue;>超文本传输协议</span> ] ，协详规定了浏览器和万维网服务器之间互相通信的规则***





## 通信协议

***<span style=color:red;>通信协议</span>`(Communication Protocol)` 是指通信的双方完成通信所<span style=color:red;>必须遵守</span>的<span style=color:skyblue;>规则和预定</span>***





## 交互模型

***`HTTP 协议`采用 <span style=color:red;>请求/响应</span> 的交互模型***

<img src="images/%E8%AF%B7%E6%B1%82%E5%93%8D%E5%BA%94.png" alt="请求响应" style="zoom:50%;border:1px solid;" title="请求响应" />







## IP 地址

***<span style=color:red;>IP 地址</span> 就是互联网上每台计算机的唯一地址，因此 <span style=color:red;>IP 地址具有唯一性</span>***

> :grey_exclamation:***`IP 地址的格式`：通常用 `点分十进制`表示成`（127.0.0.1）`的形式，其中`127.0.0.1` 每个都是 `0~255` 之间的十进制整数***

+ ###### ==***互联网中每台 `Web` 服务器，都有自己的 `IP` 地址***==

+ ==***本地的电脑既是一台服务器，也是一个客户端***==

+ ==***`127.0.0.1` 代表本地服务器的 `IP`***==





## 域名

***是一套<span style=color:red;>字符型</span>的<span style=color:red;>地址方案</span>，即所谓的<span style=color:red;>域名（Domain Name）地址</span>***

> :grey_exclamation:***<span style=color:red;>IP地址</span>和<span style=color:red;>域名</span>是<span style=color:red;>一一对应的关系</span>，这份对应关系存放在一种叫做<span style=color:red;>域名服务器(DNS，Domain name server)</span>的电脑中***
>
> :grey_exclamation:*<span style=color:red;>**域名服务器就是提供** **`IP`** **地址和域名之间的转换服务的服务器**</span>*

+ ==***`127.0.0.1` 对应的域名是 `localhost`***==





## 端口号

***每个 `web` 服务都对应一个<span style=color:red;>唯一</span>的端口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的 `web` 服务进行处理***

<center><img src="images/%E7%AB%AF%E5%8F%A3%E5%8F%B7.png" alt="端口号" style="zoom:50%;" title="端口号"/></center>

+ ==***每个端口号不能同时被多个 `web` 服务占用***==
+ ==***`80` 端口号可以被省略***==









## URI - URL

### URI - 统一资源标志符

> ==***URI***==`（Uniform Resource Identifier，统一资源标志符) `，是一个用于 <span style=color:red;>**标识某一互联网资源名称的字符串**</span>。该种标识允许用户对网络中（一般指万维网）的资源通过特定的协议<span style=color:red;>**进行交互操作**</span>

:grey_exclamation:==**请求`url`**==：`protocol://host[:port]/path/[?query]#fragment`

|      组成      |             说明              |
| :------------: | :---------------------------: |
| **`protocol`** |         **通信协议**          |
|     `host`     |        **主机(域名)**         |
|   **`port`**   |          **端口号**           |
|   **`path`**   |           **路径**            |
|  **`query`**   |    **查询字符串，`&`隔开**    |
| **`fragment`** | **片段，`#`后面是片段标识符** |

<img src="images/url.png" alt="url" style="zoom: 50%;border:3px solid #555;" title="url"/>







### URL - 统一资源定位符

> ==***URL***==`(Uniform Resource Locator，统一资源定位符）`是 `URI` 最常见的形式。<span style=color:red;>URL是一种URI</span>，它标志一个互联网资源，并指定对其进行操作或获取该资源的方法。可能通过对 <span style=color:red;>**主要访问手段的描述，也可能通过网络 *<u>“位置”</u>* 进行标志**</span>。







## 请求报文

**<span style=color:skyblue;>客户端发起的请求</span>叫做 <span style=color:red;>HTTP请求</span>，<span style=color:skyblue;>客户端发送到浏览器的信息</span>，叫做 <span style=color:red;>HTTP 请求报文(请求信息)</span>**

<img src="images/%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87.png" alt="请求报文" style="zoom:90%;border:2px solid;" title="请求报文"/>





### 🍀组成

1. ###### 请求行 ：==[请求方式]  [请求**`url`**]  [请求协议/版本]==

   + > ==**请求方式**==：<span style=color:skyblue;>**<u>HTTP协议常用的有2种请求方式</u>**</span>
     >
     > ​		<span style=color:skyblue;>**GET**</span> ：*请求参数在请求行中，在`url`后<span style=color:red;><u>(通常用于获取服务端资源)</u></span>*
     >
     > ​		<span style=color:skyblue;>**POST**</span> ：*请求参数在请求体中<span style=color:red;>(通常用于向服务端提交数据)</span>*

2. ###### 请求头 ：==“**请求头名称 : 请求头值**” 形式==

   + |      请求头名称       |              请求头值              |
     | :-------------------: | :--------------------------------: |
     |      **`Host`**       |        **请求的服务器域名**        |
     |   **`User-Agent`**    |        **浏览器的版本信息**        |
     |  **`Content-Type`**   |      **发送服务器的数据格式**      |
     | **`Content-Length`**  |          **请求体的大小**          |
     |     **`Accept`**      |       **接收响应的数据格式**       |
     | **`Accept-Language`** |         **支持的语言环境**         |
     | **`Accept-Encoding`** |         **支持的压缩格式**         |
     |   **`Connection`**    |     **客户端与服务端连接方式**     |
     |     **`Referer`**     | **当前页面是从哪个页面跳转过来的** |
     |     **`Cookie`**      |     **用于客户端存储少量信息**     |

3. ###### 空行 ：==分割 `POST`请求的 <span style=color:red;>请求头</span>与<span style=color:red;>请求体</span>的==

4. ###### 请求体 ：==封装 `POST` 方式的请求参数的==

> :grey_exclamation::grey_exclamation:***<span style=color:red;>只有 `POST`请求才有请求体，`GET` 请求没有请求体</span>***







## 响应报文

**<span style=color:red;>响应报文</span>就是<span style=color:skyblue;>服务器响应给客户端的信息内容</span>，也叫<span style=color:red;>响应信息</span>**

<img src="images/%E5%93%8D%E5%BA%94%E6%8A%A5%E6%96%87.png" alt="响应报文" style="zoom:90%;border:2px solid;" title="响应报文" />





### 🍀组成

1. ###### 响应行 ：==[协议/版本] [响应状态码] [状态码描述]==

   + | 状态码 | 类别                                 |            原因描述            |
     | :----: | :----------------------------------- | :----------------------------: |
     | `1xx`  | ***Informational**（==信息==）*      |     **接受的请求正在处理**     |
     | `2xx`  | ***Success**（==成功==）*            |      **请求正常处理完毕**      |
     | `3xx`  | ***Redirection**（==重定向==）*      | **需要进行附加操作以完成请求** |
     | `4xx`  | ***Client Error**（==客户端错误==）* |     **服务器无法处理请求**     |
     | `5xx`  | ***Server Error**（==服务器错误==）* |     **服务器处理请求出错**     |

2. ###### 响应头：==“**响应头名称 : 响应头值**” 形式==

   + |         响应头名称          |               响应头值               |
     | :-------------------------: | :----------------------------------: |
     |     **`Content-Type`**      |         **响应体的数据格式**         |
     |    **`Content-Length`**     |         **响应体的数据大小**         |
     |         **`Date`**          |            **响应的时间**            |
     | **`Content-Dispositionch`** | **以给定名称的文件把响应保存到磁盘** |

3. ###### 空行 ：==分割<span style=color:red;>请求头</span>与<span style=color:red;>请求体</span>的==

4. ###### 响应体 ：==存放服务器响应给客户端的资源内容==







## 💡请求方式

❗*==**用来<span style=color:red;>表明要对服务器上的资源执行的操作</span>**==*

|     方法      | 描述                                                         |
| :-----------: | :----------------------------------------------------------- |
|   **`get`**   | **<span style=color:red;>(查询)</span>发送请求来获得服务器上的资源，请求体中不会包括请求数据，请求数据放在`url`后面** |
|  **`post`**   | **<span style=color:red;>(新增)</span>向服务器提交资源，数据被包含在请求体中提交给服务器** |
|   **`put`**   | **<span style=color:red;>(修改)</span>向服务器提交资源，并使用新提交的资源，替换掉服务器对应的旧资源** |
| **`delete`**  | **<span style=color:red;>(删除)</span>请求服务器删除指定的资源** |
|  **`head`**   | **请求方式与 `GET`请求相同，但没有响应体**                   |
| **`options`** | **获取`HTTP`服务器支持的`HTTP`请求方式，允许客户端查看服务器的性能** |
| **`connect`** | **建立一个客户端到由目标资源标识的服务器的隧道**             |
|  **`trace`**  | **沿着目标资源的路径执行一个信息环回测试，主要用于测试或诊断** |
|  **`patch`**  | **是对 `PUT` 请求的补充，用来对已知资源进行局部更新**        |







## 📗请求状态码

**:grey_exclamation:*<span style=color:red;>响应状态码</span>（`HTTP Status Code`），也属于 `HTTP` 协议的一部分，用来标识响应的状态***

| 状态码 | 类别                                 |            原因描述            |
| :----: | :----------------------------------- | :----------------------------: |
| `1xx`  | ***Informational**（==信息==）*      |     **接受的请求正在处理**     |
| `2xx`  | ***Success**（==成功==）*            |      **请求正常处理完毕**      |
| `3xx`  | ***Redirection**（==重定向==）*      | **需要进行附加操作以完成请求** |
| `4xx`  | ***Client Error**（==客户端错误==）* |     **服务器无法处理请求**     |
| `5xx`  | ***Server Error**（==服务器错误==）* |     **服务器处理请求出错**     |









### 2xx系列状态码

>:grey_exclamation:*==**表示**<span style=color:red;>**服务器已成功接收请求并进行处理**</span>==*

|  状态码   | English         |                             描述                             |
| :-------: | --------------- | :----------------------------------------------------------: |
| **`200`** | ==**OK**==      |                         **请求成功**                         |
| **`201`** | ==**Created**== | **<span style=color:red;>更新</span>或<span style=color:red;>创建</span>请求资源成功** |





### 3xx系列状态码

> :grey_exclamation:*==**表示<span style=color:red;>服务器要求客户端需要进行附加操作以完成请求</span>**==*

|  状态码   | English                   | 描述                                                         |
| :-------: | :------------------------ | ------------------------------------------------------------ |
| **`301`** | ==**Moved Permanently**== | **<span style=color:red;>永久移动</span>，请求的资源以被永久移动到新`URI`，返回新的`URI`，浏览器会自动重定向到新`URI`，以后所有请求使用新`URI`** |
| **`302`** | ==**Found**==             | **<span style=color:red;>临时移动</span>，与`301`类型，不过资源只是临时被移动，应继续使用原`URI`** |
| **`304`** | ==**Not Modified**==      | **<span style=color:red;>未修改</span>，所请求的资源未修改，不会返回任何资源，没有响应体，客户端通过缓存访问资源** |





### 4xx系列状态码

> :grey_exclamation:==***表示<span style=color:red;>客户端的请求有非法内容，从而导致服务器无法处理请求</span>***==

|  状态码   | English                                         | 描述                                                         |
| :-------: | ----------------------------------------------- | ------------------------------------------------------------ |
| **`400`** | ==**Bad Request**==                             | **<span style=color:red;>语义错误，请求参数参数</span>**     |
| **`401`** | ==**Unauthorized**==                            | **当前请求需要用户验证**                                     |
| **`403`** | ==**Forbidden**==                               | **服务器拒接执行**                                           |
| **`404`** | ==<span style=color:red;>**Not Found**</span>== | <span style=color:red;>**服务器无法找到请求的资源页面**</span> |
| **`408`** | ==**Request Timeout**==                         | <span style=color:red;>**请求超时，服务器等待客户端发送请求时间过长**</span> |





### 5xx系列状态码

> :grey_exclamation:==***表示<span style=color:red;>服务器处理请求出错误</span>***==

|  状态码   | English                       | 描述                                                         |
| :-------: | ----------------------------- | ------------------------------------------------------------ |
| **`500`** | ==**Internal Server Error**== | **<span style=color:red;>服务器内部错误</span>，无法处理请求** |
| **`501`** | ==**Not Implemented**==       | **<span style=color:red;>服务器不支持该请求方式</span>**     |
| **`503`** | ==**Service Unavailable**==   | **<span style=color:red;>系统超载或维护</span>，服务器暂时无法处理请求** |







# 🌍Web 开发模式

1. ##### 基于<span style=color:red;>服务端渲染</span>的传统 `Web` 开发模式

2. ##### 基于<span style=color:red;>前后端分离</span>的新型 `Web` 开发模式





## 服务端渲染的**Web** 开发模式

==***<span style=color:red;>服务端渲染的概念</span>：服务器发送给客户端的 `HTML` 页面，是在服务器通过字符串的拼接，动态生成的***==

<img src="images/%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B8%B2%E6%9F%93.png" alt="服务器渲染" style="zoom:60%;border: 2px solid;" title="服务器渲染" />



### 优缺点

|      优点       |               缺点               |
| :-------------: | :------------------------------: |
| **前端耗时少**  |       **占用服务器端资源**       |
| **有利于`SEO`** | **不利于前后端分离，开发效率低** |





## 前后端分离的**Web** 开发模式

==***<span style=color:red;>前后端分离的概念</span>：前后端分离的开发模式，依赖于 `Ajax` 技术，后端只负责提供 `API`接口，前端使用 `Ajax`调用接口***==

<img src="images/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB.png" alt="前后端分离" style="zoom:60%;border: 2px solid;" title="前后端分离" />



### 优缺点

|             优点             |         缺点         |
| :--------------------------: | :------------------: |
|       **提升开发效率**       | **不利于** **`SEO`** |
| **减轻了服务器端的渲染压力** |                      |
|         **异步加载**         |                      |







## 💳前后端的身份认证

==***身份认证`（Authentication）`又称 <span style=color:red;>身份验证</span> 、<span style=color:red;>鉴权</span>，是指<span style=color:red;>通过一定的手段，完成对用户身份的确认</span>***==





### 不同开发模式下的身份验证

1. ###### *<span style=color:red;>服务端渲染</span>推荐使用 <span style=color:skyblue;>`Session` 认证机制</span>*

2. ###### *<span style=color:red;>前后端分离</span>推荐使用 <span style=color:red;>`JWT` 认证机制</span>*







### Session 认证机制

💡==***`Session` 认证机制需要配合 `Cookie` 才能实现。由于 `Cookie` 默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域 `Session` 认证***==

> :grey_exclamation:==***当前端请求后端接口<span style=color:red;>不存在跨域问题的时候，推荐使用 `Session `身份认证机制</span>***==

<img src="images/session.png" alt="session" style="zoom:100%;border: 2px solid;" title="Session工作原理" />







### JWT 认证机制

***`JWT（JSON Web Token）`是目前最流行的<span style=color:red;>跨域认证解决方案</span>***

<img src="images/jwt.png" alt="JWT" style="zoom:90%;border: 2px solid;" title="JWT" />





#### 组成

> ```js
> Header.Payload.Signature
> ```
>
> ###### 		**`Header`**	:	头部，<span style=color:skyblue>**安全性相关**</span>
>
> ###### 		`Payload`	:	有效荷载，<span style=color:red>**真正有效信息**</span>
>
> ###### 		**`Signature`**	:	签名，<span style=color:skyblue>**安全性相关**</span>

<center><img src="images/jwt%E5%AD%97%E7%AC%A6%E4%B8%B2.png" alt="jwt字符串" style="zoom:40%;border: 3px solid;" title="JWT字符串" /></center>





#### 使用方式

==***将服务器返回的 `JWT` 字符串储存在 `localStorage` 或 `sessionStorage` 中***==

> :grey_exclamation:==***<u>客户端每次与服务器通信，都要将这个 `JWT` 的字符串放在 `HTTP` 请求头的 `Authorization` 字段中，从而进行身份认证</u>***==

```js
Authorization: Bearer <token>
```











# ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>
