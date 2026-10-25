<template>
  <main class="log">
    <h1>{{ t('log.title') }}</h1>
    <p class="log-lead">{{ t('log.lead') }}</p>

    <article class="log-entry" v-for="entry in logs" :key="entry.day">
      <h2 class="entry-title">Day {{ entry.day }} — {{ entry.block }}</h2>
      <img
        class="entry-img"
        :src="base + entry.img"
        :alt="`Day ${entry.day} 成果截圖`"
        loading="lazy"
      />
      <dl class="entry-notes">
        <div class="entry-note">
          <dt>{{ t('log.built') }}</dt>
          <dd>{{ entry.built }}</dd>
        </div>
        <div class="entry-note">
          <dt>{{ t('log.broke') }}</dt>
          <dd>{{ entry.broke }}</dd>
        </div>
        <div class="entry-note">
          <dt>{{ t('log.learned') }}</dt>
          <dd>{{ entry.learned }}</dd>
        </div>
      </dl>
    </article>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import logs from '../data/logs'

const { t } = useI18n()

// public/ 資產在子路徑部署下要接上 base（/GinoYu/）
const base = import.meta.env.BASE_URL
</script>

<style scoped>
.log {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-2);
}

.log-lead {
  margin-top: var(--space-2);
  color: var(--color-muted);
  max-width: 560px;
}

.log-entry {
  margin-top: var(--space-6);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-3);
}

.entry-title {
  font-size: 1.5rem;
}

.entry-img {
  margin-top: var(--space-2);
  max-width: 640px;
  width: 100%;
  border: 1px solid var(--color-border);
}

.entry-notes {
  margin: 0;
  margin-top: var(--space-2);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.entry-note dt {
  font-weight: 700;
  color: var(--color-accent);
}

.entry-note dd {
  margin: 0;
  color: var(--color-muted);
}
</style>
