## 跟你朋友介紹 Git

# Git 功能 

1. Version Control System，幫檔案建立各個版本，記錄歷史紀錄，可以復原先前的檔案。
2. 原理類似 ，把相關檔案()放進資料夾，一個資料夾就是當作版本，並以亂數命名資料夾
3. 多人協作的時候，開發新功能都會多開一條branch ，可以把檔案從遠端抓下來，在本地端工作，可同時多人變更同一個檔案，最後在推到遠端整合。

# 操作

- 初始化 git init 建立git資料夾
- 忽略 .git ignore
- 將檔案加入暫存區 git add
- 確認無誤後提交git commit -am 到檔案庫中
- git checkout 跑到別的branch 去玩
- git log 看有幾個commit還有亂數代號
- git status 看目前的branch 有哪些檔案存活
- git branch 可查詢現在在哪個分支
- git push 推到遠端環境
- merge 完處理不同 branch 之間 conflict 和 merge 的問題 
- pull 下來本地端