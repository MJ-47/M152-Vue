<script setup>
import { ref } from "vue";


const showButton = ref();
</script>

<template>
  <body>
    <h1 class="text-center">Form</h1>

    <div class="text-center">
      <button @click="show" class="showButton">Show</button>
    </div>
  </body>
</template>


<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.showButton {
  border-radius: 30px;
  font-size: 20pt;
  width: 50px;
  height: 20px;
}
</style>