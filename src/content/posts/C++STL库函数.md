---
title: C++ STL库函数
published: 2026-07-11
description: C++ STL库函数 注意参数为`char`型数组，如果需要将string类型转换为int类型，可以使用`stoi`函数（参考下文），或者将`string`类型转换为`const char *`类型。
category: 算法竞赛
draft: false
---

### STL函数

## accumulate



```none
accumulate(beg, end, init)
```

None

**复杂度：** O(N)O(N)

> 作用：对一个序列的元素求和

`init`为对序列元素求和的**初始值**

返回值类型：与`init` 相同

- **基础累加求和：**



```cpp
int a[]={1, 3, 5, 9, 10};

//对[0,2]区间求和，初始值为0，结果为0 + 1 + 3 + 5 = 9
int res1 = accumulate(a, a + 3, 0);

//对[0,3]区间求和，初始值为5，结果为5 + 1 + 3 + 5 + 9 = 23
int res2 = accumulate(a, a + 4, 5);
```

Cpp

- **自定义二元对象求和：**

使用lambda表达式



```cpp
typedef long long ll;
struct node {
    ll num;
} st[10];

for(int i = 1; i <= n; i++)
    st[i].num = i + 10000000000;
//返回值类型与init一致，同时注意参数类型（a）也要一样
//初始值为1，累加1+10000000001+10000000002+10000000003=30000000007
ll res = accumulate(st + 1, st + 4, 1ll, [](ll a,node b) {
    return a + b.num;
});
```

Cpp

## atoi



```none
atoi(const char *)
```

None

> 将字符串转换为`int`类型

注意参数为`char`型数组，如果需要将string类型转换为int类型，可以使用`stoi`函数（参考下文），或者将`string`类型转换为`const char *`类型。

关于输出数字的范围：
`atoi`**不做**范围检查，如果超出上界，输出上界，超出下界，输出下界。
`stoi`**会做**范围检查，默认必须在`int`范围内，如果超出范围，会出现RE（Runtime Error）错误。



```cpp
string s = "1234";
int a = atoi(s.c_str());
cout << a << "\n"; // 1234
```

Cpp

或者



```cpp
char s[] = "1234";
int a = atoi(s);
cout << a << "\n";
```

Cpp

## fill



```none
fill(beg, end, num)
```

None

**复杂度：** O(N)O(N)

> 对一个序列进行初始化赋值



```cpp
//对a数组的所有元素赋1
int a[5];
fill(a, a + 5, 1);
for(int i = 0; i < 5; i++)
    cout << a[i] << " ";
//1 1 1 1 1
```

Cpp

注意区分memset：

`memset()`是按**字节**进行赋值，对于初始化赋`0`或`-1`有比较好的效果.

如果赋某个特定的数会**出错**，赋值特定的数建议使用`fill()`

## is_sorted



```none
is_sorted(beg, end)
```

None

**复杂度：** O(N)O(N)

> 判断序列是否有序（升序），返回`bool`值



```cpp
//如果序列有序，输出YES
if(is_sorted(a, a + n))
    cout << "YES\n";
```

Cpp

## iota



```none
iota(beg, end, start)
```

None

> 让序列递增赋值



```cpp
vector<int> a(10);
iota(a.begin(), a.end(), 0);
for(auto i : a)
	cout << i << " ";
// 0 1 2 3 4 5 6 7 8 9
```

Cpp

## lower_bound + upper_bound

**复杂度：** O(logN)O(logN)

> 作用：二分查找



```cpp
//在a数组中查找第一个大于等于x的元素，返回该元素的地址
lower_bound(a, a + n, x);
//在a数组中查找第一个大于x的元素，返回该元素的地址
upper_bound(a, a + n, x);

//如果未找到，返回尾地址的下一个位置的地址
```

Cpp

## max_element+min_element

**复杂度：** O(N)O(N)

> 找最大最小值



```cpp
//函数都是返回地址，需要加*取值
int mx = *max_element(a, a + n);
int mn = *min_element(a, a + n);
```

Cpp

## max+min

**复杂度：** O(1)O(1)

> 找多个元素的最大值和最小值



```cpp
//找a，b的最大值和最小值
mx = max(a, b);
mn = min(a, b);
```

Cpp



