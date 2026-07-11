---
title:  Python的学习笔记
published: 2026-07-11
description: Python的学习笔记
category: 语言学习
draft: false
---



#  Python的学习笔记

## 基础语法部分

### 注释

```py
# aslknvjdskvl
'''dsklnhvijdwbhiofchbfeiojdkl'''
```

### a

```py
a=10
a=a-1
print(a)
```

### type

```py
print(type(a))
```

### math

```py
a=4
print(a**2) #16
print(math.sqrt(a**2)) #4.0
```

###  str

```py
a=str(98.56)
```

###  一些匪夷所思的操作

```py
a=9/4
b=9//4
c="'weary'"
d="ty"
e=c+d
print(f"ghfsfdfg{a},sdf")
```

###  input

```py
a=input()
```

### if

```py
if age>=0:
    print(" ")
elif:
    
else:
    
print(" ")   
```

### while

```py
i=0
while i<100:
    print(" ")
    i += 1

```

###  for(遍历)

```py
name="dfgjkvhcggjkhljmn"
cout=0
for x in name:
    if x=='a':
        cout+=1

print(" ")
```

###  range

```py
range(9)
#1-9
range(0,10)
#1-9
range（5,10,2）
#5 7 9

for x in range(10):
    print(x)
    
```

### 函数

```py
def saidhi():
    print(" ")
    
def add(x,y):
    result =a+b
    return result

# return None

```

### global

```py
def test():
    global num #设置为全局变量
    num=500
    print(" ")
```

### 列表

```py
mylist =["jbhvcx","234567","true"]
print(mylist)
mylist.remove("234567")
sorted(mylist)
max_list=max(mylist)
print(mylist)
mylist = ["32", "234567", "324"]
print(mylist)                  # ['32', '234567', '324']

# 方法1：临时转 int 排序，结果仍保留字符串
sorted_list = sorted(mylist, key=int)
print(sorted_list)             # ['32', '324', '234567']

# 方法2：直接转成 int 列表再排
int_list = sorted(map(int, mylist))
print(int_list)                # [32, 324, 234567]

```

### 字典和元组

```py
a={"apl":"123"}
print("apl" in a)#true
a["apl"]="124"
b={("张伟",23):"123"}
a.keys()
a.values()
for c,d in a.items():
```

<img src="D:\Blog\MyBlog\source\_posts\Python的学习笔记.assets\image-20251213201003031-1765627811546-1.png" alt="image-20251213201003031" style="zoom:50%;" />

![image-20251213201136281](D:\Blog\MyBlog\source\_posts\Python的学习笔记.assets\image-20251213201136281-1765627899956-3.png)

![image-20251214163217209](D:\Blog\MyBlog\source\_posts\Python的学习笔记.assets\image-20251214163217209-1765701140462-1.png)















