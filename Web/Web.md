[TOC]

# Web

****

==***移动 Web***==







## 🍁PC网页与移动网页的区别

- PC屏幕大，网页***<span style="color:red;">固定版心</span>***
- 移动端屏幕小，网页宽度通常***<span style="color:red;">100%</span>***







### 对角线

*<u>指的是**屏幕对角线的长度**，一般使用**英寸**来度量</u>*

<img src=".\images\对角线.png" alt="对角线" style="zoom: 33%;" />





### 💠分辨率分类

1. **<span style="color: red;">物理分辨率</span>** : *<u>生产屏幕时就固定的，是不可改变的</u>*
2. **<span style="color:red;">逻辑分辨率</span>** : *<u>由软件(驱动) 决定的</u>*







### 视口

*<u>**<span style='color:skyblue;'>实现网页宽度与设备宽度一致</span>**</u>*

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

<img src="images/%E8%A7%86%E5%8F%A3.png" alt="视口" style="zoom: 50%;border: 5px solid" />





#### 属性

|        属性         |                       作用                       |
| :-----------------: | :----------------------------------------------: |
|     ***width***     | 控制视区的宽度大小，可以设置像素，`device-width` |
|    ***height***     | 控制视区的高度大小，可以设置像素，`device-width` |
| ***initial-scale*** |              初始缩放比，`0.1 ~ 10`              |
| ***minimum-scale*** |              最小缩放比，`0.1 ~ 10`              |
| ***maximum-scale*** |              最大缩放比，`0.1 ~ 10`              |
| ***user-scalable*** |          页面是否可缩放，`yes(默认)/no`          |









### 🎴二部图

***为高分辨率下图片不会模糊失真***

|     手机型号     | 物理分辨率  | 逻辑分辨率 |   比例    |
| :--------------: | :---------: | :--------: | :-------: |
|   iPhone6/7/8    | 750 * 1334  | 375 * 667  |  2  :  1  |
| iPhone6/7/8 Plus | 1080 * 1920 | 414 * 736  | 2.6  :  1 |
| iPhone12 Pro Max | 1284 * 2778 | 428 * 926  |  3  :  1  |
|     **...**      |   **...**   |  **...**   |  **...**  |







## 流式布局

***<span style='color:red;'>宽度自适应，高度固定</span>***

```css
  /* 流式布局(百分比布局) */
  width: 100%;
  height: 100px;
```

> *为了适配手机端不同尺寸的屏幕，我们在<u>定义元素宽度的时候可以写百分比，百分比是相对于屏</u>*
>
> *<u>幕的宽度，所有宽度就可以做到**自适应**</u>，而在<u>高度方向，由于网页的高度是不定的，所以我们可</u>*
>
> *<u>以把**高度写成固定的值(px)**</u>，这种布局方式叫做**<u><span style='color:red;'>流体布局</span></u>***









## 📱移动适配

***<span style='color:red;'>网页元素的宽高都要随着设备的宽高等比例缩放</span>***





### 方式

- ### rem

- ### vm / vh





### 🎋rem

***rem是一种<u><span style='color:red;'>相对长度单位</span></u>，<u>通过这个长度单位可以实现元素宽高等比例缩放，从而完成不同宽度屏幕的适配</u>***



> **rem 是个相对单位 <u>root em</u>。*<span style='color:red;'>rem就是root（根元素的大小）相对于html元素的字体大小的单位</span>***
>
> ❗❗***css3规定：1rem的大小就是根元素<html>的<code>font-size</code>的值***





#### 相对单位计算结果

$$
1rem = 1HTML字号大小
$$





#### 媒体查询

***<u><span style='color:red;'>媒体查询能够检测视口的宽度，然后编写差异化的 CSS 样式；当某个条件成立, 执行对应的CSS样式</span></u>***





##### 🎍语法

```css
@media (媒体特性) {
    选择器 {
        CSS属性..
    }
}
```







##### ✨计算不同设备宽度公式

1. $$
   rem单位的尺寸 = px单位数值 / (1/10设备宽度)
   $$





##### flexible.js

> ***flexible.js是手淘开发出的一个用来适配移动端的js框架; 就是来代替很多个<code>@media</code>的***
>
> ***核心原理就是根据不同的视口宽度给网页中html根节点设置不同的<code>font-size</code>;***

