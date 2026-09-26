<template>
  <NavBar />
  <router-view />
  <SiteFooter />
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
