<script setup lang="ts">
defineProps(['title', 'description']);
</script>

<template>
  <div class="row">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m mx-auto bg-primary rounded-2xl py-16 text-center bg-no-repeat bg-right;
  background-image: url('../../assets/web-design/desktop/bg-pattern-intro-web.svg');
}
h1 {
  @apply text-white mb-6;
}
p {
  @apply text-white max-w-sm mx-auto;
}
</style>
