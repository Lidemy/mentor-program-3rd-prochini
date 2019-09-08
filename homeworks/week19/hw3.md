## 請簡單解釋什麼是 Single Page Application

只會有單一頁面
發送 / 接收 request 不須換頁

當 client 操作網頁觸發 javascript 監聽事件，採用 rest 的方式使用 url 來更改資料，透過 AJAX 發出 HTTP REQUEST 對後端 server 發出請求，然後會跑到後端的 server 的  router api 決定該使用哪個 Controller 處理這個請求，然後 Controller 會將任務指派給 model 讀取 / 寫入資料庫，把 VIEW 的功能丟給前端去做。
然後前端再發出 HTTP REQUEST，取得最新的資料內容透過 javascript 渲染出來，目前的作法要發送兩次 request 才有辦法拿到資料。
所以前端 / 後端就是這樣分家的，前端只管畫面，後端只管資料。

## SPA 的優缺點為何

優點:
- 使用者體驗佳
- 影片、音樂串流網站不可以中斷資訊傳送必用
缺點:
- 預先下載的檔案過於肥大
- client side render，所以SEO 差


## 這次作業的心得

作業內容都是參照所有同學的作業，使用 Postman 來測試後端的訊息，跑了超多次才搞懂整個流程，但也比較熟悉前後端串接了，終於知道哪些是前端那些是後端，不然之前留言板做完還是超懵懂，而且這次佈署 AWS server 正常運作。這次作業做了兩周，路上滿是荊棘整個頭破血流，應該是之前欠的債太多，這次一次還吃不消。

注意到的東西
- 前後端流程
- http request
- 如何用 RESTful API 傳參數
- json 資料格式
- option cors 的處理

要再去看 [前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)
解開所有的謎題，實作之前應該要先看的QQ