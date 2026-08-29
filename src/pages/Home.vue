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
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
</style>
