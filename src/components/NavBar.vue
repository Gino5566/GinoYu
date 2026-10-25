<template>
  <header class="navbar">
    <nav class="navbar-inner">
      <router-link class="brand" to="/">Gino Yu</router-link>

      <ul class="nav-links">
        <li>
          <router-link :to="{ path: '/', hash: '#skills' }">{{ t('nav.skills') }}</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/', hash: '#projects' }">{{ t('nav.projects') }}</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/', hash: '#contact' }">{{ t('nav.contact') }}</router-link>
        </li>
        <li>
          <router-link to="/log">{{ t('nav.log') }}</router-link>
        </li>
      </ul>

      <button class="lang-toggle" type="button" @click="toggleLocale">
        {{ locale === 'zh-TW' ? 'EN' : '中文' }}
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const { t, locale } = useI18n()

function toggleLocale() {
  setLocale(locale.value === 'zh-TW' ? 'en' : 'zh-TW')
}
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid var(--color-border);
}

.navbar-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: var(--space-3);
}

.nav-links a {
  color: var(--color-text);
  text-decoration: none;
}

.lang-toggle {
  font: inherit;
  color: var(--color-text);
  background: none;
  border: 1px solid var(--color-border);
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
}

/* 行動版兩行式：第一行 brand + 語言鈕（沿用 space-between），
   連結列用 order 排到最後、basis 撐滿整行逼它折到第二行 */
@media (max-width: 768px) {
  .navbar-inner {
    flex-wrap: wrap;  
    gap: var(--space-2);
  }

  .nav-links {
    order: 3;
    flex-basis: 100%;
  }
}
</style>
