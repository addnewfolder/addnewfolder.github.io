---
layout: post
tagline: "Design"
categories : [Design,Product,Research]
title: "Coffee 語法"

---
## 語法
如我自己的[hello framer](https://www.dropbox.com/sh/oo8enm9qvscdnvm/AABD6Q0SK_BioIgqmS5I39_ha?dl=0)


## 若PC環境下，可以用另外的工具開發  

### Brackets
http://brackets.io/，使用外掛管理器，另外安裝CoffeeScreipt，以及CoffeeScript Auto Compiler(自動產生JS的產生器)，安裝完後，刪除原本的app.js，改成assp.coffee，把framer studio裡面的code copy出來，注意一下資源檔案，儲存之後就可以產生app.js。

### Codepen
現在codepen也支援了coffeescript，
首先先要抓一下framer.js的建置腳本位置
![image](https://farm6.staticflickr.com/5750/23620847306_d7092051b1_o.png)

複製連結之後，到codepen的js面板設定，

![image](https://farm6.staticflickr.com/5804/23620867196_9882234939_o.png)

然後把coffeescript的程式copy到js面板中，就可以直接執行了～

https://farm1.staticflickr.com/729/23018809714_6f94d4ac0e_o.png

## CoffeeScript語法重要概念
- CoffeeScript是 Case-Sensitive
- 支援string格式化，ex: aaa= "#{變數名稱1} #{變數名稱2}"
- 單引號和雙引號是不同意義。
- 布林變數可以指定成true/false或是on/off或是yes/no
- unless也可以是if
- 陣列可以同時存在字串、布林、和數字。
- 陣列裡面也可以存陣列(無限階層)。
- 註解可以單行＃, 也可以註解一個區塊###
- 要參考顏色的英文名，[可以到這裡查詢](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)
