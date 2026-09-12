<template>
    <header class="navbar">
        <nav class="nav-inner">
            <router-link class="brand" to="/">Gino Yu</router-link>
            <a class="brand" href="/">{{ t('nav.brand') }}</a>
            <ul class="nav-links">
                <li><a href="#skills">{{ t('nav.skills') }}</a></li>
                <li><a href="#projects">{{ t('nav.projects') }}</a></li>
                <li><a href="#contact">{{ t('nav.contact') }}</a></li>
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

const toggleLocale = () => {
    setLocale(locale.value === 'zh-TW' ? 'en' : 'zh-TW')
}
</script>
<style scoped>
.nav-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: var(--space-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>