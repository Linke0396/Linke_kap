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





















## 🔻编译运行

1. <span style=color:black;>**创建 `index.ts` 文件(`TS`文件后缀名为`.ts`)**</span>

2. <span style=color:black;>**编译`TS`，在终端中输入以下命令；<u>编译完成后，会在同级目录生成同名`JS`文件</u>**</span>

   ~~~cmd
   tsc index.ts
   ~~~

3. <span style=color:black;>**执行编译后的`JS`文件**</span>

   ~~~cmd
   node index.js
   ~~~















### 监听文件

> ==**在需要监听的`.ts`文件所在的目录打开终端执行如下命令:**==
>
> ~~~cmd
> # 监听
> tsc --watch
> # 发生错误则不编译.ts文件
> tsc --noEmitOnError --watch
> ~~~

















### ts-node

> :grey_exclamation:==**作用: <u>简化每次修改 `ts` 代码都需要执行 `tsc` 命令编译，直接将 `ts`编译运行，且不生成 `js` 文件</u>**==

~~~cmd
# 全局安装
npm install -g ts-node

# 使用
ts-node <.ts文件路径>
~~~

















### vscode自动编译ts

1. <span style=color:black;>***使用如下命令生成配置文件***</span>

   ~~~cmd
   tsc --init
   ~~~

2. <span style=color:black;>***修改`tsconfig.json`文件的配置信息***</span>

   ~~~json
   "outDir": "./js"  /* 把ts文件编译成功后放在js目录中(不用新建文件夹会自动生成js文件夹) */
   ~~~

3. <span style=color:black;>***开启自动编译***</span>

   + ==**`Terminal` => `Run Task...` => 输入 `tsc` => 选择监听的 `tsc: watch - **/tsconfig.json` 文件**==

   + <span style=color:black;>**终端显示如下信息，则编译成功**</span>

     <left><img src="images/vscode%E8%87%AA%E5%8A%A8%E7%BC%96%E8%AF%91ts.png" alt="vscode - terminal" style="zoom:70%;" title="terminal" /></left>















### 降级编译

> ==**可通过修改`tsconfig.json`配置文件来修改`TS`编译目标的代码版本**==
>
> ~~~json
> "target": "es5",
> ~~~















### 严格模式

> ==**通过`tsconfig.json`配置文件配置以下属性可以打开或关闭的类型检查严格性标志**==

+ <span style=color:black;>`strict(boolean)`：是否开启严格模式<span style=color:red;>(启用此配置等同于启用以下两项配置)</span></span>
+ <span style=color:black;>`noImplicitAny(boolean)`：是否允许隐式的`any`类型</span>
+ <span style=color:black;>`strictNullChecks(boolean)`：是否不允许值为`null`和`undefined`可分配给任何其他类型</span>

















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

















## 类型推断

> ==**可省略类型注释，`TypeScript` 都会尝试自动推断代码中的类型**==
>
> :grey_exclamation:==***<span style=color:red;>变量的类型是根据其初始值设定项的类型推断的</span>***==

~~~typescript
let myName = 'linke'; // => 等价于 let myName: string = 'linke';

myName = true; // Type 'boolean' is not assignable to type 'string'.
~~~















## 类型断言

> ==***通过`as`关键字实现类型断言，`as`关键字后面的类型是一个更加具体的类型(子类型)***==

~~~typescript
// 方式一
const link = document.getElementById('link') as HTMLAnchorElement;

// 方式二(仅在tsx中无效)
const link = <HTMLAnchorElement>document.getElementById('link');
~~~

















## 文本类型

~~~typescript
// changingString 是一个变量(let), 值可以是任意字符串类型
let changingString = "Hello World"; // let changingString: string

// constantString 是一个常量(const), 值是不能改变的，所以类型为 'Hello World'
const constantString = "Hello World"; // const constantString: "Hello World"

// 等价于
let x: "hello" = "hello";
x = "hello"; // OK
x = "error"; // Type '"error"' is not assignable to type '"hello"'.
~~~

<span style=color:black;>***应用场景***</span>

~~~typescript
function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}

printText("Hello, world", "left"); // OK
printText("G'day, mate", "botton"); // Argument of type '"botton"' is not assignable to parameter of type '"left" | "right" | "center"'.
~~~

~~~typescript
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
~~~























## 字面推理

~~~typescript
function handleRequest(url: string, method: 'GET' | 'POST') { }

// 方式1
const req = { url: "https://example.com", method: "GET" as 'GET' };
handleRequest(req.url, req.method); // OK

// 方式2
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method as 'GET'); // OK

// 方式3(将整个对象转换为类型文本)
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method); // OK
~~~

















## ❕非空断言运算符

> :grey_exclamation:==***`TypeScript` 还具有一种特殊的语法，`!`用于在不执行任何显式检查的情况下从类型中删除`null`和`undefined`***==

~~~typescript
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
~~~

















## 类型运算符

> ==***可以在表达式上下文中使用的运算符`typeof`***==
>
> :grey_exclamation:==***<span style=color:red;>只能用来查询变量或属性的类型</span>***==

~~~typescript
console.log(typeof 'Hello world'); // string

let p = { x: 1, y: 2 }
function fn(point: typeof p) { ... }
~~~















## 键类型运算符

> ==***`keyof`采用对象类型并生成其键的字符串或数字文本的联合类型***==

~~~typescript
type User = {
    id: number;
    name: string;
}

type UserKeys = keyof User;		// "id" | "name"
type Use = User[keyof User];	// string | number
~~~















## 类型谓词

> :grey_exclamation:==***需要定义一个返回类型为`is`类型谓词的函数***==

~~~typescript
type Daytime = { sun: string }
type Evening = { moon: string }

function isDaytime(now: Daytime | Evening): now is Daytime {
    return (now as Daytime).sun !== undefined;
}

