## Bootstrap 是什麼？
一個包裝好的框架，透過 Class 代入 CSS 設定把每個 HTML TAG 預設樣式升級，提升開發速度，也有ㄧ些提供搭配 JavaScript 實作的部份。

## 請簡介網格系統以及與 RWD 的關係

- Bootstrap包含了自適應的功能，一列為12個網格做為最小單位(如下面所顯示的 1/12)，當螢幕尺寸變化時系統自動適應縮放，簡單的布局克服了顯示器的多樣化。
- Flexbox 以及強化的網格系統: 網格系統不在使用 float，進而改用 flexbox，讓行動裝置及桌面裝置有更彈性的排版方法。
- 響應式斷點
由於 Bootstrap 是被開發來作行動優先，我們使用許多 media queries 建立靈敏的中斷點用於我們的排版和介面。這些中斷點大部分基於最小 viewport，並且允許我們隨著 viewport 的變化放大組件。
Bootstrap 主要使用以下 media queries 或中斷點針對我們的佈局、網格系統、和元件在的我們的 Sass 檔中。

參考資料: https://bootstrap.hexschool.com/docs/4.2/layout/overview/

## 請找出任何一個與 Bootstrap 類似的 library

### Semantic UI: 
- 文件和演示非常完善
- 易於學習和使用
- 配備網格佈局
- 支援 Sass 和LESS 動態樣式語言
- 有一些非常實用的附加配置，例如 inverted 類。
- 對於社群貢獻來說是比較開放的。
- 有一個非常好的按鈕實現，情態動詞，和進度條。
- 在許多功能上使用圖示字型

### Semantic UI 對瀏覽器的支援：

- Last 2 Versions FF, Chrome, IE (aka 10+)
- Safari 6
- IE 9+ (Browser prefix only)
-Android 4
- Blackberry 10

參考資料:　https://www.itread01.com/content/1546333036.html

## jQuery 是什麼？

- jQuery 是一套跨瀏覽器的 JavaScript 函式庫，簡化 HTML 與 JavaScript 之間的操作。

### jQuery特色：

- 使用多瀏覽器開源選擇器引擎 Sizzle（jQuery專案的衍生產品）進行DOM元素選擇
- 基於 CSS 選擇器的 DOM 操作，使用元素的名稱和屬性（如 id 和 class）作為選擇 DOM 中節點的條件
- 事件
- 特效和動畫
- Ajax
- Deferred 和 Promise 物件來控制非同步處理
- JSON 解析
- 通過外掛程式擴充
- 工具函式，如特徵檢測
- 現代瀏覽器中原生的相容性方法，但對於舊版瀏覽器需要後備（fallback）方法，比如 inArray()和 each()
- 多瀏覽器（不要與跨瀏覽器混淆）支援

### 瀏覽器支援
- jQuery 3.0及以後版本支援「目前−1版本」 的Firefox、Chrome、Safari、Edge（就是說目前穩定版本以及目前穩定版本之前的一個版本），另外還支援Internet Explorer 9以後的IE版本。在行動端支援iOS 7+和Android 4.0+。

參考資料: https://zh.wikipedia.org/wiki/JQuery

## jQuery 與 vanilla JS 的關係是什麼？

jQuery 把 vanilla JS 的語法包裝的更簡潔，jQuery是用 Javascript 寫成的，本質上還是 Javascript。
