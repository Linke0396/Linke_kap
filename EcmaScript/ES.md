[TOC]

# ES

------

*`ES` 全称 **<span style='color:red;'>EcmaScript</span>**，是脚本语言的<span style='color:red;'>**规范**</span>⭐，而平时经常编写的 **<span style='color:red;'>JavaScript</span>**，是`EcamScript` 的一种实现，所以 `ES` 新特性其实就是指的是 **<span style='color:red;'>JavaScript 的新特性</span>***

<img src="images/ES.png" alt="ES" style="zoom:50%;" title='ESMAScript'/>





## 🔅ECMAScript

<span style='color:red;'>***`ECMAScript` 是由 Ecma 国际通过`ECMA-262` 标准化的脚本程序设计语言***</span>

<img src="images/ECMA.png" alt="ECMA" style="zoom:90%;" />



### MCMA-262

> ***Ecma 国际制定了许多标准，而`ECMA-262` 只是其中的一个***

- `ES5` 是 **ECMAScript** 第5版，2009年发布
- `ES6` 是 **ECMAScript** 第6版，2015年发布，也叫 **ES2015**
- 从 `ES6` 开始，每年发布一个版本，版本号比年份最后一位大 **1**







## ⭐ES5

<img src="images/ES5.png" alt="ES5" style="zoom:80%;" title="ES5"/>







### ❌异常

#### <span style=font-family:consolas,Microsoft YaHei>try/catch/finally</span>

> ==**`try/catch/finally` 是 JavaScript 异常处理语句**==

```javascript
try {
     // 供测试的代码块
}
 catch(err) {
     // 处理错误的代码块
} 
finally {
     // 无论结果如何都执行的代码块
}
```

> ❕*在正常情况下，JavaScript 按顺序执行 `try` 子句中的代码，如果没有异常发生，将会忽略* 
>
> *`catch` 子句，跳转到 `finally` 子句中继续执行*
>
> ❕*如果在 `try` 子句运行时发生错误，或者使用 throw 语句主动抛出异常，则执行*
>
> *`catch` 子句中的代码，同时传入一个参数，引用 `Error` 对象*
>
> ❕*不管 `try` 语句是否完全执行，`finally` 语句最后都必须要执行，即使使用了跳转语*
>
> *句跳出了异常处理结构，也必须在跳出之前先执行 `finally` 子句*







#### <span style=font-family:consolas,Microsoft YaHei>Error</span>

> ==**JavaScript 拥有当错误发生时提供错误信息的内置 `Error` 对象**==





##### 自定义异常

> :grey_exclamation:*通过 `Error` 的构造器可以创建一个错误对象。当运行时错误产生时，`Error` 的实例对象会被抛出*
>
> *`Error` 对象也可用于用户自定义的异常的基础对象*

```javascript
new Error([errorInfo]);
```





##### 类型

> :grey_exclamation:*`Error` 是基类，其他 6 种错误类型是子类，都继承 `Error` 基类*
>
> :grey_exclamation:*`Error` 类型的主要用途是自定义异常对象*

|        Class         |             描述              |
| :------------------: | :---------------------------: |
|     **`Error`**      |         **普通异常**          |
|   **`EvalError`**    | **`eval()` 函数中发生的错误** |
|  **`SyntaxError`**   |         **语法错误**          |
|   **`RangeError`**   |    **超出数字范围的错误**     |
| **`ReferenceError`** |         **非法引用**          |
|   **`TypeError`**    |         **类型错误**          |
|    **`URIError`**    |    **URI 编码和解码错误**     |





#### <span style=font-family:consolas,Microsoft YaHei>throw</span>

==**`throw` 语句用来抛出一个用户自定义的异常，`throw` 之后的语句将不会执行**==

```javascript
try {
    console.log('before throw');
    throw new TypeError('This is a TypeError');
    console.log('after throw'); // 这条语句不会执行
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

// 执行结果
before throw
TypeError
This is a TypeError
```







### ⭕构造函数

> ==**<span style=color:red;>构造函数</span>** 是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值==
>
> *==与 `new` 一起使用。可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面==*





#### 🍀特点

+ ==*构造函数有原型对象 `prototype`*==
+ ==*构造函数原型对象 `prototype` 里面有 `constructor` 指向构造函数本身*==
+ ==*构造函数可以通过原型对象添加方法*==
+ ==*构造函数创建的实例对象有 `__proto__` 原型指向 构造函数的原型对象*==





#### 基本使用

```javascript
function MyClass(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function(){
        return this.name + ',' + this.age;
    }
}

let cla = new MyClass('linke',11);
cla.toString() // linke,11
```





#### 构造函数原型

> ==<u>构造函数通过原型分配的函数是所有对象所 **<span style=color:red;>共享的</span>**</u>==
>
> *<span style=color:red;>JavaScript</span> 规定，每一个构造函数都有一个 `prototype` 属性，指向另一个对象*
>
> *这个 `prototype` 就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有*
>
> :grey_exclamation:<span style=color:#000;>***把那些不变的方法，直接定义在 `prototype` 对象上，这样所有对象的实例就可以共享这些方法***</span>

```javascript
function MyClass(name, age) {
    this.name = name;
    this.age = age;
}

MyClass.prototype.toString = function () { // 定义原型方法
    return this.name + ',' + this.age;
}

let cla1 = new MyClass('linke', 11);
let cla2 = new MyClass('keke', 10);

cla1.toString() // linke,11
cla2.toString() // keke,10
cla1.toString === cla2.toString // true
```





#### 对象原型

> ==<u>对象都会有一个属性 `__proto__` 指向构造函数的 `prototype` 原型对象</u>==
>
> 因为对象有 `__proto__` 原型的存在，所有对象可以使用构造函数 `prototype` 原型对象的属性和方法
>
> :grey_exclamation:***<span style=color:#000;>`__proto__` 对象原型和构造函数的原型对象 `prototype` 是等价的</span>***

```javascript
function MyClass(name, age) {
    this.name = name;
    this.age = age;
}

MyClass.prototype.toString = function () {
    return this.name + ',' + this.age;
}

let cla1 = new MyClass('linke', 11);

cla1.__proto__ === MyClass.prototype // true
```



##### :grey_exclamation:注意

> ==`__proto__` 对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线==
>
> ==**它是一个非标准属性，因此实际开发中，不可以使用这个属性**，它只是内部指向原型对象 `prototype`==





#### constructor 构成函数

> ==**对象原型（`__proto__`）和构造函数（`prototype`）原型对象里面都有一个属性 `constructor` 属性**==
>
> `constructor` 指回构造函数本身

```javascript
function MyClass(name, age) {
    this.name = name;
    this.age = age;
}

MyClass.prototype.toString = function () {
    return this.name + ',' + this.age;
}

let cla1 = new MyClass('linke', 11);

MyClass.prototype.constructor // MyClass(name, age) { this.name = name; this.age = age; }
cla1.__proto__.constructor // MyClass(name, age) { this.name = name; this.age = age; }
MyClass.prototype.constructor === cla1.__proto__.constructor // true
```







### 🔗原型链

<img src="images/%E5%8E%9F%E5%9E%8B%E9%93%BE.png" alt="原型链" style="zoom:95%;border: 1px solid #000;" title="原型链" />







####  JavaScript 的成员查找规则

1. ==*当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性*==

2. ==*如果没有就查找它的原型（也就是 `__proto__` 指向的 `prototype` 原型对象）*==

3. ==*如果还没有就查找原型对象的原型（`Object`）的原型对象）*==

4. ==*依此类推一直找到 `Object` 为止（`null`）*==





#### 原型对象 this 指向

> :grey_exclamation:==**构造函数中的 `this` 指向我们实例对象**==
>
> ==*原型对象里的方法里面的 `this` 指向的是 这个方法的调用者，也就是这个实例对象*==





### 🧩继承

> ==通过 **<span style=color:red;>构造函数+原型对象</span>** 模拟实现继承，被称为 **<span style=color:red;>组合继承</span>**==





#### 继承父类属性

```javascript
// 父类
function Father(name, age) {
    this.name = name;
    this.age = age;
}
// 子类
function Son(name, age, sex) {
    // 此时父类的 this 指向子类的 this，同时调用这个函数
    Father.call(this, name, age, sex);  
    this.sex = sex;
}

let stu = new Son('linke', 11, 'male');
stu // Son {name: 'linke', age: 11, sex: 'male'}
```







#### 继承父类方法

```javascript
function Father(name, age) {
    this.name = name;
    this.age = age;
}
Father.prototype.getName = function () { // 父类构造函数特有成员方法
    return this.name;
}

function Son(name, age, sex) {
    // 此时父类的 this 指向子类的 this，同时调用这个函数
    Father.call(this, name, age, sex);
    this.sex = sex;
}
Son.prototype = new Father; // 创建实例对象，将子类原型对象指向实例对象
Son.prototype.constructor = Son; // 将子类的 constructor 重新指向子类的构造函数
Son.prototype.getAge = function () { // 子构造函数特有成员方法
    return this.age;
}

let stu = new Son('linke', 11, 'male');

stu.getAge() // 11
stu.getName() // linke
```







### 对象方法

#### <span style=font-family:consolas,Microsoft YaHei> Object.defineProperty()</span>

> `Object.defineProperty()` 定义对象中新属性或修改原有的属性
>
> ```javascript
> Object.defineProperty(obj, prop, descriptor);
> ```
>
> ​		**`obj`**	：目标对象 
>
> ​		**`prop`**	：需定义或修改的属性的名字
>
> ​		**`descriptor`**	：目标属性所拥有的特性，以对象形式`{}`
>
> |      属性特征      |                          说明                          |
> | :----------------: | :----------------------------------------------------: |
> |    **`value`**     |             设置属性的值，默认`undefined`              |
> |   **`writable`**   |              值是否可以重写，默认 `false`              |
> |  **`enumerable`**  |            属性是否可以被枚举，默认 `false`            |
> | **`configurable`** | 属性是否可以被删除或是否可以再次修改特性，默认 `false` |







