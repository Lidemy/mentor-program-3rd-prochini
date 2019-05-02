## 交作業流程

1.	新開一個 branch：git branch week1 
2.	切換到 branch：git checkout week1
3.	git status 確認修改的作業
4.	git commit –am “name” 
5.	等系統改作業，if pass 進行到第6行，else if 修改作業
6.	git push origin week1
7.	到GitHub，compare & pull request
8.	create a pull request
9.	複製pull request網址
10.	到交作業專用的Repo https://github.com/Lidemy/homeworks-3rd
11.	Issue 建立New Issue
12.	標題格式規範 [Week1]，打上標題、內文，commit
13.	if 作業pass ，Huli會同意merge並關閉Issue，else if 修改作業
14.	回到CLI介面，git checkout master 
15.	git pull origin master，把merge後的檔案拉下來
16.	git branch –d week1
17.	git branch 剩下master
18.	完成!
