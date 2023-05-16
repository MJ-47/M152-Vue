<script setup>
import { ref } from "vue";

const bgColor = ref("");
const textColor = ref("");
</script>

<template>

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