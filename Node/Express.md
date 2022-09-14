[TOC]

# 🔷Express

<center><img src="images/expressjs.png" alt="Express" style="zoom:50%;border: 3px solid;" title="Express" /></center>

***`Express` 是基于 `Node.js` 平台，<span style=color:skyblue;>快速</span>、<span style=color:skyblue;>开放</span>、<span style=color:skyblue;>极简</span>的 <span style=color:red;>`Web` 开发框架</span>***

>==***`Express` 的作用和 `Node.js` 内置的 `http` 模块类似，是<span style=color:red;>专门用来创建 `Web` 服务器的</span>***==
>
>==***本质就是一个 `	npm` 上的第三方包***==







## 服务器

+ ###### *==**`Web` 网站服务器**==：专门对外提供 `Web` 网页资源的服务器*

+ ###### *==**`API` 接口服务器**==：专门对外提供 `API` 接口的服务器*





## 模块安装

```cmd
npm install express --save
```







## 创建基本 Web 服务器

1. ###### 1️⃣*导入 `express` 模块*

   + ```js
     const express = require('express');
     ```

2. ###### 2️⃣*创建 `web `服务器*

   + ```js
     const app = express();
     ```

3. 3️⃣***调用 `app.listen()` 启动服务器***

   + ```js
     /* app.listen(端口号, 启动成功后的回调函数) */
     app.listen(80, () => {
     	console.log('express server running at http://127.0.0.1');
     });
     ```







## 应用

+ ##### *路由 HTTP 请求*

+ ##### *配置中间件*

+ ##### *渲染 HTML 视图*

+ ##### *注册模板引擎*





### <span style=font-family:consolas,Microsoft YaHei>app.get()</span>

> ```js
> app.get(path, callback [, callback ...])
> ```
>
> ###### 		**`path`**	:	客户端请求的 `URL`
>
> ###### 		**`callback`**	:	请求的处理函数
>
> ​					`req`	:	请求对象`Request`
>
> ​					`res`	:	响应对象`Response`

```js
app.get('/get', (req, res) => {
    /* 请求处理 */
})
```







### <span style=font-family:consolas,Microsoft YaHei>app.post()</span>

> ```js
> app.post(path, callback [, callback ...])
> ```
>
> ###### 		**`path`**	:	客户端请求的 `URL`
>
> ###### 		**`callback`**	:	请求的处理函数
>
> ​					`req`	:	请求对象`Request`
>
> ​					`res`	:	响应对象`Response`

```js
app.get('/post', (req, res) => {
	/* 请求处理 */
})
```







### <span style=font-family:consolas,Microsoft YaHei>app.use()</span>

> ```js
> app.use([path,] callback [, callback...])
> ```
>
> ###### 		**`path`**	:	路径前缀
>
> ###### 		**`callback`**	:	全局中间件函数
>
> ==***在指定的路径上挂载指定的一个或多个全局中间件函数***==

```js
app.use(express.static('/public'))
// http:12.0.0.1/index.html
app.use('/public', express.static('/public'));
// http:12.0.0.1/public/index.html
```











## ▶<span style=font-family:consolas,Microsoft YaHei>Request</span>

==***该对象表示 `HTTP 请求`，并具有<span style=color:skyblue;>请求查询字符串</span>、<span style=color:skyblue;>参数</span>、<span style=color:skyblue;>正文</span>、<span style=color:skyblue;>`HTTP` 标头</span>等的<span style=color:red;>属性</span>***==





### 属性

|      属性      | 说明                                                |
| :------------: | :-------------------------------------------------- |
|   **`app`**    | **保存对使用中间件的 `Express` 应用程序实例的引用** |
| **`baseUrl`**  | **返回挂载路由器实例的 `URL` 路径**                 |
|   **`body`**   | **返回在请求正文中提交的数据的键值对**              |
| **`hostname`** | **返回从 `HTTP` 标头派生的主机名**                  |
|    **`ip`**    | **返回请求的远程 `IP` 地址**                        |
|  **`method`**  | **返回请求的 `HTTP` 方法对应的字符串**              |
|   **`path`**   | **返回请求 `URL` 的路径部分**                       |
|  **`params`**  | **返回 `:` 匹配到的动态参数**                       |
|  **`query`**   | **返回 `URL` 的查询字符串**                         |









## ◀<span style=font-family:consolas,Microsoft YaHei>Response</span>

==***该对象表示 `Express` 应用在收到 `HTTP` 请求时发送的 `HTTP` 响应***==







### 方法

+ **<span style=font-family:consolas,Microsoft YaHei>res.type(type)</span>**

> ==***将 `HTTP` 标头设置为由指定的 确定的 `MIME` 类型***==
>
> :grey_exclamation:***如果 包含 `“/”` 字符，则它将 设置为 的确切值 ，否则假定它是文件扩展名，并且使用该方法在映射中查找 `MIME` 类型***

