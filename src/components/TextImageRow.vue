<script setup lang="ts">
defineProps(['theme', 'reversed']);
</script>

<template>
  <div class="row" :class="[theme, reversed]">
    <div class="text-col">
      <slot name="text"></slot>
    </div>
    <div class="image-col">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m mx-auto rounded-2xl grid grid-cols-[1.33fr_1fr] overflow-hidden;
}
.row.reversed {
  @apply grid-cols-[1fr_1.33fr];
}
.row.reversed .image-col {
  order: -1;
}
.text-col {
  @apply py-36 px-24 relative;
}
.primary {
  @apply bg-primary text-white;
}
.light {
  @apply bg-primary-lighter;
}
.primary .text-col::before {
  content: '';
  @apply absolute bottom-0 left-0 w-full rounded-full aspect-square;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.31;
}
.light .text-col::before {
  content: '';
  @apply absolute bottom-0 -left-1/3 w-[95%] aspect-square;
  background-image: url('../assets/shared/desktop/bg-pattern-two-circles.svg');
  background-position: right bottom;
  background-repeat: no-repeat;
}
.light:not(.reversed) .text-col::before {
  @apply left-0;
}
</style>