```cpp
//找到a,b,c,d的最大值和最小值
mx = max({a, b, c, d});
mn = min({a, b, c, d});
```

Cpp

## minmax



```none
minmax(a, b)
```

None

**复杂度：** O(1)O(1)

> 返回一个`pair`类型，第一个元素是`min(a, b)`， 第二个元素是`max(a, b)`



```cpp
pair<int, int> t = minmax(4, 2);
// t.first = 2, t.second = 4
```

Cpp

## minmax_element



```none
minmax_element(beg, end)
```

None

**复杂度：** O(N)O(N)

> 返回序列中的最小和最大值组成pair的对应的地址，返回类型为`pair<vector<int>::iterator, vector<int>::iterator>`



```cpp
int n = 10;
vector<int> a(n);
iota(a.begin(), a.end(), 1);
auto t = minmax_element(a.begin(), a.end()); // 返回的是最小值和最大值对应的地址
// *t.first = 1, *t.second = 10 输出对应最小最大值时需要使用指针
```

Cpp

## nth_element



```none
nth_element(beg, nth, end)
```

None

**复杂度：** 平均O(N)O(N)

> 寻找第序列第n小的值

`nth`为一个迭代器，指向序列中的一个元素。第n小的值恰好在`nth`位置上。

执行`nth_element()`之后，序列中的元素会围绕nth进行划分：**nth之前的元素都小于等于它，而之后的元素都大于等于它**

**实例：求序列中的第3小的元素**



```cpp
nth_element(a, a + 2, a + n);
cout << a[2] << '\n';
```

Cpp

## next_permutation



```none
next_permutation(beg, end)
```

None

**复杂度：** O(N)O(N)

> 求序列的下一个排列，下一个排列是字典序大一号的排列

返回`true`或`false`

- `next_permutation(beg, end)`

  如果是最后一个排列，返回`false`,否则求出下一个序列后，返回`true`



```cpp
//对a序列进行重排
next_permutation(a, a + n);
```

Cpp

**应用：求所有的排列**

输出`a`的所有排列



```cpp
// 数组a不一定是最小字典序序列，一定注意将它排序
sort(a, a + n);
do {
 	for(int i = 0; i < n; i++)
        printf("%d ", a[i]);
} while(next_permutation(a, a + n));
```

Cpp

- `prev_permutation(beg, end)`

> 求出前一个排列，如果序列为最小的排列，将其重排为最大的排列，返回false

## partial_sort



```none
partial_sort(beg, mid, end)
```

None

**复杂度：** 大概O(NlogM)O(NlogM) `M`为距离

> 部分排序,排序mid-beg个元素，mid为要排序区间元素的尾后的一个位置
>
> 从beg到mid**前**的元素都排好序

对a数组前5个元素排序按从小到大排序



```cpp
int a[] = {1,2,5,4,7,9,8,10,6,3};
partial_sort(a, a + 5, a + 10);
for(int i = 0; i < 10; i++) 
    cout << a[i] << ' ';
//1 2 3 4 5 9 8 10 7 6
//前五个元素都有序
```

Cpp

也可以添加自定义排序规则：

```
partial_sort(beg,mid,end,cmp)
```

对a的前五个元素都是降序排列



```cpp
int a[] = {1,2,5,4,7,9,8,10,6,3};
partial_sort(a, a + 5, a + 10, greater<int>());
for(int i = 0; i < 10; i++) 
    cout << a[i] << ' ';
//10 9 8 7 6 1 2 4 5 3
//前五个元素降序有序
```

Cpp

## random_shuffle

**复杂度：** O(N)O(N)

> 1. 随机打乱序列的顺序
> 2. `random_shuffle` 在 `C++14` 中被弃用，在 `C++17` 中被废除，C++11之后应尽量使用`shuffle`来代替。



```cpp
vector<int> b(n);
iota(b.begin(), b.end(), 1);// 序列b递增赋值 1, 2, 3, 4,...
// 对a数组随机重排
random_shuffle(a, a + n);
// C++11之后尽量使用shuffle
shuffle(b.begin(), b.end());
```

Cpp

## reverse



```none
reverse(beg,end)
```

None

**复杂度：** O(N)O(N)

> 对序列进行翻转