### <span style=font-family:consolas,Microsoft YaHei>this</span>

####  函数内 this 的指向

|    调用方式    |  `this` 指向   |
| :------------: | :------------: |
|    普通函数    |    `window`    |
|    构造函数    |    实例对象    |
| 原型对象的方法 |    实例对象    |
|   对象的方法   | 该方法所属对象 |
|  绑定事件函数  |  绑定事件对象  |
|   定时器函数   |    `window`    |
|  立即执行函数  |    `window`    |





#### 改变函数内部 this 指向

+ ``call()`

  + >```javascript
    >fun.call(thisArg, arg1, arg2, ...);
    >```
    >
    >​		**`thisArg`**	：在 `fun` 函数运行时指定的 `this` 值
    >
    >​		**`arg1`，`arg2`**	：传递的其他参数
    >
    >***返回值就是函数的返回值，因为它就是调用函数***

+ `apply()`

  + >```javascript
    >fun.apply(thisArg, [argsArray]);
    >```
    >
    >​		**`thisArg`**	：在fun函数运行时指定的 `this` 值
    >
    >​		**`argsArray`**	：传递的值，必须包含在数组里面
    >
    >***返回值就是函数的返回值，因为它就是调用函数***

+ `bind()`

  + >```javascript
    >let fn = fun.bind(thisArg, arg1, arg2, ...);
    >```
    >
    >​		**`thisArg`**	：在 `fun` 函数运行时指定的 `this` 值
    >
    >​		**`arg1`，`arg2`**	：传递的其他参数
    >
    >***返回由指定的 `this` 值和初始化参数改造的<span style=color:red;>原函数拷贝</span>***



##### <span style=font-family:consolas,Microsoft YaHei>call apply bind 总结</span>

+ ###### 相同点：==**都可以改变函数内部的 `this` 指向**==

+ ###### 区别点：

  1. `call` 和 `apply` 会调用函数, 并且改变函数内部 `this` 指向
  2. `call` 和 `apply` 传递的参数不一样
  3. `bind` 不会调用函数，可以改变函数内部 `this` 指向，并返回一个原函数的拷贝







### 严格模式

> <span style=color:red;>***严格模式采用具有限制性的条件下运行 JS 代码***</span>



#### 🍓特征

+ ==*消除了 <span style=color:red;>Javascript</span> 语法的一些不合理、不严谨之处，减少了一些怪异行为*==
+ ==*消除代码运行的一些不安全之处，保证代码运行的安全*==
+ ==*提高编译器效率，增加运行速度*==
+ ==*禁用了未来新版本的 <span style=color:red;>Javascript</span> 中可能会定义的一些语法*==







#### 开启严格模式

##### 脚本开启严格模式

> ==**需要在所有语句之前放一个特定字符串 `'use strict';`**==

```html
<script>
    'use strict';
    console.log('严格模式已开启');
