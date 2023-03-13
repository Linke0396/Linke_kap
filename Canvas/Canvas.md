[TOC]

# Canvas

==***画布***==



## 🍀概念

+ *`H5`提供的一个新的标签元素*
+ *可以在其上面通过脚本语言`(js)`绘制图形、图像以及制作动画的标签*
+ *本身不具备绘制能力，只是负责展示*













## 基本使用

> ~~~html
> <!-- canvas在低版本浏览器不兼容时，需要提示用户 -->
> <canvas width="500" height="500">您的浏览器版本过低，请升级浏览器!</canvas>
> ~~~
>
> ==:grey_exclamation:**在创建`canvas`标签时，如果没有指定宽和高，默认为 `300*150(px)`**==
>
> ❕<span style=color:black;>要用`canvas`的相关属性设置其宽和高；否则，用其他方式指定`canvas`的宽和高，会在默认值的基础上进行缩放</span>













## 🎈绘图上下文

> :grey_exclamation:==**要在`canvas`上绘图，要获取`canvas`的绘图上下文，通过绘图上下文在`canvas`上绘制图形、图象**==

~~~html
<canvas id="linke" width="500" height="500"></canvas>
~~~

~~~javascript
// 1.获取画布节点对象
let canvas = document.getElementById('linke');

/* 2.获取该画布的绘画工具(上下文)
	getContext()方法参数
    	'2d' : 获取绘制平面图形的工具
        'WebGL' : 获取绘制立体图形的工具
*/
let ctx = canvas.getContext('2d');
~~~



















## 🚩原点

> ==**<span style=color:red;>原点</span>在`canvas`的左上角**==
>
> |   轴    |         方向         |
> | :-----: | :------------------: |
> | **`z`** | **在原点的水平方向** |
> | **`y`** | **在原点的垂直方向** |















## 🪁路径

> ==**将图形的起始点与终止点进行连线，形成一个封闭的图形**==
>
> ❕<span style=color:black;>会自动处理封闭图形的锯齿</span>

|         方法          |     作用     |
| :-------------------: | :----------: |
| **`ctx.beginPath()`** | **开启路径** |
| **`ctx.closePath()`** | **闭合路径** |













## 🎨绘制

|        方法        |     作用     |
| :----------------: | :----------: |
|  **`ctx.fill()`**  | **填充区域** |
| **`ctx.stroke()`** | **绘制边框** |

> :grey_exclamation:==**如果同时需要填充和描边时，<span style=color:red;>先填充后描边</span>**==

















## 🏏线性属性

|       属性        |                             描述                             |
| :---------------: | :----------------------------------------------------------: |
|  **`lineWidth`**  |                         **设置线宽**                         |
| **`strokeStyle`** | **设置线条颜色<br>值可以为`(16进制、颜色字符串、rgb、rgba、渐变色)`** |
|  **`fillStyle`**  |                       **设置填充颜色**                       |
|   **`lineCap`**   | **设置线段两端的样式<br>`butt`: 默认<br>`round`: 突出的圆角图形<br>`square`: 突出的方形图形** |
|  **`lineJoin`**   | **设置线段相交点的样式<br>`round`：圆角<br>`bevel`: 平角<br>`miter`: 尖角** |













## :pencil2:绘制线段

|         方法          |        作用        |
| :-------------------: | :----------------: |
| **`ctx.moveTo(x,y)`** |  **开始原点位置**  |
| **`ctx.lineTo(x,y)`** | **绘制接下来的点** |







### 直线

<center><img src="images/%E7%9B%B4%E7%BA%BF.png" style="zoom:45%;border:thin solid silver;" title="直线" /></center>

~~~javascript
// 设置线宽
ctx.lineWidth = 10;
// 设置线段两端的样式
ctx.lineCap = 'round';

// 方式(1)
line(100, 100, 400, 100, "skyblue"); // 上
line(100, 100, 100, 400, "pink"); 	// 左
line(100, 400, 400, 400, "green");  // 下
line(400, 100, 400, 400, "red");  // 右

