---
layout: post
tagline: "Design"
categories : [Design,Product,Research]
title: "Framer Animation"

---
## 動畫

此章會介紹基本的動畫如：物件的移動、大小變化、透明度改變，動畫的長度、延遲開始、反轉動畫、重複次數、如何旋轉、動畫過場方式，以及最後把動畫抽出來變物件可以重複使用，或是讓物件可以套用更多重的動畫效果。

### 簡單的移動、大小和透明度改變

{%gist dearsherlock/8eb2984620d2fab396c2%}

[Demo](http://share.framerjs.com/nd0k5lgulao7)

<iframe src="http://share.framerjs.com/nd0k5lgulao7/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

### 加上動畫長度、延遲  
{%gist dearsherlock/169494605aafe9370ab2%}

另外一種設定delay的方式(需要建立animation物件)  
{%gist dearsherlock/d58c1113ff30f58add4f%}

### 物件階層若要for-loop設定動畫  
{%gist dearsherlock/ec402bcc1d1d3476792d%}


### 使用for-loop設定動畫次數
{%gist dearsherlock/ec47d5a2add03a03f2a1%}

[Demo](http://share.framerjs.com/5lgz9g5e08du/)

<iframe src="http://share.framerjs.com/5lgz9g5e08du/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 設定動畫的旋轉和旋轉樣式
{%gist dearsherlock/81da458dc2a867936399%}

curve的種類有三種：

- linear  
![image](https://farm1.staticflickr.com/589/23921877565_dc359e39d4_o.gif)

- ease系列：ease-in-out:緩進緩出...有四種各不相同，預設為ease

![image](https://farm6.staticflickr.com/5705/23839616341_21fc066205_o.gif)

ease:預設，開始快，後面會慢下來  
ease-in:開始會慢  
ease-out:後面會慢  
ease-in-out:開始會慢，後面會慢  

[DEMO](http://share.framerjs.com/s3pogr270eoy/)

<iframe src="http://share.framerjs.com/s3pogr270eoy/" height="800" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


- spring(張力tension,摩擦friction,速度velocity)  
![image](http://framerjs.com/assets/static/images/learn/animation-spring.gif)
 	
- spring參數 - 張力越大，速度越快，反彈更大。  
 	
<iframe height="300" scrolling="no" src="http://codepen.io/stakes/embed/tDhyo/?height=268&theme-id=0&default-tab=result" frameborder="no" allowfullscreen="true" width="100%">
</iframe>

- spring參數 - 摩擦很像避震器，數字越小，越軟Q，越數字越大，越硬一些

<iframe height="300" scrolling="no" src="http://codepen.io/stakes/embed/LJlov/?height=268&theme-id=0&default-tab=result" frameborder="no" allowfullscreen="true" width="100%">
</iframe>

- spring參數 - 速度，數字越大，越快完成。  

<iframe height="300" scrolling="no" src="http://codepen.io/stakes/embed/KGmlc/?height=268&theme-id=0&default-tab=result" frameborder="no" allowfullscreen="true" width="100%">
</iframe>


- 貝茲曲線

![image](https://farm6.staticflickr.com/5707/23627572450_231d908410_o.png)

可以[參考這裡](http://cubic-bezier.com/)


### 動畫的反轉、設定動畫的啟動  

{%gist dearsherlock/98fabefc26edb140636a%}


[DEMO](http://share.framerjs.com/o9trj9ajt0ru/)

<iframe src="http://share.framerjs.com/o9trj9ajt0ru/" height="800" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

### 動畫的設定方式
啟動動畫的方式一：
{%gist dearsherlock/8e5f38798d57fea65548%}

[Demo](http://share.framerjs.com/cpy3ls3dmre5/)  
<iframe src="http://share.framerjs.com/cpy3ls3dmre5/" height="800" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


啟動動畫的方式二：
{%gist dearsherlock/265f477ffd95475434c8%}

[DEMO](http://share.framerjs.com/x7ghp30e5n3c/)  
<iframe src="http://share.framerjs.com/x7ghp30e5n3c/" height="800" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習
建立一個按鈕，並且由上往下移動，延遲2秒啟動動畫，且會向下移動400px，還原放大到100%和透明度100%，加上在0.5秒完成，並且以慢入進場，改成張力150, 摩擦12,速度 1。

{%gist dearsherlock/5fbe4a827737347a33f6%}

[DEMO](http://share.framerjs.com/g7g2go839k5f/)
<iframe src="http://share.framerjs.com/g7g2go839k5f/" height="800" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 更多參考資源
[可以參考這裡：Animation Resources for User Interfaces](http://www.prototypingwithframer.com/animation-resources/)