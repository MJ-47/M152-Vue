<script setup>
import { ref } from "vue";

const color = ref("black");
</script>

<template>
<div>
  <svg width="300" height="300">
    <line x1="0" y1="0" x2="300" y2="300"></line>
  </svg>
  <input type="range" v-model="size" min="100" max="500"/>
</div>

<button @click="color='red'"></button>
</template>



<style>

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>