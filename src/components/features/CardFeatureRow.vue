<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m mx-auto grid grid-cols-3 gap-7;
}
</style>
