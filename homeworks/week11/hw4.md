## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

### 雜湊（Hash）
- 單向不可逆，雜湊碼幾乎無法倒推回出原始碼，不一樣的值幾乎不會重複。

### 加密(Encryption)
- 對稱加密: 加密解密只有一把鑰匙，鑰匙有可能在傳輸中被攔截。
- 非對稱加密 :　公開金鑰(Public key)及私密金鑰(Private key)，在加上數位簽章(Digital Signature)的二次驗證。


## 請舉出三種不同的雜湊函數

- md5, SHA-0, SHA-1: 已發現碰撞，安全性差，不能繼續使用
- SHA-3: 支持與SHA-2相同的散列長度，其內部結構與SHA系列的其餘部分明顯不同。
- crypt($your_string):  standard Unix DES-based encryption algorithm
- hash($algorithm, $your_string) :  sha256 as the default algorithm

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別


- 整個識別證認證的過程機制才是 session，用戶登入時可以檢查　session　id 是否有在資料庫中儲存過，沒有的話就創建一個，有的話就可以重複使用，一個用戶只會有一個 session　id，
- cookie 只是那張用來儲存 session　id 的識別證，也可儲存很多個人設定。

##  `include`、`require`、`include_once`、`require_once` 的差別
- require : error 發生時，會出現一個致命的錯誤，程式碼會停止執行。
- include : error 發生時，會出現一個錯誤，程式碼會繼續執行。
- require_once :  error 發生時，會出現一個致命的錯誤，程式碼會停止執行，會確認匯入的程式碼沒有重複使用。
- include_once : error 發生時，會出現一個錯誤，程式碼會繼續執行，會確認匯入的程式碼不會沒有重複使用。