[TOC]

# TypeScript

<div style="display: flex; align-items: center;">
    <hr/>
    <svg class="icon" style="width: 5em;height: 5em;margin: 0 5px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3608"><path d="M94.208 94.208v835.584h835.584V94.208H94.208z m634.92096 405.85216v0.012288c8.011776 0.024576 17.119232 0.436224 23.967744 1.179648 27.891712 3.016704 49.6128 15.050752 68.091904 37.715968 9.201664 11.290624 12.34944 16.2304 11.679744 18.343936-0.432128 1.363968-6.746112 5.885952-26.820608 19.21024-19.720192 13.092864-26.07104 17.014784-27.5456 17.014784-1.497088 0-4.614144-3.207168-9.105408-9.365504-8.6528-11.855872-17.485824-17.266688-31.13984-19.070976-14.68416-1.9456-27.856896 2.68288-34.308096 12.058624-5.515264 8.011776-6.3488 20.901888-1.96608 30.26944 5.07904 10.848256 14.270464 16.846848 49.494016 32.290816 40.624128 17.813504 61.210624 30.005248 76.204032 45.13792 16.146432 16.293888 24.326144 35.106816 26.83904 61.718528 1.226752 12.972032-0.272384 28.34432-3.98336 40.843264-9.10336 30.640128-33.66912 53.075968-69.67296 63.635456-9.95328 2.9184-19.214336 4.661248-28.37504 5.332992-13.985792 1.030144-34.002944 0.462848-46.051328-1.29024-30.482432-4.442112-64.892928-22.17984-82.051072-42.2912-8.423424-9.873408-19.177472-26.12224-19.177472-28.9792 0-1.380352 0.684032-2.164736 3.391488-3.885056 8.032256-5.103616 54.054912-31.412224 54.94784-31.412224 0.540672 0 2.945024 2.832384 5.341184 6.295552 5.429248 7.839744 18.78016 21.313536 25.567232 25.808896 5.543936 3.672064 12.634112 6.619136 21.051392 8.747008 4.820992 1.202176 7.3728 1.417216 17.891328 1.417216 10.747904-0.004096 12.951552-0.18432 17.760256-1.476608 12.71808-3.422208 22.644736-10.50624 26.851328-19.156992 1.8432-3.7376 1.880064-4.204544 1.880064-13.27104v-9.40032l-2.260992-4.48512c-5.474304-10.866688-17.270784-18.323456-54.56896-34.47808-17.13152-7.421952-38.11328-17.885184-46.30528-23.0912-18.696192-11.880448-31.653888-25.462784-40.157184-42.088448-8.45824-16.533504-9.71776-22.687744-9.73824-47.548416-0.02048-19.462144-0.053248-19.222528 3.975168-31.643648 3.65568-11.272192 11.139072-23.863296 19.400704-32.64512 16.4864-17.524736 40.577024-28.788736 66.367488-31.029248 3.29728-0.313344 7.716864-0.434176 12.52352-0.41984z m-221.92128 3.844096h0.008192c49.670144 0.024576 78.143488 0.196608 78.600192 0.483328 0.86016 0.53248 0.968704 4.855808 0.968704 32.444416v31.827968l-49.563648 0.180224-49.563648 0.180224v140.724224c0 77.400064-0.157696 141.185024-0.372736 141.748224-0.350208 0.948224-4.163584 1.019904-36.41344 1.019904h-36.018176l-0.372736-1.45408c-0.239616-0.79872-0.415744-64.587776-0.41984-141.750272l-0.012288-140.296192-49.5616-0.176128-49.565696-0.180224v-31.451136c0-24.94464 0.172032-31.625216 0.837632-32.288768 0.681984-0.702464 25.976832-0.882688 134.967296-0.991232 21.01248-0.02048 39.92576-0.03072 56.48384-0.02048z" fill="#0288D1" p-id="3609"></path></svg>
	<hr/>
</div>

