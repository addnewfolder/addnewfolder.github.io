---
layout: post
tagline: "Design"
categories : [Design,Product,Framer]
title: "Framer Components"

---

## 寫在前面
本章介紹Framer內建的元件，可以大幅減少你prototyping的時間。

## ScrollComponent

### 設定水平捲動
通常scroll不大會水平，可以關閉。預設是開啟。
設定ScrollComponent 的 scrollHorizontal 為true/false

### 把內容加到ScollComponent中
在layer建立的時候設定 superLayer 為 scrollcomponent.content

Codesnippet:  
{%gist dearsherlock/cdb7056b1f3c117b329a%}

若是import的layer，則使用ScrollComponent.wrap layer，會回傳塞好layer物件的ScrollComponent物件(相當於靜態產生物件的方法)


### 設定ScollComponent的內容空隙（Padding）
設定contentInset屬性  
CodeSnippet:
{%gist dearsherlock/4d68465fa6a5587a6a05%}

### 設定ScrollComponent的事件
- Events.ScrollStart ：Scroll事件的滾動事件開始
- Events.ScrollEnd ：Scroll事件的滾動事件結束
- Events.ScrollAnimationDidEnd：Scroll事件的滾動事件含動畫結束(會比ScrollEnd的時間點晚一些)

### 練習:隨機產生layer使用superLayer塞入scrollcomponent。設定contentInset。
{%gist dearsherlock/1a6cc860248e359f4888%}