</script>
```





##### 函数开启严格模式

> ==**需要在函数体所有语句之前放一个特定字符串 `'use strict';`**==

```javascript
function fun() {
    'use strict'
    console.log('函数严格模式已开启');
}
```





#### 🍬规定

+ ==变量都必须先用 `var` （`let`、`const`）命令声明，然后再使用==

  + ```javascript
    'use strict';
    num = 11;
    console.log(num); // ReferenceError
    ```

+ ==严禁删除已经声明变量==

+ ==严格模式下全局作用域中函数中的 `this` 是 `undefined`==

+ ==严格模式中构造函数必须用 `new` 调用==

+ ==定时器 `this` 还是指向 `window`==

+ ==函数不能有重名的参数==

+ ==不允许在非函数的代码块内声明函数==

🔗[更多严格模式要求参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)





### 高阶函数

> **高阶函数是对其他函数进行操作的函数，它 <span style=color:red;>接收函数作为参数</span> 或 <span style=color:red;>将函数作为返回值输出</span>**

```javascript
// 例1
function fn(callback) {
    callback && callback();
}
fn(function () { alert('hi') }
   
// 例2
function fn() {
    return function () { }
}
fn();
```







### 👝闭包

#### 🍀概念

> <span style=color:red;>**闭包（`closure`）指有权访问另一个函数作用域中变量的函数**</span>
>
> ==简单理解就是：**一个作用域可以访问另外一个函数内部的局部变量**==

```javascript
function fn1() { // 被另一个函数访问局部变量的函数就是一个闭包
    var x = "linke"; // x 是一个被 fn1 创建的局部变量
    return function() { // 内部函数
        console.log(x); // 使用了父函数中声明的变量
    }
}
let fun = fn1();
fun(); // linke
```





#### 作用

> <span style=color:red;>**延伸变量的作用范围**</span>
>
> <span style=color:red;>**实现了变量私有化**</span>



#### 缺点

><span style=color:red;>**可能导致内存泄露**</span>
>
>###### ==*解决：及时释放给 `闭包函数= null;`*==







### 浅拷贝和深拷贝

+ ***<span style=color:red;>浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用</span>***
+ ***<span style=color:red;>深拷贝拷贝多层，每一级别的数据都会拷贝</span>***









## ⭐ES6

<img src="images/ES6.png" alt="ES6" style="zoom:50%;" title='ES6'/>



### 🍄概述

- ==ES6 的版本变动内容最多，具有里程碑意义==
- ==ES6 加入许多新的语法特性，编程实现更简单、高效==
- ==ES6 是前端发展趋势，就业必备技能==





### 🔵**let** 关键字

#### 🍀语法

> ```javascript
> let 变量名 = 变量值;
> ```
>
> ❗**声明的变量在块级作用域**
>
> ❗<span style='color:red;'>**以后声明变量尽量使用 `let`** </span>



#### 💡特点

- ###### 不允许重复声明

  - ```javascript
    let a = 10;
    let a = 1; //  SyntaxError: Identifier 'a' has already been declared
    ```

- ###### 块级作用域

  - ```javascript
    {
        let num = 73;
    }
    num; // num is not defined
    ```

- ###### 不存在变量提升

  - ```javascript
    // var 的情况
    console.log(foo); // 输出undefined
    var foo = 2;
    
    // let 的情况
    console.log(bar); // 报错ReferenceError
    let bar = 2;
    ```

- ###### 不影响作用域链

  - ```javascript
    {
        let username = 'lin';
        function fun() {
          console.log(username);
        }
        fun();
    }
    // 输出 lin
    ```

    


#### ❗❗注意

> ```javascript
> for (let i = 0; i < 3; i++) {
> 	let i = 'abc';
> 	console.log(i);
> }
> // abc
> // abc
> // abc
> ```
>
> <span style='color:red;'>❕*变量**`i`**是**`let`**声明的，当前的**`i`**只在本轮循环有效，所以每一次循环的**`i`**其实都是一个新的变量*</span>
>
> <span style='color:red;'>❕ <u>*JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量**`i`**时，就在上一轮循环的基础上进行计算*</u></span>
>
> <span style='color:red;'>❕<u>***`for`**循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域*</u></span>





### 🔵**conset** 关键字

#### 🍀语法

> ```javascript
> const 大写变量名 = 变量值;
> ```
>
> ❗*`const`**<u>声明一个只读的常量。一旦声明，常量的值就不能改变</u>***



#### 💡特点

+ ###### 声明必须赋初始值

  + ```javascript
    const PI = 3.1415;
    PI // 3.1415
    
    PI = 3;
    // TypeError: Assignment to constant variable.
    ```

+ ###### 标识符一般为大写

+ ###### 不存在变量提升

+ ###### 不允许重复声明

  + ```javascript
    const KE = 'ke';
    const KE = 'lin'; // SyntaxError: Identifier 'KE' has already been declared
    ```

+ ###### 值不允许修改

  + ```javascript
    const KE = 'ke';
    KE = 73;
    // TypeError: Assignment to constant variable.
    ```

+ ###### 块级作用域

  + ```javascript
    {
      const MAX = 5;
    }
    MAX // ReferenceError: MAX is not defined
    ```



#### ❕❕本质

```javascript
const OBJ = {};

// 为 OBJ 添加一个属性，可以成功
OBJ.prop = 123;
OBJ.prop // 123

// 将 OBJ 指向另一个对象，就会报错
OBJ = {}; // TypeError: "OBJ" is read-only
```

> ❕*`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。*
>
> *对于简单类型的数据（数值、字符串、布尔值），值<u>就保存在变量指向的那个内存地址</u>，因此等同于<span style='color:red;'>常量</span>。*
>
> *但对于复合类型的数据（主要是对象和数组），<u>变量指向的内存地址</u>，保存的只是一个指向实际数据的<span style='color:red;'>指</span>*
>
> *<span style='color:red;'>针</span>，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了*
>
> > ❕***对象属性修改和数组元素变化不会出发 `const` 错误***
> >
> > ❕***声明对象类型使用 `const`，非对象类型声明选择 `let`***





### 💠变量的解构赋值

***<u>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值</u>，这被称为<span style='color:red;'>解构（Destructuring）</span>***



#### ⬜数组的解构赋值

##### 基本用法

> ```javascript
> let [a,b,c] = [1,2,3];
> ```
>
>  *可以从数组中提取值，**<span style=color:red;>按照对应位置，对变量赋值</span>***



##### 嵌套数组进行解构

> 本质上，这种写法属于"<span style='color:red;'>**模式匹配**</span>"，只要等号两边的模式相同，左边的变量就会被赋予对应的值

```javascript
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [xy, , yy] = [1, 2, 3];
xx // 1
yy // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
```



##### 默认值

> <span style='color:red;'>***数组解构赋值允许指定默认值***</span>
>
> ```javascript
> let [foo = true] = [];
> foo // true
> 
> let [x,y = 'b'] = [1];
> x // 1
> y // 'b'
> 
> let [ke,bai = true] = [2.2 undefined];
> ke //  2.2
> bai // true
> ```
>
> :grey_exclamation:*ES6 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于`undefined`，默认值才会生效*
>
> ```javascript
> let [x = 1] = [undefined];
> x // 1
> 
> let [y = 1] = [null];
> y // null
> ```



###### 表达式

> *如果默认值是一个<span style='color:red;'>表达式</span>，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值*

```javascript
let [x = f()] = [1];
x // 1

// 等价于以下代码
let x;
if ([1][0] === undefined) {
 x = f();
} else {
 x = [1][0];
}
```



##### ❕注意

+ > **如果解构不成功，变量的值就等于 `undefined`**

  + ```javascript
    let [foo] = [];
    let [bar,foo] = [1];
    // foo 的值都会等于 undefined
    ```

+ > :grey_exclamation:**默认值可以引用解构赋值的其他变量，但该变量必须已经声明**

  + ```javascript
    let [x = 1, y = x] = [];     // x=1; y=1
    let [x = 1, y = x] = [2];    // x=2; y=2
    let [x = 1, y = x] = [1, 2]; // x=1; y=2
    // 是因为x用y做默认值时，y还没有声明
    let [x = y, y = 1] = [];     // ReferenceError: y is not defined
    let [x, y = x] = [1];        // x=1; y=1
    ```





#### 🟥对象的解构赋值

##### 基本用法

> ```javascript
> let { x, y } = { x: 73, y: 96 };
> x // 73
> y // 96
> ```
>
> *对象的解构赋值；<span style=color:red;>’**变量必须与属性同名，才能取到正确的值**</span>*



##### 嵌套对象进行解构

```javascript
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"
```



##### 将对象的方法赋值到对应的变量

>  *可以==将对象中的方法赋值到对应的变量==上，使用起来就会方便很多*

```javascript
// 例1
const { log } = console;
log(123); // 123

// 例2
let obj = {
    date: new Date().toLocaleTimeString(),
    now(str) {
        return obj.date +' '+ str;
    }
}
let { now } = obj;
now('linke'); // 11:45:55 linke
```



##### 变量名与属性名不一致

> *==对象的解构赋值的内部机制==，<span style=color:red;>是先找到同名属性，然后再赋给对应的变量。<u>真正被赋值的是后者</u>，而不是前者，前者是匹配的模式</span>*

```javascript
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
```



##### 默认值

> <span style='color:red;'>***对象解构赋值允许指定默认值***</span>
>
> *默认值生效的条件是，对象的属性值严格等于`undefined`*

```javascript
let { xx = 3 } = {};
xx // 3

let { yy = xx, zz } = { zz: false }
yy // 3
zz // false

let {x = 3} = {x: undefined};
x // 3

let {x = 3} = {x: null};
x // null
```



###### 将已声明变量用于解构赋值

> ```javascript
> // 错误的写法
> let num;
> { num } = { num: 73 }; // SyntaxError: syntax error
> ```
>
> *因为 JavaScript 引擎会将`{x}`理解成一个代码块，从而发生语法错误*
>
> *只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题*
>
> ```javascript
> // 正确的写法
> let num;
> ({ num } = { num: 73 });
> num // 73
> ```



##### :grey_exclamation:注意

- > :grey_exclamation:**变量没有对应的同名属性，导致取不到值，最后等于 `undefined`**

  + ```javascript
    let {foo} = {linke: 'ke'};
    foo; // undefined
    ```

- > **:grey_exclamation:对象的匹配模式与变量赋值**

  + ```javascript
    const node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };
    
    // 以下loc,start都是模式, line是变量
    let { loc, loc: { start }, loc: { start: { line } } } = node;
    
    loc		// {start: {…}}
    start	// {line: 1, column: 5}
    line	// 1
    ```

+ > :grey_exclamation:**数组进行对象属性的解构**
  >
  > *对数组进行对象解构。数组`arr`的`0`键对应的值是`1`，`[arr.length - 1]`就是`2`键，对应的值是`3`*

  + ```javascript
    let arr = [1, 2, 3];
    let {0 : first, [arr.length - 1] : last} = arr;
    first // 1
    last // 3
    ```





#### 🟧字符串的解构赋值

##### 基本使用

```javascript
const [a,b,c,d] = '12345';
a // 1
b // 2
c // 3
d // 4

// 属性
let {length : len} = 'hello';
len // 5
```





#### 🟪函数参数的解构赋值

##### 基本使用

> ```javascript
> function add([x, y]){
>   return x + y;
> }
> 
> add([1, 2]); // 3
> ```
>
> *函数`add`的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量`x`和`y`。对于函数内部的代码来说，它们能感受到的参数就是`x`和`y`*



##### 默认值

> ```javascript
> function move({x = 0, y = 0} = {}) {
>   return [x, y];
> }
> 
> move({x: 3, y: 8}); // [3, 8]
> move({x: 3}); // [3, 0]
> move({}); // [0, 0]
> move(); // [0, 0]
> ```
>
> *函数`move`的参数是一个对象，通过对这个对象进行解构，得到变量`x`和`y`的值。如果解构失败，`x`和`y`等于默认值*



##### :grey_exclamation:注意

+ > :grey_exclamation:**`undefined`就会触发函数参数的默认值**

  + ```javascript
    [1, undefined, 3].map((x = 'yes') => x);
    // [ 1, 'yes', 3 ]
    ```





### 🔶模板字符串

> *<span style=color:red;>模板字符串（template string）是增强版的字符串</span>*，*用反引号（**<code>`</code>**）标识。<u>它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量</u>*



#### 基本使用

```javascript
let str = `data`;
str // data
```



#### 💡特点

+ > <span style=color:red;>**内容中可以之间出现换行符**</span>
  >
  > *使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中*

  + ```javascript
    let uls = `<ul>
        <li>first</li>
        <li>second</li>
        </ul>`;
    
    // uls 输出
    <ul>
        <li>first</li>
        <li>second</li>
        </ul>
    ```

+ > <span style=color:red;>**字符串中可以嵌入变量，需要将变量名写在`${}`之中**</span>

  + ```javascript
    let [x, y] = [1, 2];
    console.log(`x=${x},y=${y}`); // x=1,y=2
    ```



#### 字符串遍历器接口

```javascript
// for...of 循环
for (let codePoint of 'foo') {
    console.log(codePoint);
}
// f
// o
// o
```





### 🔳对象的扩展

<span style=color:red;>*<u>对象（object）是 JavaScript 最重要的数据结构</u>*</span>



#### **in** 关键字

> *`in` 判断对象中是否存在指定 `key`键名*

```javascript
const stu = {
    id: 1,
    name: 'linke',
    age: 11
};

'name' in stu	// true
'sex' in stu 	// false
```



#### 属性的简洁表示法

+ > ***<span style=color:red;>属性简写:</span>&nbsp;&nbsp;在大括号里面，直接写入变量和函数，作为对象的属性和方法***

  + ```javascript
    const foo = 'linke';
    const obj = { foo };
    console.log(obj); // Object
    
    // 等同于
    const obj = {foo: foo};
    ```

+ > ***<span style=color:red;>方法简写:</span>&nbsp;可省略`:function`的部分***

  + ```javascript
    const o = {
        method() {
            return 'LINKE';
        }
    }
    
    // 等同于
    const o = {
        method: function() {
            return 'LINKE';
        }
    }
    ```





##### 属性的**set/get**

> ***属性的<u>==赋值器（setter）和取值器（getter）==</u>***

```javascript
const stu = {
    _id: 1,
    get id() {
        return this._id;
    },
    set id(value) {
        this._id = value;
    }
}

stu.id = 2; // set赋值
console.log(stu.id); // 2
```



#### 属性名表达式

> ***`[表达式]` :  <span style=color:red;>表达式放在方括号之内</span>***

+ > :grey_exclamation:==**用表达式作为<span style=color:red;><u>对象的属性名</u></span>**==

  + ```javascript
    let last = 'last';
    let a = {
        ['y'+'y']: 456,
        zz: 789,
        [last]: last
    };
    a['x' + 'x'] = 123; // 添加一个属性
    a.xx	 	// 123
    a['x'+'x']	// 123
    a.yy		// 456
    a['yy']	 	// 456
    a['z'+'z']	// 789
    a[last]	 	// last
    ```

+ > ###### :grey_exclamation:==**用表达式作为<span style=color:red;><u>方法的方法名</u></span>**==

  + ```javascript
    let b = {
        ['get'+'Date']() {
            return '2022/7/9';
        }
    }
    b.getDate() // '2022/7/9'
    ```



##### :grey_exclamation:注意

> :grey_exclamation:*<u>属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串`[object Object]`</u>*
>
> ```javascript
> const keyA = {a: 1};
> const keyB = {b: 2};
> 
> const myObject = {
>       [keyA]: 'valueA',
>       [keyB]: 'valueB'
> };
> 
> myObject // Object {[object Object]: "valueB"}
> ```
>
> ❗==`[keyA]`和`[keyB]`得到的都是`[object Object]`，所以`[keyB]`会把`[keyA]`覆盖掉，而`myObject`最后只有一个`[object Object]`属性==





#### BigInt 数据类型

> <span style=color:red;>***新的数据类型 `BigInt`（大整数）***</span>
>
> ==*`BigInt` 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示*==
>
> :grey_exclamation:==*`BigInt` 类型的数据必须添加后缀`n`*==

```javascript
// 7 月 20日写
const a = 2003090672n;
const b = 2005070372n;

// BigInt 可以保持精度
a * b // 4016337758856769984n

// 普通整数无法保持精度
Number(a) * Number(b) // 4016337758856770000
```





##### :grey_exclamation:注意

+ `BigInt` 类型的数据必须添加后缀`n`

+ `BigInt` 与普通整数是两种值，它们之间并不相等

  + ```javascript
    1n == 1 // true
    1n === 1 // false
    
    typeof 1n // bigint
    ```







### 🟦函数的扩展

#### 🍊函数参数的默认值

> <span style=color:red;>*函数的参数设置默认值，即直接写在参数定义的后面，当调用函数时不给实参，则使用参数默认值*</span>



##### 基本使用

```javascript
let fun = function (x, y, z = 10) {
    return x + y + z;
}

fun(1,2)	// 12
fun(1,2,3)	// 6
```





##### :grey_exclamation:注意

+ > ##### *具有默认值的形参，一般要靠后*

+ > ##### *使用参数默认值时，函数不能有同名参数*

  + ```javascript
    // 不报错
    function foo(x, x, y) {
      // ...
    }
    
    // 报错
    function foo(x, x, y = 1) {
      // ...
    }
    // SyntaxError: Duplicate parameter name not allowed in this context
    ```







#### ▶箭头函数

> <span style=color:red;>*使用“箭头”`=>`定义函数*</span>



##### 基本使用

```javascript
let fun = () => {
	return 1 + 2;
}

// 相当于以下代码
let fun = function() {
    return 1 + 2;
}

fun() // 3
```





##### :grey_exclamation:注意

1. > ##### *如果形参只有一个，则小括号可以省略*

   1. ```javascript
      let fun = id => console.log(id);
      
      // 相当于以下代码
      let fun = function(id) {
          console.log(id);
      }
      
      fun(1) // 1
      ```

2. > ##### *函数体如果只有一条语句，则花括号，`return`可以省略，函数的返回值为该条语句的执行结果*

   1. ```javascript
      let fun = ()=> 1 + 2;
      
      // 相当于以下代码
      let fun = function() {
          return 1 + 2;
      }
      
      fun() // 3
      ```

3. > ##### *箭头函数没有自己的`this`对象，`this` 始终指向声明时所在作用域下的`this`*

   1. ```javascript
      function getName() {
          console.log(this.name);
      };
      
      let getName2 = () => console.log(this.name);
      
      const stu = {
          name: 'keke'
      };
      
      getName.call(stu); // keke
      getName2.call(stu);  // ''
      ```

4. > ##### *不可以当作构造函数*

   1. ```javascript
      let Person = (id, name) => {
          this.id = id,
          this.name = name
      }
      
      new Person(1,'linke'); // TypeError: Person is not a constructor
      ```

5. > ##### *不可以使用`arguments`对象*

   1. ```javascript
      let fun = (id, name, age) => {
          console.log(arguments);
      }
      
      fun(); // ReferenceError: arguments is not defined
      ```

   



#### ▪▪▪rest 参数

> <span style=color:red;>*用于获取函数的多余参数，这样就不需要使用`arguments`对象了。*</span>
>
> <span style=color:red;>*rest 参数搭配的变量是一个真正的数组，该变量将多余的参数放入数组中（形式为`...变量名`）*</span>



##### 使用方式

> ```javascript
> let fun = function (a, ...param) {
>        console.log(a, param);
> }
> 
> fun(1, 2, 3, 4, 5, 6); // 1 [2, 3, 4, 5, 6]
> ```
>
> ❗***<span style=color:red;>写在参数列表最后面</span>***





#### **name** 属性

> <u>*函数的`name`属性，返回函数名。对象方法也是函数，因此也有`name`属性*</u>

```javascript
const person = {
    sayName() {
        console.log('hello!');
    },
};

person.sayName.name   // "sayName"
```







### ❔运算符的扩展

#### 扩展运算符

> *==扩展运算符==（`spread`）也是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的*
>
> *参数序列，对数组进行解包。可用在调用函数时，传递的实参，将一个数组转换为参数序列*

```javascript
function fn(a, b, c) {
    console.log(arguments);
    console.log(a + b + c);
}
let arr = ['red', 'green', 'blue']; 
fn(...arr)
// [Arguments] { '0': 'red', '1': 'green', '2': 'blue' }
// redgreenblue
```





#### 指数运算符

> *==指数运算符==（`**`）*

```javascript
let num = 2 ** 2;
num // 4 
/* 
相对于 2 * 2 
*/

num **= 3;
num // 64
/* 
相对于 num * num * num
*/
```





#### 链判断运算符

> *“==链判断运算符==”（optional chaining operator）`(?.)`*

> ```javascript
> let obj = { name:'ke' } ?.name;
> obj // ke
> 
> /* 
>  相对于 obj = { name:ke } == null ? undefined : { name:ke }.name;
> */
> ```
>
> > ***直接在链式调用的时候判断，左侧的对象是否为`null`或`undefined`。如果是的，就不再往下运算，而是返回`undefined`***



##### 写法

+ `obj.prop`	**:**	*对象属性是否存在*
+ `obj.[expr]`	**:**	*对象属性是否存在*
+ `fun?.(...args)`	**:**	*函数者对象方法是否存在*





#### Null 判断运算符

>  *==Null 判断运算符==`??`。但是只有运算符左侧的值为`null`或`undefined`时，才会返回右侧的值*

```javascript
let flag;
let number = flag ?? 123;

number // 123
```



##### :grey_exclamation:注意

<span style=color:red;>***如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错***</span>

```javascript
// 报错
lhs && middle ?? rhs

// 不报错
(lhs && middle) ?? rhs;
```





#### 逻辑赋值运算符

> *==逻辑赋值运算符==（logical assignment operators），将<u>逻辑运算符与赋值运算符进行结合</u>*
>
> *`||=`、`&&=`、`??=`相当于先进行逻辑运算，然后根据运算结果，再视情况进行赋值运算*

```javascript
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)