/** 
* 封装画直线的函数
*/
function line(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

// 方式(2)
/* ctx.strokeStyle = 'skyblue';
ctx.beginPath();
ctx.moveTo(100, 100); // 可多次调用
ctx.lineTo(400, 100);
ctx.lineTo(400, 400);
ctx.lineTo(100, 400);
ctx.lineTo(100, 100);
ctx.stroke();
ctx.closePath(); */
~~~













### 虚线

<center><img src="images/%E8%99%9A%E7%BA%BF.png" style="zoom:45%;border:thin solid silver;" title="虚线" /></center>

~~~javascript
// 设置线宽
ctx.lineWidth = 2;
// 设置线段两端的样式
ctx.lineCap = 'round';

// 斜虚线
for (let i = 0; i < 30; i++) {
    line(100 + 10 * i, 100 + 10 * i, 105 + 10 * i, 105 + 10 * i, "pink");
}

// 直虚线
for (let i = 0; i < 30; i++) {
    line(100 + 10 * i, 100, 105 + 10 * i, 100, "skyblue");
}

function line(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}
~~~















## ⬜绘制矩形

|                  方法                  |       作用       |
| :------------------------------------: | :--------------: |
|    **`ctx.rect(x,y,width,height)`**    |   **绘制矩形**   |
|  **`ctx.fiilRect(x,y,width,height)`**  | **绘制实心矩形** |
| **`ctx.strokeRect(x,y,width,height)`** | **绘制空心矩形** |

>+ <span style=color:black;>**`x`**: 矩形左上角的`x`坐标</span>
>+ <span style=color:black;>**`y`**: 矩形左上角的`y`坐标</span>
>+ <span style=color:black;>**`width`**: 矩形的宽度`(px)`</span>
>+ <span style=color:black;>**`height`**: 矩形的高度`(px)`</span>

<center><img src="images/%E7%9F%A9%E5%BD%A2.png" style="zoom:45%;border:thin solid silver;" title="矩形" /></center>

~~~javascript
// 设置边框大小
ctx.lineWidth = 5;
// 设置边框角样式
ctx.lineJoin = 'round';
// 设置边框颜色
ctx.strokeStyle = 'skyblue';
// 设置填充颜色
ctx.fillStyle = 'pink';

// 绘制矩形
ctx.rect(100, 100, 100, 100);
// 填充颜色
ctx.fill();
// 绘制边框
ctx.stroke();

// 实心矩形
ctx.fillStyle = 'skyblue';
ctx.fillRect(200, 200, 100, 100);

// 空心矩形
ctx.strokeStyle = 'pink';
ctx.strokeRect(300, 300, 100, 100);
~~~















## 🧻清除画布

|                 方法                  |     作用     |
| :-----------------------------------: | :----------: |
| **`ctx.clearRect(x,y,width,height)`** | **清除画布** |

> + <span style=color:black;>**`x`**: 左上角的`x`坐标</span>
> + <span style=color:black;>**`y`**: 左上角的`y`坐标</span>
> + <span style=color:black;>**`width`**: 宽度`(px)`</span>
> + <span style=color:black;>**`height`**: 高度`(px)`</span>

<center><img src="images/%E6%B8%85%E9%99%A4%E7%94%BB%E5%B8%83.png" style="zoom:40%;border:thin solid silver;" title="清除画布" /></center>

~~~javascript
ctx.fillStyle = 'skyblue';
ctx.fillRect(100,100,300,300);

// 清除画布
ctx.clearRect(200,200,100,100);
~~~













## ⚪绘制圆形

|                             方法                             | 作用     |
| :----------------------------------------------------------: | -------- |
| **`ctx.arc(x,y,radius,startAngle,endAngle[,counterclockwise])`** | 绘制圆形 |

> - <span style=color:black;>**`x`**: 圆弧中心的水平坐标</span>
> - <span style=color:black;>**`y`**: 圆弧中心的垂直坐标</span>
> - <span style=color:black;>**`radius`**: 弧的半径`(px)`</span>
> - <span style=color:black;>**`startAngle`**: 弧以弧度开始的角度</span>
> - <span style=color:black;>**`endAngle`**: 弧结束的角度`(以弧度为单位)`</span>
> - <span style=color:black;>**`counterclockwise`**: 可选的布尔值。如果`true`，绘制圆弧在起点和终点角度之间<u>逆时针</u>方向移动。默认值`false`<u>(顺时针)</u></span>
>
> <center><img src="images/%E5%9C%86.png" style="zoom:35%;border:thin solid silver;" title="圆" /></center>

<center><img src="images/%E5%9C%86(2).png" style="zoom:30%;border:thin solid silver;" title="圆" /></center>

~~~javascript
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 1.5 * Math.PI);
ctx.stroke(); // 空心

ctx.beginPath();
ctx.arc(350, 350, 100, 0, 1.5 * Math.PI);
ctx.fill(); // 填充
~~~













# ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>
