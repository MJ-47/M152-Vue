<script setup>
import { ref } from "vue";
</script>

<template>
  <div>
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="green"
        stroke-width="4"
        fill="yellow"
      />
    </svg>
  </div>

  <div>
    <svg width="400" height="110">
      <rect
        width="300"
        height="100"
        style="fill: rgb(0, 0, 255); stroke-width: 3; stroke: rgb(0, 0, 0)"
      />
    </svg>
  </div>
</template>


<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>