```cpp
string s = "abcde";
reverse(s.begin(), s.end());//对s进行翻转
cout << s << '\n';//edcba

//对a数组进行翻转
int a[] = {1, 2, 3, 4};
reverse(a, a + 4);
cout << a[0] << a[1] << a[2] << a[3];//4321
```

Cpp

## set_union, set_intersection,set_difference

复杂度： O(N+M)O(N+M)

> 求两个集合的并集，交集，差集。手动实现双指针就可以搞定，嫌麻烦可以使用该函数。

注意：两个集合必须为有序集合，所以下面演示代码使用了排序。vector容器可以替换成set容器，因为set自动会对元素进行排序。

函数的参数有五个，前两个为第一个容器的首尾迭代器，第三四个为第二个容器的首尾迭代器，最后一个为插入位置，即将结果插入到哪个地址之后。



```cpp
vector<int> a = {4, 5, 2, 1, 8}, b = {5, 3, 8, 9, 2};
sort(a.begin(), a.end()); // 1 2 4 5 8
sort(b.begin(), b.end()); // 2 3 5 8 9
vector<int> c, d, e;
// a并b：1 2 3 4 5 8 9
set_union(a.begin(), a.end(), b.begin(), b.end(), inserter(c, c.begin()));
// a交b：2 5 8
set_intersection(a.begin(), a.end(), b.begin(), b.end(), inserter(d, d.begin()));
// a差b： 1 4
set_difference(a.begin(), a.end(), b.begin(), b.end(), inserter(e, e.begin()));
```

Cpp

## sort

**复杂度：** O(NlogN)O(NlogN)

> 作用：对一个序列进行排序



```cpp
//原型：
sort(beg, end);
sort(beg, end, cmp);
```

Cpp

几种排序的常见操作：

- 操作一：对数组正常升序排序



```cpp
int a[N]; // 普通数组定义
// 对 a 数组的[1, n]位置进行从小到大排序
sort(a + 1, a + 1 + n);

vector<int> b(n + 1); // vector数组定义
sort(b.begin() + 1, b.end());
```

Cpp

- 操作二：使用第三个参数，进行降序排序



```cpp
//对a数组的[0, n-1]位置从大到小排序
sort(a, a + n, greater<int>());
//对a数组的[0, n-1]位置从小到大排序
sort(a, a + n, less<int>());

vector<int> b(n + 1);
sort(b.begin() + 1, b.end()); // 升序
sort(b.begin() + 1, b.end(), greater<int>()); // 降序
```

Cpp

- 操作三：另外一种降序排序方法，针对 `vector`



```cpp
vector<int> a(n);
sort(a.rbegin(), a.rend()); // 使用反向迭代器进行降序排序
```

Cpp

- 操作四：自定义排序规则



```cpp
// 1. 使用函数自定义排序，定义比较函数
bool cmp(node a, node b) {
    //按结构体里面的x值降序排列
    return a.x > b.x;
}
sort(node, node + n, cmp); // 只能接受 以函数为形式的自定义排序规则，无法接受以结构体为形式的自定义排序规则

// 2. 或者使用匿名函数自定义排序规则
sort(node, node + n, [](node a, node b) {
    return a.x > b.x;
});
```

Cpp

## stable_sort

**复杂度：** O(NlogN)O(NlogN)

> 功能和 `sort()` 基本一样
>
> 区别在于`stable_sort()`能够保证相等元素的相对位置，排序时不会改变相等元素的相对位置

使用用法和`sort()`一样，见上

## stoi



```none
stoi(const string*)
```

None

> 将对应string类型字符串转换为数字（`int` 型），记忆：`s -> t 分别对应两个数据类型的某个字母`

注意参数为`string`字符串类型。

如果要转换为其他类型的数字可使用 `stoll(转换为long long)` ， `stoull(转换为unsigned long long)` 等函数。

关于输出数字的范围：

- `stoi`**会做**范围检查，默认必须在`int`范围内，如果超出范围，会出现RE（Runtime Error）错误。
- `atoi`**不做**范围检查，如果超出上界，输出上界，超出下界，输出下界。



```cpp
string s = "1234";
int a = stoi(s);
cout << a << "\n"; // 1234
```

Cpp

## transform

**复杂度：** O(N)O(N)

> 作用：使用给定操作，将结果写到dest中



```cpp
//原型：
transform(beg, end, dest, unaryOp);
```