```js
res.type('.html')	// 'text/html'
res.type('html')	// 'text/html'
res.type('json')	// 'application/json'
res.type('application/json')	// 'application/json'
res.type('png')		// 'image/png'
```

+ **<span style=font-family:consolas,Microsoft YaHei>res.set(field [, value])</span>**

> ==***设置响应的 `HTTP` 标头；要一次设置多个字段，请将一个对象作为参数传递***==

```js
// 设置单个
res.set('Content-Type', 'text/plain')

// 设置多个
res.set({
  'Content-Type': 'text/plain',
  'Content-Length': '123'
})
```

+ **<span style=font-family:consolas,Microsoft YaHei>res.status(code)</span>**

> ==***设置响应的 `HTTP` 状态码***==

```js
res.status(404)
res.status(403).end()
res.status(400).send('Bad Request')
```

+ **<span style=font-family:consolas,Microsoft YaHei>sres.send([body])</span>**

> ==***发送 `HTTP` 响应***==

```js
res.send(Buffer.from('whoop'))
res.send({ some: 'json' })
res.send('<p>some html</p>')
res.status(404).send('Sorry, we cannot find that!')
res.status(500).send({ error: 'something blew up' })
```

+ **<span style=font-family:consolas,Microsoft YaHei>res.end([data] [, encoding])</span>**

> ==***结束响应过程***==

```js
res.end()
res.status(404).end()
```







## 静态资源

> ```js
> express.static(root, [options])
> ```
>
> ​		**`root`**	:	**指定静态目录**
>
> ​		**`options`**	:	**可选参数配置**

```js
app.use(express.static('/public'));
```







## 🚩 路由

> ==***路由就是<span style=color:red;>映射关系</span>***==
>
> ==***在 `Express` 中，路由指的是<span style=color:red;>客户端的请求与服务器处理函数之间的映射关系</span>***==







### 组成

> ==***`Express` 中的路由分 `3` 部分组成***==
>
> ```js
> app.METHOD(PATH, HANDLER)
> ```
>
> 1. ###### ==**METHOD**==	:	<span style=color:red;>***请求的类型***</span>
>
> 2. ###### ==**PATH**==	:	<span style=color:red;>***请求的 `URL` 地址***</span>
>
> 3. ###### ==**HANDLER**==	:	<span style=color:red;>***处理函数***</span>







### 匹配过程

> :grey_exclamation:==***按照路由的<span style=color:red;>先后顺序</span>进行匹配，如果<u>请求类型和请求的 `URL` 同时匹配成功</u>，则 `Express` 会将这次请求，转交给对应的 `function` 函数进行处理***==

<img src="images/%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8C%B9%E9%85%8D%E8%BF%87%E7%A8%8B.png" alt="路由的匹配过程" style="zoom:80%;border:2px solid;" title="路由的匹配过程" />







### 模块化路由

==***为了方便对路由进行模块化的管理，将路由抽离为单独的模块***==

1. ###### 1️⃣***创建路由模块对应的 `js` 文件***

   + ```js
     # router.js
     // 导入 express 模块
     const express = require('express');
     ```

2. ###### 2️⃣*调用 `express.Router()` 函数创建路由对象*

   + ```js
     # router.js
     // 创建路由对象
     const router = express.Router();
     ```

3. ###### 3️⃣*向路由对象上挂载具体的路由*

   + ```js
     # router.js
     // 挂载路由
     router.get('/user/get', (req, res) => {
     	res.send('User GET.');
     });
     ```

4. ###### 4️⃣*使用 `module.exports` 向外共享路由对象*

   + ```js
     # router.js
     // 暴露路由对象
     module.exports = router;
     ```

5. ###### 5️⃣*使用 `app.use()` 函数注册路由模块*

   + ```js
     # index.js
     const express = require('express');
     const app = express();
     
     // 导入 路由模块
     const userRouter = require("./router");
     
     // 使用 app.use() 注册路由模块，并设置统一访问前缀
     app.use('/api'， userRouter);
     
     // 启动 服务器
     app.listen(80, () => {
     	console.log('router server running at http://127.0.0.1');
     });
     ```







## 🗼中间件

==***中间件`（Middleware）`，特指<span style=color:skyblue;>业务流程</span>的<span style=color:red;>中间处理环节</span>***==

> ==***当一个请求到达 `Express` 的服务器之后，可以连续调用多个中间件，从而对这次请求进行<span style=color:red;>预处理</span>***==

<img src="images/%E4%B8%AD%E9%97%B4%E4%BB%B6%E7%9A%84%E8%B0%83%E7%94%A8%E6%B5%81%E7%A8%8B.png" alt="中间件的调用流程" style="zoom:50%;" title="中间件的调用流程" />









