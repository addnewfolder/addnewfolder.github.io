---
layout: post
tagline: "framer tips"
categories : [framer,children]
title: "Framer小外掛介紹：存取子Layer中的內部物件"

---

## 要解決什麼問題？

原本一開始的問題是一個清單式物件中的子物件可能取名都一樣，
如Movie1.poster、Movie2.poster、Movie3.poster...
要控制點選poster物件的行為時，若寫成
`
sketch.poster.on Events.Click,->` 則只會觸發第一個Movie1，Movie2和Movie3都不會被接受到事件。

若不想要重新改naming，則可以用以下方式來解決，彈性許多。


##使用方式
下面是一個外國人寫的外掛，有放在Github上
https://github.com/tehfailsafe/Framer-LayerTree

Demo使用：  
https://vimeo.com/156363935
