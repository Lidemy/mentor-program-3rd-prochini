## 為什麼我們需要 React？可以不用嗎？
我們需要REACT是因為它可以幫我們解決掉許多 UI/UX 痛點，讓個 component 的 UI 各自獨立，可重複使用，解決用 JavaScript 去操作複雜的 DOM 比較難維護的問題，提升可讀性和頁面性能
## React 的思考模式跟以前的思考模式有什麼不一樣？
- 畫面上 DOM 的渲染動作都是透過 state 去控制 virtual DOM 调用 render() 来更新 UI，不需要自己去手動修改 DOM 。
- 網頁互動時，需要在元件間傳遞回調函式來處理事件
- 每次 state 更改，render 函式都會產生新的 虛擬 DOM，框架會比較新的虛擬 DOM 和舊的虛擬 DOM 有何差異，再 render 到真實 DOM上面
- JSX 語法，把 JavaScript 和 HTML 寫在一起
## state 跟 props 的差別在哪裡？

- state 是元件內本身的狀態，可以在 constructor 裡面初始化 state，setstate 會使元件重新渲染
- props 把父件傳來的資料內容取出來用，可以式陣列、字串或、函式，函數式元件只能接受 props


## 請列出 React 的 lifecycle 以及其代表的意義


### Mounting(載入)
- constructor(props) : 初始化 state ，super(props) 繼承父建構子的方法
- getDerivedStateFromProps(props, state): 在 render 前被觸發
- render(): 實際渲染 HTML 到 DOM
- componentDidMount(): 當 component 全都渲染到 DOM 後就會馬上觸發此方法

### Updating(更新)

- getDerivedStateFromProps(props, state): 在 render 前被觸發
- shouldComponentUpdate(nextProps, nextState):　可回傳布林值，決定是否要繼續渲染
- render()：若是 state 有任何變動，會重新渲染 HTML 到 DOM
- getSnapshotBeforeUpdate(prevProps, prevState): 可以在更新前取得 prevProps 和 prevState 的值
- componentDidUpdate(prevProps, prevState, snapshot): 當元件re-render更新完後的時間點就是調用這個方法的時候

### Unmounting(卸載)

- componentWillUnmount(): 當 component 從 DOM 上移除的時候觸發