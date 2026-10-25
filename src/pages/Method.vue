<template>
  <main class="method">
    <h1>{{ t('method.title') }}</h1>
    <p class="method-lead">{{ t('method.lead') }}</p>

    <section class="method-section">
      <h2>{{ t('method.loopTitle') }}</h2>
      <ol class="method-loop">
        <li v-for="(step, i) in tm('method.loop')" :key="i">{{ rt(step) }}</li>
      </ol>
    </section>

    <section class="method-section">
      <h2>{{ t('method.rulesTitle') }}</h2>
      <ul class="method-rules">
        <li v-for="(rule, i) in tm('method.rules')" :key="i">{{ rt(rule) }}</li>
      </ul>
    </section>

    <section class="method-section">
      <h2>{{ t('method.resultTitle') }}</h2>
      <p class="method-result">{{ t('method.result') }}</p>
      <router-link class="method-cta" to="/log">Build Log →</router-link>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
</script>

<style scoped>
.method {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-2);
}

.method-lead {
  margin-top: var(--space-2);
  color: var(--color-muted);
  max-width: 560px;
}

.method-section {
  margin-top: var(--space-6);
}

.method-section h2 {
  font-size: 1.5rem;
}

/* 有序清單：步驟有先後，拿回瀏覽器的編號但自己管間距 */
.method-loop {
  list-style: decimal;
  padding-left: var(--space-3);
}

.method-loop li,
.method-rules li {
  margin-top: var(--space-1);
  max-width: 640px;
}

.method-rules li {
  border-left: 4px solid var(--color-accent);
  padding-left: var(--space-2);
}

.method-result {
  margin-top: var(--space-2);
  color: var(--color-muted);
  max-width: 640px;
}

.method-cta {
  display: inline-block;
  margin-top: var(--space-2);
  font-weight: 700;
}
</style>
