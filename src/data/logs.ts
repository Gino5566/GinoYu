// Build Log 資料。每天一筆，built / broke / learned 一律是使用者當日筆記原文，
// 只做欄位切分，不改寫、不潤飾。img 路徑不帶開頭斜線，渲染時再接 BASE_URL。
export interface LogEntry {
  day: number
  block: string
  built: string
  broke: string
  learned: string
  img: string
}

const logs: LogEntry[] = [
  {
    day: 1,
    block: '骨架 + CSS variables + 部署設定',
    built: '初步實作了首頁',
    broke:
      '實驗了將body跟home的margin移掉 body變化比較不明顯 但body原本margin預設是8px body的背景色會上繳給整個畫布 所以8px的縫跟四周同色看不見 home我用margin設 0 auto會置中的原因來解釋的話 是因為有設置max-width 960px auto時 左外距+自身寬度+右外距要等於父容器寬度才會置中',
    learned: '改完看似沒有變化 需要用F12確認',
    img: 'logs/day1.png',
  },
  {
    day: 2,
    block: 'Navbar（Flex）',
    built: '新建NavBar導覽列',
    broke: '試著將flex-direction設column他會變垂直排列 設成column的功能是把主軸改垂直',
    learned:
      '學到nav是語意標籤 畫面上等同div 是寫給搜尋引擎、區塊化(類似分類讓後續開發可以更容易知道每個區域它的功能是什麼不至於全部都用一樣的)',
    img: 'logs/day2.png',
  },
]

export default logs
