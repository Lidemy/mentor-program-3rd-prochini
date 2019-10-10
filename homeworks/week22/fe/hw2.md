## React Router 背後的原理你猜是怎麼實作的？
### 調用 History API 
- 頁面 URL 事件的註冊
- 在頁面 load / hashchange /location 事件觸發時，進行 callback
- URL 對應 location，UI 對應 components ，實現 URL 和 UI 的同步 

1. 針對 h5 的 history 來講，push/ replace只是將 url 進行改變 
2. Router 中拿到需要跳轉的路徑，然後傳遞給history 
3. 從 Router 結構中獲取對應的處理方法 
4. 在進行路由處理的時候，根據props中的資訊，進行頁面的跳轉或者重新整理


參考資料 :
http://zhenhua-lee.github.io/react/history.html
http://www.ruanyifeng.com/blog/2016/05/react_router.html
https://segmentfault.com/a/1190000016435538
## SDK 與 API 的差別是什麼？
API: Application Programming Interface
任何一個小小的功能都可以稱做是 API ，可以與系統溝通的介面，
API 提供可使用的函式庫，呼叫需要的函式，得到相對應的結果。
SDK: Software Development Kit 
把開發一個軟體所需的所有 API 和附加功能包裝成一個工具包，像是 ANDRIOD 的 SDK。
## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？
客戶端加上
withCredentials: true 
伺服器端加上
Access-Control-Allow-Credentials = true時，引數Access-Control-Allow-Origin 的值不能為 '*' 