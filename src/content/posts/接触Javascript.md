---
title: 接触java
published: 2026-07-19
category: 前端开发
draft: false
image: ./images/85780533_p0.avif
---

## 函数语法

在 JavaScript 中，有两种主要声明函数的方式，其中之一是使用 function 关键字。

```javascript
function f(a, b) {
	const sum = a + b;
	return sum;
}
console.log(f(3, 4)); // 7
```

在这个示例中也可以返回 undefined ，它将隐式返回。

## 匿名函数

你可以选择在 function 关键字后面省略函数的名称。

```javascript
var f = function(a, b) {
	const sum = a + b;
	return sum;
}
console.log(f(3, 4)); // 7
```

### 立即调用的函数表达式 (IIFE)

你可以在 JavaScript 中创建一个函数并立即执行它。

```javascript
const result = (function(a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result); // 7
```

为什么要这样编写代码？**这样做可以把变量封装在新的作用域内**。如果这样做，另一个开发人员就可以立即了解到 sum 无法在函数体外部的任何地方使用。

## 函数内的函数

JavaScript 的一个强大特性是你可以直接在其他函数内创建函数，并且反复调用。

```javascript
function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7
```

在这个示例中，createFunction() 返回了一个新的函数。然后该函数就可以像普通函数一样使用。



## 函数提升

JavaScript 具有一个称为 提升（hoisting） 的功能，其中函数有时可以在初始化之前使用。只有在使用 function 语法声明函数时才能这样做。

```javascript
function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7
```

在这个示例中，函数在初始化之前被返回。虽然这是有效的语法，但有时会被认为是不好的写法，因为它可能会降低代码的可读性。

## 闭包

JavaScript 中一个重要的主题是闭包的概念。当创建函数时，它可以访问其周围声明的所有变量，也被称为词法环境。函数和其环境的组合称为闭包。这是该语言中一个强大且常用的特性。

```javascript
function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
```

在这个示例中，createAdder 传递第一个参数 a，而内部函数可以访问它。这样，createAdder 充当了新函数的工厂，每个返回的函数具有不同的行为。

## 箭头函数语法

另一种常见的声明函数的方式是使用箭头语法。实际上，在许多项目中，这都是首选的语法。

```javascript
const f = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7
```

在这个示例中，f 是函数的名称。(a, b) 是参数。你可以在函数体中编写任何逻辑，最后返回一个结果。你也可以选择返回 undefined ，在这种情况下 undefined 将隐式返回。

### 省略 return

如果你的代码可以编写在一行中，你可以省略 return 关键字。这可以让我们得到非常简短的代码。

```javascript
const f = (a, b) => a + b;
console.log(f(3, 4)); // 7
```

### 差异

箭头语法和函数语法之间有 3 个主要区别。

**更简洁的语法**

对于匿名函数和单行函数来说尤其如此。因此，在将短的匿名函数传递给其他函数时，通常优先使用这种方式。

**没有自动提升**

只有在声明后才能使用函数。这通常被认为有助于提升可读性。

**不能绑定到 this 、 super 和 arguments ，也不能用作构造函数**

这些都是复杂的主题，但基本结论应该是箭头函数在其特性集方面更简单。你可以在 此处 阅读更多有关这些差异的信息。

## 基本语法

```javascript
function f(...args) {
  const sum = args[0] + args[1];
  return sum;
}
console.log(f(3, 4)); // 7
```

在这个示例中，变量 args 是 [3, 4] 。



为什么使用剩余参数

这个语法的用途可能并不明显，因为你总是可以通过传递一个数组获得相同的结果。

剩余参数的主要用途是创建通用的工厂函数，接受任何函数作为输入，并返回带有特定修改的新版本函数。

另外，接受函数并/或返回函数的函数称为 高阶函数 ，它们在 JavaScript 中非常常见。



例如，你可以创建一个记录日志的函数工厂：

```javascript
function log(inputFunction) {
  return function(...args) {
     console.log("输入", args);
     const result = inputFunction(...args);
     console.log("输出", result);
     return result;
  }
}
const f = log((a, b) => a + b);
f(1, 2); // 输出：输入 [1, 2] 输出 3
```

## 输出"Hello World"

现在让我们看看如何应用这些不同的 JavaScript 函数编写方式来解决这个问题。

### 函数语法

```javascript
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};
```

```javascript
var createHelloWorld = function() {
    return function(): string {
        return "Hello World";
    }
};
```

### 箭头语法

```javascript
var createHelloWorld = function() {
    return () => "Hello World";
};
```

```javascript
var createHelloWorld = function() {
    return () => "Hello World";
};
```

箭头语法 + 剩余参数

```javascript
var createHelloWorld = function() {
    return (...args) => "Hello World";
};
```

```javascript
var createHelloWorld = function() {
    return (...args: any[]) => "Hello World";
};
```

