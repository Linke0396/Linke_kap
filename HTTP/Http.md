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











### **CORS**

> :grey_exclamation:==***CORS***==*`(Cross-Origin Resource Sharing)`* *<span style=color:red;>**跨域资源共享**</span>，它允许浏览器向跨域服务器发送 `Ajax`*
>
> *请求，克服了 `Ajax` 只能同源使用的限制*
>
> ###### *使用 `CORS` 的时候，客户端的代码不需要修改，在服务端作相应的配置皆可*













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













# ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>



