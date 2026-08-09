<template>
  <section>
    <h1>{{ t('contact.title') }}</h1>
    <p>{{ t('contact.email') }}: your@gmail.com</p>
    <p>{{ t('contact.linkedin') }}: <a href="#" target="_blank">Link</a></p>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
