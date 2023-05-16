<script setup>
import { ref } from "vue";
</script>

<template>
  <div>
    <nav>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </nav>
  </div>
</template>





<style scoped lang="scss">
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

nav {
  display: flex;

  a {
    padding: 10px;
    background-color: blue;
  }
}

/* SCSS */
a {
  color: blue;
  &:hover {
    color: red;
  }
}

.button {
  background-color: teal;
  &--primary {
    background-color: coral;
  }
}
</style>