Cpp

一般不怎么使用，徒增记忆负担，不如手动实现。



```cpp
//将序列开始地址beg到结束地址end大小写转换，把结果存到起始地址为dest的序列中
transform(beg, end, dest, ::tolower);
transform(beg, end, dest, ::toupper);
```

Cpp

## to_string

> 将数字转化为字符串，支持小数（double）



```cpp
int a = 12345678;
cout << to_string(a) << '\n';
```

Cpp

## unique



```none
unique(beg, end)
```

None

**复杂度：** O(N)O(N)

> 消除重复元素，返回消除完重复元素的下一个位置的地址
>
> 如：`a[] = {1, 3, 2, 3, 6}`;
>
> `unique` 之后 `a` 数组为`{1, 2, 3, 6, 3}`前面为无重复元素的数组，后面则是重复元素移到后面，返回`a[4]`位置的地址（不重复元素的尾后地址）

消除重复元素一般需要原序列是**有序序列**

**应用：离散化**

- 方法一：利用数组离散化



```cpp
for(int i = 0; i < n; i++) {
    cin >> a[i];
    b[i] = a[i];//将a数组复制到b数组
}
// 排序后 b：{1, 2, 3, 3, 6}
sort(b, b + n);//对b数组排序
// 消除重复元素b：{1, 2, 3, 6, 3} 返回的地址为最后一个元素3的地址 
int len = unique(b, b + n) - b;//消除 b 的重复元素，并获取长度
for(int i = 0; i < n; i++) {
    //因为b有序，查找到的下标就是对应的 相对大小（离散化后的值）
    int pos = lower_bound(b, b + len, a[i]) - b;//在b数组中二分查找第一个大于等于a[i]的下标
    a[i] = pos; // 离散化赋值
}
```

Cpp

- 方法二：利用 `vector` 进行离散化



```cpp
vector<int> a(n);
for (int i = 0; i < n; ++i) {
    cin >> a[i];
}
vector<int> b = a;
sort(b.begin(), b.end());
b.erase(unique(b.begin(), b.end()), b.end());
for (int i = 0; i < n; ++i) {
	a[i] = lower_bound(b.begin(), b.end(), a[i]) - b.begin() + 1; // 离散后的数据从1开始   
}
```

Cpp

## __gcd



```none
__gcd(a, b)
```

None

> 求a和b的最大公约数

```
__gcd(12,15) = 3
__gcd(21,0) = 21
```

## __lg



```none
__lg(a)
```

None

> 1. 求一个数二进制下最高位位于第几位（从**第0位**开始）（或二进制数下有几位）
> 2. `__lg(x)`相当于返回⌊log2x⌋⌊log2x⌋
> 3. 复杂度O(1)O(1)

```
__lg(8) = 3
__lg(15) = 3
```

## `__builtin_` 内置位运算函数

> 需要注意：内置函数有相应的`unsigned lnt`和`unsigned long long`版本，`unsigned long long`只需要在函数名后面加上`ll`就可以了，比如`__builtin_clzll(x)` ，默认是32位`unsigned int`
>
> 很多题目和 `long long` 数据类型有关，如有需要注意添加 `ll`

- `__builtin_ffs`



```none
__builtin_ffs(x)
```

None

> 二进制中对应最后一位`1`的位数，比如`4`会返回`3`（100）

- `__builtin_popcount`



```none
__builtin_popcount(x)
```

None

> `x`中`1`的个数

- `__builtin_ctz`



```none
__builtin_ctz(x)
```

None

> `x`末尾`0`的个数（`count tail zero`）

- `__builtin_clz`



```none
__builtin_clz(x)
```

None

> `x`前导`0`的个数（`count leading zero`）



```cpp
cout << __builtin_clz(32); // 26
//因为共有6位,默认数据范围为32位，32 - 6 = 26
```

Cpp

- `__builtin_parity`



```none
__builtin_parity(x)
```

None

> ```
> x`中1的个数的奇偶性， 奇数输出`1`，偶数输出`0
> ```

## C++20 ranges

ranges主要用来简化迭代器操作，可以少写很多迭代器操作相关的代码。
ranges集成了很多STL函数



