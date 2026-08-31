<template>
  <main class="home">
    <section class="hero">
      <p class="hero-kicker">{{ t('home.hero.kicker') }}</p>
      <h1 class="hero-title">Gino Yu</h1>
      <p class="hero-desc">{{ t('home.hero.desc') }}</p>
      <div class="hero-actions">
        <a class="hero-cta" href="#projects">{{ t('home.projects') }}</a>
        <a class="hero-cta hero-cta-ghost" href="#contact">{{ t('home.contact') }}</a>
      </div>
    </section>

    <section id="skills" class="skills">
      <h2 class="section-title">{{ t('nav.skills') }}</h2>
      <div class="skill-cards">
        <article class="skill-card" v-for="group in skillGroups" :key="group">
          <h3>{{ t(`home.skills.${group}.title`) }}</h3>
          <ul>
            <li v-for="(item, i) in tm(`home.skills.${group}.items`)" :key="i">
              {{ rt(item) }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section id="projects" class="projects">
      <h2 class="section-title">{{ t('projects.title') }}</h2>
      <article class="project-card">
        <div class="card-cover" aria-hidden="true">Portfolio</div>
        <div class="card-body">
          <h3>{{ t('projects.portfolio.name') }}</h3>
          <p>{{ t('projects.portfolio.desc') }}</p>
          <ul class="card-tags">
            <li>Vue 3</li>
            <li>TypeScript</li>
            <li>Native CSS</li>
          </ul>
          <a
            class="card-link"
            href="https://github.com/Gino5566/GinoYu"
            target="_blank"
            rel="noopener"
          >{{ t('projects.view') }}</a>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

const skillGroups = ['frontend', 'gamedev', 'engineering'] as const
</script>

<style scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-2);
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
}

.hero-kicker {
  color: var(--color-accent);
  font-weight: 700;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.1;
}

.hero-desc {
  max-width: 560px;
  color: var(--color-muted);
}

.hero-actions {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.hero-cta {
  padding: var(--space-1) var(--space-3);
  background: var(--color-accent);
  color: var(--color-bg);
  text-decoration: none;
  font-weight: 700;
}

.hero-cta-ghost {
  background: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.skills {
  margin-top: var(--space-8);
}

.section-title {
  font-size: 1.5rem;
}

.skill-cards {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.skill-card {
  flex: 1 1 240px;
  border: 1px solid var(--color-border);
  padding: var(--space-3);
}

.skill-card-grow3{
  flex: 2 1 240px;
  border: 1px solid var(--color-border);
  padding: var(--space-3);
}

.skill-card li {
  margin-top: var(--space-1);
  color: var(--color-muted);
}

.projects {
  margin-top: var(--space-8);
}

.project-card {
  max-width: 360px;
  margin-top: var(--space-3);
  border: 1px solid var(--color-border);
}

.card-cover {
  aspect-ratio: 16 / 9;
  background: var(--color-border);
  color: var(--color-muted);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
}

.card-body p {
  color: var(--color-muted);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.card-tags li {
  border: 1px solid var(--color-border);
  padding: 0 var(--space-1);
  font-size: 0.875rem;
  color: var(--color-muted);
}
</style>