const today: Daytime = { sun: '9:00' }
const yester: Evening = { moon: '19:00' }

isDaytime(today);	// true
isDaytime(yester);	// false
~~~





















## 🔖基础类型

### 原始类型

|      类型       |
| :-------------: |
|  **`number`**   |
|  **`string`**   |
|  **`boolean`**  |
|  **`object`**   |
|   **`null`**    |
| **`undefined`** |
|  **`symbol`**   |
|  **`bigint`**   |
| **`function`**  |

~~~typescript
let age: number = 19;			// 数字
let first: string = 'L';		// 字符串
let flag: boolean = true;		// 布尔
let no: null = null;			// null
let last: undefined = undefined;	// undefined
let s: symbol = Symbol();		// symbol
~~~

















### 🟠对象类型

#### 数组

+ **`类型[]`**

  ~~~typescript
  // 方式一(推荐)
  const numbers: number[] = [1, 2, 3];
  
  numbers = [1, true]; // Type 'boolean' is not assignable to type 'number'.
  ~~~

+ **`Array<类型>`**

  ~~~typescript
  // 方式二
  const strings: Array<string> = ['a', 'b', 'c'];
  ~~~

+ **`ReadonlyArray<类型>`**

  ~~~typescript
  // 方式三(只读数组类型)
  const roArray: ReadonlyArray<string> = ['red', 'green', 'blue';
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
  
  // readony 属性也可以通过别名来改变
  interface Person {
      name: string;
      age: number;
  }
  
  interface ReadonlyPerson {
      readonly name: string;
      readonly age: number;
  }
  
  const person: Person = {
      name: 'linke',
      age: 19
  }
  
  const readonlyPerson: ReadonlyPerson = person
  readonlyPerson.age // => 19
  person.age++
  readonlyPerson.age // => 20
  ~~~
  
  















#### 🍁接口

> ==***`interface`定义具有属性的类型，是一种可重用的类型***==
>
> :grey_exclamation:==***<span style=color:red;>接口声明是命名对象类型的另一种方法</span>***==

~~~typescript
// 定义接口
interface Person {
    name: string;
    age: number;
}

// 使用
const obj： Person = {
    name: 'dudu',
    age: 11
}
~~~















##### 扩展接口

> ==***<span style=color:red;><u>继承</u></span>：通过`extends`关键字实现接口与接口之间的继承***==
>
> :grey_exclamation:**<span style=color:red;>可多个继承，使用`,`分割</span>**
>
> ==***<span style=color:red;><u>声明合并</u></span>：接口可以定义多次，并将被视为单个接口(合并所有声明的成员)***==

+ <span style=color:black;>***继承***</span>*(推荐)*

  ~~~typescript
  interface Person {
      name: string;
      age: number;
  }
  
  // 继承
  interface Stu extends Person {
      info(): void
  }
  
  const person: Person = {
      name: 'keke',
      age: 10,
      info() { }
  }
  ~~~

+ <span style=color:black;>***声明合并***</span>

  ~~~typescript
  // 同时声明多个相同接口，会将其合并成员为单个接口
  interface Point { x: number }
  interface Point { y: number }
  
  const point: Point = {
      x: 1,
      y: 2
  }
  ~~~




















##### 类型别名和接口之间的差异

+ :grey_exclamation:<span style=color:black;>***接口始终是可扩展的，但类型别名不可以***</span>
+ :grey_exclamation:<span style=color:black;>***接口可以声明合并，但类型别名不可以***</span>
+ :grey_exclamation:<span style=color:black;>***接口只用于声明对象的类型，类型别名可以用于任意类型***</span>



































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

   















#### 调用签名

> ==**函数还可以有属性,然而函数类型表达式的语法不允许声明属性; 可以在一个对象类型中写一个调用签名**==

~~~typescript
type DescribableFunction = {
    description: string; // 属性
    (someArg: number): boolean; // 参数与返回值
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function fn(value: number) {
    return value % 2 == 0
}
fn.description = 'Hello'

doSomething(fn); // => Hello returned true
~~~















#### 构造签名

> ==**函数也可以用`new`运算符调用，将这些称为<span style=color:red;>构造函数</span>**==

~~~typescript
class SomeObject {
    s: string
    constructor(s: string) {
        this.s = s
    }
}

type SomeConstructor = {
    new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

fn(SomeObject); // => SomeObject { s: 'hello' }
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













#### 合并参数

> ==***使用 `&` 符号可以灵活的合并参数***==

~~~typescript
type Params = {
    a: string;
};

function fn(params: Params & { b: string }) {
    console.log(params);
}

fn({ a: "4", b: "2" }); // => { a: '4', b: '2' }
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
>
> :grey_exclamation:==***<u>在可能的情况下，总是倾向于使用联合类型的参数而不是重载参数</u>***==

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

// 必须以重载签名的形式调用
const d1 = makeDate(1667911757230);
const d2 = makeDate(8, 11, 2022);
d1.toLocaleString(); // => 2022/11/8 20:49:17
d2.toLocaleString(); // 2022/9/11 00:00:00
~~~















### 元组类型

> ==***元组类型是另一种`Array`类型，确切地指定包含多少个元素，以及特定索引位置对应的类型***==
>
> :grey_exclamation:==***<span style=color:red;>如果索引超过元素的数量，则报错</span>***==

~~~typescript
const position: [number, number] = [1, 2];

position; // => [ 1, 2 ]

// 获取元素
position[0] // => 1

// 解构元组
const [x, y] = position;
x // => 1
~~~













#### 可选属性

> ==***元组可以通过写出`?`来具有可选属性，可选的元组元素只能出现在末尾***==

~~~typescript
type Either2dOr3d = [number, number, number?];
 
function setCoordinate(coord: Either2dOr3d): number {
    const [x, y, z] = coord; // const z: number | undefined
    return coord.length; // length: 2 | 3
}

setCoordinate([1, 2]);		// => 2
setCoordinate([1, 2, 3]);	// => 3
~~~













#### 只读元组类型

~~~typescript
const obj: readonly [number, string] = [73, 'shuang'];
~~~















### 枚举

> ==***`enum`关键字定义一组命名常量***==

~~~typescript
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
~~~

















#### 数字枚举

> :grey_exclamation:==***<span style=color:red;>枚举中的第一个成员，当没有初始值设定项，默认分配值`0`</span>***==
>
> :grey_exclamation:==***完全省略初始值设定项时，枚举成员的值将是前面的枚举成员的值加`1`***==

~~~typescript
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

Direction.Up;		// => 0
Direction.Down;		// => 1
Direction.Left; 	// => 2
Direction.Right;	// => 3
~~~















#### 字符串枚举

> :grey_exclamation:==***<span style=color:red;>在字符串枚举中，每个成员都必须使用字符串文本或另一个字符串枚举成员进行常量初始化</span>***==
>
> :grey_exclamation:==***字符串枚举没有自动递增行为***==

~~~typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
~~~













#### 异构枚举

~~~typescript
enum BooleanEnum {
    No = 0,
    Yes = "YES",
}
~~~













#### 反向映射

> ==***数字枚举成员还可以获得从枚举值到枚举名称的<span style=color:red;>反向映射</span>***==

~~~typescript
enum Enum {
    A,
}
 
let a = Enum.A;
Enum[a]; // => "A"
~~~













#### 常量枚举

> :grey_exclamation:==***<span style=color:red;>在编译阶段被删除，并且不能包含计算成员</span>***==

~~~typescript
const enum Direction {
    Up,
    Down,
    Left,
    Right,
}
 
let directions = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right,
];

/* 在生成的代码中将成为 */
"use strict";
let directions = [
    0 /* Direction.Up */,
    1 /* Direction.Down */,
    2 /* Direction.Left */,
    3 /* Direction.Right */,
];
~~~













#### 对象与枚举

> :grey_exclamation:==***当一个对象足以满足以下条件时，可能不需要枚举,可使用`as const`***==

~~~typescript
const Direction = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

Direction.Up;	// => 0
Direction.Down;	// => 1
~~~























### viod

> ==**`void`表示没有任何类型**==
>
> :grey_exclamation:==***函数的`void`返回类型可以产生一些不寻常的情况:***==
>
> 1. <span style=color:black;>一个具有`void`返回类型的上下文函数类型`(type fn = () => void)`，在实现时，可以返回任何其他的值，但它会被忽略</span>
> 2. <span style=color:black;>当一个字面的函数定义有一个`void`的返回类型时，该函数必须不返回任何东西</span>

~~~typescript
// 函数：函数没有返回值
function fn(args...): void { ... }

// 变量: 只能赋予undefined
let unusable: void = undefined;
~~~

~~~typescript
// 情况(1)
const fn: () => void = () => {
    return true
}

const ret: void = fn() // const ret: void
ret; // => true

// 情况(2)
function fn(): void {
    return false // Type 'boolean' is not assignable to type 'void'.
}
~~~



















### any

>==**`any`一个特殊的类型，定义为`any`类型的变量允许被赋值为任意类型**==
>
>❗***<span style=color:red;>不推荐使用</span>***
>
>:grey_exclamation:==***以下情况 `TypeScreipt`会默认隐式具有`any`类型***==
>
>+ <span style=color:black;>*声明变量不提供类型与不提供默认值*</span>
>+ <span style=color:black;>*函数参数不提供类型*</span>

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





















## 🌟高级类型

### 🔘Class

> ==***`TypeScript`完全支持`ES2015`中引入的`class`关键字***==

~~~typescript
// 方式(1)
class Point {}

// 方式(2): 使用表达式
const Point = class {}
~~~











#### 领域

> ==***字段声明在类上创建公共可写属性***==
> :grey_exclamation:==***<span style=color:red;>类型注释是可选的，但将是未指定的隐式注释`any`</span>***==
>
> :grey_exclamation:==***<span style=color:red;>类属性的初始值设定项将用于推断其类型</span>***==
>
> + <span style=color:black;>***正常构建需要初始化***</span>
> + <span style=color:black;>***不初始化，需要使用`!`断言***</span>

~~~typescript
class Point {
    x: number;
    y: number;
    z!: number; // 使用“!”断言

    // 正常构建需要初始化
    constructor() {
        this.x = 1;
        this.y = 1;
    }
}

const pt = new Point();
pt; // => Point { x: 1, y: 1 }

pt.x = 0;
pt.y = 0;
pt.z = 0;
pt; // => Point { x: 0, y: 0, z: 0 }
~~~















#### 只读

> ==***`readonly`关键字，防止赋值到构造函数外部的<span style=color:red;>属性</span>***==
>
> :grey_exclamation:***<span style=color:red;>如果`readonly`属性有初始化而无类型注解，则类型自动推断为文本类型</span>***

~~~typescript
class Obj {
	readonly name: string = 'linke'; // Obj.name: string
    readonly age = 19; // Obj.age: 19

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    
    err() {
        this.name = "yiyi"; // Cannot assign to 'name' because it is a read-only property.
    }
}

const o = new Obj('keke'); // OK
o; // => Obj { name: 'dudu' }

o1.name = 'keke'; // Cannot assign to 'name' because it is a read-only property.
~~~















#### 构造函数

> ==***类构造函数与函数非常相似，可以使用类型注释、默认值和重载添加参数***==
>
> + <span style=color:black;>*构造函数不能有类型参数*</span>
> + <span style=color:black;>*构造函数不能有返回类型注释*</span>

~~~typescript
class Point {
    x: number;
    y: number;
 
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
~~~















#### 方法

~~~typescript
class Point {
    x = 10;
    y = 10;
 
    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}

const p = new Point();
p.scale(2);
p; // => Points { x: 20, y: 20 }
~~~













#### get/set

> ==***`TypeScript`对访问器有一些特殊的推理规则:***==
>
> + <span style=color:black;>*如果存在`get`，但没有`set`，则该属性自动是只读的*</span>
> + <span style=color:black;>*如果没有指定`setter`参数的类型，它将从`getter`的返回类型中推断出来*</span>
> + <span style=color:black;>*访问器和设置器必须有相同的成员可见性*</span>

~~~typescript
class Thing {
    _size = 0;
 
    get size(): number {
        return this._size;
    }
 
    set size(value: string | number | boolean) {
        let num = Number(value);
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
~~~



















#### 继承

> ==***类可以使用`extends`从基类扩展,派生类具有其基类的所有属性和方法，还定义其他成员***==

~~~typescript
class Father {
    work() {
        console.log('work.');
    }
}

// 继承
class Son extends Father {
    study() {
        console.log('study.');
        return this;
    }
}

const son = new Son();
son.study().work(); // => study. work.
~~~













##### 继承内置类型

~~~typescript
class MsgError extends Error {
    constructor(m: string) {
        super(m);
        
        // es5 需要明确地设置原型
        // Object.setPrototypeOf(this, MsgError.prototype);
    }
}

const msgError = new MsgError('info');
msgError instanceof MsgError; // => true
~~~



















#### 实现

> ==***`implements`关键字用于将类实现一个或多个接口，多个接口之间使用`,`隔开***==
>
> :grey_exclamation:==***<span style=color:red;>类必须重写兼容接口中的所有方法和属性</span>***==
>
> :grey_exclamation:==***<span style=color:red;>可选属性不会要求实现类去实现</span>***==

~~~typescript
interface Person {
    x?: number; // 可选属性
    eat(): void;
}

// 正确的继承
class Male implements Person {
    eat() {
        console.log("eat!");
    }
}

const male = new Male();
male.eat(); // => eat!

// 错误的继承
class Female implements Person {
    // Class 'Female' incorrectly implements interface 'Person'.
    // Property 'eat' is missing in type 'Female' but required in type 'Person'.
}
~~~















#### 可见性

##### public

>==***类成员的默认可见性为`public`：公共的，可以在任何地方访问，可省略***==

~~~typescript
class User {
    public toCreate() {
        console.log('2022/11/9');
    }
}

const user = new User();
user.toCreate(); // => 2022/11/9
~~~











##### protected

> ==***`protected`成员仅对声明它们的类与其子类可见，来修饰该属性或方法是受保护的***==

~~~typescript
class Father {
    greet() {
        console.log("Hello, " + this.getName());
    }

    protected getName() {
        return "linke";
    }
}

class Son extends Father {
    howdy() {
        console.log('Howdy, ' + this.getName());
    }
}

const son = new Son();
son.greet(); // => Hello, linke
son.howdy(); // => Howdy, linke
son.getName(); // Property 'getName' is protected and only accessible within class 'Father' and its subclasses.
~~~













##### private

> ==***`private`私有的，不允许从子类访问成员***==
>
> :grey_exclamation:==***<span style=color:red;>允许在类型检查期间使用括号表示法进行访问</span>***==

~~~typescript
class Base {
    private x = 0;
}

const base = new Base();
base.x;		// Property 'x' is private and only accessible within class 'Base'.
base['x'];	// => 0

class Derived extends Base {
     x = 1; // Class 'Derived' incorrectly extends base class 'Base'. Property 'x' is private in type 'Base' but not in type 'Derived'.
    showX() {
        console.log(this.x); // Property 'x' is private and only accessible within class 'Base'.
    }
}
~~~















#### this参数

~~~typescript
class MyClass {
    name = "MyClass";
    getName(this: MyClass) {
        return this.name;
    }
    updateName(this: MyClass, newName: string) {
        this.name = newName
    }
}

const c = new MyClass();
c.updateName('MyClass Plus'); // => OK
c.getName();	// => MyClass Plus
~~~













#### this类型注解

~~~typescript
class Box {
    content: string = "";
    sameAs(other: this) {
        return other.content === this.content;
    }
}

class DerivedBox extends Box {
    
}

const b = new Box();
b.sameAs(b); // => true
~~~













#### 参数属性

~~~typescript
class Params {
    constructor(
    	public readonly x: number,
        protected y: number,
        private z: number
	) {
    	// ...        
	}
}

const p = new Params(1, 2, 3);
p.x; // => 1
p.y; // Property 'y' is protected and only accessible within class 'Params' and its subclasses.
p.z; // Property 'z' is private and only accessible within class 'Params'.
~~~















#### 抽象

> ==***`TypeScript`中的类、方法和字段可能是抽象的`abstract`***==
>
> :grey_exclamation:==***<span style=color:red;>抽象方法或抽象字段是尚未提供实现的方法或抽象字段； 这些成员必须存在于抽象类中，抽象类不能直接实例化</span>***==
>
> :grey_exclamation:==***抽象类的作用是充当实现所有抽象成员的子类的基类； 当一个类没有任何抽象成员时，它被称为<span style=color:red;>具体的</span>***==

~~~typescript
abstract class Base {
    abstract getName(): string;
 
    printName() {
        console.log("Hello, " + this.getName());
    }
}

class Derived extends Base { // 必须重写基本的抽象方法与属性
    getName() {
        return "linke";
    }
}

const d = new Derived();
d.printName(); // => Hello, linke
~~~















#### 传播

> :grey_exclamation:==***传播对象的实例时会丢失方法***==

~~~typescript
class Cla {
    age = 19;
    fn() {}
}

let cla = new Cla();
let clone = { ...cla };
clone.age; // => 19
clone.fn(); // Property 'fn' does not exist on type '{ age: number; }'.
~~~

















### 交叉点类型

> ==***交集类型是使用`&`运算符定义的，通过扩展从其他类型构建的新类型称为<span style=color:red;>交集类型的构造</span>***==

~~~typescript
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

// 定义交集类型
type ColorfulCircle = Colorful & Circle;
let cc: ColorfulCircle = { color: 'skyblue', radius: 5 }; // => OK
~~~













#### 接口与交叉点

+ <span style=color:black;>**相同点**：==都可以实现对象类型的组合==</span>
+ <span style=color:black;>**不同点**：==两种方式实现类型组合时，对于同名属性之间，接口类型不会兼容，交叉点会联合==</span>

~~~typescript
// 接口
interface A {
    fn: (value: number) => void
}

interface B extends A { // Types of parameters 'value' and 'value' are incompatible. ...
    fn: (value: string) => void
}
~~~

~~~typescript
// 交叉点
interface A {
    fn: (value: number) => void
}

interface B {
    fn: (value: string) => void
}

const C: A & B = {
    fn(value: number | string) { ... }
}
~~~



















### 🚩泛型

> ==**<span style=color:red;>泛型：在定义函数/接口/类型时，不预先指定具体的类型，而是在使用的时候在指定类型限制的一种特性</span>**==













#### 泛型函数

>~~~typescript
>function fn<Type>(arg: Type): Type { return arg }
>~~~
>
>+ <span style=color:black;>**语法**:在函数名称的后面添加`<>`(尖括号)，尖括号中添加类型变量</span>
>+ <span style=color:black;>类型变量(如`Type`)是一种特殊类型的变量，处理类型而不是值</span>
>+ <span style=color:black;>该类型变量相当于一个类型容器，能够捕获用户提供的类型，因此可以将其作为函数参数和返回值的类型</span>
>+ <span style=color:black;>类型变量可以是任意合法的变量名称</span>

~~~typescript
function identity<Type>(arg: Type): Type {
    return arg;
}

identity<number>(1); // => 1
identity<number | string>('1'); // => '1'

// 在调用泛型函数时，可省略<类型>来简化泛型函数的调用，TypeScript 会根据实参自动判断类型变量的类型
identity(true); // function identity<true>(arg: true): true

// 可使用多个泛型
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

map(['1', '2', '3'], n => parseInt(n)); // => [ 1, 2, 3 ]
~~~

~~~typescript
function id<T>(arg: T): T {
    return arg
}

// 两种方式等同
let myId1: <T>(arg: T) => T = id;	// let myId1: <T>(arg: T) => T
let myId2: { <T>(arg: T): T } = id; // let myId2: <T>(arg: T) => T
~~~

















#### 泛型约束

> ==**可以使用`extends`进行泛型约束来收缩类型(缩窄类型取值范围)**==

~~~typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): number {
    return arg.length
}

loggingIdentity([1, 2, 3]);		// => 3
loggingIdentity({ length: 5 }); // => 5
loggingIdentity('a');			// => 1
~~~













##### 在泛型约束中使用类型参数

> ==**泛型的类型变量可以有多个，使用`,`分隔，并且类型变量之间还可以进行类型约束**==

~~~typescript
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a"); // => 1
getProperty(x, "m"); // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
~~~

















#### 在泛型中使用类类型

~~~typescript
class Params {
    id = 1
}

// function create<Type>(c: new () => Type ): Type { // 方式(1)
function create<Type>(c: { new (): Type }): Type { // 方式(2)
    return new c();
}

create(Params).id; // => 1
~~~















#### 泛型接口

> ==**接口也可以配合泛型来使用，在`interface`名称后面添加`<类型变量>`**==
>
> :grey_exclamation:==***<span style=color:red;>使用泛型接口时，需要显示指定具体的类型变量</span>***==

~~~typescript
interface Func<Type> {
    inc: (value: Type) => Type
}

let obj: Func<number> = {
    inc(value) {
        return value
    }
}
~~~















#### 泛型类

> ==**泛型类的形状与泛型接口类似，在`class`名称后面添加`<类型变量>`**==

~~~typescript
class GenericNumber<NumType> {
    defaultValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
    
    // 可提供构造函数初始化数据
    constructor(value?: NumType) {
        if (value) {
            this.defaultValue = value
        }
    s}
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.defaultValue = 0;
myGenericNumber.add = function(x, y) {
    return x + y;
}
myGenericNumber.add(myGenericNumber.defaultValue, 1); // => 1

// 初始化数据以简化<类型>书写，ts会类型推断
let myGenericNumber2 = new GenericNumber('a'); // OK
~~~

















#### 泛型工具类型

> [泛型工具类型](https://www.typescriptlang.org/docs/handbook/utility-types.html): 来促进常见的类型转换









##### Partial\<Type\>

> ==**构造一个类型，其中所有属性都设置为<span style=color:red;>可选</span>**==

~~~typescript
interface Props {
    id: number;
    name: string;
}

type PartialProps = Partial<Props>;
const props: PartialProps = { id: 1 }; // OK
~~~















##### Required\<Type\>

>==**构造一个类型，其中所有属性都设置为<span style=color:red;>必选</span>**==

~~~typescript
interface Props {
    id?: number;
    name?: string;
}

const props: Props = { id: 5 }; // OK
const props2: Required<Props> = { id: 5 }; // Property 'name' is missing in type '{ id: number; }' but required in type 'Required<Props>'.
~~~















##### Readonly\<Type\>

>==**构造一个类型，其中所有属性都设置为<span style=color:red;>只读</span>**==

~~~typescript
interface Props {
    title: string;
}
 
const props: Readonly<Props> = {
    title: "Title content",
};
 
props.title = "Hello"; // Cannot assign to 'title' because it is a read-only property.
~~~















##### Pick<Type, Keys>

>==**通过从中选择属性集来构造一个类型**==
>
>+ <span style=color:black;>`Type`: 指定哪个类型中构建</span>
>+ <span style=color:black;>`Keys`: 指定类型中的属性，一个或多个</span>

~~~typescript
interface Props {
    id: number;
    name: string;
    children: number[]
}

type PickProps = Pick<Props, 'id' | 'name'>;
const props: PickProps = { id: 1, name: 'linke' }; // OK
~~~















##### Omit<Type, Keys>

> ==**通过从`Type`中选取所有属性然后删除`Keys`来构造一个类型**==
>
> + <span style=color:black;>`Type`: 指定哪个类型中构建</span>
> + <span style=color:black;>`Keys`: 指定类型中的属性，一个或多个</span>

~~~typescript
interface Props {
    id: number;
    name: string;
    children: number[]
}

type OmitProps = Omit<Props, 'children'>;
const props: OmitProps = { id: 1, name: 'keke' }; // OK
~~~

















##### Record<Keys, Type>

> ==构造其属性键为`Keys`和属性值为`Type`的对象类型==
>
> + <span style=color:black;>`keys`: 对象中的属性</span>
> + <span style=color:black;>`Type`: 对象属性的类型</span>

~~~typescript
interface Info {
    name: string;
    age: number;
}

type user = 'dudu' | 'keke' | 'yiyi';
const infos: Record<user, Info> = {
    dudu: { name: 'dudu', age: 11 },
    keke: { name: 'keke', age: 10 },
    syiyi: { name: 'yiyi', age: 10 }
}
~~~















#### 🚧优秀调用函数的准则

1. ==***在可能的情况下，使用类型参数本身，而不是对其进行约束***==
2. ==***总是尽可能少地使用类型参数***==
3. ==***类型参数应出现两次***==

















### 索引签名

> ==**不知道类型属性的所有名称，但您知道值的形状，此时就可使用索引签名**==

~~~typescript
interface NumberDictionary {
    [index: string]: number; // index 表示一个占位符,可以换成任意合法名称
}

const obj: NumberDictionary = {
    'a': 1,
    'b': 2,
}

// 使用 readonly 创建只读索引
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
 
let myArray: ReadonlyStringArray = ['1', '2', '3'];
myArray[2];	// => '3'
myArray[3] = '4'; // Index signature in type 'ReadonlyStringArray' only permits reading.


// 索引签名也可以是属性类型的联合
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

let obj: NumberOrStringDictionary = {
    x: 1,
    length: 1,
    name: 'dudu'
}
~~~















### 索引访问类型

> ==***可以使用索引访问类型在另一种类型上查找特定属性***==

~~~typescript
type Person = { age: number; name: string; };
type Age = Person["age"];			// type Age = number

type I1 = Person["age" | "name"];	// type I1 = string | number
type I2 = Person[keyof Person];		// type I2 = string | number
type AgeOrName = "age" | "name";
type I3 = Person[AgeOrName];		// type I3 = string | number
type I4 = Person["alive"];			// Property 'alive' does not exist on type 'Person'.

// 获取数组元素的类型
const MyArray = [
    { name: "dudu", age: 10 },
    { name: "keke", age: 11 },
    { name: "yiyi", age: 10 },
];
 
type Person = typeof MyArray[number];		// type Person = { name: string; age: number; }
type Age = typeof MyArray[number]['age'];	// type Age = number
~~~















### 条件类型

> ==**[条件类型](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)采用的形式看起来有点像 `JavaScript` 中的条件表达式`condition ? trueExpression : falseExpression`**==
>
> ~~~typescript
>  SomeType extends OtherType ? TrueType : FalseType;
> ~~~

~~~typescript
interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string;	// type Example1 = number
type Example2 = RegExp extends Animal ? number : string;// type Example2 = string
~~~

~~~typescript
type NameOrId<T extends number | string> = T extends number ? number : string;
function createLabel<T extends number | string>(idOrName: T ): NameOrId<T> {
    throw ''
}

let a = createLabel(1); // let a: number
let b = createLabel('dudu'); // let b: string
~~~













#### 条件类型内进行推理

> ==***使用`infer`关键字可推断类型***==
>
> + <span style=color:black;>`infer`只能在条件类型的`extends`子句中使用</span>
> + <span style=color:black;>`infer`得到的类型只能在`true`语句中使用</span>

~~~typescript
type InferArray<T> = T extends (infer U)[] ? U : never;

type I0 = InferArray<[number, string]>; // string | number
type I1 = InferArray<string[]>;			// string
type I2 = InferArray<number[]>;			// number
~~~















#### 分布式条件类型

+ ==分布式==

  ~~~typescript
  type ToArray<T> = T extends any ? T[] : never
  
  type StrArrOrNumArr = ToArray<string | number>; // type StrArrOrNumArr = string[] | number[]
  
  let strs: StrArrOrNumArr = [1]; // [1]
  ~~~

+ ==非分布式==

  ~~~typescript
  type ToArrayNonDist<T> = [T] extends [any] ? T[] : never
  
  type StrArrOrNumArr = ToArrayNonDist<string | number>; // type StrArrOrNumArr = (string | number)[]
  
  let strs: StrArrOrNumArr = [1]; // [1]
  ~~~

  



















### 映射类型

> ==**基于旧类型创建新类型，映射类型基于索引签名的语法构建**==
>
> :grey_exclamation:***<span style=color:red;>映射类型只能在`type`类型别名中使用，不能在接口中使用</span>***

~~~typescript
type PropKeys = 'x' | 'y' | 'z';
type Type = { [Key in PropKeys]: number }; // type Type = { x: number; y: number; z: number; }
	
// 等同于以下代码
type Type = {
    x: number;
    y: number;
    z: number;
};
~~~















#### 映射修饰符

> :grey_exclamation:==***映射期间可以应用两个额外的修饰符: `readonly`,`?`，它们分别影响可变性和可选性***==
>
> :grey_exclamation:==***可以通过前缀`-`,`+`来删除或添加这些修饰符，如果不添加前缀，则假定`+`***==

~~~typescript
// readonly 修饰符
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};
type Account = {
    readonly id: string;
    readonly name: string;
};
type UnAccount = CreateMutable<Account>; // type UnAccount = { id: string; name: string; }

// ? 修饰符
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};
type User = Concrete<MaybeUser>; // type User = { id: string; name: string; age: number; }
~~~























## 💡类型兼容性

**两种类型系统：<span style=color:red;>*`TypeScript`采用的是结构化类型系统，类型检查关注的是值所具有的形状*</span>**

+ ***`Structural Type System`结构化类型系统***
+ ***`Nominal Type System`标明类型系统***













### Class

> ==***<span style=color:red;>因为`TypeScript`是结构化类型系统，只检查类型的结构是否相同，所以如下代码是通过的；</span><span style=color:black;>因为`Point`与`Point2D`的类型相同(都具有相同的属性，并属性类型也相同)</span>***==
>
> :grey_exclamation:==***<span style=color:red;>对于对象类型来说，y的成员至少与x相同，则x兼容y(成员多的可以赋值给少的),反之无法兼容</span>***==
>
> ==***但是，如果在 `Nominal Type System` 中是不可以的，无法兼容***==
>
> ❗==***<span style=color:red;>类中的私有成员和受保护成员会影响其兼容性：</span>***==
>
> + <span style=color:black;>如果目标类型包含私有成员，则源类型还必须包含源自同一类的私有成员</span>
> + <span style=color:black;>如果目标类型包含受保护成员，则源类型还必须包含源自同一类的受保护成员</span>

~~~typescript
class Point { x: number; y: number }
class Point2D { x: number; y: number }
class Point3D { x: number; y: number; z: number }

const p1: Point = new Point2D(); // => OK
const p2: Point = new Point3D(); // => OK
~~~

















### Interface

> ==***接口之间的兼容性，类似于`class`; 并且`class`与`interface`之间也可以互相兼容***==

~~~typescript
interface Point { x: number; y: number }
interface Point2D { x: number; y: number }
interface Point3D { x: number; y: number; z: number }
class Point4D { x: number; y: number; z: number; j: number }

let p1!: Point;
let p2!: Point2D;
let p3!: Point3D;

p2 = p1; // => OK
p1 = p2; // => OK
p1 = p3; // => OK
p3 = new Point4D(); // => OK
p3 = p1; // Property 'z' is missing in type 'Point' but required in type 'Point3D'.
~~~

















### Function

> ==***函数之间的兼容性，需要考虑：`参数个数，参数类型，返回值类型`***==
>
> 1. <span style=color:black;>***参数个数**: 参数多的兼容参数少的<i style=color:red;>(参数少的可以赋值给参数多的)</i>*</span>
>
>    - ~~~typescript
>      type F1 = (a: number) => void;
>      type F2 = (a: number, b: number) => void;
>                      
>      let fn1!: F1;
>      let fn2!: F2;
>                      
>      fn2 = fn1; // => OK
>      fn1 = fn2; // Type 'F2' is not assignable to type 'F1'.
>      ~~~
>
> 2. <span style=color:black;>***参数类型**：相同位置的参数类型要相同(原始类型)或兼容(对象类型)*</span>
>
>    - ~~~typescript
>      // 基础参数类型
>      type F1 = (a: number) => void;
>      type F2 = (a: number) => void;
>      type F3 = (a: string) => void;
>                      
>      let fn1!: F1;
>      let fn2!: F2;
>      let fn3!: F3;
>                      
>      fn2 = fn1; // => OK
>      fn1 = fn2; // => OK
>      fn1 = fn3; // Type 'F3' is not assignable to type 'F1'. Types of parameters 'a' and 'a' are incompatible. Type 'number' is not assignable to type 'string'.
>                      
>      // 对象参数类型
>      interface Point2D { x: number; y: number }
>      interface Point3D { x: number; y: number; z: number }
>                      
>      type F2 = (a: Point2D) => void;
>      type F3 = (a: Point3D) => void;
>                      
>      let fn2!: F2;
>      let fn3!: F3;
>                      
>      fn3 = fn2; // => OK
>      fn2 = fn3; // Type 'F3' is not assignable to type 'F2'. Types of parameters 'a' and 'a' are incompatible. Property 'z' is missing in type 'Point2D' but required in type 'Point3D'.
>      ~~~
>
> 3. <span style=color:black;>***返回值类型**：返回值类型要相同(原始类型)或兼容(对象类型)*</span>
>
>    - ~~~typescript
>      // 返回基础类型
>      type F1 = () => boolean;
>      type F2 = () => boolean;
>                                              
>      let fn1!: F1;
>      let fn2!: F2;
>                                              
>      fn1 = fn2; // => OK
>      fn2 = fn1; // => OK
>                                              
>      // 返回对象类型
>      type F1 = () => { x: number; y: number };
>      type F2 = () => { x: number; y: number, z: number };
>                                              
>      let fn1!: F1;
>      let fn2!: F2;
>                                              
>      fn1 = fn2; // => OK
>      fn2 = fn1; // Type 'F1' is not assignable to type 'F2'. Property 'z' is missing in type '{ x: number; y: number; }' but required in type '{ x: number; y: number; z: number; }'.
>      ~~~



















## 📄声明文件

> ==***<span style=color:red;>类型声明文件</span>：用于为已存在的JS库提供类型信息***==













### 📚文件类型

><span style=color:black;>***`TypeScript`中有两种文件类型:***</span>
>
>- ==`.ts`文件(代码实现)==
>  1. <span style=color:black;>即包含类型信息又可执行代码</span>
>  2. <span style=color:black;>可以被编译为`.js`文件执行</span>
>  3. <span style=color:black;>**用途**：编写程序代码</span>
>- ==`.d.ts`文件(类型声明)==
>  1. <span style=color:black;>只包含类型信息的类型声明文件</span>
>  2. <span style=color:black;>不会生成`.js`文件,仅用于提供类型信息</span>
>  3. <span style=color:black;>**用途**：为`JS`提供类型信息</span>













### 📗内置类型声明文件

> ==***<span style=color:red;>内置类型声明文件</span>：`TS`为`JS`运行时可用的所有标准化内置`API`都提供了声明文件***==
>
> + <span style=color:black;>`es5`对应的类型声明文件: `lib.es5.d.ts`</span>
> + <span style=color:black;>`dom`对应的类型声明文件: `lib.dom.d.ts`</span>
> + ◽◽◽















### 📕第三方库的类型声明文件

> ==***第三方库的类型声明文件有两种存在形式:***==
>
> 1. **<span style=color:black;>库自带类型声明文件</span>**
>
>    + <span style=color:black;>*包的根目录下的`index.d.ts`*</span>
>    + <span style=color:black;>*包的`package.json`文件中`typings`属性配置的文件即为类型声明文件*</span>
>
> 2. <span style=color:black;>**由`DefinitelyTyped`提供**</span>
>
>    + <span style=color:black;>*[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)是一个`github`仓库，用于提供高质量`TypeScript`类型声明*</span>
>
>    + ~~~cmd
>      npm install --save-dev @types/包名
>      ~~~
>
>    +   🔍*[类型搜索](https://www.typescriptlang.org/dt/search)*















### 📘自定义类型声明文件

+ <span style=color:black;>**项目共享类型**</span>

  1. <span style=color:black;>*创建`index.d.ts`文件*</span>=

  2. <span style=color:black;>*创建需要共享的类型，并使用`export`导出*</span>

     ~~~typescript
     // index.d.ts
     export type Props = { id: number; name: string; };
     ~~~

  3. <span style=color:black;>*在需要使用共享类型的`.ts`文件中，使用`import`导入*</span>

     ~~~typescript
     import { Props } from "./index"; // 导入时需要忽略 .d.ts 后缀
     
     const props: Props = {
         id: 1,
         name: 'linke'
     }
     ~~~

+ **为已有`JS`文件提供类型**

  + <span style=color:black;>*创建同名并以`.d.ts`后缀的文件*</span>
  
  + <span style=color:black;>*在文件中使用 `declare`关键字为已存在的变量声明类型，并使用`exprot`导出*</span>
  
    + ==对于`tpye`,`interface`等这些明确就是TS类型的，可省略`declare`关键字==
    + ==对于`let`,`count`,`function`等具有双重含义的，则需要明确使用`declare`指明类型==
  
    <span style=color:skyblue;>**.js**</span>
  
    ~~~javascript
    /* index.js */
    let count = 0;
    let position = {
        x: 0,
        y: 0
    }
    
    function add(x, y) {
        return x + y
    }
    
    const formatPoint = point => {
        console.log(point);
    }
    
    export { count, position, add, formatPoint }
    ~~~
  
    <span style=color:skyblue;>**.d.ts**</span>
  
    ~~~typescript
    /* index.d.ts */
    // 为 index.js 文件提供类型声明
    interface Point {
        x: number;
        y: number
    }
    
    declare let count: number
    declare let position: Point
    declare function add(x: number, y: number): number
    declare const formatPoint: (point: Point) => void
    
    // 需要使用export导出
    export { Point, count, position, add, formatPoint }
    ~~~
  
  - <span style=color:black;>*在`.ts`文件中使用`import`导入即可使用*</span>
  
    ~~~typescript
    import { count, add } from './index' // ts会自动加载与 .js 同名的 .d.ts 文件
    
    // 可显示导出类型(type可省略)
    // import type { Point } from './utils' // 方式(1)
    // import { type Point } from './utils' // 方式(2)
    
    add(count, 1); // => 1
    ~~~

















## 🔃导入导出

> ==***`TypeScript`提供了兼容性语法: 可混用`es`与`commonjs`的两种模块系统***==
>
> :grey_exclamation:<span style=color:red;>*需要配置`tsconfig.json`文件中的`esModuleInterop`为`true`*</span>
>
> 1. <span style=color:black;>安装 `@types/node`</span>
>
>    ~~~cmd
>    npm i --save-dev @types/node
>    ~~~
>
> 2. <span style=color:black;>不需要`package.json`文件中的配置 `"type": "module"`</span>
>
> 3. <span style=color:black;>需要在`tsconfig.json`文件中配置`"module": "commonjs"`</span>

~~~typescript
/* @filename: index.ts */

// es 导出
export type Props = { id: number; name: string; };

// commonjs 导出
module.exports = {
    ip: '127.0.0.1',
    port: 9000
}
// exports.port = 9000
~~~

~~~typescript
// es 导入
import { Props } from "./index";
const props: Props = {
    id: 1,
    name: 'linke'
}
props; // const props: Props

// commonjs 导入
const { ip, port } = require('./index')
ip;	  // const ip: any
port; // const port: any
~~~



















## 📑tsconfig.json

~~~json
{
    "compilerOptions": {
        "target": "es2016", // 编译后文件的代码版本
        "module": "commonjs", // 编译后文件的规范
        "rootDir": "./", // 源文件的目录位置
        "outDir": "./", // 编译生成文件的目录位置
		"strictPropertyInitialization": true, // 是否对Class声明中属性初始化的检查
        "esModuleInterop": true, // 是否允许混用模块系统(false只允许commonjs模块系统)
    }
}
~~~



















## ▫▫▫终

<center><b><i><u>- 我想成为你刻骨铭心之人 -</u></i></b></center>