// 与赋值运算符
x &&= y
// 等同于
x && (x = y)

// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)
```







### 🔴Symbol

> <span style=color:red;>***一种新的原始数据类型`Symbol`，表示独一无二的值。它属于 JavaScript 语言的数据类型之一***</span>
>
> <span style=color:red;>***它是一种类似于字符串的数据类型***</span>



#### 基本使用

> *Symbol 值通过`Symbol()`函数生成，`Symbol`函数前不能使用`new`命令，否则会报错*

```javascript
let s = Symbol();

s // Symbol()
typeof s // symbol
```



#### 描述

> *Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述*
>
> *==Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的==*

+ ###### 添加一个描述

  + ```javascript
    let s1 = Symbol('s1');
    let s2 = Symbol('s1');
    
    s1, s2 // Symbol(s1) Symbol(s1)
    s1 === s1 // false
    ```

+ ###### 获取 Symbol 描述`description`

  + ```javascript
    let s = Symbol('s');
    
    s.toString()  // Symbol(s)
    s.description // s
    ```



#### **for()，keyFor()**

***Symbol.for()***

> *`Symbol.for()`不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的`key`是否已经存在，如果不存在才会新建一个值*

```javascript
let s = Symbol.for('s');
let s2 = Symbol.for('s');

s === s2 // false
```



***Symbol.keyFor()***

> *`Symbol.keyFor()`方法返回一个已登记的 Symbol 类型值的`key`*

```javascript
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```





#### :grey_exclamation:注意

+ ==Symbol 的值是唯一的，用来解决命名冲突的问题==

+ ==Symbol 值不能与其他类型的值进行运算==

  + ```javascript
    s1 + 123	// TypeError
    s1 + '123'	// TypeError
    s1++		// TypeError
    s1 > 0		// TypeError
    ```

+ ==Symbol 作为属性名，遍历对象的时候，该属性不会出现在`for...in`、`for...of`循环中，`Reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名==

  + ```javascript
    let obj = {
        [Symbol('my_key')]: 1,
        enum: 2,
        nonEnum: 3,
        [Symbol('my_fun')]() {
          // ..
        }
    }
    
    Reflect.ownKeys(obj) // ['enum', 'nonEnum', Symbol(my_key), Symbol(my_fun)]
    
    // 如果直接向对象中添加属性或方法，则原来对象中可能已经存在了同名属性或方法，会覆盖掉原来的。所以使用 Symbol 生成唯一的属性或方法名，可以更加安全的添加
    // 以 Symbol 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的
    ```





#### Symbol 内置值

| 方法                         | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| `Symbol.hasInstance`         | 当其他对象使用 `instanceof` 运算符，判断是否为该对象的实例时，会调用这个方法 |
| `Symbol.isConcatSpreadable ` | 对象的 `Symbol.isConcatSpreadable` 属性等于的是一个布尔值，表示该对象用于`Array.prototype.concat()` 时，是否可以展开 |
| `Symbol.species`             | 创建衍生对象时，会使用该属性                                 |
| `Symbol.match`               | 当执行 `str.match(myObject)` 时，如果该属性存在，会调用它，返回该方法的返回值。 |
| `Symbol.replace `            | 当该对象被 `str.replace(myObject)` 方法调用时，会返回该方法的返回值。 |
| `Symbol.search `             | 当该对象被 `str.search(myObject)` 方法调用时，会返回该方法的返回值。 |
| `Symbol.split `              | 当该对象被 `str.split(myObject)` 方法调用时，会返回该方法的返回值。 |
| `Symbol.iterator `           | 对象进行` for...of` 循环时，会调用 `Symbol.iterator` 方法，返回该对象的默认遍历器 |
| `Symbol.toPrimitive `        | 该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。 |
| `Symbol. toStringTag `       | 在该对象上面调用 `toString()` 方法时，返回该方法的返回值     |
| `Symbol. unscopables `       | 该对象指定了使用 `with` 关键字时，哪些属性会被 `with` 环境排除。 |





### 💱Iterator

> *<span style=color:red;>遍历器（`Iterator`）就是一种机制</span>。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 `Iterator` 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）*



#### ✨作用

1. 为各种数据结构，提供一个统一的、简便的访问接口
2. 使得数据结构的成员能够按某种次序排列
3.  ES6 创造了一种新的遍历命令`for...of`循环，Iterator 接口主要供`for...of`消费





#### 原生具备遍历器的数据结构

> ES6 的有些数据结构原生具备 `Iterator` 接口（比如数组），即不用任何处理，就可以被`for...of`循环遍
>
> 历，==原因在于，这些数据结构原生部署了`Symbol.iterator`属性==

- `Array`
- `Arguments`
- `Map`
- `Set`
- `String`
- `TypeArray`
- `NodeList`





#### 💡工作原理

1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，<u>遍历器对象本质上，就是一个指针对象</u>

2. 第一次调用指针对象的`next`方法，可以将指针指向数据结构的第一个成员

