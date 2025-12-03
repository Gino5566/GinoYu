<template>
  <section>
    <h1>Projects</h1>

    <div v-for="p in projects" :key="p.name" class="project-card">
      <h2>{{ p.name }}</h2>
      <p>{{ p.desc }}</p>
      <a :href="p.link" target="_blank">View Project</a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  name: string
  desc: string
  link: string
}

const projects: Project[] = [
  { name: 'Project A', desc: 'Description...', link: '#' },
  { name: 'Project B', desc: 'Description...', link: '#' }
]
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
}
</style>
