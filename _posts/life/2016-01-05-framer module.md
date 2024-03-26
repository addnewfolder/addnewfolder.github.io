---
layout: post
tagline: "Design"
categories : [Design,Product,Prototype]
title: "Frammer Module"

---
## 寫在前面
Module可以讓你的程式更簡單，可以把你的變數、Function另外抽離開一個檔案進行維護。  

### 如何使用

- 需要放在modules目錄下
![image](https://farm2.staticflickr.com/1501/24161401276_fee85e95d7_o.png)


- 檔名取什麼，你在引用的時候就需要寫什麼：
如檔名取成myModule.coffee，則引用的時候就要寫成

`myModule = require "myModule"`

要使用該物件的方法就跟以往一樣。  
`myModule.myFunction()`   
或是  
`myModule.myVar`


### Tip：網路服務，給他尺寸，就可以建立一個簡單的線框圖片。

http://placehold.it/

在網址後面加上尺寸、文字標籤、背景顏色、字型顏色，如：
http://placehold.it/350x150/000000/00FF00/&text=testLabel2
就會產生一張圖片，你可以用img來接url。  
`<img src="http://placehold.it/350x150/000000/00FF00/&text=testLabel2">
`  
如下範例：  
![image](http://placehold.it/350x150/000000/00FF00/&text=testLabel2)



### 撰寫Module
可以先在主coffee檔撰寫function,測試ok之後再貼到module.coffee檔案中。
如下：addPlaceit已經測試ok,就可以搬到modules目錄下，取名為xxx.coffee,

{%gist dearsherlock/fd1d5a746c26c586734a%}

內容改成如下：  
{%gist dearsherlock/7c878a71e0c1d02c080c%}

抽開來之後還是會有如下的效果：

![image](https://farm2.staticflickr.com/1453/23561065653_693313b8f0_o.png)


### 練習  
載入一張登入畫面圖片，建立一個隱形按鈕，點下去的時候會搖晃圖片。搖晃的function另外抽成module。

{%gist dearsherlock/58f878b77e139357759b%}


[DEMO](http://share.framerjs.com/8n8libb7mu04/)

<iframe src="http://share.framerjs.com/8n8libb7mu04/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 更多的Module庫
使用Module可以減少你的coding時間，也不用引入別人寫好那麼龐大的檔案，也許只是要一個動畫效果或是資料結構。
[更多可以參考這裡。](http://www.prototypingwithframer.com/framer-modules/)



[回到Framer主介紹頁](../why_prototype)