### 格式

> ==***`Express` 的中间件，本质上就是一个 `function` 处理函数***==
>
> :grey_exclamation:==***中间件函数的形参列表中，必须包含 `	next` 参数，且必须在最后***==
>
> :grey_exclamation:==***多个中间件之间，共享同一份 `req` 和 `res`***==

<img src="images/%E4%B8%AD%E9%97%B4%E4%BB%B6.png" alt="中间件" style="zoom:50%;border:2px solid;" title="中间件" />







### next()

> ***`next` 函数是实现<span style=color:red;>多个中间件连续调用</span>的关键，它表示把流转关系<span style=color:red;>转交</span>给<span style=color:skyblue;>下一个中间件</span>或<span style=color:skyblue;>路由</span>***

<img src="images/%E4%B8%AD%E9%97%B4%E4%BB%B6%E7%9A%84%E8%B0%83%E7%94%A8%E6%B5%81%E7%A8%8B.png" alt="next" style="zoom:50%;" title="next()" />







### 🌞定义

```js
const express = require('express');
const app = express();

// 全局生效中间件
app.use((req, res, next) => { // 定义一个中间件函数
	console.log("全局生效的中间件函数");
	next();
});

// 挂载路由
app.get('/get', (req, res) => {
	console.log("get.");
	res.end();
})

// 启动服务
app.listen(80);

// 访问 http://127.0.0.1/get, 控制台输出
全局生效的中间件函数
get.
```





#### 全局中间件

> :grey_exclamation:==***可以使用 `app.use()` <span style=color:red;>连续定义多个</span>全局中间件，<span style=color:red;>按照中间件定义的先后顺序依次进行调用</span>***==

```js
// 全局生效中间件
app.use((req, res, next) => { // 定义一个中间件函数
	console.log("全局生效的中间件函数1");
	next();
}, (req, res, next) => {
	console.log("全局生效的中间件函数2");
	next();
});
```





#### 局部中间件

> :grey_exclamation:==***不使用 `app.use()` 定义的中间件，叫做<span style=color:red;>局部生效的中间件</span>***==
>
> ==***两种等价的方式定义***==
>
> + ```js
>   app.METHOD(path, mw1, mw2, callback)
>   ```
>
> + ```js
>   app.METHOD(path, [mw1, mw2], callback)
>   ```

```js
// 中间件函数1
const mw1 = (req, res, next) => {
	console.log("局部生效的中间件函数1");
    req.a = 1;
	next();
}
// 中间件函数2
const mw2 = (req, res, next) => {
	console.log("局部生效的中间件函数2");
    req.b = 2;
	ext();
}
// 局部生效中间件
app.get('/use', mw1, mw2, (req, res) => { // 方式1
	console.log("use.", req.a, req.b);
	res.end();
});
/* app.get('/use', [mw1, mw2], (req, res) => { }); */ // 方式2

// 访问 http://127.0.0.1/use, 控制台输出
全局生效的中间件函数1
全局生效的中间件函数2
局部生效的中间件函数1
局部生效的中间件函数2
use. 1 2
```







#### :warning:注意

+ ###### *一定要在<u>路由之前注册中间件</u>*

+ ###### *<u>可以连续调用多个中间件</u>进行处理*

+ ###### *业务代码之后调用 `next()` 函数*

+ ###### *调用 <u>`next() `函数后不需要写额外的代码</u>*

+ ###### *多个中间件之间，<u>共享 `req `和 `res` 对象</u>*







### 🔖分类

+ ###### *<span style=color:red;>应用级别</span>的中间件*

  + > ==***通过 `app.use()/app.get()/app.post()` 绑定到 `app` 实例上的中间件，叫做<span style=color:red;>应用级别</span>的中间件***==
    >
    > ```js
    > const express = require('express');
    > const app = express();
    > 
    > // 应用级别的全局中间件
    > app.use((req, res, next) => {
    >  next();
    > });
    > 
    > // 应用级别的局部中间件
    > app.get('/', (req, res, next) => {
    >  next();
    > }, (req, res) => {
    >  res.end();
    > })
    > ```

+ ###### *<span style=color:red;>路由级别</span>的中间件*

  + > ==***绑定到 `express.Router()` 实例上的中间件，叫做<span style=color:red;>路由级别</span>的中间件***==
    >
    > ```js
    > const express = require('express');
    > const app = express();
    > // 创建路由对象
    > const router = express.Router();
    > 
    > // 路由级别的中间件
    > router.use((req, res, next) => {
    >  console.log('路由级别的中间件函数');
    >  next();
    > });
    > 
    > app.use('/', router);
    > ```

