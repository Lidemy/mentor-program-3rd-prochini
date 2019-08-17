## hw2：Event Loop + Scope

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
1. var i 值作用域為 {} 內
2. 第 1 圈印出 i:0
settimeout 經過 Web APIs 移至 Callback Queue 等候
3. 第 2 圈印出 i:1
settimeout 經過 Web APIs 移至 Callback Queue 等候
4. 第 3 圈印出 i:2
settimeout 經過 Web APIs 移至 Callback Queue 等候
5. 第 4 圈印出 i:3
settimeout 經過 Web APIs 移至 Callback Queue 等候
6. 第 5 圈印出 i:4
settimeout 經過 Web APIs 移至 Callback Queue 等候
7. 依序執行 settimeout ，此時執行完迴圈的的 i 為 5 ，因為 var 所以 i 存在於 for 迴圈
每隔 5 秒印出一個 5 ，共 5 個 5
8. 結果為 
i:0
i:1
i:2
i:3
i:4
5
5
5
5
5


Q: 原本以為 settimeout 裡的 i 會是 0.1.2.3.4.，結果全部變成 5