3. 接下来不断调用指针对象的`next`方法，直到它指向数据结构的结束位置

   > :grey_exclamation:*每一次调用`next`方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含`value`*
   >
   > *和`done`两个属性的对象。其中，`value`属性是当前成员的值，`done`属性是一个布尔值，表示*
   >
   > *遍历是否结束，即是否还有必要再一次调用`next`方法*





#### 模拟 **next** 方法返回值

```javascript
let it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

// 模拟 iterator
function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
            {value: undefined, done: true};
        }
    };
}
```





#### 对象添加 Iterator

> *对于遍历器对象来说，`done: false`和`value: undefined`属性都是可以省略的*

```javascript
let obj = {
    data: [
        'one-use',
        'two-use',
        'three-use',
        'four-use'
    ],
    [Symbol.iterator]() { // Symbol.iterator方法直接引用数组的 Iterator 接口
        const self = this;
        let nextIndex = 0;
        return {
            next() {
                return nextIndex < self.data.length ? 
                    { value: self.data[nextIndex++] } : { done: true };
            }
        }
    }
}

// 遍历
for (const val of obj) {
    console.log(val);
}
// 遍历结果
one-use
two-use
three-use
four-use
```





#### while 循环 iterator

```javascript
let $iterator = ['a','b','c','d','e'][Symbol.iterator]();
while (!($result = $iterator.next()).done) {
    let x = $result.value;
    console.log(x);
}

// 遍历结果
a
b
c
d
e
```







### <span style=color:#42B983;>♻</span>Generator

> *`Generator` 函数是 ES6 提供的一种<span style=color:red;>异步编程解决方案</span>，<u>语法行为与传统函数完全不同</u>*





#### ✨特征

+ `function`关键字与函数名之间有一个星号
+ `*` 的位置没有限制，推荐`function* ()`
+ 函数体内部使用`yield`表达式，定义不同的内部状态





#### 基本使用

```javascript
function* myGenerator() {
    console.log(111); // 生成器第 1 段
    yield 'one';
    console.log(222); // 生成器第 2 段
    yield 'two';
    console.log(333); // 生成器第 3 段
    return 'three';
    console.log(444);
}

let hw = myGenerator();
hw.next()
hw.next()
hw.next()
hw.next()

// 执行结果
111
{value: 'one', done: false}
222
{value: 'two', done: false}
333
{value: 'three', done: false}
{value: undefined, done: true}
```





#### 💡原理

> ❗❗<span style=color:red;>`Generator` 函数是分段执行的，`yield`表达式是暂停执行的标记，而`next`方法可以恢复执行</span>
>
> :grey_exclamation:每次调用遍历器对象的`next`方法，就会返回一个有着`value`和`done`两个属性的对象
>
> > *:grey_exclamation:`value`属性表示当前的内部状态的值，是`yield`表达式后面那个表达式的值*
> >
> > *:grey_exclamation:`done`属性是一个布尔值，表示是否遍历结束*

1. 调用 `Generator` 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
2. 必须调用遍历器对象的`next`方法，使得指针移向下一个状态。每次调用`next`方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个`yield`表达式（或`return`语句）为止





#### yield 表达式

> `Generator` 函数返回的遍历器对象，只有调用`next`方法才会遍历下一个内部状态，所以其实提供了一种可
>
> 以暂停执行的函数。`yield`表达式就是暂停标志

1. 遇到`yield`表达式，就暂停执行后面的操作，并将紧跟在`yield`后面的那个表达式的值，作为返回的对象的`value`属性值
2. 下一次调用`next`方法时，再继续往下执行，直到遇到下一个`yield`表达式
3. 如果没有再遇到新的`yield`表达式，就一直运行到函数结束，直到`return`语句为止，并将`return`语句后面的表达式的值，作为返回的对象的`value`属性值
4. 如果该函数没有`return`语句，则返回的对象的`value`属性值为`undefined`



##### :grey_exclamation:注意

> :grey_exclamation:`yield`表达式后面的表达式，只有当调用`next`方法、内部指针指向该语句时才会执行，<span style=color:red;>**''惰性求值"**</span>
>
> <u>:grey_exclamation:`yield`表达式只能用在 `Generator` 函数里面</u>





#### 参数

> :grey_exclamation:`yield`表达式本身没有返回值，或者说总是返回`undefined`。`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值
>
> :grey_exclamation:由于`next`方法的参数表示上一个`yield`表达式的返回值，所以在第一次使用`next`方法时，传递参数是无
>
> 效的。V8 引擎直接忽略第一次使用`next`方法时的参数，只有从第二次使用`next`方法开始，参数才是有效的
>
> :grey_exclamation:第一个`next`方法用来启动遍历器对象，所以不用带有参数

```javascript
function* myGenerator3(arg) {
    console.log(arg);
    let one = yield 1;
    console.log(one);
    let two = yield 2;
    console.log(two);
    let three = yield 3;
    console.log(three);
}

let hw3 = myGenerator3(100);
hw3.next()
hw3.next('a')
hw3.next('b')
hw3.next('c') 

// 执行结果
100
{value: 1, done: false}
a
{value: 2, done: false}
b
{value: 3, done: false}
c
{value: undefined, done: true}
```







### ⭐Promise

> <span style=color:red;>***Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大***</span>
>
> ==*Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 `API`，各种异步操作都可以用*==
>
> ==*同样的方法进行处理*==





#### ✨特点

+ ###### *对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态*

  + |    状态     |       声明       |
    | :---------: | :--------------: |
    |  `pending`  | <spna>**进行中** |
    | `fulfilled` |    **已成功**    |
    | `rejected`  |    **已失败**    |

+ ###### *一旦状态改变，就不会再变，任何时候都可以得到这个结果*





##### **Resolved**

> :grey_exclamation:`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。
>
> 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 <u>`resolved`</u>
>
> <u>（已定型）</u>。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果





#### 🎇缺点

1. 无法取消`Promise`，一旦新建它就会立即执行，无法中途取消
2. 如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部
3. 当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）





#### 基本使用

> `Promise`对象是一个构造函数，用来生成`Promise`实例、
>
> <u>*❗`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函*</u>
>
> <u>*数，由 <span style=color:red;>JavaScript 引擎提供，不用自己部署</span>*</u>

```javascript
const promise = new Promise(function(resolve, reject) {
    // ... some code

    if (/* 异步操作成功 */){
        resolve(value); // 设置 Promise 对象的状态为操作成功
    } else {
        reject(error); // 设置 Promise 对象的状态为操作失败
    }
});
```



##### ==resolve==

> ❗`resolve`函数的作用是，将`Promise`对象的状态从<span style=color:red;>“未完成”变为“成功”（即从 pending 变为 resolved）</span>，
>
> 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去



##### ==reject==

> ❗`reject`函数的作用是，将`Promise`对象的状态从<span style=color:red;>“未完成”变为“失败”（即从 pending 变为 rejected）</span>，
>
> 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去





#### **then()**

> ❗❗<u>*`Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数*</u>
>
> ❗❗`then`方法可以接受两个回调函数作为**可选参数**
>
> 第一个回调函数是`Promise`对象的状态变为`resolved`时调用
>
> 第二个回调函数是`Promise`对象的状态变为`rejected`时调用
>
> ```javascript
> promise.then(function(value) {
>        // success
> }, function(error) {
>        // failure
> });
> ```



##### 返回值

> `Promise.prototype.then` 方法返回的结果依然是 `Promise` 对象，<span style=color:red;>**对象状态由回调函数的执行结果决定**</span>

+ ❗❗==若 `then` 方法没有返回值，则 `then` 方法返回的对象的状态值为成功 `fulfilled`，返回结果值为 `undefined`==

  + ```javascript
    const result = new Promise(/* ... */).then((value) => {
        // 1.无返回
        console.log(value); // DATA
    }, (error) => {
        console.warn(error);
    });
    
    console.log(result);
    // 执行结果
    /*
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: undefined
    */
    ```

+ ❗❗==如果回调函数中返回的结果是非 `Promise` 类型的属性，则 `then` 方法返回的对象，其状态为成功（`fulfilled`），返回结果值取决于 `then` 方法所执行的是哪个函数（`resolve` 或 `reject`）==

  + ```javascript
    const result = new Promise(/* ... */).then((value) => {
    	// 2.返回非 Promise对象
        return 'Datas';
    }, (error) => {
        console.warn(error);
    });
    
    console.log(result);
    // 执行结果
    /*
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "Datas"
    */
    ```

+ ❗❗==如果回调函数中返回的结果是 `Promise` 类型（`return new Promise()`），则 `then` 方法返回的 `Promise` 对象状态与该返回结果的状态相同，返回值也相同==

  + ```javascript
    const result = new Promise(/* ... */).then((value) => {
        // 3.返回Promise对象
        return new Promise((resolve, reject) => {
          // resolve('ok');
          reject('err');
        });
    }, (error) => {
        console.warn(error);
    });
    
    console.log(result);
    // 执行结果
    /*
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: "err"
    */
    ```

+ ❗❗==如果回调函数中返回的结果是 `throw` 语句抛出异常，则 `then` 方法的对象的状态值为 `rejected`，返回结果值为 `throw` 抛出的字面量或者 `Error` 对象==

  + ```javascript
    const result = new Promise(/* ... */).then((value) => {
    	// 4.出现异常
        throw new Error('Error info ...');
    }, (error) => {
        console.warn(error);
    });
    
    console.log(result);
    // 执行结果
    /*
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: Error: Error info ... at 
    */
    ```



##### 链式调用

> *`then`方法返回的是一个<u>新的`Promise`实例</u>（注意，不是原来那个`Promise`实例）。因此可以采用链式写法*
>
> ❗❗*采用链式的`then`，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还*
>
> *是一个`Promise`对象（即有异步操作），这时后一个回调函数，就会等待该`Promise`对象的状态发生*
>
> *变化，才会被调用*

```javascript
const result = new Promise(resolve=>{}, reject=>{});

// 链式调用
result.then(value=>{}, reason=>{})
.then(value=>{}, reason=>{})
.then(value=>{}, reason=>{})
//...
```





#### **catch()**