太好了！你问到了JavaScript最核心也最容易混淆的部分。让我从最基础开始，用C++类比帮你理清JS的函数系统。

## 一、JS函数的三种基本形态
### 1. 函数声明（最像C++函数）
```javascript
// 这是最传统的写法，类似C++的函数定义
function add(a, b) {
    return a + b;
}

// 使用
console.log(add(3, 4)); // 7
```

**类比C++**：

```cpp
// C++中的对应
int add(int a, int b) {
    return a + b;
}
```

### 2. 函数表达式（赋值给变量）
```javascript
// 把函数当作值赋给变量
const add = function(a, b) {
    return a + b;
};

// 使用
console.log(add(3, 4)); // 7
```

**类比C++**：

```cpp
// C++中的函数指针或lambda赋值
auto add = [](int a, int b) {
    return a + b;
};
```

### 3. 箭头函数（ES6新特性）
```javascript
// 最简洁的写法
const add = (a, b) => {
    return a + b;
};

// 或者更简洁（如果只有一行返回）
const addSimple = (a, b) => a + b;

// 使用
console.log(add(3, 4)); // 7
console.log(addSimple(3, 4)); // 7
```

**类比C++**：

```cpp
// 类似C++的lambda，但更简洁
auto add = [](int a, int b) {
    return a + b;
};

// C++20的简化写法（类似箭头函数）
auto addSimple = [](int a, int b) { return a + b; };
```

## 二、关键区别：`this`关键字的行为
这是箭头函数最特殊的地方，也是你最需要理解的！

### 问题场景：在对象方法中使用普通函数
```javascript
const person = {
    name: "张三",
    age: 20,
    
    // 普通函数作为方法
    sayHello: function() {
        console.log(`我是${this.name}`); // this指向person对象
    },
    
    // 箭头函数作为方法
    sayHi: () => {
        console.log(`我是${this.name}`); // this指向哪里？不是person！
    }
};

person.sayHello(); // "我是张三" ✅
person.sayHi();    // "我是undefined" ❌
```

**为什么箭头函数的this不对？**

### 类比C++的`this`：
```cpp
class Person {
public:
    std::string name = "张三";
    
    void sayHello() {
        std::cout << "我是" << this->name << std::endl; // this指向当前对象
    }
};

Person p;
p.sayHello(); // 输出"我是张三"
```

### JS箭头函数的this行为：
```javascript
const person = {
    name: "张三",
    sayHi: () => {
        // 箭头函数没有自己的this，它会捕获定义时的this
        // 这里的this指向全局对象（浏览器中是window）
        console.log(this.name); // undefined，因为全局没有name属性
    }
};

// 更明显的例子
const globalName = "全局名字";

const obj = {
    name: "对象名字",
    getName: function() {
        console.log(this.name); // "对象名字" - this指向obj
    },
    getNameArrow: () => {
        console.log(this.name); // "全局名字" - this指向全局
    }
};

obj.getName(); // "对象名字"
obj.getNameArrow(); // "全局名字"
```

## 三、什么时候用箭头函数，什么时候不用
### ✅ 适合用箭头函数的场景：
1. **回调函数**（最常用）

```javascript
const numbers = [1, 2, 3, 4, 5];

// 普通函数写法
numbers.map(function(num) {
    return num * 2;
});

// 箭头函数写法（更简洁）
numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
```

2. **不需要this的场景**

```javascript
// 计算两个数的和
const add = (a, b) => a + b;

// 定时器
setTimeout(() => {
    console.log("2秒后执行");
}, 2000);
```

### ❌ 不适合用箭头函数的场景：
1. **对象的方法**

```javascript
const person = {
    name: "张三",
    
    // ❌ 错误：用箭头函数
    sayHi: () => {
        console.log(this.name); // this指向全局
    },
    
    // ✅ 正确：用普通函数
    sayHello: function() {
        console.log(this.name); // this指向person
    }
};
```

2. **需要动态this的场景**

```javascript
const button = document.getElementById('myButton');

// ❌ 错误：箭头函数的this不会指向button
button.addEventListener('click', () => {
    this.style.color = 'red'; // this不是button！
});

// ✅ 正确：普通函数
button.addEventListener('click', function() {
    this.style.color = 'red'; // this是button元素
});
```

3. **构造函数**

```javascript
// ❌ 箭头函数不能作为构造函数
const Person = (name) => {
    this.name = name; // 错误！
};

// ✅ 普通函数可以
function Person(name) {
    this.name = name;
}

const p = new Person("张三");
```

## 四、函数参数的灵活处理
JS函数的参数非常灵活，不像C++那么严格：

