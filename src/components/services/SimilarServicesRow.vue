<script setup lang="ts"></script>

<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m mx-auto grid grid-cols-2 gap-7;
}
</style>
