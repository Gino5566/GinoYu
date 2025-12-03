<template>
  <NavBar />

  <main class="container">
    <router-view />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

.container {
  padding: 20px;
  max-width: 900px;
  margin: auto;
}
</style>
