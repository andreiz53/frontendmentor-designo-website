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
  @apply bg-primary rounded-2xl max-w-m mx-auto text-white px-5 pt-8 lg:px-24 lg:py-36 relative;
  background-image: url('../../assets/home/desktop/bg-pattern-hero-home.svg');
  background-position: right center;
  background-size: 57% 100%;
  background-repeat: no-repeat;
}
.col {
  @apply xl:max-w-[540px] lg:max-w-[440px];
}
.home-hero-row p {
  @apply max-w-[445px] my-10;
}
.bg-container {
  @apply lg:absolute bottom-0 right-0 w-full lg:max-w-xl aspect-[1/1.42] pointer-events-none bg-[center_145px];
  background-image: url('../../assets/home/desktop/image-hero-phone.png');
}
</style>
