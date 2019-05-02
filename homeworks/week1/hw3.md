## 教你朋友 CLI

H0w 哥，叛徒
1.	打開cmd命令程式字元那個黑黑的東西
2.	Cd 路徑， 到你想要放wifi的資料夾
3.	mkdir wifi ，創造出一個wifi 資料夾
4.	Cd wifi ，進入wifi資料夾
5.	Touch afu.js ，碰一下阿福，就生出一個新檔案了
6.	恩

- Command line 就是對電腦下指令，command line interface，以純文字操縱電腦，移動到路徑或是新增刪除資料夾等行為。

-	Pwd : 印出目前所在位置
-	Ls : 列出檔案清單
-	Cd+位置 : 移動到指定位置
-	Help : 指令使用手冊
-	Touch : touch 檔名 (修改時間)
        Touch 新檔名(建立檔案)
-	Rm: rm 檔名(刪除檔案)
        Rm -r 檔名(刪除資料夾)
-	Mkdir : mkdir 檔名(新增資料夾) 
-	Mv : mv 檔名 目錄名 (移動檔案)
        絕對位置-/路徑，相對位置-cd移動到上下層
        Mv 檔案 新檔名 (檔案改名)
-	Cp : cp 檔案 新檔名 (複製檔案)
         Cp -r 資料夾 薪資料夾名 (複製資料夾)
-	Vim : 文字編輯器，i = 插入模式，可輸入文字，Esc 普通模式，要離開:q!，wq 存檔離開，               在command line 中修改檔案
-	Vim + 檔名 (直接修改檔案) 
-	Cat : 看檔案內容
-	Grep : grep 關鍵字 檔名(搜尋關鍵字)
-	Wget : wget 連結網址 (下載)
-	Curl : curl 網址 (送出request，測試API)
-	Redirection : ls –al > list.txt (把輸出轉向到其他位置)
          Echo “123” > 123.txt(覆蓋檔案內容)
          Echo “123” >> 123.txt(插入檔案內容)
-	Pipe : 指令｜指令　(組合指令)
          Cat 檔名 |grep 關鍵字 >> 新增檔案
