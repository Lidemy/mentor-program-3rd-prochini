## hw1：短網址系統設計

![Imgur](https://i.imgur.com/mnvpKPx.jpg)

## hw2：部署

http://prochini.com/php_commentboard/index.php

## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

對 Google 的好處:
1. 得知使用者的身分與所造訪的任何網站，讓使用這些DNS服務的ISP業者得以銷售使用者的瀏覽資料
2. 銷售使用者資料或將它們用來執行目標式廣告
對一般大眾的好處:
1.  Google 的 DNS 穩定性高、比較少故障

## 什麼是資料庫的 lock？為什麼我們需要 lock？
Lock 主要影響的是同步”寫入”的問題，而不是同步讀取的問題，避免重複寫入資料，影響資料正確性。

Lock mode 主要分為下列幾種：

• Shared (S)
• Update (U)
• Exclusive (X)

1. 當Transaction A資料寫入 Table A 的時候，Transaction A 會對特定的資料範圍


Lock 主要影響的是同步”寫入”的問題，而不是同步讀取的問題，避免重複寫入資料，影響資料正確性。

Lock mode 主要分為下列幾種：

• Shared (S)
• Update (U)
• Exclusive (X)

1. 當Transaction A資料寫入 Table A 的時候，Transaction A 會對特定的資料範圍


(Row or Page) 進行 U/Locks

2. 寫入的當下U/Locks 轉換為 X/Lock。

3. 一旦寫入完畢，X/Locks 釋放，不會等到 Transaction A 結束。

4. U/Locks 的時候，其他 transaction 還是可以讀取資料的。

## NoSQL 跟 SQL 的差別在哪裡？

- 關聯式資料庫中，通常會隱藏 (或「正規化」) 書籍記錄，並將記錄存放於個別表格中，同時以主鍵和外鍵限制來定義關係。在此範例中，書籍表格有 ISBN、書名和版本編號欄，作者表格有 AuthorID 和作者名稱欄，最後 Author-ISBN 表格有 AuthorID 和 ISBN 欄。
關聯式模型的設計是使資料庫強化資料庫表格間的參考完整性，並經過正規化以減少重複，而且針對儲存加以整體優化。
- NoSQL 資料庫中，書籍資料通常儲存為 JSON 文件。就每一本書，將項目、ISBN、書名、版本編號、作者名稱和 AuthorID 存成單一文件中的屬性。在此模型中，資料針對直覺開發和橫向擴充進行優化。

## 資料庫的 ACID 是什麼？


ACID，是指資料庫管理系統（database management system）在寫入或更新資料的過程中，為保證交易（transaction）是正確可靠的，所必須具備的四個特性：
1. 原子性（atomicity，或稱不可分割性）
要求交易完整執行或完全不執行。
- 完整執行 => commit,將結果永久儲存於資料庫中
- 完全不執行 => 如果有一個SQL失敗,rollback,則將之前執行結果的全部回復,當作沒發生過一樣
2. 一致性（consistency）、
指交易過程所異動的資料在交易前與交易後必須一致，資料庫的資料必須仍然符合資料庫結構描述。
3. 隔離性（isolation，又稱獨立性）、
並行的交易必須分開執行，一個交易不會影響到其它交易的執行結果，或被其它交易所干擾。
4. 持久性（durability）。
將結果永久儲存於資料庫中，就算意外的系統故障或停電狀況具備還原成上個已知狀態的能力。