```javascript
// 1. 默认参数
function greet(name = "访客") {
    console.log(`你好，${name}！`);
}

greet(); // "你好，访客！"
greet("张三"); // "你好，张三！"

// 2. 剩余参数（类似C++的可变参数）
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 3. 解构参数
function printPerson({name, age}) {
    console.log(`${name}今年${age}岁`);
}

const person = {name: "李四", age: 25};
printPerson(person); // "李四今年25岁"
```

## 五、完整的对比示例
```javascript
// 场景：创建一个计数器

// 方法1：普通函数
function createCounter1() {
    let count = 0;
    return function() {
        return ++count;
    };
}

// 方法2：箭头函数
const createCounter2 = () => {
    let count = 0;
    return () => ++count; // 箭头函数返回箭头函数
};

// 使用
const counter1 = createCounter1();
const counter2 = createCounter2();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1
console.log(counter2()); // 2
```

## 六、给你的学习建议
1. **先掌握普通函数**：理解函数声明、函数表达式、this、闭包
2. **再学箭头函数**：重点理解它的简洁性和this的特殊行为
3. **实践项目**：用JS重写一些简单的C++算法题
4. **调试技巧**：多用console.log()观察变量和this的值

## 小练习
试试分析这段代码的输出：

```javascript
const obj = {
    value: 10,
    getValue: function() {
        return this.value;
    },
    getArrow: () => {
        return this.value;
    }
};

console.log(obj.getValue()); // ?
console.log(obj.getArrow()); // ?

const temp = obj.getValue;
console.log(temp()); // ?

const tempArrow = obj.getArrow;
console.log(tempArrow()); // ?
```

（答案：10、undefined、undefined、undefined - 因为箭头函数的this在定义时就确定了，指向全局）

你觉得这样的解释清晰吗？我们可以从某个具体的例子开始深入讨论，或者你想了解哪个特定的函数用法？


## 严格相等
```javascript
// 宽松相等（==） - 会进行类型转换
console.log(5 == "5");  // true

// 严格相等（===） - 不进行类型转换
console.log(5 === "5"); // false

```

# DOM & Canvas & Vue ref 学习笔记
## 一、DOM 基础概念
1. **全称**：Document Object Model 文档对象模型，W3C浏览器标准，**原生JS、浏览器自带，和Vue无关**。
2. **本质**：浏览器将HTML文本字符串，解析为**内存中树形排列的JS对象集合**，整棵树叫DOM树，单个标签对应的对象叫DOM元素。
    - HTML源码：只是图纸文字，无法用JS操作、绘图；
    - DOM对象：真实内存实体，自带属性与内置方法，JS只能操作DOM修改页面。
3. 区分：
    - `<div>、<canvas>、img、button`：渲染后生成真实DOM对象，可用ref获取；
    - Vue模板内`<template>`标签：仅语法容器，编译后销毁，**不生成DOM**。

## 二、Canvas 知识点
1. `<canvas>`是**HTML5原生标签（浏览器内置）**，不属于Vue/JS。作用：在**页面预留一块空白画板区域**。
2. 三层结构：
    1. 源码`<canvas>`：图纸文本；
    2. canvas DOM对象：内存里真实画板载体，存放在ref.value；
    3. ctx = canvasDOM.getContext('2d')：绘图上下文（画笔），唯一用来画线、填色、绘图的对象。
3. 和div区别：
    - div：布局容器，可以嵌套任意HTML子元素；
    - canvas：整块位图画布，内部不能嵌套标签，所有图形全靠JS代码动态绘制。

## 三、Vue3 ref 获取DOM原理
1. `const liveCanvas = ref(null)`：创建一个**通用响应式盒子**，初始值null；ref盒子不限类型，可存数字、对象、DOM元素。
2. 模板` <canvas ref="liveCanvas">`：Vue绑定标记，DOM渲染生成后，**自动把canvas DOM对象装入 liveCanvas.value**。
3. `const canvas = liveCanvas.value`：取出盒子内部的DOM实体，后续简写调用绘图API。

## 四、代码执行顺序 & onMounted
1. 执行顺序：**script顶层代码优先执行 → 随后Vue解析template生成DOM → DOM全部挂载完毕 → 执行onMounted内部代码**。
2. 顶层直接取值：`liveCanvas.value`为null（DOM还未创建），调用`.getContext()`直接报错。
3. onMounted：组件DOM全部渲染挂载完成才执行的生命周期钩子，**保证盒子里已有真实DOM，在此处绘图不会报错**。
4. `async onMounted`使用场景：绘图前需要异步加载图片、接口资源，用await等待资源就绪再绘制；单纯绘制图形不需要async。

## 五、整体流程闭环
1. JS先执行：`const liveCanvas = ref(null)` 创建空盒子；
2. Vue编译模板，生成canvas DOM，自动塞入盒子；
3. DOM全部挂载完成触发onMounted；
4. 从ref.value取出canvas DOM，获取ctx画笔，在画布绘图。
