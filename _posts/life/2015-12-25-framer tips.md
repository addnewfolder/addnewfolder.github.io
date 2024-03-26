---
layout: post
tagline: "Design"
categories : [Design,Product,Research]
title: "Framer 小秘技"

---
## 如何增加工作效率
幾個小方法，Snippet幫你整理常用的code，要用的時候很快叫出來使用。使用並適時第修改Framer本身的預設子會讓你的程式更簡潔。快捷鍵和Utils物件都讓你開發上更有效率。


### Snippets

![image](https://farm6.staticflickr.com/5716/23590621069_8f011811f6_o.png)

當然，你也可以自己建立新的，如選單中的Example就是自定的。

你可以點選Show Snippets Folder...然後打開Example.coffee，改一下如下比較快。存檔時檔名就是Snippet的名稱
![image](https://farm6.staticflickr.com/5671/23590823769_89bb2e8fd3_o.png)

如上做完存檔後，就會出現fadeout這個自定snippet
![image](https://farm6.staticflickr.com/5707/23932621416_8661c704e0_o.png)

之後就可以快速引用

### 預設子

以下幾個預設子都可以被改變，不改可以直接用。

- Framer.Defaults.Layer
» {backgroundColor:"rgba(0,124,255,.5)", width:100, height:100}  

{%gist dearsherlock/52cbba41d4d74235ad08%}
![image](https://farm2.staticflickr.com/1646/23963835215_5765ecf6d1_o.png)

- Framer.Defaults.Animation  
» {curve:"ease", time:1}


{%gist dearsherlock/34d4e61d9f092d4298af%}


### 快捷鍵

- ⌘R  = 重新載入
- ⌘D  = 叫出help document
- ⌘I  = 進行import
- ⌘⇧I = 強制重新import （用於修改import後又修改)
- ⌘/  = 整塊註解加上#，再按一次會把#刪除
- ⌘]  = 縮排
- ⌘[  = 凸排
- ⌘+  = 程式字型放大
- ⌘-  = 程式字型縮小

### 基本Util
[在這裡的Utilities函式庫](http://framerjs.com/docs/#utils.utilities)十分有用，以下介紹幾個常用或沒在裡面的。method的()可以拿掉。

- Utils.modulate(value, [a, a], [b, b], limit) 
  以value在[a,a]中的比例，求出在[b,b]區間中的值，有時會拿來算攝氏和華式的換算，或是在調整某個值的時候，轉換值與畫面刻度之間的換算。limit預設為false,若設為true會超出[b,b]範圍
 	
  `Utils.modulate(celcius, [0, 100], [32, 212])`

- Utils.randomNumber(x,y)
  產生x~y之間的亂數，float型態。
	`x: Utils.randomNumber(0, 650) `

- Utils.randomColor(opacity)
  產生亂數顏色，x為透明度
  `layerA.backgroundColor = Utils.randomColor(0.5)`

- Utils.randomChoice(values)
  在一定的範圍內產生亂數項
  `Utils.randomChoice(["a", "b", "c"])  #得c `
  
- Utils.labelLayer(layer, text)
  在某個layer上放文字
  `Utils.labelLayer(layerA, "Hello")`
  
- Utils.globalLayers layerX
  把layerX變成global變數，如此就不需要每次都呼叫  
  `layerX.tabBar.y = 700`  
  改成只要呼叫
  `tabBar.y = 700`
  
- Utils.interval(interval , handler)
  將handler的命令執行幾次,範例如下：  
  {%gist dearsherlock/6d220a2f00691c59332f%}

- Utils.delay(delay, handler)  
  將handler的命令延遲幾秒才執行,範例如下：  
  {%gist dearsherlock/64d327557dc344a0c4f2%}

Utils篇練習
{%gist dearsherlock/219d35d2bce73edeca35%}

[DEMO](http://share.framerjs.com/fvu4msjmppto/)


<iframe src="http://share.framerjs.com/fvu4msjmppto/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

### 本篇練習
設定預設子(layer、動畫)，使用snippet，套用random顏色...

{%gist dearsherlock/ccb2d8f590f680014c37%}

[DEMO](http://share.framerjs.com/t078lxvll4fx/)

<iframe src="http://share.framerjs.com/t078lxvll4fx/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

