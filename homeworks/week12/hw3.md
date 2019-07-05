## 請說明 SQL Injection 的攻擊原理以及防範方法

- 攻擊原理: $conn->query($sql)，透過提交參數時方式改變 query 的內容，直接去操控 SQL 的資料 `; DROP TABLE table;--`
- 防範方法: 
1. prepared statements and parameterized queries.
2. mysql_real_escape_string
3. 不要直接執行使用者回傳的東西。

## 請說明 XSS 的攻擊原理以及防範方法
- 攻擊原理:
透過執行 html 連結方式導入到其他有害的網站，或是執行 JavaSript 攻擊
- 防範方法: 
分析用戶提交的輸入，並消除潛在的跨站腳本攻擊、惡意的HTML等。在需要html輸入的地方對html標籤及一些特殊字符( ” < > & 等等 )做過濾，將其轉化為不被瀏覽器解釋執行的字符。
1. htmlspecialchars函数
2. htmlentities函数
3. HTMLPurifier.auto.php插件
4. RemoveXss函数

## 請說明 CSRF 的攻擊原理以及防範方法

- 攻擊原理: URL 攻擊、GET method 
- 防範方法: 
1. 在請求地址中加入 token 並驗證，每次發送請求實驗證 session id
2. 驗證 HTTP Referer 字串
3. 不論使用者進行新增刪除修改，都需要經過驗證。