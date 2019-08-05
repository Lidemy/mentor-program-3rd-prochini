## CSS 預處理器是什麼？我們可以不用它嗎？

CSS 預處理器會添加新功能，用寫程式碼的方式去撰寫語法，然後再編譯成 CSS 的程式。
可以不用，優點是讓 CSS 結構的可讀性更高、也更容易維護。
## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
- public : response 可被任何共用、私有快取儲存
- private : respone 只能被私有快取儲存，共用快取不行，通常用於個人敏感資料
- no-store : request 和 response 的內容都完全不存，每次都要從server拿資源
- no-cache : 可以存快取，但使用快取前每次都要送 request 問 server，server 沒有更新的檔案版本才可以用
參考: 新手坑：[讓人又愛又恨的 HTTP Caching](https://medium.com/frochu/http-caching-3382037ab06f)

## Stack 跟 Queue 的差別是什麼？
Stack first in last out 方便取得最新資訊
Queue first in first out 優先取得最早資訊
## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
 !important  > inline style > ID > class / psuedo-class / attribute > Element > *

 會依照權重來比大小 0-0-0-0-0
 從左比到右，1-0-0-0-0 跟 0-10-0-0-0 比的話 1-0-0-0-0  權重還是比較大的