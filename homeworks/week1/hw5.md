## 請解釋後端與前端的差異。

-	前端Front-End
    用戶端，對用戶的介面，視覺部分，所有看得到、摸的到的東西，提供用戶體驗，和用戶互動，接收用戶的訊息，發出request傳給後端提出請求。

-	後端 Back-End
   伺服器端，保存數據資料，接收前端的request，在資料庫中處理，後再丟回前端，系統演算法，優化網站讀取速度，把response傳回前端。


## 假設我今天去 Google 首頁搜尋框打上：JavaScrit 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

-	Request/Response
1.	用戶向瀏覽器請求資料
2.	瀏覽器送出一個request
3.	伺服器得到瀏覽器的request
4.	搜尋相對應的資料
5.	把訊息傳回瀏覽器response
6.	得到想要的資料

-	How Search Works
1.	當填寫搜尋內容，按下搜尋按鈕
2.	爬蟲搜尋引擎就會開始分析搜尋內容字彙 JavaScrit，挑選出相關資料
3.	搜尋引擎會依照演算法篩選出他認為最高相關的內容
4.	依照網頁標題、排序、關鍵字、連結度，高網站排序
5.	把 JavaScrit 搜尋結果從資料庫傳到流覽器


## 請列舉出 5 個 command line 指令並且說明功用

1.   color : 變更顏色 
2.	attrib : 變更/顯示屬性
3.	dir *.txt :	顯示txt檔清單
4.	xcopy “來源路徑” “目標路徑” /s /e
    (複製所有文件和子目錄，包括任何空子目錄)
5.	if 新增條件
    if [not] exist <FileName> <Command> [else <Expression>]
    if not exist <product.dat> <echo> [Cannot find data file]