> ❗❗*`Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined,`*
>
> *` rejection)`的别名，用于指定发生错误时的回调函数*
>
> :grey_exclamation:==***不希望前面的错误导致后续的 `.then` 无法正常执行，则可以将 `.catch` 的调用提前***==

```javascript
const promise = new Promise((resolve, reject) => {
    throw new Error('err');
});

promise.catch(err => {
    console.error(err);
});

// 执行结果
Error: err
...
```





#### **finally()**

> ❗❗*`finally()`方法用于指定不管 `Promise` 对象最后状态如何，在执行完`then`或`catch`指定的回调函
>
> 数以后，都会执行的操作
>
> ==*`finally`方法的回调函数不接受任何参数，`finally`方法里面的操作，应该是与状态无关的*==

```javascript
new Promise (/* ... */)
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```





#### 实现 Ajax 操作

```javascript
 function get(url) {
     return new Promise((resolve, reject) => {
         const xmlHttp = new XMLHttpRequest();
         xmlHttp.onreadystatechange = function () {
             if (xmlHttp.readyState === 4) {
                 if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
                     resolve(xmlHttp.response);
                 } else {
                     reject(xmlHttp.status);
                 }
             }
         }
         xmlHttp.open('GET', url, true);
         xmlHttp.send();
     });
}

// 调用
get('https://api.apiopen.top/api/sentences').then(
(value) => {
    console.log(value); // success
},(error)=>{
    console.error(error); // error
});
```





### 🔺Set

> ***`Set` 数据结构；<span style=color:red;>它类似于数组，但是成员的值都是唯一的，没有重复的值</span>***
>
> ***`Set`本身是一个构造函数，用来生成 `Set` 数据结构***





#### 基本用法

```javascript
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

> ***`Set`函数可以接受一个数组（或者具有 `iterable` 接口的其他数据结构）作为参数，用来初始化***

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56
```





#### 属性

|              属性               |            作用             |
| :-----------------------------: | :-------------------------: |
| **`Set.prototype.constructor`** | 构造函数，默认就是`Set`函数 |
|    **`Set.prototype.size`**     |   返回`Set`实例的成员总数   |



#### 方法

|               方法                |                     作用                     |
| :-------------------------------: | :------------------------------------------: |
|  **`Set.prototype.add(value)`**   |       添加某个值，返回 `Set` 结构本身        |
| **`Set.prototype.delete(value)`** | 删除某个值，返回一个布尔值，表示删除是否成功 |
|  **`Set.prototype.has(value)`**   |  返回一个布尔值，表示该值是否为`Set`的成员   |
|    **`Set.prototype.clear()`**    |           清除所有成员，没有返回值           |





#### WeakSet

> ***`WeakSet` 结构与 `Set` 类似，也是不重复的值的集合。但是，它与 `Set` 有==两个区别==***
>
> <u>***WeakSet 只能放置对象***</u>
>
> <u>***WeakSet 中的对象都是弱引用***</u>
>
> <u>***WeakSet 不可遍历***</u>
>
> <u>***垃圾回收机制会自动回收不再引用其他对象的对象所占用的内存***</u>





### 🔻Map

> <span style=color:red;>***`Map` 键值对的集合（`Hash` 结构），字符串，各种类型的值（包括对象）都可以当作键***</span>
>
> ***<span style=color:red;>Map 键唯一，对同一个键多次赋值，后面的值将覆盖前面的值</span>***





#### 基本用法

```javascript
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

> ***`Map` 也可以接受一个数组作为参数，该数组的成员是一个个表示键值对的数组***

```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```





#### 属性

> ***`size`属性返回 Map 结构的成员总数***





#### 方法

|         方法          |                         作用                          |
| :-------------------: | :---------------------------------------------------: |
| **`set(key, value)`** | 设置键名`key`对应的键值为`value`，返回 `Map` 结构本身 |
|    **`get(key)`**     |                  读取`key`对应的键值                  |
|    **`has(key)`**     |      返回一个布尔值，表示该值是否为`Map`的某个键      |
|   **`delete(key)`**   |     删除某个键，返回一个布尔值，表示删除是否成功      |
|     **`clear()`**     |               清除所有成员，没有返回值                |





#### WeekMap

> ***`WeakMap`结构与`Map`结构类似，`WeakMap`与`Map`的==区别有两点==***
>
> ***`WeakMap`只接受对象作为键名（`null`除外）***
>
> ***没有遍历操作（即没有`keys()`、`values()`和`entries()`方法），也没有`size`属性，`clear()`方法***
>
> ***`WeakMap` 里面的键名对象和所对应的键值对一旦不再需要会自动消失***







### 🔆遍历器

|    遍历方法     |                            作用                            |
| :-------------: | :--------------------------------------------------------: |
|  **`keys()`**   |     **返回<span style=color:red;>键名</span>的遍历器**     |
| **`values()`**  |     **返回<span style=color:red;>键值</span>的遍历器**     |
| **`entries()`** |    **返回<span style=color:red;>键值对</span>的遍历器**    |
| **`forEach()`** | **使用<span style=color:red;>回调函数遍历每个成员</span>** |





### 🔘**Class**

> :grey_exclamation:*ES6 提供了更接近传统语言的写法，引入了 `Class（类）`这个概念，作为对象的模板。通过`class`关键*
>
> *字，可以定义类*





#### 🍀声明

> <span style=color:red;>***类的数据类型就是函数，类本身就指向构造函数***</span>
>
> *类必须使用`new`调用，否则会报错*

```javascript
const MyClass = class { /* ... */ }
class MyClass { /* ... */ }

// 创建
let cla = new MyClass();
```





#### 🎃特点

+ ==*类有原型对象 `prototype`*==
+ ==*类有原型对象 `prototype`，里面也有 `constructor` 指向类的本身*==
+ ==*类的所有方法都定义在类的 `prototype` 属性上*==
+ ==*类创建的实例，里面也有 `__proto__` 指向类的`prototype` 原型对象*==

> <span style=color:#000;>`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已</span>
>
> *<span style=color:red;>**`class` 其实就是一种语法糖**</span>*





#### 🍁constructor()方法

> *:grey_exclamation:`constructor()`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法*

```javascript
class Point {
    
	constructor() {
        // ...
    }
}
```





##### :grey_exclamation:注意

+ ==**一个类必须有`constructor()`方法，如果没有显式定义，一个空的`constructor()`方法会**==

  ==**被`JavaScript 引擎`自动默认添加**==

  + ```javascript
    class Point {
    }
    
    // 等同于
    class Point {
    	constructor() {}
    }
    ```

+ ==**❗<u>方法中的`this`关键字则代表实例对象</u>**==

+ ==**❗方法默认返回实例对象（即`this`）**==

+ ==❗❗**`prototype`对象的`constructor()`属性，直接指向<span style=color:red;>“类”的本身</span>**==

  + ```javascript
    class Point {
        constructor(){
            // ...
        }
    }
    
    Point.prototype.constructor === Point // true
    ```







#### 🍃方法

> :grey_exclamation:***前面不需要加上`function`这个关键字，直接把函数定义放进去了就可以了***
>
> :grey_exclamation:***方法与方法之间不需要逗号分隔***
>
> ```	javascript
> class Point {
>        constructor() {
>            // ...
>        }
> 
>        toString() {
>            // ...
>        }
> 
>        toValue() {
>            // ...
>        }
> }
> ```
>
> **❗❗类的所有方法都定义在类的`prototype`属性上面**
>
> ```javascript
> // 上面代码等同于以下
> Point.prototype = {
>        constructor() {},
>        toString() {},
>        toValue() {},
> };
> ```





#### 实例属性的写法

1. ```javascript
   const MyClass = class {
       constructor() {
           this.id = 1;
       }
   };
   
   new MyClass().id // 1
   ```

2. > ```javascript
   > const MyClass = class {
   >        id = 1;
   > };
   > 
   > new MyClass().id // 1
   > ```
   >
   > ==***<span style=color:red;>新写法定义的属性是实例对象自身的属性，而不是定义在实例对象的原型上面</span>***==





#### 取值和存值函数（get/set）

```javascript
class MyCla {
    _id;

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value;
    }

    toString() {
        return `(${this._id})`;
    }
}

let cla = new MyCla();
cla.id // undefined
cla.id = 1;
cla.id // 1
```





#### 属性表达式

```javascript
let methodName = 'getArea';

class Square {
    constructor(length) {
        // ...
    }

    [methodName]() {
        // ...
    }
}

new Square().getArea();
```





#### 静态方法

> ❗***加上`static`关键字，<span style=color:red;>表示该方法不会被实例继承</span>，可以直接使用`ClassName.classMethod()`调用***
>
> ❗<u>*静态方法包含`this`关键字，这个`this`指的是类*</u>

```javascript
class Foo {
    static classMethod() { // 静态方法
        return 'hello';
    }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```





##### :grey_exclamation:注意

+ ###### 父类的静态方法，可以被子类继承

  + ```javascript
    class Foo {
        static classMethod() {
            return 'hello';
        }
    }
    
    class Bar extends Foo {
    }
    
    Bar.classMethod() // 'hello'
    ```

+ ###### 静态方法也是可以从`super`对象上调用的

  + ```javascript
    class Foo {
        static classMethod() {
            return 'hello';
        }
    }
    
    class Bar extends Foo {
        static classMethod() {
            return super.classMethod() + ', too';
        }
    }
    
    Bar.classMethod() // "hello, too"
    ```





#### 静态属性

> :grey_exclamation:***在实例属性的前面，加上`static`关键字***
>
> :grey_exclamation:***静态属性指的是 `Class 本身的属性`，即`Class.propName`，而不是定义在实例对象（`this`）上的属性***

```javascript
class MyClass {
    static id = 1;
}
MyClass.prop = 11;

// 获取静态属性
MyClass.id  // 1
MyClass.prop // 11
```





#### 私有属性与私有方法

>***`class`添加私有属性与私有方法，在属性名或方法名之前使用`#`表示***
>
>***私有属性或私有方法，只能在类的内部使用，用`this`对象使用***



