<template>
  <nav class="nav">
    <h1 class="logo">My Portfolio</h1>
    <ul class="links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

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
</style>
