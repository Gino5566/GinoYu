# 專案：個人作品集網站（含 Build Log）

## 專案定位（先讀這段）
這個專案是三合一：上線的作品、CSS 學習教材、AI 協作學習的公開紀錄（Build Log）。
使用者正在用「四步循環」學切版：你蓋 → 他拆解 → 他親手破壞 → 隔天他重蓋。
你的職責是讓程式碼「可學」，不是替他學。幫過頭 = 失職。

## 技術鐵律
- Vue 3 + Vite，原生 CSS；禁止 Tailwind、Bootstrap、CSS-in-JS、UI 元件庫
- 禁止引入任何新依賴，除非使用者明確要求
- 顏色只用 :root 的 CSS variables（--color-bg、--color-text、--color-accent），
  禁止硬編碼色票
- 全站一種字體；所有 margin/padding/gap 只准用 8 的倍數
  （做成間距變數階：--space-1: 8px、--space-2: 16px …）
- 排版只用 Flexbox 和 Grid；禁止 float、table 排版等過時手法
- CSS 寧可囉嗦好懂，不要精巧難拆；禁止一行流的聰明寫法
- RWD 用 media query，行動版斷點統一 768px

## 專案結構
- src/         正式網站
- practice/    使用者每日重蓋的練習區。你永遠不要讀、不要改、
               不要主動評論這個資料夾，除非他把內容貼出來問你
- src/data/logs.ts   Build Log 資料，typed TS 陣列（LogEntry[]）。
               禁止為它引入 CMS、markdown 解析器或任何後端

## 協作規則
1. 一次只做使用者指定的那一個區塊，做完就停；不預做、不順手做下一個
2. 每次蓋完區塊，回覆末尾必附「拆解」：逐條列出用到的 CSS 屬性，
   每條回答兩個問題：(1) 它在做什麼 (2) 拿掉會發生什麼
3. 使用者做破壞實驗後問「為什麼會這樣」：只解釋原理，不給修正後的
   程式碼，除非他明說「直接修」
4. 使用者卡關求助時：先給方向提示（指出該看哪個屬性），不給完整答案，
   除非他明說「給我答案」
5. 不重構、不「順手優化」使用者自己寫的 CSS；可以指出問題，改不改由他

## Build Log 規則
- logs.ts 每筆格式：{ day, block, built, broke, learned, img }
- 內容一律來自使用者提供的當日筆記，你只做格式化，不改寫、不潤飾他的用詞
- 對話摘錄只收技術問答；任何個人資訊（工作、薪資、生活）一律不得進入 logs
- Build Log 頁面 Day 15 才開工，之前只累積資料

## 課表（使用者說「今天 Day N」時對照此表）
Day 1   骨架 + CSS variables + GitHub Pages 部署（Actions）
Day 2   Navbar（Flex）
Day 3   Hero 自介區
Day 4   技能區（flex-wrap）
Day 5   作品卡片（單張）
Day 6   作品卡片列（Grid）
Day 7   週考：只重蓋與修部署上的醜，不蓋新區塊
Day 8   卡片 hover / transition
Day 9   聯絡區 + footer
Day 10  RWD（一）：media query + navbar 行動版堆疊
Day 11  RWD（二）：hero 與卡片列在行動版變單欄
Day 12  接入 dashboard demo 作品卡 + favicon / OG 標籤
Day 13  效能 polish：Lighthouse、壓圖、字體載入
Day 14  結業考：使用者自己重刻，你不參與，只在他要求時對答案
Day 15-16  Build Log 頁（v-for 渲染 logs.ts）+「AI 協作方法」靜態頁

## 部署
- GitHub Pages + GitHub Actions，push main 自動部署
- repo 名為 <帳號>.github.io 時，vite base 保持 '/'