##### 私有属性

```javascript
class MyPoint {
    #count = 0; // 私有属性

    getCount() {
        return `${this.#count}`
    }
}

MyPoint.#count			// SyntaxError ...
new MyPoint().#count	// SyntaxError ...
new MyPoint().getCount() // 0
```



##### 私有方法

```javascript
class Foo {
    #a;
    #b;
    constructor(a, b) {
        this.#a = a;
        this.#b = b;
    }
    #sum() { // 私有方法
        return this.#a + this.#b;
    }
    printSum() {
        console.log(this.#sum());
    }
}

let foo = new Foo(1,2);
foo.printSum(); // 3
```



##### :grey_exclamation:注意

> <span style=color:red;>***私有属性和私有方法前面，也可以加上`static`关键字，表示这是一个静态的私有属性或私有方法***</span>





#### 静态块

> ==***允许在类的内部设置一个代码块，在类生成时运行一次，主要作用是对静态属性进行初始化***==

```javascript
class Cla {
    static x;
    static y;

    static {
        this.x = 10;
        this.y = -10;
    }
}

Cla.x, Cla.y // 10 -10
```





##### :grey_exclamation:注意

+ ###### 每个类只能有一个静态块，在静态属性声明后运行

+ ###### 静态块的内部不能有`return`语句

+ ###### 静态块内部可以使用类名或`this`，指代当前类







#### :grey_exclamation:类的注意点

+ ###### 类不存在变量提升

+ ###### `name`属性返回 `class`关键字后面的类名

+ ###### 类中的方法与属性之间不需要逗号`,`隔开

+ ###### 在类中调用公共属性与方法必须使用 `this`







#### 🍂继承

> ***==Class== 可以通过`extends`关键字实现继承，让子类继承父类的属性和方法***
>
> ❗***除了私有属性，父类的所有属性和方法，都会被子类继承，其中包括静态方法***
>
> ❗***`extends`关键字后面可以跟多种类型的值***

```javascript
// ES6 的继承
class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    z;

    constructor(x, y, z) {
        super(x, y); // 调用父类的constructor(x, y)
        this.z = z;
    }

    toString() {
        return `${this.z}, ${this.y}, ${this.y}`;
    }
}

let color = new ColorPoint(10, 20, 30);
color.toString() // 30, 20, 20


// 等同于以下 ES5 的继承 ---------------------------
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function ColorPoint(x, y, z) {
    Point.call(this, x, y);
    this.z = z;
}

// 设置子级构造函数的原型
ColorPoint.prototype = new Point;
// 矫正 constructor 指向
ColorPoint.prototype.constructor = ColorPoint;
// 声明 Point 类原型的方法
Point.prototype.toString = function () {
    return `${this.x}, ${this.y}, ${this.z}`;
}

let color = new ColorPoint(10, -10, 0);
color.toString() // 10, -10, 0
```



##### 重写父类方法

```javascript
class MyClass {
    id = 1;
    getId(){
        return this.id;
    }
}

class MyClassSon extends MyClass{
    getId() {
        return this.id + 10;
    }
}

new MyClassSon().getId() // 11
```





##### :grey_exclamation:特殊情况

1. ==***子类继承`Object`类***==

   + ```javascript
     class A extends Object {
     }
     
     A.__proto__ === Object // true
     A.prototype.__proto__ === Object.prototype // true
     ```

2. ==***不存在任何继承***==

   + ```javascript
     class A {
     }
     
     A.__proto__ === Function.prototype // true
     A.prototype.__proto__ === Object.prototype // true
     ```







#### super 关键字

> **`super`这个关键字，既可以当作函数使用，也可以当作对象使用**





##### :grey_exclamation:注意

+ ###### `super`必须放在子类的 `this`前面

  + ```javascript
    class Point {
        x;
        y;
    
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    
    class ColorPoint extends Point {
        z;
    
        constructor(x, y, z) {
            super(x, y);
            this.z = z;
        }
    }
    ```

+ ###### `super`作为函数调用时，代表父类的构造函数时，<span style=color:red;>子类的构造函数必须执行一次`super`函数</span>

  + ```javascript
    class A {}
    
    class B extends A {
        constructor() {
            super();
        }
    }
    ```

+ ###### `super`作为对象时，<span style=color:red;>在普通方法中，指向父类的原型对象；在静态方法中，指向父类</span>

  + ```javascript
    class A {
        p() {
            return 2;
        }
    }
    
    class B extends A {
        constructor() {
            super();
            console.log(super.p()); // 2
          }
    }
    
    let b = new B();
    ```

+ ###### `super()`<span style=color:red;>只能用在子类的构造函数之中</span>，用在其他地方就会报错

  + ```javascript
    class A {}
    
    class B extends A {
        m() {
            super(); // 报错
        }
    }
    ```

+ ###### `super`<span style=color:red;>必须显式指定是作为函数、还是作为对象使用</span>，否则会报错

  + ```javascript
    class A {}
    
    class B extends A {
        constructor() {
            super();
            console.log(super); // 报错
        }
    }
    ```







#### 类的 protortype 属性 和 \_\_proto\_\_属性

> ❗**每一个对象都有`__proto__`属性，指向对应的构造函数的`prototype`属性**



##### 🌼特征

1. <span style=color:red;>***子类的`__proto__`属性，表示构造函数的继承，总是指向父类***</span>

2. <span style=color:red;>***子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性***</span>

   + ```javascript
     class A {
     }
     
     class B extends A {
     }
     
     B.__proto__ === A // true
     B.prototype.__proto__ === A.prototype // true
     ```

3. <span style=color:red;>***子类实例的`__proto__`属性的`__proto__`属性，指向父类实例的`__proto__`属性***</span>

   + ```javascript
     class Point {
     }
     class ColorPoint extends Point {
     }
     
     new ColorPoint().__proto__.__proto__ == Point.prototype // true
     new ColorPoint().__proto__.__proto__ == new Point().__proto__ // true
     ```





### 🟠对象扩展

#### **getPrototypeOf()**

> ###### ==***用于读取一个对象的原型对象***==

```javascript
function Rectangle() {
    // ...
}

const rec = new Rectangle();

Object.getPrototypeOf(rec) === Rectangle.prototype // true
Object.setPrototypeOf(rec, Object.prototype); // false
Object.getPrototypeOf(rec) === Rectangle.prototype // false
```



#### **setPrototypeOf()** 

> ==***用来设置一个对象的原型对象（prototype），返回参数对象本身***==

```javascript
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x // 10
obj.y // 20
obj.z // 40
```





#### **assign()**

> ==***可以很方便地一次向类添加多个方法或属性***==

```javascript
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
    toString(){},
    toValue(){}
});

Point // prototype: {toValue: ƒ, constructor: ƒ, toString: ƒ}
```

> ==***合并对象***==

```javascript
const config1 = {
    id: 1,
    name: 'ke',
    sex: 11,
};

config2 = {
    id: 2,
    name: 'du',
    age: 'male'
};

Object.assign(config1, config2) // {id: 2, name: 'du', sex: 11, age: 'male'}
```







### 📚Module

> *==**模块化**==：是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来*
>
> *ES6 的模块<u>自动采用严格模式</u>，要求变量必须声明后再使用，不应该在顶层代码使用 `this`，*
>
> *顶层的 `this` 指向 `undefined`。<u>ES6 中每一个模块只加载一次，每一个 JS 只执行</u>*
>
> <u>*一次，如果下次再去加载同目录下同文件，直接从内存中读取*</u>





#### 使用模块化方式

1. ```html
   <script type='module'>/* import ... */</script>
   ```

2. ```html
   <script type="module" src="./index.js"></script>
   ```



 



#### export 命令

> **`export`命令用于规定模块的对外接口****
>
> *一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取*
>
> *如果希望外部能够读取模块内部的某个变量，就必须使用 `export` 关键字输出该变量*





##### 模块导出方式

1. ###### 单个导出

   + ```js
     export let index = 'INDEX';
     
     export function getIndex() {
         console.log(`index: ${index}`);
     }
     ```

2. ###### 合并导出

   + ```js
     let index = 'INDEX';
     function getIndex() {
         console.log(`index: ${index}`);
     }
     export {
     	index,
         getIndex
     }
     ```

3. ###### 默认导出

   + ```js
     export default {
         index: 'INDEX',
         getIndex() {
             console.log(`index: ${index}`);
         }
     }
     ```





##### :grey_exclamation:注意

+ ###### <span style=color:red;>*`export`命令只能出现在模块顶层的任何位置*</span>

  + ```js
    function foo() {
      export default 'bar' // SyntaxError
    }
    foo()
    ```

+ <span style=color:red;>***默认情况`export`输出的变量就是本来的名字，但是可以使用`as`关键字重命名***</span>

  + ```js
    function v1() { ... }
    function v2() { ... }
    
    export {
    	v1 as streamV1,
        v2 as streamV2,
        v2 as streamLatestVersion // 可以用不同的名字输出两次
    };
    ```

+ <span style=color:red;>***每个模块只能使用一次`default`命令***</span>

+ ###### <span style=color:red;>***默认输出和正常输出的区别***</span>

  + ```js
    // sdefault输出
    export default function crc32() { // 输出
      // ...
    }
    import crc32 from 'crc32'; // 输入
    
    // 单个输出
    export function crc32() { // 输出
      // ...
    }
    import {crc32} from 'crc32'; // 输入
    ```
  
+ <span style=color:red;>***同时输入默认方法和其他接口***</span>

  + ```js
    import _, { /* ... */ } from '模块文件的位置';
    ```





#### import 命令

> *`export`命令定义了模块的对外接口后，其他 JS 文件就可以通过`import`命令加载这个模块*
>
> ❗❗*大括号里面指定要从其他模块导入的变量名，必须与被导入模块对外接口的名称相同*

```js
// 静态导入
import 导入方式 from '模块文件的位置';

