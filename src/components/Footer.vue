<template>
  <footer class="footer">
    © {{ new Date().getFullYear() }} Your Name — {{ t('footer.rights') }}
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.footer {
  margin-top: 60px;
  padding: 40px;
  text-align: center;
  color: #666;
}
</style>
