## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. `<blockquote>`=> 引用文字，會透過縮排來呈現，可使用 CSS `margin` 屬性調整縮進，可賦予 `cite` 引言來源的 URL。類似 q 標籤加強版。
2. `<audio>`=> 可嵌入音頻資源，可使用 `scr` 屬性來呈現來源，`preload` 指定瀏覽器是否需要預先加載。
3. `<progress>`=> 用來顯示一項任務的完成進度條，`max`屬性顯示總工作量，`value` 屬性用來指定已完成工作量。

## 請問什麼是盒模型（box model）

網頁每個元素都是一個盒子，content 外包覆一層 padding 內間距，padding 外包覆一圈 border，padding外又包覆一層 margin 外間距。

### Box-Sizsing: Content-box
```css
box wodth = content-width + padding+ border
Width: width
Height: Height
Padding: 內框，會增加Content大小(left + right padding)，有背景，可選取範圍
Border: 框線，會增加Content大小(left + right border)，有背景，可選取範圍
Margin : 外框，不會增加Content大小，無背景，非選取範圍
```

### Box-Sizsing: Border-box 
```css
Width : content-width + padding+ border
Height: Height + padding+ border
Padding: 內框，不會增加Content大小
Border: 框線，不會增加Content大小
Margin : 外框，不會增加Content大小
```
有人建議直接把全域都設成 Border-box，還有 CSS Tools: Reset CSS，不知道 Huli 推不推薦我們用。


## 請問 display: inline, block 跟 inline-block 的差別是什麼？
### inline 
- 像是文字順著 Normal flow 自然排列，沒有用 `br`會一直在同列顯示下去，不會主動斷行。
- 例如 `<p>,<span>,<em>,` 適合文字間的水平排序。
- 元素尺寸會依照內容自動調整，無法指定 width / height尺寸，無法指定上下間距 margin / padding 。
- 原始碼的換行符號會以半形空格顯示，需要刪除換行符號。
- 可設定 `vertical-align`，可設定置中對齊。 
* 用途: 讓 `li` 元素水平排列置作水平排列選單，只適合設計上不需要指定尺寸和間距的時候。
### block
- 具有 width / height 概念
- 可設定上下左右內距 padding，可設定上下左右外距 margin。
- 若無指定 position，元素會由上而下自動換行。 
- 例如 `<div>, <section>,<ul>` 會佔據整個 width 的寬度，把其他元素推到下一行。
- 無法設定 `vertical-align` 垂直對齊屬性，元素永遠靠上對齊。
* 用途: 置作垂直選單，需要讓元素自動換行時可使用。
### inline-block
- 有 inline 的特性，元素前後不自動換行。
- 有 block 的特性，可指定 width / height，可指定上下左右 padding / margin。
- 可使用 text-align 和 vertical-align。
* 用途: 三欄式排列時，需要以區塊形態顯示並可以調整大小，同時需要讓元素並排的時候。
## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

### static 無定位
每個 HTML 的元素的預設值，畫面上的 box 會依照 Normal flow 排列，不支援 ` top, left, bottom, right, z-index ` 等功能。
* 用途: 希望元素依照原始碼順序自然排列時。
### relative 相對定位
不改變原始布局的情況下調整元素位置，原本的位置會留下空白，區塊會以原本顯示的位置作為基準進行偏移。
* 用途: 主要作為絕對位置的基準元素。
### absolute 絕對定位
元素原本所佔據的空間會背後續元素遞補上去，會尋找離本身最近的非 static 定位祖先產生偏移，來找到新的位置，以 left/top 進行定位。
* 用途: 當要在一個區塊作排版時，以基準元素為主，脫離預設排版配置，自由的進行區塊內的配置。
### fixed 
不為元素預留原本的空間，透過指定元素相對於 viewport 的位置來指定位置，元素的位置不會因為畫面滾動而改變。
* 用途: 像是 Medium 左邊的固定側邊攔，或是要固定 Navbar 的時候。