// 动态导入,返回一个Promise对象
import('模块文件的位置')
```





##### 模块导入方式

1. ###### 整体导入

   + ```js
     import * from '模块文件的位置';
     ```

2. ###### 解构导入

   + ```js
     import { /* ... */ } from '模块文件的位置';
     ```

3. ###### 简便导入*(只针对`default`导出)*

   + ```js
     import 模块名称 from '模块文件的位置';
     
     // 可结合解构导入一并使用
     import 模块名称, { /* ... */ } from '模块文件的位置';
     ```







##### :grey_exclamation:注意

+ <span style=color:red;>***多次重复执行同一句`import`语句，那么只会执行一次，而不会执行多次***</span>

+ <span style=color:red;>***如果模块使用 `from` 接收的为 `undefined`， 则可省略`from`***</span>

+ <span style=color:red;>***不能使用表达式和变量***</span>

  + ```javascript
    // 报错
    import { 'f' + 'oo' } from 'my_module';
    
    // 报错
    let module = 'my_module';
    import { foo } from module;
    
    // 报错
    if (x === 1) {
        import { foo } from 'module1';
    } else {
        import { foo } from 'module2';
    }
    ```

+ <span style=color:red;>***默认情况 `import`导入的模块名就是本来的名字，但是可以使用 `as`关键字重命名***</span>

  + ```javascript
    import { 模块名 as 模块别名 } from '模块文件的位置';
    ```








#### 加载规则

> :grey_exclamation:*浏览器加载 ES6 模块，也使用`<script>`标签，但是要加入`type="module"`属性*
>
> :grey_exclamation:*浏览器对于带有`type="module"`的`<script>`，都是异步加载，不会造成堵塞浏览器*
>
> *等到整个页面渲染完，再执行模块脚本，等同于打开了`<script>`标签的`defer`属性*
>
> :grey_exclamation:*如果网页有多个`<script type="module">`，它们会按照在页面出现的顺序依次执行*







#### ❗❗注意

+	<span style=color:red;>***模块之间也可以继承***</span>

+ <span style=color:red;>***`export`和`import`语句可以结合在一起，写成一行***</span>

  + ```javascript
    export { foo, bar } from 'my_module';
    
    // 相当于以下
    import { foo, bar } from 'my_module';
    export { foo, bar };
    ```







### globalThis 对象

> ==***顶层对象，任何环境下，`globalThis`都是存在的，指向全局环境下的`this`***==

```javascript
/* javascript */
globalThis // Window { ... }

/* node */
globalThis // [global] { ... }
```













## ⭐ES8

**ES2017**





### 🌓async

> **`async`函数就是将 `Generator` 函数的星号（`*`）替换成`async`，将`yield`替换成`await`**





#### 🍀特点

1. ###### 内置执行器

2. ###### 更好的语义

3. ###### 更广的适用性

4. ###### 返回值是 `Promise`





#### 基本用法

```javascript
// 函数声明
async function foo() {}

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };

// Class 的方法
class Storage {
  async getAvatar(name) {
      // ...
  }
}

// 箭头函数
const foo = async () => {};
```







#### 返回值

> ==**`async`函数返回一个 `Promise` 对象**==

+ ==*`async`函数内部`return`语句返回的值，会成为`then`方法回调函数的参数*==

  + ```javascript
    async function fun() {
        return 'linke';
    }
    
    fun().then(result => console.log(result));
    // linke
    ```

+ ==*`async`函数内部抛出错误，会导致返回的 `Promise` 对象变为`reject`状态。抛出的错误对象会被`catch`方法回调函数接收到*==

  + ```javascript
    async function f() {
        throw new Error('出错了');
    }
    
    f().then(
        v => console.log('resolve', v),
        e => console.log('reject', e)
    )
    // reject Error: 出错了
    ```

+ ==*`async` 函数内部返回值是一个 `Promise` 对象，则 `async` 函数返回值的状态取决于这个 `Promise` 对象*==

  + ```javascript
    async function fun() {
        return new Promise((resolve, reject) => {
            // resolve('OK');
            reject('ERROR');
        });
    }
    
    fun().then(result => { 
        console.log(result);
    }, err => { 
        console.warn(err); // ERROR
    });
    ```









### 🌗await

>***`await`命令后面是一个 `Promise` 对象，返回该对象的结果。如果不是 `Promise` 对象，就直接返回对应的值***

```javascript
async function fun() {
    let result = await new Promise((resolve, reject) => {
        resolve('OK');
    });
    console.log(result); // OK
}

fun();
```





#### :grey_exclamation:注意

+ *==`await`命令只能用在`async`函数之中，如果用在普通函数，就会报错==*

+ ==*`async` 方法中，第一个 `await` 之前的代码会同步执行，`await` 之后的代码才会异步执行*==

+ ==*`await` 后面返回不是一个 `Promise` 对象，则下面代码不会等待执行，将会异步执行*==

+ ==*`await`后面的`Promise`对象，运行抛出异常，需要将`await`命令放在`try...catch`代码块中*==

  + ```javascript
    async function myFunction() {
        try {
            await somethingThatReturnsAPromise();
        } catch (err) {
            console.log(err);
        }
    }
    
    // 另一种写法
    async function myFunction() {
        await somethingThatReturnsAPromise()
        .catch(function (err) {
            console.log(err);
        });
    }
    ```









### Object

#### <span style=font-family:consolas,Microsoft YaHei>keys()，values()，entries()</span>

|          方法          |                             作用                             |
| :--------------------: | :----------------------------------------------------------: |
|  **`Object.keys()`**   | **返回所有<span style=color:red;>可遍历属性的键名</span>的数组** |
| **`Object.values()`**  | **返回所有<span style=color:red;>可遍历属性的键值</span>的数组** |
| **`Object.entries()`** | **返回所有<span style=color:red;>可遍历属性的键值对</span>的数组** |

```javascript
let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
    console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
	console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
```





#### <span style=font-family:consolas,Microsoft YaHei>getOwnPropertyDescriptors()</span>

> ***返回某个对象属性的描述对象***

```javascript
const person = {
    id: 1,
    name: 'linke',
    age: '11'
}

Object.getOwnPropertyDescriptors(person);
/*
age: {value: '11', writable: true, enumerable: true, configurable: true}
id: {value: 1, writable: true, enumerable: true, configurable: true}
name: {value: 'linke', writable: true, enumerable: true, configurable: true}
*/
```







## ⭐ES9

**ES2018**





### <span style=font-family:consolas,Microsoft YaHei>RegExp</span>

#### 具名组匹配

> “**具名组匹配**” 在圆括号内部，模式的头部添加**“问号 + 尖括号 + 组名”**（`?<groupName>`），就可以在通过方
>
> 法返回结果的`groups`属性上引用该组名

```javascript
const reg = /<a.*href=["'](?<url>.*)["']>(?<text>.*)<\/a>/;

let datas = '<a href="likke200396@outlook.com">我的邮箱</a>'.match(reg);

datas // ...
datas.groups // {url: 'likke200396@outlook.com', text: '我的邮箱'}
datas.groups.url // likke200396@outlook.com
datas.groups.text // 我的邮箱
```







#### 解构与替换

+ ###### 可以使用解构赋值直接从匹配结果上为变量赋值

  + ```javascript
    let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
    
    one  // foo
    two  // bar
    ```

+ ###### 字符串替换时，使用`$<组名>`引用具名组

  + ```javascript
    let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
    
    '2022-07-19'.replace(reg, '$<day>/$<month>/$<year>') // '19/07/2022'
    ```





#### 引用

> ==如果要在正则表达式内部引用某个“具名组匹配”，可以使用`\k<组名>`的写法==

```javascript
const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
RE_TWICE.test('abc!abc') // true
RE_TWICE.test('abc!ab') // false
```







#### 🔵断言

+ ###### 先行断言

  + >==**`x`只有在`y`前面才匹配，必须写成`/x(?=y)/`**==
    >
    >```javascript
    >let str = 'linke 2396 love shuangshuang 0573';
    >let reg = /\d+(?=.*love)/;
    >reg.exec(str)[0] // 2396
    >```

+ ###### 先行否定断言

  + >==**`x`只有不在`y`前面才匹配，必须写成`/x(?!y)/`**==
    >
    >```javascript
    >let str = 'linke 2396 love shuangshuang 0573';
    >let reg = /\d+(?!.*love)/;
    >reg.exec(str)[0] // 0573
    >```

+ ###### 后行断言

  + >==**`x`只有在`y`后面才匹配，必须写成`/(?<=y)x/`**==
    >
    >```javascript
    >let str = 'linke 2396 love shuangshuang 0573';
    >let reg = /(?<=love.*)\d+/;
    >reg.exec(str)[0] // 0573
    >```

+ ###### 后行否定断言

  + >==**`x`只有不在`y`后面才匹配，必须写成`/(?<!y)x/`**==
    >
    >```javascript
    >let str = 'linke 2396 love shuangshuang 0573';
    >let reg = /(?<!love)\d+/;
    >reg.exec(str)[0] // 2396
    >```





#### dotAll 模式

> ***正则表达式中`.`匹配除`\n`以外的任意单个字符***
>
> ==***`s`修饰符被称为`dotAll`模式，使得`.`可以匹配任意单个字符***==

```javascript
const reg1 = /linke.2396/;

reg1.test('linke\n2396') // false

// dotAll模式
const reg2 = /linke.2396/s;

reg2.test('linke\n2396') // true
reg2.dotAll // true
reg2.flags // 's'
```













### 异步迭代器

> `for await...of`方法被称为**异步迭代器**，该方法是主要用来遍历异步对象，<u>语句只能在 `async function`内使用</u>

~~~javascript
function Gen(time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(time), time)
    })
}

async function test() {
    let arr = [Gen(2000), Gen(100), Gen(3000)]
    for await (let item of arr) {
        console.log(Date.now(), item)
    }
}

test()
/* test() 方法执行结果
Promise {<pending>}
	[[Prototype]]: Promise
	Promise[[PromiseState]]: "fulfilled"
	[[PromiseResult]]: undefined
1668695679115 2000
1668695679115 100
1668695680111 3000
*/
~~~

















## ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>