```cpp
ranges::sort(a); // sort(a.begin(), a.end());
ranges::sort(a, greater<int>()); // sort(a.begin(), a.end(), greater<int>());
int mx = *ranges::max_element(a);
int mn = *ranges::min_element(a);
```



转载自: 行码棋

链接: https://wyqz.top/p/870124582.html#toc-heading-84



reverse(一行翻转字符串)

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        reverse(s.begin(),s.end());
    }
};
```

## 力扣

###  实现库函数 - strstr()

#### 使用

```cpp
#include <stdio.h>
#include <string.h>
 
 
int main()
{
   const char haystack[20] = "RUNOOB";
   const char needle[10] = "NOOB";
   char *ret;
 
   ret = strstr(haystack, needle);
 
   printf("子字符串是： %s\n", ret);
   
   return(0);
}
```

```cpp
子字符串是： NOOB
```

####  使用next数组

```cpp
class Solution {
public:
    void getNext(int* next, const string& s) {
        int j = -1;
        next[0] = j;
        for(int i = 1; i < s.size(); i++) { // 注意i从1开始
            while (j >= 0 && s[i] != s[j + 1]) { // 前后缀不相同了
                j = next[j]; // 向前回退
            }
            if (s[i] == s[j + 1]) { // 找到相同的前后缀
                j++;
            }
            next[i] = j; // 将j（前缀的长度）赋给next[i]
        }
    }
    int strStr(string haystack, string needle) {
        if (needle.size() == 0) {
            return 0;
        }
		vector<int> next(needle.size());
		getNext(&next[0], needle);
        int j = -1; // // 因为next数组里记录的起始位置为-1
        for (int i = 0; i < haystack.size(); i++) { // 注意i就从0开始
            while(j >= 0 && haystack[i] != needle[j + 1]) { // 不匹配
                j = next[j]; // j 寻找之前匹配的位置
            }
            if (haystack[i] == needle[j + 1]) { // 匹配，j和i同时向后移动
                j++; // i的增加在for循环里
            }
            if (j == (needle.size() - 1) ) { // 文本串s里出现了模式串t
                return (i - needle.size() + 1);
            }
        }
        return -1;
    }
};
```



## 字符串与整数之间的相互转化

### stoi() 函数

功能：将字符串 str 转成 int 整数
参数：
str：字符串
pos：存储将字符串 str 转成 int 整数，处理了 str 中字符的个数的地址，默认为 NULL
base：进制，10：十进制，8：八进制，16：十六进制，0：则自动检测数值进制，str 是 0 开头为八进制，str 是 0x 或 0X 开头是十六进制，默认为十进制

```cpp
#include <iostream>
#include <string>
using namespace std;
 
int main(int argc, char *argv[])
{
    int a;
    size_t pos = 0;
    string str;
 
    str = "-1235";
    a = stoi(str);
    cout << "a = " << a << endl; //a = -1235
 
    str = "1235";
    a = stoi(str);
    cout << "a = " << a << endl; //a = 1235
 
    str = "  -12  35"; 
    a = stoi(str, &pos); //会舍弃空白符
    cout << "a = " << a << endl; //a = -12
    cout << "pos = " << pos << endl; //pos = 5
 
    str = "  -12ab35";
    a = stoi(str, &pos);
    cout << "a = " << a << endl; //a = -12
    cout << "pos = " << pos << endl; //pos = 5
 
    str = "0123";
    a = stoi(str);
    cout << "a = " << a << endl; //a = 123
 
    str = "0x123";
    a = stoi(str);
    cout << "a = " << a << endl; //a = 0
 
    return 0;
}
```



### stol() 函数

功能：将字符串str转成 long 整数
参数：
str：字符串
pos：存储将字符串str转成 long 整数，处理了 str 中字符的个数的地址，默认为 NULL
base：进制，10：十进制，8：八进制，16：十六进制，0：则自动检测数值进制，str 是 0 开头为八进制，str 是 0x 或 0X 开头是十六进制，默认为十进制

### stoll() 函数

功能：将字符串str转成 long long 整数
参数：
str：字符串
pos：存储将字符串 str 转成 long long 整数，处理了 str 中字符的个数的地址，默认为 NULL
base：进制，10：十进制，8：八进制，16：十六进制，0：则自动检测数值进制，str 是 0 开头为八进制，str 是 0x 或 0X 开头是十六进制，默认为十进制

## 返回最大最小值的下标

###  min_element

```cpp
    int minPos = min_element(a.begin(), a.end()) - a.begin();
    int maxPos = max_element(a.begin(), a.end()) - a.begin();
