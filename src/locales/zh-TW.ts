export default {
  nav: {
    home: '首頁',
    skills: '技能',
    projects: '作品',
    about: '關於我',
    contact: '聯絡',
    log: 'Build Log',
  },
  log: {
    title: 'Build Log',
    lead: '16 天重建這個網站的公開紀錄：每天蓋一個區塊、親手破壞它、記下學到的東西。筆記為當日原文，不潤飾。',
    built: '蓋了',
    broke: '破壞實驗',
    learned: '學到',
  },
  method: {
    title: 'AI 協作方法',
    lead: '這個網站是跟 AI 協作重建的，但目標不是「讓 AI 做完」，而是讓我能向另一個工程師解釋每一行的取捨。這頁記錄實際運作的方法。',
    loopTitle: '四步循環',
    loop: [
      'AI 蓋：每天只蓋一個區塊，附上逐條拆解——每個屬性在做什麼、拿掉會怎樣。',
      '我拆解：讀懂每一行，問到能自己講出為什麼為止。',
      '我破壞：親手改壞它——拿掉屬性、改數值，觀察畫面怎麼崩，再問原理。',
      '我重蓋：隔天在 practice/ 不看原始碼重刻，由 AI 嚴格對答案。',
    ],
    rulesTitle: '給 AI 的規矩',
    rules: [
      '筆記一律我寫，AI 只格式化不改寫——Build Log 的每一句都是我的原文。',
      '卡關時先給方向提示，不直接給答案。',
      '我的理解答錯時直接指正，不客套。',
      '結業考 AI 全程旁觀，只在我開口時對答案。',
    ],
    resultTitle: '結果',
    result: '15 天後的結業考：不看原始碼徒手重刻 hero、技能區、作品卡片列。被抓出的問題全是嚴謹度（少逗號、層級不一致），沒有觀念錯誤。這個方法的證據就是這個網站本身，以及 Build Log 裡每天的筆記。',
  },
  home: {
    hero: {
      kicker: '前端工程師 · Vue 3 / TypeScript',
      desc: '主力 Vue 3 與 TypeScript，手刻介面、重視可讀性，正把能力往全端與工程化（CI/CD、測試）擴展。',
    },
    projects: '查看作品',
    contact: '聯絡我',
    skills: {
      frontend: {
        title: '前端',
        items: ['Vue 3 / TypeScript', '原生 CSS / RWD 切版', 'vue-i18n 多語系'],
      },
      gamedev: {
        title: '遊戲開發',
        items: ['網頁遊戲開發', '動畫 / 特效', '玩法系統'],
      },
      engineering: {
        title: '工程',
        items: ['C# / .NET / SQL', 'GitHub Actions 自動部署', 'Docker / 自動化測試'],
      },
    },
  },
  projects: {
    title: '作品',
    view: '查看原始碼',
    portfolio: {
      name: '個人作品集網站',
      desc: '就是你正在看的這個站。Vue 3 + 原生 CSS 手刻，含多語系與 GitHub Actions 自動部署。',
    },
    dashboard: {
      name: 'Dashboard Demo',
      desc: '資料儀表板作品，整理中，近期接入。',
    },
    wip: '整理中',
  },
  about: {
    title: '關於我',
    body: '在這裡寫下你的背景、經歷與目標。',
  },
  contact: {
    title: '聯絡',
    lead: '想聊聊合作或工作機會，歡迎來信。',
  },
  footer: {
    rights: '版權所有。',
  },
}
