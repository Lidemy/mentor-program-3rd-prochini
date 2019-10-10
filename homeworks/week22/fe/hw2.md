## React Router 背後的原理你猜是怎麼實作的？
### 流程
- 頁面 URL 事件的註冊
- 在頁面 load / hashchange /location 事件觸發時，進行 callback
- URL 對應 location，UI 對應 components ，實現 URL 和 UI 的同步 
### 實作
1. 將 Route 實例註冊到 instance ，綁定 popstate 事件
2. 點擊Link 標籤
3. 禁止 a 標籤的預設動作
4. history.pushState 把路徑 push 到 history
5. 觸發 popstate 事件
6.  match Route 裡的事件，確認是否要渲染 components

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