```

```cpp
vector<int> v = {8, 2, 5, 1, 4};
auto it = min_element(v.begin(), v.end());
```



### 返回的值

| 表达式           | 类型                    |          值           |
| ---------------- | ----------------------- | :-------------------: |
| `it`             | `vector<int>::iterator` | 指向元素 `1` 的迭代器 |
| `*it`            | `int`                   |     `1`（最小值）     |
| `it - v.begin()` | `size_t`                |   `3`（最小值下标）   |



## C++按位与、或、异或运算

**⼀、[按位与](https://zhida.zhihu.com/search?content_id=208149889&content_type=Article&match_order=1&q=按位与&zhida_source=entity)（&）**

1、概念：参加运算的两个对象，按⼆进制位进⾏“与”运算，负数按补码形式参加按位与运算。

2、运算规则：0&0=0； 0&1=0；1&0=0；1&1=1；即：两位同时为“1”，结果才为“1”，否则为0【有0则0】

```cpp
 例如：3&5=1，即0000 0011 & 0000 0101 = 0000 0001
```

3、应用：

（1）清零。如果想将⼀个单元清零，即使其全部⼆进制位为0，只要与⼀个各位都为零的数值相与，结果为零。 （2）取⼀个数中指定位。找⼀个数，对应X要取的位，该数的对应位为1，其余位为零，此数与X进⾏“与运算”可以得到X中的指 定位。

```cpp
例：设X=10101110，取X的低4位，⽤ X & 0000 1111 = 0000 1110 即可得到；还可⽤来取X的2、4、6位。
```

（3）判断奇偶。根据未位是0还是1来决定，为0就是偶数，为1就是奇数。因此可以用if (a & 1 == 0)代替if (a % 2 == 0)来判断a是不是偶数。

以下程序将输出0到100之间的所有奇数。

```cpp
for(int i=0;i<100;i++){
  if(i&1){
    std::cout<<i;
  }
}
```

**⼆、[按位或](https://zhida.zhihu.com/search?content_id=208149889&content_type=Article&match_order=1&q=按位或&zhida_source=entity)（｜）**

1、概念：参加运算的两个对象按⼆进制位进⾏“或”运算，负数按补码形式参加按位与运算。

2、运算规则：0|0=0；0|1=1；1|0=1；1|1=1；即 ：参加运算的两个对象只要有⼀个为1，其值为1【有1则1】

```cpp
 例如：3|5=7，即 0000 0011 | 0000 0101 = 0000 0111 
```

3、“应用：

（1）常⽤来对⼀个数据的某些位置1。找到⼀个数，对应X要置1的位，该数的对应位为1，其余位为零。此数与X相或可使X中 的某些位置1。

```cpp
 例：将X=10100000的低4位置1 ，⽤ X | 0000 1111 = 1010 1111即可得到。 
```

**三、[异或运算](https://zhida.zhihu.com/search?content_id=208149889&content_type=Article&match_order=1&q=异或运算&zhida_source=entity)（^）**

1、概念：参加运算的两个数据，按⼆进制位进⾏“异或”运算

2、运算规则：0^0=0；0^1=1；1^0=1；1^1=0；即：参加运算的两个对象，如果两个相应位为“异”（值不同），则该位结果为1，否则为 0【同0异1】

```cpp
例如：3^5=6，即0000 0011^0000 0101 = 0000 0110
```

3、异或运算满足[交换律](https://zhida.zhihu.com/search?content_id=208149889&content_type=Article&match_order=1&q=交换律&zhida_source=entity)和[结合律](https://zhida.zhihu.com/search?content_id=208149889&content_type=Article&match_order=1&q=结合律&zhida_source=entity)

4、应用：

（1）使特定位翻转 找⼀个数，对应X要翻转的各位，该数的对应位为1，其余位为零，此数与X对应位异或即可。 （2）与0相异或，保留原值 ，X ^ 0000 0000 = 1010 1110。

```cpp
例：X=10101110，使X低4位翻转，⽤X ^ 0000 1111 = 1010 0001即可得到。 
```

