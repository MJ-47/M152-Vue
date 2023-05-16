<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Ex1">Aufgabe 1</RouterLink>
      <RouterLink to="/Ex2">Aufgabe 2</RouterLink>
      <RouterLink to="/Ex12_2">Aufgabe 12.2</RouterLink>
      <RouterLink to="/test">test</RouterLink>
      <RouterLink to="/scss">SCSS test</RouterLink>
      <RouterLink to="/rwd">RWD test</RouterLink>
      <RouterLink to="/modalform">Modal <Form></Form></RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  background-color: rgb(245, 115, 115);
}

nav a {
  display: block;
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
}
nav a:hover {
  color: rgb(0, 0, 0);
}
</style>
