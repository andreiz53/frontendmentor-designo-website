<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue';
</script>

<template>
  <div class="home-hero-row">
    <div class="col">
      <h1>Award-winning custom designs and digital branding solutions</h1>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <BaseButton theme="white" target="about">Learn more</BaseButton>
    </div>
    <div class="bg-container"></div>
  </div>
</template>

<style scoped>
.home-hero-row {
  @apply bg-primary rounded-2xl max-w-m mx-auto text-white px-24 py-36 relative;
  background-image: url('../../assets/home/desktop/bg-pattern-hero-home.svg');
  background-position: right center;
  background-size: 57% 100%;
  background-repeat: no-repeat;
}
.col {
  @apply max-w-[540px];
}
.home-hero-row p {
  @apply max-w-[445px] my-10;
}
.bg-container {
  @apply absolute bottom-0 right-0 w-full max-w-xl aspect-[1/1.42] pointer-events-none;
  background-image: url('../../assets/home/desktop/image-hero-phone.png');
  background-position-y: 145px;
}
</style>
