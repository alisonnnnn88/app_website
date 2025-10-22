# HW3 React專案整合個人網頁
- [解說影片](https://youtu.be/cJjc5HpTFEM) | [AItest.js](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/AItest.js) | [index.html](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/index.html) | [index.js](https://github.com/alisonnnnn88/introduction_to-_the-_internet_alison/blob/main/index.js)
<details>
<summary><strong>HW3 Demo 說明</strong></summary>

<br>

這個專案是一個**電影小高手**，可以幫助喜歡看電影的朋友們快速搜索 AI 推薦的熱門電影，或是對相關電影影評、海報設計等等有興趣也可以問這個 AI。

---

### 功能介紹

1. 畫面上方可以點選【🔥 熱門電影】，讓使用者挑選想看的類型，點選後由 AI 為您解答此類型的熱門電影 
2. 畫面下方有對話框，可以自行輸入文字詢問 AI 關於電影的問題，也可以參考紫色按鈕的問題，幫助使用者有更好的詢問方向
(使用的API: gemini-2.5-flash)

---

### 畫面設計

以暗色系呈現背景，黃色或白色顯示文字，展現一種科技感。

---

### 功能實作截圖

#### ✅ 熱門電影可篩選類型  
<img width="664" src="https://github.com/user-attachments/assets/10c2f70b-bc30-4513-b35b-ba83a4138b0d" />  
<img width="646" src="https://github.com/user-attachments/assets/dd12d3a7-b507-48fb-bfaf-7a6f4120bb0c" />

#### ✅ 安裝 ReactMarkdown：支援 AI 回應以粗體或表情符號標示重點 
<img width="1856" src="https://github.com/user-attachments/assets/e93d1eec-e686-4199-9b39-1ac7f61a8a00" />

#### ✅ 對話框以灰字顯示，等待使用者輸入文字：以 placeholder 呈現灰字的部分（灰色為預設）  
<img width="1847" src="https://github.com/user-attachments/assets/f255c03f-1a48-4ef2-b831-af860cb0d52f" />

#### ✅ 以紫色按鈕提示使用者怎麼問 AI  
<img width="1633" src="https://github.com/user-attachments/assets/cfe6b4ad-283e-4f3a-a557-db72cedf141f" />

#### ✅ 有成功出現 Loading 狀態  
<img width="1847" src="https://github.com/user-attachments/assets/cc2dc6f1-6aca-42a0-bcb9-f0aad6090c35" />

---

### 安裝方式

1. 在 cmd 輸入 npx create-react-app@latest my-app 建立新的專案資料夾
2. 把作業一的 index.html 相關資料夾與檔案複製到新的專案資料夾的 public 資料夾
3. 把作業二的 AItest.tsx 轉成 AItest.js (程式碼修改可以問AI)
4. 修改 index.js 和 index.html/
index.html: 在想加連接 AI 的地方，找到程式碼，加 <div id='react root...../
index.js: 複製貼上老師的，把安裝重複的刪掉
</details>
