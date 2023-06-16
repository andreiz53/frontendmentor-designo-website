<script setup lang="ts">
defineProps(['theme']);
</script>

<template>
  <button :class="theme">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  @apply text-sm font-medium leading-5 tracking-[1px] uppercase  px-4 py-5  rounded-lg;
}
.white {
  @apply bg-white text-dark;
}
</style>