***[TypeScript](https://www.typescriptlang.org/)(简称`TS`): 是`JavaScript`的<span style=color:red;>超集</span>***

<center><img src="images/typescript.png" alt="typescript" style="zoom:35%;" title="typescript" /></center>















## 🍀概念

> ==***`TypeScript`是带有类型语法的 `JavaScript`构建的强类型编程语言***==

















## TS与JS的区别

+ `TypeScript`属于静态类型的编程语言

  > ==**<span style=color:red;>静态类型</span>: 编译期做类型检查**==

+ `JavaScript`属于动态类型的编程语言

  > ==**<span style=color:red;>动态类型</span>：运行期做类型检查**==



















## 安装

~~~cmd
# 全局安装
npm install -g typescript

# 查询版本
tsc -v
~~~

















### 作用

==**用来编译 `TypeScript` 代码，将 `TS` 转换 `JS`**==

<center><img src="images/ts%E7%9A%84%E7%BC%96%E8%AF%91.png" alt="ts的编译" style="zoom:90%;border: 1px solid silver;" title="ts的编译" /></center>





















## 编译运行

1. <span style=color:black;>**创建 `index.ts` 文件(`TS`文件后缀名为`.ts`)**</span>

2. <span style=color:black;>**编译`TS`，在终端中输入以下命令；<u>编译完成后，会在同级目录生成同名`JS`文件</u>**</span>

   ~~~cmd
   tsc index.ts
   ~~~

3. <span style=color:black;>**执行编译后的`JS`文件**</span>

   ~~~cmd
   node index.js
   ~~~

















### ts-node

> :grey_exclamation:==**作用: <u>简化每次修改 `ts` 代码都需要执行 `tsc` 命令编译，直接将 `ts`编译运行，且不生成 `js` 文件</u>**==

~~~cmd
# 全局安装
npm install -g ts-node

# 使用
ts-node <.ts文件路径>
~~~

















## 静态类型检查

> ==**<span style=color:red;>静态类型系统</span>描述了程序运行时值的结构和行为**==

~~~typescript
const message = "hello!";
 
message(); // This expression is not callable. Type 'String' has no call signatures.
~~~















## 非异常失败

~~~typescript
const user = {
    name: "linke",
    age: 19,
};
 
user.sex; // Property 'location' does not exist on type '{ name: string; age: number; }'.
~~~



















## 🍓类型注解

> ~~~typescript
> let 变量名: 类型 = 变量值;
> ~~~
>
> ==***使用 `const`、`var` 或 `let` 声明变量时,可以选择添加类型注释以显式指定变量的类型***==
>
> :grey_exclamation:==**`: 类型`表示约定变量为指定类型；只能为该变量赋值该类型的值，反之报错**==

~~~typescript
let age: number = 19; // 定义age变量为number类型

age = 15; // 赋值成功

age = '15'; // Type 'string' is not assignable to type 'number'.
~~~

















### 类型推断

> ==**可省略类型注释，`TypeScript` 都会尝试自动推断代码中的类型**==
>
> :grey_exclamation:==***<span style=color:red;>变量的类型是根据其初始值设定项的类型推断的</span>***==

~~~typescript
let myName = 'linke'; // => 等价于 let myName: string = 'linke';

myName = true; // Type 'boolean' is not assignable to type 'string'.
~~~



















## 🔖基础类型

### 原始类型

|      类型       |
| :-------------: |
|  **`number`**   |
|  **`string`**   |
|  **`boolean`**  |
|   **`null`**    |
| **`undefined`** |
|  **`symbol`**   |

~~~typescript
let age: number = 19;		// 数字
let first: string = 'L';		// 字符串
let flag: boolean = true;	// 布尔
let no: null = null;			// null
let last: undefined = undefined;	// undefined
let s: symbol = Symbol();	// symbol
~~~

















### 🟠对象类型

#### 数组

+ **`类型[]`**

  ~~~typescript
  // 方式一(推荐)
  let numbers: number[] = [1, 2, 3];
  
  numbers = [1, true]; // Type 'boolean' is not assignable to type 'number'.
  ~~~

+ **`Array<类型>`**

  ~~~typescript
  // 方式二
  let strings: Array<string> = ['a', 'b', 'c'];
  ~~~

  













#### 对象

~~~typescript
let obj: object = {}; // 对象类型

obj = { id: 1}
obj = { name: 'linke' }

obj = 1; // Type 'number' is not assignable to type 'object'.
~~~















#### 自定义对象

+ **`属性名: 类型`: 声明对象属性类型**

  ~~~typescript
  const person: { name: string } = { name: 'linke' };
  ~~~

+ **`方法名(): 类型`: 声明对象方法类型**

  ~~~typescript
  // 方式1
  const person: { fn(): void } = { fn() { } }
  
  // 方式2(箭头函数)
  const person: { fn(): void } = { fn: () => { } }
  ~~~













##### ❕❕注意

+ :grey_exclamation:==**多个对象属性类型使用`;`隔开**==

  ~~~typescript
  const person: { name: string; age: number; address(): void } = {
      name: 'linke',
      age: 19,
      address() { }
  }
  
  person; // => { name: 'linke', age: 19, address: [Function: address] }
  ~~~

+ :grey_exclamation:==**多个对象属性类型换行,可省略`;`**==

  ~~~typescript
  const person: {
      name: string
      age: number
  } = {
      name: 'linke',
      age: 19
  }
  ~~~

  





















#### 属性修饰符

+ **`?`**: <span style=color;black;>可选属性</span>

  ~~~typescript
  const options: {
      x?: number;
      y?: number;
      z?: number;
  } = {
      z: 1
  }
  
  options; // => { z: 1 }
  ~~~

+ **`readonly`**: <span style=color;black;>只读属性</span>

  ~~~typescript
  const obj: {
      readonly name: string
  } = {
      name: 'linke'
  }
  
  obj; // => { name: 'linke' }
  
  obj.name = 'baili'; // Cannot assign to 'name' because it is a read-only property.
  ~~~

  



















### 联合类型

> ~~~typescript
> let 变量名: 类型1 | 类型2 | ... = 变量值;
> ~~~
>
> :grey_exclamation:==***联合类型是由两个或多个其他类型组成的类型，表示可能是这些类型中的任何一种的值***==

~~~typescript
// 变量
let size: number | string = 1;
size = '2';
size // => '2'

// 数组
let arr: (number | string)[] = [1, 'a', 2, 'b'];
arr.push(3);
arr.unshift('c');
arr // => [ 'c', 1, 'a', 2, 'b', 3 ]
~~~

















### 类型别名

> ~~~typescript
> // 定义: 通过type定义类型别名
> type 类型别名 = 类型;
> 
> // 使用: 将类型别名作为类型注解
> let 变量名: 类型别名 = 变量值;
> ~~~
>
> ==**希望多次使用相同的类型,可通过单个名称引用它**==
>
> :grey_exclamation:==***可为任何类型定义类型别名***==

~~~typescript
// 定义
type CustomArray = (number | string)[];

// 使用
let arr: CustomArray = [1, 2, 3];
let arr2: CustomArray = [1, 'a', 'b'];
~~~















### 🟣函数类型

> ==**函数的类型实际上指的是：函数<span style=color:red;>参数</span>和<span style=color:red;>返回值</span>的类型**==







#### 参数类型注释

> ~~~typescript
> function 函数名(param1: 参数类型, param2: 参数类型) { ... }
> ~~~
>
> ==***声明函数时，可以在每个参数后添加类型注释，以声明函数接受的参数类型***==

~~~typescript
// 参数类型注释
function greet(name: string) {
    return `Hello ${name.toUpperCase()}!`;
}

// 调用函数
greet('linke') // => Hello LINKE!

// 错误参数
greet(19) // Argument of type 'number' is not assignable to parameter of type 'string'.
~~~











#### 返回类型批注

> ~~~typescript
> function 函数名(参数): 返回值类型 { ... }
> ~~~
>
> ==**可以添加函数返回类型批注,在参数列表之后使用类型注解**==
>
> ==***<span style=color:red;>可省略返回类型注释，`TypeScript` 将根据函数的`return`语句推断函数的返回类型</span>***==

~~~typescript
function getAge(): number {
    return 19;
}
~~~















#### 指定类型的方式

1. ***<span style=color:red;>单独</span>指定参数，返回值的类型***

   ~~~typescript
   // 普通函数
   function fn(arg, 参数类型, ...): 函数返回值类型 {
       return ...
   }
       
   // 箭头函数
   const fn = (arg: 参数类型, ...): 函数返回值类型 => {
       return ...
   }
   ~~~

2. ***<span style=color:red;>同时</span>指定参数，返回值的类型***

   ~~~typescript
   const fn: (arg: 参数类型, ...) => 函数返回值类型 = (arg, ...) => {
   	return ...                                         
   }
   ~~~

   

















#### 匿名函数

~~~typescript
const names = ['linke', 'baili', 'dudu'];
names.forEach((s: string) => {
    console.log(s.toUpperCase());
});
~~~

  













#### 可选参数

> ==使用`?`将参数标记为***<span style=color:red;>可选</span>***==
>
> :grey_exclamation:<span style=color:red;>***可选参数只能出现在参数列表的最后***</span>

~~~typescript
function f(x?: 参数类型) { ... }
function f(y: 参数类型, x?: 参数类型) { ... }
~~~















#### 参数解构

> ==**可以使用参数解构方便地将作为参数提供的对象解压缩到函数体中的一个或多个局部变量中**==

~~~typescript
function sum({ a, b, c }: { a: number; b: number; c: number }): number {
	return a + b + c;
}
~~~













#### 其余参数

> ==**可以使用`...`定义接受无限数量参数的函数**==

~~~typescript
// 在参数前添加..., 并将其类型定义为数组
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

// 调用
multiply(10, 1, 2, 3, 4); // => [ 10, 20, 30, 40 ]
~~~



















#### 函数重载

> ==***可以通过编写重载签名以不同方式调用的函数***==
>
> :grey_exclamation:<span style=color:red;>***必须编写了一个具有兼容签名的函数实现***</span>

~~~typescript
// 重载签名
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
// 实现签名
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

// 调用
const d1 = makeDate(1667911757230);
const d2 = makeDate(8, 11, 2022);
d1.toLocaleString(); // => 2022/11/8 20:49:17
d2.toLocaleString(); // 2022/9/11 00:00:00
~~~

















## 🌟高级类型

### 可重用类型

> ==***`interface`定义具有属性的类型***==

~~~typescript
interface obj {
    name: string;
}
~~~





















### viod

> ==**`void`表示没有任何类型**==

~~~typescript
// 函数：函数没有返回值
function fn(args...): void { ... }

// 变量: 只能赋予undefined
let unusable: void = undefined;
~~~















### any

>==**`any`一个特殊的类型，定义为`any`类型的变量允许被赋值为任意类型**==

~~~typescript
let value: any = 19;
value = 'linke';
~~~























### unknown

> ==**`unknown`表示任何值，类似于类型`any`，但`unknown`更安全**==

~~~typescript
function f1(a: any) {
    a.b(); // OK
}

function f2(a: unknown) {
    a.b(); // Object is of type 'unknown'.
}
~~~

















### never

> ==**`never`表示永远不会有值的一种类型**==

~~~typescript
function fail(msg: string): never {
    throw new Error(msg);
}
~~~













