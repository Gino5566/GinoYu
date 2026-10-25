export default {
  nav: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    log: 'Build Log',
  },
  log: {
    title: 'Build Log',
    lead: 'A public record of rebuilding this site in 16 days: build a block, break it by hand, write down what was learned. Notes are kept verbatim (in Chinese).',
    built: 'Built',
    broke: 'Broke',
    learned: 'Learned',
  },
  method: {
    title: 'How I Work with AI',
    lead: 'This site was rebuilt in collaboration with AI — but the goal was never "let AI finish it". The goal was being able to explain every line and its trade-offs to another engineer. This page documents the actual method.',
    loopTitle: 'The Four-Step Loop',
    loop: [
      'AI builds: one block per day, with a line-by-line breakdown — what each property does and what breaks without it.',
      'I dissect: read every line until I can explain the why myself.',
      'I break it: remove properties, change values, watch the layout collapse, then ask for the principle.',
      'I rebuild: next day, re-create it from scratch in practice/ without looking, graded strictly by AI.',
    ],
    rulesTitle: 'Rules for the AI',
    rules: [
      'All notes are written by me; AI only formats them — every line in the Build Log is my own words.',
      'When I am stuck: direction hints first, never the full answer.',
      'When my understanding is wrong: correct me directly, no sugar-coating.',
      'Final exam: AI observes only, and grades only when I ask.',
    ],
    resultTitle: 'The Result',
    result: 'The final exam after 15 days: rebuilding the hero, skills and project grid by hand without looking at the source. Every issue caught was about rigor (a missing comma, inconsistent heading levels) — none were conceptual. The evidence for this method is this site itself, and the daily notes in the Build Log.',
  },
  home: {
    hero: {
      kicker: 'Front-end Developer · Vue 3 / TypeScript',
      desc: 'I build hand-crafted, readable interfaces with Vue 3 and TypeScript, and am expanding toward full-stack work (CI/CD, testing).',
    },
    projects: 'View Projects',
    contact: 'Contact Me',
    skills: {
      frontend: {
        title: 'Frontend',
        items: ['Vue 3 / TypeScript', 'Native CSS / RWD', 'vue-i18n Localization'],
      },
      gamedev: {
        title: 'Game Dev',
        items: ['Web Game Development', 'Animation / Effects', 'Gameplay Systems'],
      },
      engineering: {
        title: 'Engineering',
        items: ['C# / .NET / SQL', 'GitHub Actions CI/CD', 'Docker / Testing'],
      },
    },
  },
  projects: {
    title: 'Projects',
    view: 'View Source',
    portfolio: {
      name: 'Personal Portfolio Site',
      desc: 'The site you are looking at. Hand-built with Vue 3 and native CSS, with i18n and GitHub Actions auto-deploy.',
    },
    dashboard: {
      name: 'Dashboard Demo',
      desc: 'A data dashboard project, being polished — coming soon.',
    },
    wip: 'Coming soon',
  },
  about: {
    title: 'About Me',
    body: 'Write your background, experience, and goals here.',
  },
  contact: {
    title: 'Contact',
    lead: 'Open to work and collaboration — feel free to reach out.',
  },
  footer: {
    rights: 'All Rights Reserved.',
  },
}
