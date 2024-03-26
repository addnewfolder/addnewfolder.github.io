---
layout: post
tagline: "Design"
categories : [Design,Product,Framer]
title: "Framer States"

---

### 狀態-寫在前面
當物件擁有好幾種狀態，其實相當於會有好幾種css狀態，可以讓互動時的控制只要宣告該物件的狀態屬性就好，便可以達成切換的效果。狀態切換也可以指定過場效果;切換可以循序切或是回預設等等。

### 宣告方式
{%gist dearsherlock/619b79085f35157c1bb3%}

{%gist dearsherlock/a6a841f560844d73474d%}

### 呼叫/切換狀態方式

`layer.states.switch "state_name`

順便指定動態
`layer.states.switch("state_name", curve: "spring(400, 30, 0)")`

### 循序切換下一個狀態
`layer.states.next()`

### 快速切到某個狀態，不用動畫效果
`layer.states.switchInstant("state_name")  
`
或是跳到預設

`layer.states.switchInstant("default")
`

### 要更新狀態內容

{%gist dearsherlock/21b88385918e667acd0d%}


### 要移除某個狀態內容  
`layer.states.remove "state_name"`


### 切換回預設狀態，預設狀態可以不用特別設定

`layer.states.switch "default`

順便指定動態效果  
`layer.states.switch("default", curve: "spring(400, 30, 0)")`


### 狀態的切換若也要有動畫效果的話  
`layer.states.animationOptions=...`
範例：  
{%gist dearsherlock/2fcd5152b3d1af64216b%}

### 練習，點選圖片後，可選取濾鏡效果套用。
{%gist dearsherlock/6cbd9f6d8ee5737598d9%}

[DEMO](http://share.framerjs.com/i70m8l08hest/)


<iframe src="http://share.framerjs.com/i70m8l08hest/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

### 練習，點擊地圖可以展示地圖中不同位置，點選定位點會回原始地圖(會用到default)
{%gist dearsherlock/d3b8686dcedbe85290f9%}

[DEMO](http://share.framerjs.com/3k8ombbkqkcv/)
<iframe src="http://share.framerjs.com/3k8ombbkqkcv/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>



[回到Framer主介紹頁](../why_prototype)

