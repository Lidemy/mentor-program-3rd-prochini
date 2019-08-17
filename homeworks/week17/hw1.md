## hw1：Event Loop

在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

1. 函式 (1) 進入 Call Stack 並執行
2. 回呼函式 setTimeout (2) 進入 WebAPI ，再進入 callback queue 
3. 函式 (3) 進入 Call Stack 並執行
4. 將回呼函式 setTimeout (4) 進入 WebAPI ，再進入 callback queue
5. 函式 (5) 進入 Call Stack 並執行
6. 執行 event loop
4. 執行 callback queue 內的函式，從第一個的開始拿， (2)->(4)
5. 執行順序為 (1)->(3)->(5)->(2)->(4)

原本以為 Call Stack 一定是 first in last out 
1. 執行初始化 (1)(3)(5) 將函式依序放入 Callstack
2. 回呼函式 setTimeout (2) (4) 放入 WebAPI ，再放入 callback queue 
3. 先執行 stack 內的函式，從最後面的開始拿，(5)->(3)->(1)
4. 再執行 callback queue 內的函式，從第一個的開始拿， (2)->(4)
5. 執行順序為 (5)->(3)->(1)->(2)->(4)