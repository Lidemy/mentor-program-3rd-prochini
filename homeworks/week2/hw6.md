``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1.	執行第 1 行，將引數的陣列帶入函式內的參數
2.	執行第 2 行，設定變數 i 是 0，檢查 i 是否小於陣列長度 6 ，是，繼續執行，開始進入第 1 圈迴圈
3.	執行第 3 行，判斷陣列第 1 個值 3 是否 <= 0，不是
4.	第 1 圈迴圈結束，跑回第 2 行，i++，i 變成 1 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行，判斷陣列第 2 個值 5 是否 <= 0，不是
5.	第 2 圈迴圈結束，跑回第 2 行，i++，i 變成 2 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行，判斷陣列第 3 個值 8 是否 <= 0，不是
6.	第 3 圈迴圈結束，跑回第 2 行，i++，i 變成 3 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行，判斷陣列第 4 個值 13 是否 <= 0，不是
7.	第 4 圈迴圈結束，跑回第 2 行，i++，i 變成 4 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行，判斷陣列第 5 個值 22 是否 <= 0，不是
8.	第 5 圈迴圈結束，跑回第 2 行，i++，i 變成 5 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行，判斷陣列第 5 個值 35 是否 <= 0，不是
9.	第 6 圈迴圈結束，跑回第 2 行，i++，i 變成 6 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行
10.	執行第 5 行，設定變數 i 是 2，檢查 i 是否小於陣列長度 6 ，是，繼續執行，開始進入第 1 圈迴圈
11.	執行第 6 行，判斷陣列第3位的值 8 是否不等於第 1 位 + 第2 位 的值 8，不是
12.	第 1 圈迴圈結束，跑回第 5 行，i++，i 變成 3 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行，判斷陣列第4位的值 13 是否不等於第 2 位 + 第3 位 的值 13，不是
13.	第 2 圈迴圈結束，跑回第 5 行，i++，i 變成 4 ，檢查 i 是否小於陣列長度 6 ，是，繼續執行，判斷陣列第5位的值 22 是否不等於第 3位 + 第4 位 的值 21，是，回傳 invalid
14.	結束

我猜測本程式在判斷此數列是否為 Fibonacci Sequence ，結果為否定的。
不過太明顯了所以不確定是不是XD [3, 5, 8, 13, 21, 34]
//其實更精確來說，是在判斷這個數列是不是費氏數列的其中一部分XD 因為不是從頭開始也行