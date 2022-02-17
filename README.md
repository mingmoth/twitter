# Simple Twitter Challenge

專案採前後端分離開發，本專案為[後端專案](https://github.com/mingmoth/twitter-api-2020)提供前端頁面

## 專案網址:
請點[此處](https://mingmoth.github.io/twitter/#/signin)前往


## 測試帳號
* 管理員帳號： root
* 一般使用者帳號： user1  
* 密碼：皆為： 12345678


## 功能
- 含前台與後台二不同登入入口, 使用者只能使用前台功能，管理員只能使用後台登入
- 使用者可以瀏覽所有推文 和 該推文的按讚數 及 留言
- 使用者可以發布新推文，並回覆現有推文 和 進行按讚/取消讚動作
- 使用者可以追蹤/退追其他使用者
- 使用者可以更改基本資料:帳號/名稱/email/密碼/自我介紹...等
- 使用者可以在公開聊天室傳訊息給其他正在線上的使用者
- 使用者可以在私人聊天室傳訊息給特定使用者，並跳出未讀通知
- 使用者可接收自身推文被回覆/按讚通知
- 使用者可接收已追蹤使用者的推文/回覆/按讚動作通知

- 管理員可檢視所有推文 並有刪除權限
- 管理員可檢視所有使用者資料

## 本地專案啟動
1. 下載本前端專案
```
git clone https://github.com/mingmoth/twitter.git
```
2. 進入本專案資料夾
```
cd twitter
```
3. 安裝所需套件
```
 npm install
```
4. 進入/src/utils/apis.js 將第4行修改為：

```
const baseURL = 'http://localhost:3000/api'
```
5. 進入/src/main.js 將第12行修改為：
```
connection: SocketIO('http://localhost:3000', { auth: { token }, autoConnect: false }),
```
6. 依[後端專案](https://github.com/mingmoth/twitter-api-2020)README.md指示下載並部屬本地伺服器

7. 啟動本地前端專案
```
npm run serve
```
8. 於瀏覽器啟動網址: http://localhost:8080

