<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>© {{ year }} Gino Yu · {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  margin-top: var(--space-8);
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-3) var(--space-2);
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
