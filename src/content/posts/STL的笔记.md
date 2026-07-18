---
title: STL的笔记
published: 2026-07-11
description: STL的部分笔记
category: 算法竞赛
draft: false
image: ./images/HLP7K6_bgAAZ4NF_scale.avif
---

STL的笔记

Q.vector的二维，遍历，bool;

**关于vector容器**

```cpp
vector <int> arr;

arr.push_back(1);
arr.push_back(2);
arr.push_back(3);

arr.pop_back();
arr.pop_back();

//输出 1 

cout<< arr.size() <<endl;

//输出 1 ，长度为一

arr.clear();
//快速清空

cout<<arr.empty()<<endl;
//帮你看看arr是不是空的，空输出1（true），非空输出0（false）

arr.resize(5,3);
//重新调整容器长度为5，超出部分用3填充


```

**关于栈stack**

```cpp
stack <double> arr;

arr.push_back(1.0);
arr.push_back(2.2);
arr.push_back(3.5);

cout<<arr.top()<<endl;
//输出arr的顶层数字，类似于vector的.back

arr.pop_back();
```

**关于队列queue**

```cpp
queue<int> que;
que.push(1);
que.push(2);
que.push(3);
cout<<que.front()<<endl;
cout<<que.back()<<endl;
//输出1,3；
```

**关于优先队列（priority queue）**

.push .pop .top 

可以被修改的数有且仅有堆顶

```cpp
priority_queue<int> pque1;
priority_queue<int,vector<int>,greater<int> pque2;
//上面是大队列，把数输入进去以后会自动把大的数放在顶层
//下面是小队列，把数输入进去以后会自动把较小的数放在下层
```

**集合set**

set 集合中的元素是有顺序的，从小到大，一个元素仅可以在集合中出现一次

multiset 一个元素可以在集合中出现任意一次而且集合中的元素是从小到大的

unordered_set 一个元素仅可以在集合中出现一次且集合中的元素是没有顺序的

```cpp
set<int> st;
st.insert(1);
st.insert(2);
st.insert(2);
st.insert(0);
st.insert(2);
st.erase(2);

if(st.count(2))
{
    ;
}
//用于查找有几个2， count会判断然后给出1或者0;

unordered_set<int> seen;
vector<int> out;
for (int x : a) {
    if (seen.insert(x).second) { // 第一次出现
        out.push_back(x);
    }
}

unordered_set<int> s = {3, 1, 4, 1, 5};
if (s.count(42))          // 返回 0 或 1
    cout << "存在";

```

用find()查找；
 seen.insert(x)  返回一个 pair，其中：
 first  是一个迭代器，指向键为  x  的元素；
 second  是一个 bool，表示 是否真正插入了新元素：



**遍历**

用迭代器进行遍历

```cpp
for(set<int>::iterator it = st.begin();it != st.end();++st)
    cout<<it<<endl;
```

基于范围的循环

```cpp
for(auto &ele:st)
    cout<<ele<<endl;
```



**map**

一个键仅能出现一次，且键的顺序从小到大

| 容器名                    | 键重复 | 内部结构 | 顺序     | 复杂度    |
| ------------------------- | ------ | -------- | -------- | --------- |
| `map<K,V>`                | ❌      | 红黑树   | 按键升序 | O(log N)  |
| `unordered_map<K,V>`      | ❌      | 哈希表   | 无顺序   | 平均 O(1) |
| `multimap<K,V>`           | ✅      | 红黑树   | 按键升序 | O(log N)  |
| `unordered_multimap<K,V>` | ✅      | 哈希表   | 无顺序   | 平均 O(1) |

```cpp
unordered_map<int, int> um = {{1, 10}, {2, 20}};
auto it = um.find(1);        // it 类型：unordered_map<int,int>::iterator
if (it != um.end()) {        // 比较的是迭代器，不是 int
    cout << it->first;       // 1
    cout << it->second;      // 10
}

```

```cpp
map<int,int> mp;
//从整形映射到整形，第一个是它的键[]，第二个是它的值
mp[2]=1;
mp[3]=3;
mp[2]=2;

if(mp.find(2)!=mp.end())
{
    ;
}

for(map<int,int>::iterator it=mp.begin();it!=mp.end();++it)
{
    cout<<it->first<<''<<it->second<<endl;
}
//等效于for(auto &pr:mp){}
```



map = “下标可以是任意类型的数组” + “自动排序” + “一键一值”

1. 单词计数（string → int）

```cpp
map<string,int> cnt;
string s;
while (cin >> s) ++cnt[s];        // 单词出现次数
for (auto &[w,c] : cnt)           // 自动按字典序输出
    cout << w << ": " << c << '\n';
```

2. 把名字映射成分数（string → double）

```cpp
map<string,double> score;
score["Alice"] = 98.5;
score["Bob"]   = 87.0;
cout << score["Alice"];   // 98.5
```

map 就是万能下标数组 + 自动排序，凡是“把 A 对应到 B”的场景，先想 map 准没错。



**pair**

```cpp
pair<int,int>p1={1,2};

```



**算法；**

**swap**

swap(a,b);

用于交换a和b的位置



**sort**

```cpp
sort(arr.begin(),arr.end(),greater<int>());
```

**迭代器**

```cpp
int pos=lower_bound(arr.begin(),arr.end,8)-arr.begin();
```

最大值与最小值

```cpp
min({1,2,3,4,21,44});
max(1,3);
```

**unique()**

```cpp
vector<int> arr{1,2,3,4,2,3,1};
sort(arr.begin(),arr.end());
arr.erase(unique(arr.begin(),arr.end()),arr.end);
```

**gcd()/lcm()**

(C++14)/(G++)

```cpp
int x = gcd(8,14); //4
int y = lcm(8,12); //24
int z = __gcd(8,14); //4
```