+ ###### *<span style=color:red;>错误级别</span>的中间件*

  + >==***专门用来捕获整个项目中发生的<span style=color:red;>异常错误</span>，形参`（err, req, res, next）`***==
    >
    >:grey_exclamation:==***<span style=color:red;>错误级别</span>的中间件，必须<span style=color:red;>注册在所有路由之后</span>***==
    >
    >```js
    >const express = require('express');
    >const app = express();
    >
    >// 挂载路由
    >app.get('/get', (req, res) => {
    >   throw new Error('服务器内部发生错误!'); // 路由发生错误并抛出
    >});
    >
    >// 错误级别的中间件
    >app.use('/', (err, req, res, next) => {
    >   console.log(err.name, err.message); // 服务器打印错误信息
    >   res.send(`${err.name}: ${err.message}`); // 向客户端响应错误信息
    >});
    >```

+ ###### *<span style=color:red;>Express 内置</span>的中间件*

  + >1. ==***`express.static` 快速托管静态资源的内置中间件***==
    >2. ==***`express.json` 解析 `JSON` 格式的请求体数据<span style=color:red;>（4.16.0+）</span>***==
    >3. ==***`express.urlencoded` 解析 `URL-encoded` 格式的请求体数据<span style=color:red;>（4.16.0+）</span>***==
    >
    >```js
    >// 配置解析 application/json 格式数据的内置中间件
    >app.use(express.json());
    >
    >// 配置解析 application/x-www-form-urlencoded 数据格式的内置中间件
    >app.use(express.urlencoded({ extended: false }));
    >```

+ ###### *<span style=color:red;>第三方</span>的中间件*

  + >==***由<span style=color:red;>第三方开发</span>出来的中间件，叫做<span style=color:red;>第三方中间</span>件***==
    >
    >+ ###### *安装*
    >
    > + ```cmd
    >   # 安装 body-parser 中间件
    >   npm i -D body-parser
    >   ```
    >
    >+ ###### *使用*
    >
    > + ```js
    >   const bodyParser = require("body-parser");
    >     
    >   // 解析 json 格式数据
    >   app.use(bodyParser.json());
    >   // 解析 application/x-www-form-urlencoded 格式数据
    >   app.use(bodyParser.urlencoded({ extended: false }));
    >   ```
    >
    >:grey_exclamation:==***`express@4.16.0` 之前的版本，使用 `body-parser` 第三方中间件，来解析请求体数据***==










### 自定义中间件

1. ###### 1️⃣*定义中间件函数*

2. ###### 2️⃣*监听 `req` 的 `data` 事件*

3. ###### 3️⃣*监听 `req` 的 `end` 事件*

4. ###### 4️⃣*使用 `querystring` 内置模块<span style=color:red;>(专门用来处理查询字符串)</span>解析请求体数据*

5. ###### 5️⃣*将解析出来的数据对象挂载为 `req.body`*

6. ###### 6️⃣*将自定义中间件封装为模块*

```js
# bodyParser.js
// 4(1). 导入 querystring 内置模块
const qs = require('querystring');

// 1.定义全局中间件
function bodyParser(req, res, next) {
    let str = '';
    // 2.监听 req 的 data 事件(获取客户端发送到服务器的数据)
    req.on('data', (chunk) => str += chunk); // 拼接请求体数据
    // 3.监听 req 的 end 事件(请求体数据接收完毕触发的事件)
    req.on('end', () => {
        // 4(2). 调用 parse() 方法将查询字符串转换为对象
        const body = qs.parse(str);
        // 5 将解析出来的对象 挂载为 req.body 属性
        req.body = body;
        next();
    });
}

// 6.暴露模块
module.exports = bodyParser;


# index.js
const bodyParser = require('bodyParser'); // 导入 自定义模块
app.use(bodyParser); // 挂载全局中间件
```







## Express 应用程序生成器

==***应用生成器工具 `express-generator` 可以快速创建一个应用的骨架***==

```cmd
# 安装为 全局可用工具
npm install -g express-generator
# 创建应用骨架 [options]
express	
# 安装所有依赖包
npm i
# 启动服务器
npm start
```





### 命令行参数

```cmd
-h, --help          输出使用方法
	--version       输出版本号
-e, --ejs           添加对 ejs 模板引擎的支持
	--hbs           添加对 handlebars 模板引擎的支持
	--pug           添加对 pug 模板引擎的支持
-H, --hogan         添加对 hogan.js 模板引擎的支持
	--no-view       创建不带视图引擎的项目
-v, --view <engine> 添加对视图引擎（view） <engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 					 jade 模板引擎）
-c, --css <engine>  添加样式表引擎 <engine> 的支持 (less|stylus|compass|sass) （默认是普通的 css 文					 件）
	--git           添加 .gitignore
-f, --force         强制在非空目录下创建
```













## ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>

