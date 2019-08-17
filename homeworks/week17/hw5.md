## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。

### 先從變數開始談起

在第一個複習周，在 QA 群內 huli 就說可以先去看看第 17 周，當時看了還是嚇了一大跳，大概就變數的地方可以理解，當時還寫了一些 Hoisting 的筆記，原本還一知半解，這周才真的認真看了，然後再做功課的時候發現每題都猜錯，才發現自己的誤區。


### 變數的生存範圍：Scope

Scope 要是之後都禁用 var 的話 ，那作用域就比較不會有問題了，不會以 function 為作用域或是變成全域變數的問題，不過 let 、const 還是要用 Babel 來處理瀏覽器兼容 ES6 的問題。

### 從 Hoisting 理解底層運作機制

ECMAScript 的 Execution Context 非常明確的規範倒是是怎麼運作的，可以清楚的看到加工過程，對理解大大有幫助，下次應該不會再錯了。
- Hoisting 只提升宣告，不提升賦值
- Hoisting 的提升優先順序

### 從 Closure 更進一步理解 JS 運作

最喜歡假裝JS引擎的部分，Scope chain 又重新看了一次，還是不太清楚一層一層的關係

### 物件導向基礎與 prototype

看了 N 次
 prototype 像是代理機制，把自己的 object 借給別人，所以只要修改一個地方，就可以共用
 有一個屬性叫做 __proto__ 

只要把 function 指定在 Person.prototype 上面，所有 Person 的 instance 都可以共享這個方法。
所以在Person.prototype上面加上你想讓所有 instance 共享的屬性或是方法。

假設 有個程式碼`var nick = new Person('nick');`
- new 做了甚麼:
1. 建立一個　object
2. 看藍圖 Person 施工，指向 Person 的 prototype
3. 拿 O 當作 context，呼叫 Person 這個建構函式
4. 回傳 O 

### 先學完物件導向，學 this 才有意義

看了 N 次 的 N 次方
英文小教室
1. this (代名詞) 這，這個，這人，這事，這東西
- Look at `this`. 瞧瞧這個。

this 再賦予它意義之前甚麼都不是，所以當 instance 去 call function 的時候，這時的 this 就是 instance。

### 心得

看文章的時候，看到深入探討 JavaScript 中的參數傳遞這篇裡，學到的是蒐集資料和寫文章的整個思考過程。文章整理的相當的清楚，文章、和影片有很多模擬如何執行的影片，可以非常清楚看見整個過程，詳細程度超高反而一看就可以理解，我本身需要蠻多時間去消化，之後要再回來複習補滿這一塊。