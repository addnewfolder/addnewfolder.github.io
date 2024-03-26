---
layout: post
tagline: "Design"
categories : [Design,Product,Interaction]
title: "匯入Photoshop/Sketch"

---


## 匯入Photoshop/Sketch
目前支援匯入兩種，可以直接不存檔就匯入(從記憶體匯入)。
不過...與Sketch相容性較好，因為Photoshop若在圖層中隱藏，會在Framer中找不到該物件。重新Import也一樣。
如下在PSD中隱藏，會在Framer中找不到
![image](https://farm6.staticflickr.com/5804/23277370363_d62b28c577_o.png)

![image](https://farm6.staticflickr.com/5733/23904126345_f42b20b327_o.png)
而Sketch倒是不會，因為Framer對於Sketch的相容性較好，如下社群所說：  
![image](https://farm1.staticflickr.com/780/23821763661_676dca8282_o.png)

兩個引入的語法都一樣，只有檔名因地制宜。
如下，是import一個photos的檔案，是ps或是sketch都一樣。
photosLayers1 = Framer.Importer.load "imported/photos"





## Mockup檔案優化
Framer.Device.contentScale=1.94  //可以把解析度自動擴增調高。
在Sketch模擬6s的解析度是1242x2208，所以若用原本sketch設計的640*1136的就要＊1.94倍

## 結構

比較差的結構
![image](https://farm1.staticflickr.com/585/23530309349_ba4dd61c83_o.png)

比較好的結構：有好的命名和階層性
![image](https://farm1.staticflickr.com/607/23872116316_cb01fa6da5_o.png)
