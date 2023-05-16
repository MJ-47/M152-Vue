<script setup>
import { ref } from "vue";

const bgColor = ref("");
const textColor = ref("");
</script>



<template>
  <h1 class="text-center">Excercise 1</h1>
  <h2 class="text-center">Color Switcher</h2>

  <div class="text-center">
    <button :class="bgColor + ' ' + textColor">
      {{ textcolor }} on {{ bgColor }}My Button
    </button>

    <ul>
      <li @click="bgColor = 'bg-white'">BG white</li>
      <li @click="bgColor = 'bg-black'">BG black</li>
      <li @click="bgColor = 'bg-red'">BG red</li>
      <li @click="bgColor = 'bg-green'">BG green</li>
    </ul>

    <ul>
      <li @click="textColor = 'text-white'">Text white</li>
      <li @click="textColor = 'text-black'">Text black</li>
      <li @click="textColor = 'text-red'">Text red</li>
      <li @click="textColor = 'text-green'">Text green</li>
    </ul>
  </div>
</template>



<style>
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.text-black {
  color: black;
}
.text-white {
  color: white;
}

.bg-red {
  background-color: red;
}
.bg-green {
  background-color: green;
}
.bg-black {
  background-color: black;
}
.bg-white {
  background-color: white;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

div {
  align-self: center;
}
</style>