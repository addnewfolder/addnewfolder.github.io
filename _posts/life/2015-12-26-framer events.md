---
layout: post
tagline: "Design"
categories : [Design,Product,Framer]
title: "Framer Events"

---
## 寫在前頭
Event算是滿基礎且重要的一堂，而大概知道event寫的signature之後就差不多會了～另外就是事件和事件之間的串接，參數的傳遞，也是要掌握事件處理滿重要的一些基礎。

### Event
幾種event的寫法：

{%gist dearsherlock/55622fd854f3a130a5f9%}

### 其他Event
可以看參考文件中的Event說明，一大堆的事件等你來使用  
![image](https://farm2.staticflickr.com/1550/23980071295_7d8fb167f9_o.png)



### Print/Log
print會在preview視窗跳出一個小視窗，印製的指令可以加上#{物件.屬性} 來串連印製，若要串連，也可以用逗號隔開繼續印出,比較不像string.format
`
layerC.on "click",(event,layer) -> 
	print "be click in layer C, #{layer.name} and event is #{event} "`

![image](https://farm6.staticflickr.com/5760/23352789123_13bbba05e0_o.png)

而Log是另外一種debug方式，版面會比較乾淨，會印到web console中。點選Inspect，就可以叫出Web Inspector
`console.log "be click in layer C, #{layer.name} and event is #{event},event "`

如下：
![image](https://farm6.staticflickr.com/5818/23351594154_bf153b3e05_o.png)

但請記住，若想要進一步分析，請在console.log中後面加上物件當變數，若包在字串中，就沒辦法攤開了～攤開如下：  

`console.log "be click in layer C, #{layer.name} and event is #{event},event "`

![image](https://farm2.staticflickr.com/1567/23353052393_a971aa7ce1_o.png)

### 設定圖層順序
如果某個圖層知道要在人家後面，就只要輸入以下：  
`layerA.placeBehind layerB`

要放在人家前面，也會有placeBefore  
`layerA.placeBefore layerB`


### 練習一
設定event click的處理，當點下最愛按鈕可以改變按鈕的layout（放大且有星號），按下分享，可以動畫跑出三個社交媒體的按鈕，不想要分享的話，按一下螢幕就可以把按鈕縮回去。

{%gist dearsherlock/fb338ba00e9f43cdc1a9%}


[DEMO](http://share.framerjs.com/1i30dsrqudmz/)



<iframe src="http://share.framerjs.com/1i30dsrqudmz/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習二
當事件結束時(並且改變背景顏色)呼叫另外一個事件啟動(並且改變背景顏色)。--->這個之前已經有範例。
此練習加上delay 5秒後，會呼叫動畫的暫停。而也示範了註冊事件的不同寫法，

ex:
	.on Events.AnimationStart = .on "start"  
   .on Events.AnimationEnd = .on "end"

{%gist dearsherlock/2f705d9e7fc877bde60b%}

[DEMO](http://share.framerjs.com/vwbkkdma5gj0/)

<iframe src="http://share.framerjs.com/vwbkkdma5gj0/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>



### 練習三 1/3
拖拉進去6種心型圖片，可以在點擊背景的時候出現一堆亂數產生會往上飄的心型圖片(很像天燈)  
{%gist dearsherlock/e0fee47d0c98c198d233%}

[DEMO](http://share.framerjs.com/thhcjr0ymlte/)

<iframe src="http://share.framerjs.com/thhcjr0ymlte/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習三 2/3
承上，把event當變數傳進去,取得發動event的x,y軸，就可以讓愛心比較貼近點擊的地方。並且把建立layer和動畫抽取成function，讓程式更簡潔

{%gist dearsherlock/dde78bec38f23eb32a1f%}


[DEMO](http://share.framerjs.com/lc7ivbyh2fpc/)
<iframe src="http://share.framerjs.com/lc7ivbyh2fpc/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習三 3/3 加上影片當成背景，並且控制影片的播放和暫停，並且讓播放暫停按鈕更有趣的變化
{%gist dearsherlock/0f3e38beb8dac844de57%}
[DEMO](http://share.framerjs.com/8jyknimjmye6/)
<iframe src="http://share.framerjs.com/8jyknimjmye6/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>



### 拖拉
- 若你需要物件啟動拖拉功能，你需要設定  `layer.draggable.enabled = true`


- 若你要設定拖拉只能維持在某方向，如垂直或水平，可以設定如下，就可以保持垂直拖拉  
`layer.draggable.horizontal = false`

- 若你要設定拖拉物件時的速度可以設定：
`layer.draggable.speedX=number`  
  或是  
`layer.draggable.speedY=number`

- 若你要設定拖拉的範圍，需要設定如下(但連overdrag也要同時設定為false才有用，不然會飄走)，設定完constraint之後：  
{%gist dearsherlock/340518fdb59b01db5bd2%}

- 設定物件是否需要彈回效果  
`layer.draggable.bounce = false`

- 設定彈跳效果，需要搭配bounce=true的彈跳效果。  
{%gist dearsherlock/d1cea1ed2d5347918cd1%}

- 設定物件拖拉時是否會有慣性力(若false則手要一直拖)  
`layer.draggable.momentum = false`

- 拖拉事件的註冊
會有Events.DragStart、Events.DragEnd等  
{%gist dearsherlock/9e2c8f3e67ca0cf4c5d0%}

[DEMO:拖拉一個圓形，點下會有微微放大，放開會拉回原地](http://share.framerjs.com/6kwauuxayy63/)  
<iframe src="http://share.framerjs.com/6kwauuxayy63/" height="600" width="100%" frameborder="0" 
     allowfullscreen="allowfullscreen">
</iframe>


### 練習-下拉更新畫面，顯示動畫 1/3
{%gist dearsherlock/e805f4a232a435b33a1f%}

[DEMO](http://share.framerjs.com/psn7u82rdeut/)

<iframe src="http://share.framerjs.com/psn7u82rdeut/" height="600" width="100%" frameborder="0" allowfullscreen="allowfullscreen">
</iframe>

### 練習-下拉更新畫面，增加背景、火箭圖案，且會有動作，火會消失 2/3

{%gist dearsherlock/a070c0a99990193124cd%}

[DEMO](http://share.framerjs.com/96lyj7e04fag/)

<iframe src="http://share.framerjs.com/96lyj7e04fag/" height="600" width="100%" frameborder="0" allowfullscreen="allowfullscreen">
</iframe>


### 練習-建構雲朵，調整圖層上下順序，雲朵動畫建構
{%gist dearsherlock/214d92399c6060e16624%}

[DEMO](http://share.framerjs.com/ablbtn8z88h0/)


<iframe src="http://share.framerjs.com/ablbtn8z88h0/" height="600" width="100%" frameborder="0" allowfullscreen="allowfullscreen">
</iframe>


### 綜和練習，建構一個動畫，企鵝可以拖拉，拖的時候會放大，放開就縮回，但是click會放很大，兩秒後會跌倒這樣


{%gist dearsherlock/6159933c82ae74b8ee06%}

[DEMO](http://share.framerjs.com/sz84dsm6f1gx/)  
<iframe src="http://share.framerjs.com/sz84dsm6f1gx/" height="600" width="100%" frameborder="0" allowfullscreen="allowfullscreen">
</iframe>

[回到Framer主介紹頁](../why_prototype)
