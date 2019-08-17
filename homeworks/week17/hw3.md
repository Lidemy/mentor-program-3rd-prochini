## hw3：Hoisting

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
var a = 1         
function fn(){    
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```
1. 全域變數 a = 1 
2. 執行 fn 函式
3. 找到函式內部有宣告變數 a，提升到最上面，但尚未賦值所以印出 undefined
4. 忽略重新宣告，a = 5
5. 印出5
6. a = 6
7. 忽略重新宣告
8. 執行 fn2()
9. 函式內部沒有宣告 a 只有賦值，向外層找到 fn 內的變數 a，印出 6
10. fn 內的變數 a = 20 , 全域變數 b =100
11. 印出 20
12. fn 函式執行完畢並離開，找到全域變數 a，印出 1 
13. a = 10
14. 印出 10
15. 印出 100


ECMAScript 的 Execution Context

fn2 EC
fn2 VO {

}
fn EC
fn VO {
  fn2: function
  a: undefined -> 5 -> 6 -> 20
}

global EC
global VO {
  fn: function
  a: undefined -> 1 -> 10
  b: 100
}
