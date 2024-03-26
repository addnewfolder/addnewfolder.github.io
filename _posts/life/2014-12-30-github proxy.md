---
layout: post
tagline: "Github with Proxy"
categories : [Github,Proxy]
title: "MAC下設定github proxy"

---

### 概述
Github的Client端，竟然沒有吃網路設定中的Proxy，需要另外設定他自己本身用的config檔案。

###方法
找到使用者目錄下的一個隱藏檔案：.gitconfig

![image](https://farm8.staticflickr.com/7497/15957289047_a43fb3a85c_o.png)

打開修改：請加上如下：


{%gist dearsherlock/d63a050ff785b67cdcc7%}