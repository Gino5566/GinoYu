<template>
  <nav class="nav">
    <h1 class="logo">My Portfolio</h1>
    <ul class="links">
      <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
      <li><router-link to="/projects">{{ t('nav.projects') }}</router-link></li>
      <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
      <li><router-link to="/contact">{{ t('nav.contact') }}</router-link></li>
      <li>
        <button class="lang-btn" @click="toggleLocale">
          {{ locale === 'zh-TW' ? 'EN' : '中文' }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale, type Locale } from '../i18n'

const { t, locale } = useI18n()

function toggleLocale() {
  const next: Locale = locale.value === 'zh-TW' ? 'en' : 'zh-TW'
  setLocale(next)
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #222;
  color: white;
}
.links {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-active {
  border-bottom: 2px solid #42b883;
}
.lang-btn {
  background: transparent;
  border: 1px solid #42b883;
  color: #42b883;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  font: inherit;
}
.lang-btn:hover {
  background: #42b883;
  color: #222;
}
</style>