[Flexible.js](./js/flexible.js)







### 🎐vw / vh

***<span style='color:red;'>相对视口的尺寸计算</span>***

- #### vw

  - > ***viewport widht***
    > $$
    > 1vm = 1/100视口宽度
    > $$

- #### vh

  - > ***viewport hiegth***
    > $$
    > 1vh = 1/100视口高度
    > $$





#### ✨计算公式

$$
vw单位的尺寸 = px单位数值 / (1/100视口宽度)
$$









## 📘Less

***[Less](https://less.bootcss.com/)是一个<span style='color:red;'>CSS预处理器</span>，Less文件后缀是<span style='color:red;'>.less</span>***。***扩充了CSS语言，使 CSS 具有一定的逻辑性，计算能力***

<img src="images/less.png" alt="Less" style="zoom: 50%;" />



> ❕***浏览器无法识别`Less`代码，需要引入对应的`CSS`文件***

![lessFile](images/lessfile.png)





### 🔰使用方式

1. #### *js*

   1. ***引入 less文件***

      1. ```html
         <link rel="stylesheet/less" href="需要引入less文件的路径">
         ```

   2. ***引入 less.js文件***

      1. ```html
         <script src="less.js文件的路径"></script>
         ```

2. ##### 第三方插件

   1. ◽◽◽◽◽◽◽








### 注解

- 单行注释

  - ```less
    // 内容
    ```

- 块注释

  - ```less
    /* 内容 */
    ```






### 🖥计算表达式

**<u><span style='color:red;'>*一个数必须带单位*</span></u>**

| 运算符 |         表达式         |
| :----: | :--------------------: |
|  加➕   | ***<u>x + y(px)</u>*** |
|  减➖   |    ***x - y(px)***     |
|  乘✖   |    ***x \* y(px)***    |
|  除➗   |  ***（x / y(px)）***   |



<img src="images/less%E8%BF%90%E7%AE%97%E7%AC%A6.png" alt="less运算符" style="zoom: 50%;" />







### 💠嵌套语法

***<span style='color:red;'>为了快速生成后代选择器</span>***

```less
父选择器 {
	// 父级样式
    子选择器 {
        // 子级样式
    }
}
```

![less嵌套](images/less%E5%B5%8C%E5%A5%97.png)









#### 🍂& 符号

***表示不生成后代选择器，表示当前选择器***

```less
父级选择器 {
    &[选择器]{
        // CSS...
    }
}
```

<img src="images/less_&%E7%AC%A6%E5%8F%B7.png" alt="less_&符号" style="zoom:50%;" />







### 🌲变量

***<span style='color:red;'>存储数据，方便使用和修改</span>***

|     类型      |                             语法                             |                             使用                             |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|   *🌵值变量*   | <code><span style='color:red;'>@变量名</span>: **属性值**;</code> | <code>*CSS属性名: <span style='color:red;'>@变量名</span>;*</code> |
| *🌴选择器变量* | <code><span style='color:red;'>@变量名</span>: **选择器**;</code> | <code>*<span style='color:red;'>@{变量名} { CSS.. }</span>*</code> |
|  *🍃属性变量*  | <code><span style='color:red;'>@变量名</span>: **属性名**;</code> | <code>*@{变量名}: <span style='color:red;'>属性值</span>;*</code> |
|  *🌾url变量*   | <code><span style='color:red;'>@变量名</span>: **'url'**;</code> | <code>***<span style='color:red;'>url('@{images}/\filename.png')</span>;***</code> |

> ❗***变量不能在被定义区域外使用***





#### 声明变量

- ###### *语法*

  - ```less
    @变量名: {属性:值;}
    ```

- ###### *使用*

  - ```less
    @变量名();
    ```







#### 用变量定义变量

```less
@@变量名;
```







### 导入导出

#### 💾导入

```less
@import "文件路径"; // 导入less文件可以省略后缀
```





#### 📃导出

***<u><span style='color:red;'>在文件的第一行添加</span></u>***

```less
// out: 导出路径
// out: 导出路径/导出文件名.后缀
```





##### 🚫静止导出

***<u><span style='color:red;'>在文件的第一行添加</span></u>***

```less
// out: false
```







### 🍪混合

#### 无参数

```less
选择器1 {
	// CSS..
	选择器2;
}
```

>  ❕*`.` 与 `#` 皆可作为 方法前缀*
>  ❕ *方法后写不写 `()`，都可* 





#### 有参数

- ###### *语法*

  - ```less
    选择器(@参数名) { // 多个使用 "," 隔开
    	// 可使用传入的变量名
    }
    // 参数可设置默认值
    选择器(@参数名:默认值) {
    	// ...
    }
    ```

- ###### *使用*

  - ```less
    选择器(参数);
    // 单独修改默认值
    选择器(@参数名:值); // 个使用 "," 隔开
    // 修改全部
    选择器(值1,值2,值n);
    ```





#### 默认参数

> <code>***<span style='color:red;'>@arguments</span>***</code>: 代表全部参数，传的参数中 必须带着单位







### ⭕匹配模式

```less
/* less */
.triangle(top,@w:20px,@color: pink) {
    border-width: @w;
    border-color: transparent transparent @color transparent;
    border-style: dashed dashed solid dashed;
}

.triangle(right,@w:20px,@color: pink) {
    border-width: @w;
    border-color: transparent transparent transparent @color;
    border-style: dashed dashed dashed solid;
}

.triangle(bottom,@w:20px,@color: pink) {
    border-width: @w;
    border-color: @color transparent transparent transparent;
    border-style: solid dashed dashed dashed;
}

// 如果匹配的参数"@_"(后面的参数与上面保持一致)，则将携带自身样式继续去匹配
.triangle(@_,@w:20px,@color: pink) {
    width: 0;
    height: 0;
}

.box {
    .triangle(right); // 匹配一个相同的
}

/* CSS */
.box {
  width: 0;
  height: 0;
  border-width: 20px;
  border-color: transparent transparent transparent pink;
  border-style: dashed dashed dashed solid;
}
```







### 避免编译

> ❗❗<span style="color:red;">*<u>在不需要编译的内容前面加上 "<code>**~**</code>"，然后再将内容以 **单引号** 包裹</u>*</span>









## 🔅响应式

> ```css
> @media (媒体特性) {
>     选择器 {
>         CSS属性..
>     }
> }
> ```
>
> ​	**<code>max-width</code>**	 :	最大宽度**(<=)**
> ​	**<code>min-width</code>**	  :	最小宽度**(>=)**





### 书写顺序

```css
max-width (从大到小写)
min-width (从小到大写)
```







### 媒体查询完整写法

> ```css
> @media 关键字 媒体类型 and (媒体特性) {
>     选择器 {
>         // CSS..
>     }
> }
> ```

![媒体查询完整写法](images/%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95.png)







#### 关键字

***<span style='color:red;'>判断设备宽度的变化</span>***

|  关键字  |       描述       |
| :------: | :--------------: |
| **and**  |       并且       |
| **only** | 即(一个判断条件) |
| **not**  |        非        |







#### 媒体类型

***用来<span style='color:red;'>区分设备类型</span>的***

|  类型名称  |           值            |                       描述                       |
| :--------: | :---------------------: | :----------------------------------------------: |
|    屏幕    | **<code>screen</code>** |                   带屏幕的设备                   |
|  打印预览  | **<code>print</code>**  |                   打印预览模式                   |
|   阅读器   | **<code>speech</code>** |                   屏幕阅读模式                   |
| 不区分类型 |  **<code>all</code>**   | 任何(**<span style='color:red;'>默认值</span>**) |







#### 媒体特征

***主要用来<span style='color:red;'>猫叔媒体类型的具体特征</span>***

|    特征名称    |                  属性                  |               值                |
| :------------: | :------------------------------------: | :-----------------------------: |
|   视口的宽高   |     **<code>width，height</code>**     |              数值               |
| 视口的最大宽高 | **<code>max-width，min-height</code>** |              数值               |
| 视口的最小宽高 | **<code>min-width，min-height</code>** |              数值               |
|    屏幕方向    |      **<code>orientation</code>**      | portrait(竖屏)，landscape(横屏) |









#### link写法

```css
<link rel="stylesheet" media="(min-width:789px)" href="style.css">
```

![link写法](images/%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2%E5%AE%8C%E6%95%B4%E5%86%99%E6%B3%95.png)











## 🟪Flex布局

***<span style='font-family:FZShuTi;'>Flex</span> 是<u>Flexible Box</u>的缩写，意为'<span style='color:red;'>弹性布局</span>'，用来为盒状模型提供最大的灵活性。***





### 🍀概念

***<u>采用Flex布局的元素</u>，称为<span style='color:red;'>Flex容器（flex container）</span>，简称”<u><span style='color:skyblue'>容器</span></u>”。它的<u>所有子元素自动成为容器成员</u>，称为<span style='color:red;'>Flex项目（flex item）</span>，简称”<u><span style='color:skyblue'>项目</span></u>”。***





### 🌲组成部分

<img src="./images/Flex.png" alt="Flex" style="zoom: 50%;" />

|                             单词                             |                 含义                 |
| :----------------------------------------------------------: | :----------------------------------: |
|  ***<span style='font-family:STXihei ;'>main axis</span>***  |           ***水平的主轴***           |
| ***<span style='font-family:STXihei ;'>cross axis</span>***  |          ***垂直的交叉轴***          |
| ***<span style='font-family:STXihei ;'>main start</span>***  | ***主轴的开始位置(与边框的交叉点)*** |
|  ***<span style='font-family:STXihei ;'>main end</span>***   |         ***主轴的结束位置***         |
| ***<span style='font-family:STXihei ;'>crooss start</span>*** |        ***交叉轴的开始位置***        |
| ***<span style='font-family:STXihei ;'>crooss end</span>***  |        ***交叉轴的结束位置***        |
|  ***<span style='font-family:STXihei ;'>main size</span>***  |     ***单个项目占据的主轴空间***     |
| ***<span style='font-family:STXihei ;'>crooss size</span>*** |    ***单个项目占据的交叉轴空间***    |





### 💡设置方式

***<span style='color:red;'>给父元素设置`display: flex/inline-flex; ` 子元素可以自动的挤压或者拉伸</span>***

```css
display: flex; // 块级
display: inline-flex; // 行内块
```

> ❗❗***<u>设为Flex布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效</u>***









### 🌳容器属性

#### 主轴方向

***<span style='color:red;'>修改项目的排列方向</span>***

> ```css
> flex-direction: [可选];
> ```
>
> ​		**<code>row</code>**  				 ：*主轴为水平方向，起点在左端(**默认**)*
>
> ​		**<code>row-reverse</code>**  ：*主轴为水平方向，起点在右端*
>
> ​		**<code>column</code>**			 :   *主轴为垂直方向，起点在上沿*
>
> ​		**<code>column-reverse</code>**	:   *主轴为垂直方向，起点在下沿*

<img src="images/flex-direction.png" alt="主轴方向" style="zoom:33%;" />





#### 主轴项目对齐方式

> ```css
> justify-content: [可选];
> ```
>
> ​		**<code>start</code>**	:  *左对齐(**默认**)*
>
> ​		**<code>end</code>** 	:  *右对齐*
>
> ​		**<code>center</code>**	:	*居中*
>
> ​		**<code>space-between</code>**	:	*两端对齐，项目之间的间隔都相等*
>
> ​		**<code>space-around</code>**	  :    *两侧的间隔相等，项目之间的间隔比项目与边框的间隔大一倍*
>
> ​		**<code>space-evenly</code>**		:	*项目之间和项目与边框间隔均匀排列*

<img src="images/justify-content.png" alt="主轴项目的对齐方式" style="zoom:25%;" />





#### 交叉轴项目对齐方式

> ```css
> align-items: [可选];
> ```
>
> ​		**<code>flex-start</code>**  :   *交叉轴的起点对齐(**默认**)*
>
> ​		**<code>flex-end</code>** 	:	*交叉轴的终点对齐*	
>
> ​		**<code>center</code>**		 :	*交叉轴的中点对齐*
>
> ​		**<code>baseline</code>**	 :	*项目的第一行文字的基线对齐*
>
> ​		**<code>stretch</code>**		:	 *如果项目未设置高度或设为auto，将占满整个容器的高度*

<img src="images/align-items.png" alt="交叉轴的对齐方式" style="zoom:25%;" />





#### 交叉轴多行项目对齐方式

***属性在<u><span style='color:red;'>弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）</span></u>***

> ```css
> align-content: [可选];
> ```
>
> ​			**<code>flex-start</code>**  :	*交叉轴的起点对齐*
>
> ​			**<code>flex-end</code>**	:	*交叉轴的终点对齐*
>
> ​			**<code>center</code>**		:	*交叉轴的中点对齐*
>
> ​			**<code>space-between</code>**	:	*交叉轴两端对齐，轴线之间的间隔平均分布*
>
> ​			**<code>space-around</code>**	  :	*每根轴线两侧的间隔相等，轴线之间的间隔比轴线与边框的间隔大一倍*
>
> ​			**<code>space-evenly</code>**		:	*项目之间和项目与边框间隔均匀排列*
>
> ​			**<code>stretch</code>**	  :	*轴线占满整个交叉轴(**默认**)*
>
> ❕***<u>容器内必须有多行的项目，该属性才能渲染出效果</u>***

<img src="images/align-content.png" alt="交叉轴的多行项目对齐方式" style="zoom:25%;" />





#### 项目在轴线上是否换行

***默认情况下，项目都排在一条线（又称”<span style='color:red;'>轴线</span>”）上。<u>如果一条轴线排不下，该属性如何换行</u>***

> ```css
> flex-wrap: [可选];
> ```
>
> ​			**<code>nowrap</code>**  :	*不换行(**默认**)*
>
> ​			**<code>wrap</code>**		 :	*换行，第一行在上方*
>
> ​			**<code>wrap-reverse</code>**	:	*换行，第一行在下方*

<img src="images/flex-warp.png" alt="flex-wrap" style="zoom:25%;" />







#### flex-flow

***flex-flow属性是<u>flex-direction属性和flex-wrap属性的简写形式</u>，默认值为<span style='color:red;'>row nowrap</span>。***

```css
 flex-flow: <flex-direction> <flex-wrap>;
```









### 🌱项目属性

#### 项目排序顺序

***<u>定义项目的排列顺序</u>。<span style='color:red;'>数值越小，排列越靠前，默认为0。</span>***

```css
order: <number>;
```

<img src="images/order.png" alt="项目排序顺序" style="zoom:33%;" />







#### 项目放大比例

***<u>定义项目的放大比例</u>，<u>默认为0，即如果存在剩余空间，也不放大</u>。***

```css
flex-grow: <number>; /* default 0 */
```

> ❕*如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。*
>
> ❕*如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。*

<img src="images/flex-grow.png" alt="项目放大比例" style="zoom:33%;" />







#### 项目缩小比例

***<u>定义项目的缩小比例</u>，<u>默认为1，即如果空间不足，该项目将缩小</u>。***

```css
flex-shrink: <number>; /* default 1 */
```

> ❕*如果所有项目的<code>flex-shrink</code>属性都为1，当空间不足时，都将等比例缩小。*
>
> *如果一个项目的<code>flex-shrink</code>属性为0，其他项目都为1，则空间不足时，前者不缩小。*
>
> ❗***负值对该属性无效***

<img src="images/flex-shrink.png" alt="项目缩小比例" style="zoom:33%;" />







#### 单个项目的交叉轴对齐方式

```css
align-self: [auto | flex-start | flex-end | center | baseline | stretch];
```

> ❕*<u><code>align-self</code>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性</u>*
>
> ❕*<u>默认<code>auto</code>，表示继承父元素的<code>align-items</code>属性，如果没有父元素，则等同于<code>stretch</code></u>*
>
> ❕*该属性可能取6个值，除了<code>auto</code>，其他都与<code>align-items</code>属性完全一致*





#### 收缩率

***<u>当伸缩项目设置宽度，比容器宽度还要大时，元素并没有发生溢出的情况</u>，那此时就出现一个东西叫 <span style='color:red;'>收缩因子（收缩率）</span>***

> ```css
> flex-shirnk: <number>;
> ```
>
> ​			**<code>0</code>**	:	不收缩
>
> ​			**<code>1</code>**	：收缩
>
> ​			**`number`**	：收缩系数
>
> **<span style=color:red;>:grey_exclamation:*<u>负值无效</u>*</span>**





#### 设置项目初始大小

***设置 flex 项目的初始主大小。它设置内容框的大小，除非另有设置`box-sizing`***

> ```css
> flex-basis: [可选];
> ```
>
> ​		**`number`** ：数值，单位：`px`，`%`
>
> ​		**`auto`**	：自动增长以吸收柔性容器中的任何额外可用空间
>
> ​		**`content`·**	：自动调整大小
>
> **<span style=color:red;>:grey_exclamation:*<u>负值无效</u>*</span>**
>
> *如果主轴是在 `x` 轴上，那么设置的是<u>元素的宽</u>，*
>
> *如果主轴是在 `y` 轴，那么设置的是<u>元素的高度</u>*
>
> *并且属性优先级大于`width`，`height`*





### flex

***<span style=color:red;>设置 flex 项目如何增长或收缩以适合其 flex 容器中的可用空间</span>***

```css
flex: <flex-grow> <flex-shrink> <flex-basis>;
```

> ​		**`一个值`**	:	***<u>设置盒子占用父盒子剩余尺寸的 `number` 份数</u>***













## 🟧Grid布局

***<span style='color: red;'>CSS Grid(网格) 布局</span>，是一个<span style='color: red;'>二维</span>的基于网格的布局系统。将容器划分为"<span style='color:red;'>行</span>"和"<span style='color:red;'>列</span>"，<u>产生单元格</u>，然后指定"<span style='color:red;'>项目所在</span>"的单元格。***





### 🍀概念

***采用grid布局的元素，被称为<span style='color: red;'>grid容器(grid container)</span>，简称“<u><span style='color: skyblue;'>容器</span></u>”。其所有直接子元素（直接子***

***<u>素的子元素不包含在内）自动成为容器成员</u>，称为<span style='color:red;'>grid项目(grid item)</span>，简称“<span style='color: skyblue'><u>项目</u></span>”。***





### 🌲组成部分

<img src="images/Grid.png" alt="Grid网格布局" style="zoom: 25%;" title="Grid"/>







#### 🌱行和列

***容器里面的<span style='color: skyblue;text-decoration: underline;'>水平区域</span>称为"<<span style='color: red;'>行"（row）</span>，<span style='color: skyblue;text-decoration: underline;'>垂直区域</span>称为"<span style='color: red;'>列"（column）</span>***

<img src="images/%E8%A1%8C%E4%B8%8E%E5%88%97.png" alt="行与列" style="zoom:33%;border: 5px solid" title="行与列" />





#### 🍃单元格

***<u>行和列的交叉区域</u>，称为<span style="color: red;">"单元格"（cell）</span>***。

> ***正常情况下，`n`行和`m`列会产生`(n * m)`个单元格***







#### 🍂网格线

***<u>划分网格的线</u>，称为<span style='color:red;'>"网格线"（grid line）</span>。<span style="color:skyblue;text-decoration:underline;">水平网格线划分出行</span>，<span style="color:skyblue;text-decoration:underline;">垂直网格线划分出列</span>***。

> ***正常情况下，`n`行有`(n + 1)`根水平网格线，`m`列有`(m + 1)`根垂直网格线。***

<img src="images/%E7%BD%91%E6%A0%BC%E7%BA%BF.png" alt="网格线" style="zoom:50%;" title="网格线"/>







### 💡设置方式

***<code style='color: red;'>给父元素设置display: grid/inline-grod;</code>*** 

> ```css
> display: [可选];
> ```
>
> ​		<code>grid</code>	:	块级网格
>
> ​		<code>inline-grid</code>	:	行级网格
>
> ❗<u>❗***设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和 <code>column-</code> 等设置都将失效***</u>

![grid布局](images/grid%E5%B8%83%E5%B1%80.png)







<hr>

### 🌳容器属性

#### 定义网格的行与列

> ```css
> grid-template-columns: <number-list>; // 定义列的列宽
> grid-template-rows: <number-list>; // 定义行的行高
> ```
>
> ​		<code>number-list</code>	: 	**定义列数且行大小，单位%，px**
>
> ​		<code>repeat(重复次数,开始行的高/宽 [n的行列的高/宽])</code>	:  <span style='color: red;font-weight: 700;'>函数，</span><u>重复绘制</u>
>
> ​					<code>auto-fill</code>	:	<span style='color: red;font-weight: 700;'>关键字，</span><u>单元格大小固定，容器大不确定，属性将自动填充</u>
>
> ❕**<u>*通用*</u>**
>
> ​					<code>fr</code> :	<span style='color: red;font-weight: 700;'>单位，</span><u>等比例占网格容器剩余可用空间的等分</u>
>
> ​					<code>minmax(min,max)</code>	:	<span style='color: red;font-weight: 700;'>关键字，</span><u>产生一个长度范围，表示长度只能在这个范围之中</u>
>
> ​					<code>auto</code>	:	<span style='color: red;font-weight: 700;'>关键字，</span><u>由浏览器自己决定长度</u>

<img src="images/grid-template-(rows-columns).png" alt="grid-template-*" style="zoom:40%;" title="columns/rows"/>







#### 定义网格线名称

> ```css
> grid-template-columns: [可选];
> grid-template-rows: [可选];
> ```
>
> ​			<code>[linen-start] number [line-end]</code>	:	***可使用方括号，指定设置每一根网格线的名字***
>
> ​			`repeat(重复次数,[line-start] number [line-end])`	:	***可使用方括号，设置每网格相同名称***
>
> ❕<span style="color: red;">*<u>可以设置每个单元格的四根网格线名称，网格线名称**可重复，可多个**</u>*</span>

<img src="images/%E7%BD%91%E6%A0%BC%E7%BA%BF%E5%90%8D%E7%A7%B0.png" alt="网格线名称" style="zoom:40%;" title="网格线名称"/>











#### 定义行与列的间距

> ```css
> columns-gap: <line-size>; // 设置列间距
> row-gap: <line-size>; // 设置行间距
> gap: <row-size> <column-size>; // 复合属性,只有一个值时,第二个值默认是第一个值
> ```
>
> ​			<code>line-size</code>	:	间距距离，**单位: % px**

<img src="images/gap.png" alt="gap" style="zoom:35%;" />







#### 定义网格区域

> ```css
> grid-template-areas: [可选];
> ```
>
> ​		<code>gird-area-name</code>	:	由网格项<code>grid-area</code>指定的网格区域名称
>
> ​		<code>.</code>	:	代表一个空网格单元，不是属于任何区域
>
> ❕❕***区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为`区域名-start`，终止网格线自动命名为`区域名-end`***







#### 项目的排版顺序

> ```css
> grid-auto-flow: [可选];
> ```
>
> ​		<code>row</code>	:	先行后列(**默认值**)
>
> ​		<code>column</code>	:	先列后行
>
> ​		<code>dense</code>	:	换行时留下的空间可以由下面的元素填补上去，***可配合前两个属性使用***

<img src="images/grid-auto-flow.png" alt="grid-auto-flow" style="zoom: 27%;" />

<img src="images/grid-auto-flow(2).png" alt="grid-auto-flow" style="zoom:25%;" />







#### 项目的内容对齐方式

> ```css
> justify-items: [可选]; // 水平对齐方式
> align-items: [可选]; // 垂直对齐方式
> place-items: <justify-items> <align-items>; // 复合属性,只有一个值时,第二个值默认第一个值
> ```
>
> ​		<code>start</code>	:	左/上对齐
>
> ​		<code>end</code>	:	右/下对齐
>
> ​		<code>center</code>	:	居中对齐
>
> ​		<code>stretch</code>	:	占满整个单元格

![项目内容对齐方式](images/grid(items).png)





#### 容器内容区域的对齐方式

> ```css
> justify-content: [可选]; // 水平对齐方式
> align-content: [可选]; // 垂直对齐方式
> place-content: <justify-content> <align-content>; // 复合属性,只有一个值时,第二个值默认第一个值
> ```
>
> ​			<code>start</code>	:	左/上对齐
>
> ​			<code>end</code>	:	右/下对齐
>
> ​			<code>center</code>	:	居中对齐
>
> ​			<code>strech</code>	:	占满网格容器
>
> ​			<code>space-around</code>	:	单元格之间设置均等宽/高度的空白间隙，其外边缘间隙为中间空白间隙宽度的50%
>
> ​			<code>space-between</code>	:	单元格之间设置均等宽/高度空白间隙，其外边缘无间隙
>
> ​			<code>space-evenly</code>	:	单元格之间设置均等宽/高度的空白间隙，包括外边缘

![容器内容对齐方式](images/grid(content).png)







#### 指定隐式网格轨道的大小

❕*<u>指定自动生成的网格轨道（又名隐式网格轨道）的大小，隐式网格轨道在你显式的定位超出指定网格范围的行或列时被创建</u>*

> ```css
> grid-auto-rows: <track-size>; // 隐式行轨道的大小
> grid-auto-columns: <track-size>; // 隐式列轨道的大小
> ```
>
> ​		<code>track-size</code>	:	数值，**单位：px，%，<code>fr</code>**

<img src="images/grid-auto.png" alt="grid-auto-*" style="zoom:45%;" title="隐式网格大小" />





### 🌱项目属性

#### 跨列

> ```css
> grid-column-start: [可选]; // 左边框所在的垂直网格线
> grid-column-end: [可选]; // 右边框所在的垂直网格线
> grid-column: <start-line> / <end-line>; // 复合属性,没有指定结束行值，则默认跨越1个轨道
> ```
>
> ​			<code><liune></code>	:	数值来指代相应编号的网格线，也可以使用名称指代相应命名的网格线
>
> ​			<code>span <number></code>	:	网格项将跨越指定数量的网格轨道
>
> ​			<code>span <name></code>	:	网格项将跨越一些轨道，直到碰到指定命名的网格线
>
> ​			`name number`	:	相同`name`的`number`个
>
> ​			<code>auto</code>	:	<span style='color: red;'>**关键字**</span>，自动布局，或者自动跨越
>
> ​			`span` 	:	**<span style='color: red;'>关键字</span>**，当前单元格

<img src="images/grid-column.png" alt="grid-column" style="zoom:45%;" title="跨列"/>







#### 跨行

> ```css
> grid-row-start: [可选]; // 上边框所在的水平网格线
> grid-row-end: [可选]; // 下边框所在的水平网格线
> grid-row: <start-line> / <end-line>; // 复合属性,没有指定结束行值，则默认跨越1个轨道
> ```
>
> ​			<code><liune></code>	:	数值来指代相应编号的网格线，也可以使用名称指代相应命名的网格线
>
> ​			<code>span <number></code>	:	网格项将跨越指定数量的网格轨道
>
> ​			<code>span <name></code>	:	网格项将跨越一些轨道，直到碰到指定命名的网格线
>
> ​			`name number`	:	相同`name`的`number`个
>
> ​			<code>auto</code>	:	<span style='color: red;'>**关键字**</span>，自动布局，或者自动跨越
>
> ​			`span` 	:	**<span style='color: red;'>关键字</span>**，当前单元格

<img src="images/grid-row.png" alt="grid-row" style="zoom:45%;" title="跨行"/>







#### 🔅grid-area

> ```css
> grid-area: [可选];
> ```
>
> ​			<code><name></code>	:	指定项目放在哪一个区域，如果区域不存在则对区域的命名
>
> ​			`<row-start> / <column-start> / <row-end> / <column-end>`	:	复合属性***<u>(上，左，下，右)</u>***

<img src="images/grid-area.png" alt="grid-area" title="grid-area" style="zoom: 40%;"/>





#### ❗❗注意

> ***网格项可以相互重叠，可以使用`z-index`来控制它们的堆叠顺序***







#### 设置单个项目内容对齐方式

> ```css
> justify-self: [可选]; // 单个项目内容的水平对齐
> align-self: [可选]; // 单个项目内容的垂直对齐
> place-self: <justify-self> <align-self>; // 复合属性,有一个值时,第二个值默认第一个值
> ```
>
> ​			`start`	:	对齐单元格的起始边缘
>
> ​			`end`	:	对齐单元格的结束边缘
>
> ​			`center`	:	单元格内部居中
>
> ​			`stretch`	:	拉伸，占满单元格的整个宽度(**默认**)

<img src="images/place-self.png" alt="单个项目内容对齐方式" title="单个项目内容对齐方式" style="zoom:50%;" />















## ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>

