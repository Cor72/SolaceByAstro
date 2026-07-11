---
title: 备案：拿到一个Liunx系统后的基本流程
published: 2026-07-11
description: sudo apt install vim sudo vim /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf
category: 系统开发
draft: false
---

## 安装工具

```shell
sudo apt install open-vm-tools
sudo apt install open-vm-tools-desktop
```

## 配置ssh连接

```shell
sudo apt install openssh-server
sudo apt install net-tools
ifconfig
```

## 设置root权限

```shell
sudo passwd root
su root
```

## 用于快速登入root账户

```shell
sudo apt install vim
sudo vim /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf
i
enter
greeter-show-manual-login=true
esc
:wq
sudo vim /etc/pam.d/gdm-autologin
我们按一下 i 键，进入编辑模式（进入编辑模式以后下方会出现 插入 两个字）
找到 auth required pam_succeed_if.so user != root quiet_success 这一行，注释掉（在这一行前面加上 # 就行了）
注释掉以后，按 esc键（就是键盘左上角的），然后输入 :wq ，最后回车。
sudo vim /etc/pam.d/gdm-password
我们按一下 i 键，进入编辑模式（进入编辑模式以后下方会出现 插入 两个字）
还是找到 auth required pam_succeed_if.so user != root quiet_success 这一行，注释掉（在这一行前面加上 # 就行了）
注释掉以后，按 esc键（就是键盘左上角的），然后输入 :wq ，最后回车。
sudo vim /root/.profile
我们按一下 i 键，进入编辑模式（进入编辑模式以后下方会出现 插入 两个字）
找到类似 mesg n 2> /dev/null || true 这一行，注释掉（在这一行前面加上 # 就行了）
注释掉以后，按 esc键（就是键盘左上角的），然后输入 :wq ，最后回车。
reboot
```

## ssh设置快速登入root账户

```shell
sudo vim /etc/ssh/sshd_config
我们按一下 i 键，进入编辑模式（进入编辑模式以后下方会出现 插入 两个字）
然后 回车 ，把下面的配置复制进去：
PermitRootLogin yes
（可以复制到最后，也可以复制到图中的位置）
sudo systemctl restart ssh
finalshell改为用root登录
```

## 常用操作

```shell
Ctrl+Art+T 打开终端
ls
mkdir+文件夹名
cd+文件夹名，就会进入这个文件夹
source指令用于执行一个文本文件里的一连串指令
.bashrc,这个文件在主文件夹中，但它是一个隐藏文件，一般是看不到的，那怎样才能看到它呢，在终端中输入ls -a,该指令是显示所有文件（包括隐藏文件）
```