[DEMO](http://share.framerjs.com/u0cqydp5ogno/)

<iframe src="http://share.framerjs.com/u0cqydp5ogno/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

### Sketch小秘訣
Hint:Sketch可以在圖層裡面加上一個Mask，用來遮住超過的部分如下：
![image](https://farm2.staticflickr.com/1590/23448441243_6820407391_o.png)

若是關閉當成Mask，會如下：  
![image](https://farm6.staticflickr.com/5711/23447020664_890cbbfd2c_o.png)

通常會開啟Mask，在Sketch裡面比較看起來擬真。

### ScrollComponent當下的Y位置與ScrollComponent內容的Y值
   - ScrollComponent當下的Y位置＝scroll物件.scrollY
   當手勢往上滑動(內容往下捲動),表示是在看ScrollComponent比較下面的地方，所以此值會變大。
   - ScrollComponent內容的Y值＝scroll物件.content.y
   當手勢往上滑動(內容往下捲動),表示是內容往上面跑走超出可視範圍，所以此值會變小(也可負數)。

### 選動到某個特定點
scroll.scrollToPoint(point, animate, animationOptions)

Scroll to a specific point, optionally animating.
參數：
	point — ex: {x:0,y:0}
	animate — true
	animationOptions - ex: {curve:"spring(240,24,0)"}

Sample:  
	`scroll.scrollToPoint {x:0,y:0},true,{curve:"spring(240,24,0)"}`	


### 練習：Scroll一個長頁面，並且在右小角會有一個提示可以往下拉的動畫，拖拉下文章會讓背景圖模糊。

程式  
{%gist dearsherlock/8aa1b17f0d1ac1d9ba53%}

[DEMO](http://share.framerjs.com/s9buhfidcl43/)
<iframe src="http://share.framerjs.com/s9buhfidcl43/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

### 練習：強化以上的練習，讓右下角的動畫可以旋轉  
{%gist dearsherlock/9efdea2627384b691315%}

[DEMO](http://share.framerjs.com/g46emnopetof/)
<iframe src="http://share.framerjs.com/g46emnopetof/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


## Page Component
用來建立換頁的物件，每頁可以放自己想要的內容。可以控制左右切，也可以控制上下切。(常用於相片檢視)

### 設定垂直捲動方向不要動
設定PageComponent的scrollVeritical屬性＝false，可以讓捲動比較不會飄。

### 把Layer加到PageComponent中
方式一：建立的物件指定superLayer
設定superLayer: pageComponent.content  
ex:  
{%gist dearsherlock/7f2917ea6693bd79c7ac%}

方式二：PageComponent加入物件  
ex :  
`pages.addPage newPage`

### 切換到某一頁，並加上動畫
{%gist dearsherlock/1466c08e9789756fe8f2%}

### 往左或往右切到下一頁
{%gist dearsherlock/60e44c9ce2c604ab30f8%}

### PageComponent切換到該頁的事件，也許要做一些特殊的處理
{%gist dearsherlock/5cc129fd9011cee1dd10%}

### 取得當前頁面為PageComponent的第幾個index  
`current = page.horizontalPageIndex page.currentPage`

### 練習
自動產生頁面塞入PageComponent，然後跳頁，加上動畫

{%gist dearsherlock/a0ef58120e94fca06293%}

[DEMO](http://share.framerjs.com/snvf7b2nxxub/)
<iframe src="http://share.framerjs.com/snvf7b2nxxub/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>

### Import Sketch artboard注意
若是Sketch檔案中會有多個artboard，他會把所有的artboard視為在同一個artboard上，所以命名上要注意一下。  
例如以下，雖然有好幾個artboard，但import之後，會在同一層級。
  
![image](https://farm2.staticflickr.com/1623/23814815829_98c1dc6ed5_o.png)

程式使用：
{%gist dearsherlock/f3348c6819762e5e58ab%}

### 練習
切換頁面，且下方有個pageindicator指引，會變換圓圈的狀態。  
程式如下：  
{%gist dearsherlock/a1f460b81635d7462a18%}

[DEMO](http://share.framerjs.com/7odpoxq4qbw6/)

<iframe src="http://share.framerjs.com/7odpoxq4qbw6/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習
把PageComponent和ScrollComponent一起用
ScrollComponent中為亂數產生列數，但label會標示目前是再第幾個頁籤，所以會有function的包裝和存取pagecomponent屬性的示範。

{%gist dearsherlock/41d518fa60974f051764%}

[DEMO](http://share.framerjs.com/j07880oqzdko/)

<iframe src="http://share.framerjs.com/j07880oqzdko/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


## SliderComponent
SliderComponent是一種水平拉桿，可以用來設定一些數值。
可以設定最大最小值。
{%gist dearsherlock/e18e8510018be8a9bfbc%}

### 輸入X寬度求實際Value
如果Slider的長度(width)為500，最大1000，最小0，則
`slider.valueForPoint(200)`相當於400

### 輸入實際value求X值
如果Slider的長度(width)為500，最大1000，最小0，則
輸入實際值500，欲取slider寬度為多少
`slider.pointForValue(500)` 相當於250

### 直接拖拉到某個值
會有一種動畫效果，把值提升到某的指定的地方，預設動畫可修改
而這跟knobSize大小也有關，越大越容易拖拉到位

`animateToValue(value)`

特別指定動畫  
`slider.animateToValue(1, { curve: "spring(400,40,0)"})
`

### 設定拉桿柄的屬性
	  
slider.knobSize =60  #切記knobsize要比較前面一點設定  
slider.knob.borderRadius = 10 #這樣會有正方形拉桿效果  
slider.knob.backgroundColor = "#e4ecf2"  


### 設定拉桿左側的屬性
slider.fill.backgroundColor = "#21d7c8"  
slider.animateToValue(500)

### 綁定拉桿剛點下去時所產生的事件
`slider.knob.on Events.DragStart, ->...`
   
Sample:
{%gist dearsherlock/82cf8eab84c0a966b3c3%}

### 綁定拉桿點下去結束離開時所產生的事件
`slider.knob.on Events.DragEnd, ->...`
   
Sample:
{%gist dearsherlock/c43a6964d5224bb6f313%}


### 綁定拉桿開始滑動
`slider.on "change:value", -> ...
`  
Sample:    
{%gist dearsherlock/0786cc012aa7e731630a%}

### 練習
建立一個SliderCOmponent,拉桿滑動的時候會顯示標籤文字跟隨著跑，停止則消失
{%gist dearsherlock/a06160624dc02a7c123a%}

[DEMO](http://share.framerjs.com/gbepv412z9s0/)
<iframe src="http://share.framerjs.com/gbepv412z9s0/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習
建立一個垂直的SliderComponent，放在右側假裝是ScrollComponent的捲軸，雖然ScrollComponent本身就可以捲動，但沒有ScrollBar 。
捲動ScrollComponent也會跟著改變SliderComponent的Y軸位置


{%gist dearsherlock/41f7b9dae8d0e88c68c0%}

[DEMO](http://share.framerjs.com/152z7opd2enl/)
<iframe src="http://share.framerjs.com/152z7opd2enl/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習
建立四個SLider,改變RGBA，然後借此改變背景色。改變的同時也要順便顯示這些值。
{%gist dearsherlock/38a281065c839a515f9d%}

[DEMO](http://share.framerjs.com/4nvusyjy4ppn/)
<iframe src="http://share.framerjs.com/4nvusyjy4ppn/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
     
    
</iframe>


### 練習
建立一個prototype,上方式pagecomponent,會幾秒換一張圖片，到最後一張會loop回原本第一張。下面是scrollcomponent，下拉更新動作時，會把上方的pagecomponent內容進行放大。且下拉的動作會有受限。放大也會有限制最大兩倍，會隨著下拉動作的大小作變化。

{%gist dearsherlock/5324b29f22e64fdf0f1c%}

[DEMO](http://share.framerjs.com/a6x6p5gnc8ve/)
<iframe src="http://share.framerjs.com/a6x6p5gnc8ve/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
     
    
</iframe>



[回到Framer主介紹頁](../why_prototype)
