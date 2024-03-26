---
layout: post
tagline: "Design"
categories : [Design,Product,Interaction]
title: "Framer 物件屬性設定"

---
## Framer 設定屬性語法
- 若寬度要整個面板寬，可以寫成width:Screen.width
- 設定陰影
![image](https://farm1.staticflickr.com/736/23669576995_fa94c095b3_o.png)

- 設定透明度
![image](https://farm1.staticflickr.com/580/23643529916_c5aa562c0b_o.png)
- 設定可見度
![image](https://farm6.staticflickr.com/5835/23301667159_0d90ce3912_o.png)

- 設定圖片圖層的方法(url或是載入專案目錄中的圖檔)
![image](https://farm1.staticflickr.com/704/23042731203_5a0dd0767c_o.png)

- 影片圖層
![image](https://farm1.staticflickr.com/665/23587397141_ec285a386b_o.png)

- 設定背景圖層(BackgroundLayer)和html語法的圖層，且該圖層還可以內嵌css
![image](https://farm6.staticflickr.com/5728/23301952939_82a935147f_o.png)

- 設成圓形的圖層：myLayerCircle.borderRadius = "50%"

- 設定Y軸放大的起點：介於0~1之間，預設為0.5，從上下放大。而0是從上方往下延伸放大，1是從下方往上延伸放大的效果。  
  `layer.originY=1
 ` 

- 設定layer的內容：可以塞html等等到這個屬性。或是簡單的文字  
`
layer.html=test`
 

### 迴圈與Framer 物件子圖層：
如下程式中，subLayers是共用屬性，可用for...in...或是for (key,value ) of...來處理。

{%gist dearsherlock/716c97c358c01595b1de%}

結果：

{%gist dearsherlock/3f18641f29d8ff75a2a3%}



[回到Framer主介紹頁](../why_prototype)
