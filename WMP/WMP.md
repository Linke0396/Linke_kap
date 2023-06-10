[TOC]

# 微信小程序

## 简介🎈

> *:grey_exclamation:**小程序与普通网页开发的区别***

1. **运行环境不同**

   > <span style="color:red;">网页</span>运行在<span style="color:red;">浏览器环境</span>中
   >
   > <span style="color:red;">小程序</span>运行在<span style="color:red;">微信环境</span>中

2. **API不同**

   >由于运行环境的不同，所以小程序中，无法调用`DOM`和`BOM`的`API`
   >
   >小程序中可以调用微信环境提供的各种`API(地理定位，扫码，支付)`

3. **开发模式不同**

   > 网页的开发模式：<span style="color:red;">**浏览器 + 代码编辑器**</span>
   >
   > 小程序有自己的一套标准开发模式：
   >
   > + <span style="color:red;">**申请小程序开发账号**</span>
   > + <span style="color:red;">**安装小程序开发者工具**</span>
   > + <span style="color:red;">**创建和配置小程序项目**</span>











## 小程序官方组件🚩

> :grey_exclamation:**使用<u>微信</u>扫码下方小程序码，体验小程序**

<center><img src="images/%E5%AE%98%E6%96%B9%E7%BB%84%E4%BB%B6.png" alt="官方组件" style="zoom:40%;border:thin solid silver;border-radius: 5%;" title="小程序官方组件" /></center>











## 开发模式📋

### 注册开发账号🌠

1. 浏览器打开🔗[微信公众平台 (qq.com)](https://mp.weixin.qq.com/),点击右上角的**“立即注册“**

   <left><img src="images/%E5%BC%80%E5%8F%91%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C(1).png" alt="开发账号注册_1" style="zoom:33%;border:thin solid silver;" title="开发账号注册_1" /></left>

2. **选择注册账号的类型**

   <left><img src="images/%E5%BC%80%E5%8F%91%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C(2).png" alt="开发账号注册_2" style="zoom:45%;border:thin solid silver;" title="开发账号注册_2" /></left>

3. **填写账号信息**

   <left><img src="images/%E5%BC%80%E5%8F%91%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C(3).png" alt="开发账号注册_3" style="zoom:40%;border:thin solid silver;" title="开发账号注册_3" /></left>

4. **邮箱激活**

   <left><img src="images/%E5%BC%80%E5%8F%91%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C(4).png" alt="开发账号注册_4" style="zoom:50%;border:thin solid silver;" title="开发账号注册_4" /></left>

5. **点击链接激活账号**

   <left><img src="images/%E5%BC%80%E5%8F%91%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C(5).png" alt="开发账号注册_5" style="zoom:35%;border:thin solid silver;" title="开发账号注册_5" /></left>

6. **选择主体类型**

   <left><img src="images/%E5%BC%80%E5%8F%91%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C(6).png" alt="开发账号注册_6" style="zoom:40%;border:thin solid silver;" title="开发账号注册_6" /></left>

7. **获取小程序的`AppID`**

   <left><img src="images/%E5%BC%80%E5%8F%91%E8%B4%A6%E5%8F%B7%E6%B3%A8%E5%86%8C(7).png" alt="开发账号注册_7" style="zoom:45%;border:thin solid silver;" title="开发账号注册_7" /></left>













### 安装开发者工具🔧

1. **下载🔗[微信开发者工具（稳定版 Stable Build）](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)**

2. **微信扫码登录**

3. **设置代理**

   <left><img src="images/%E5%AE%89%E8%A3%85%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7(1).png" alt="安装开发者工具(1)" style="zoom:50%;border:thin soild silver;" title="安装开发者工具" /></left>















### 创建小程序项目🔨

1. **创建项目**

   <left><img src="images/%E5%88%9B%E5%BB%BA%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%A1%B9%E7%9B%AE(1).png" alt="创建小程序项目_1" style="zoom:40%;border:thin solid silver;" title="创建小程序项目_1" /></left>

2. **逻辑项目信息**

   <left><img src="images/%E5%88%9B%E5%BB%BA%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%A1%B9%E7%9B%AE(2).png" alt="创建小程序项目_2" style="zoom:50%;border:thin solid silver;" title="创建小程序项目_2" /></left>

3. **项目创建完成**

   <left><img src="images/%E5%88%9B%E5%BB%BA%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%A1%B9%E7%9B%AE(3).png" alt="创建小程序项目_3" style="zoom:27%;border:thin solid silver;" title="创建小程序项目_3" /></left>

















## 项目结构🔩

<left><img src="images/%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84.png" alt="项目结构" style="zoom:70%;border:thin solid silver;" title="项目结构" /></left>











### 页面的组成📃

<left><img src="images/%E9%A1%B5%E9%9D%A2%E7%9A%84%E7%BB%84%E6%88%90.png" alt="页面的组成" style="zoom:50%;border:thin solid silver;" title="页面的组成" /></left>













### JSON配置文件📜

> :heavy_exclamation_mark:==**`JSON`是一种<span style=color:red;>数据格式</span>，在实际开发中，`JSON`总是以<span style=color:red;>配置文件</span>的形式出现，<u>通过不同的`.json`配置文件，可以对小程序项目进行不同级别的配置</u>**==

***:grey_exclamation:小程序项目中有`4`种`json`配置文件:***

1. **项目根目录中的`app.json`配置文件**

   <left><img src="images/app-json.png" alt="app.json" style="zoom:50%;border:thin solid silver;" title="app.json" /></left>

2. **项目根目录中的`project.config.json`配置文件**

   <left><img src="images/project-config-json.png" alt="project.config.json" style="zoom:50%;border:thin solid silver;" title="project.config.json" /></left>

3. **项目根目录中的`sitemap.json`配置文件**

   + > :grey_exclamation:**`sitemap.json`文件用来配置小程序页面是否允许<span style=color:red;>微信索引</span>**
     >
     > ==*当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索关键字和页面的索引匹配成功的时候，小程序的页面将可能展示在搜索结果中*==
     >
     > <left><img src="images/sitemap-json.png" alt="sitemap.json" style="zoom:50%;border:thin solid sliver;" title="sitemap.json" /></left>
     >
     > :heavy_exclamation_mark:<span style=color:black;>`sitemap`的索引提示是<span style=color:red;>默认开启</span>的，如需要关闭`sitemap`的索引提示，可在小程序项目配置文件`project.config.json`的`setting`中配置字段`checkSiteMap`为`false`</span>

4. **每个页面文件夹中的`.json`配置文件**

   + > :heavy_exclamation_mark:==**小程序中的每一个页面，都可以使用<span style=color:red;>`.json`文件来对本页面的窗口外观进行配置，页面中的配置项会覆盖`app.json`的`window`中相同的配置项</span>**==













#### 创建页面📄

> :grey_exclamation:==**只需要在`app.json`文件的`pages`中新增页面的存放路径，小程序开发者工具即可自动创建对应的页面文件**==
>
> ~~~json
> {
>     "pages":[
>     	"pages/index/index",
>         "pages/logs/logs",
>         "pages/home/home"
>     ],
> }
> ~~~









#### 修改项目首页🔖

> :grey_exclamation:==**只需要调整`app.json`文件中`pages`数组中页面路径的前后顺序，即可修改项目的首页。小程序会把排在第一位的页面，当作项目首页进行渲染**==
>
> ~~~json
> {
>     "pages":[
>         "pages/home/home",
>     	"pages/index/index",
>         "pages/logs/logs"
>     ],
> }
> ~~~













### WXML模板📘

> `WXML（WeiXin Markup Language）`是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的 HTML











### 📕
