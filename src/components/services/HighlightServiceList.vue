<script setup lang="ts">
import ButtonText from '../ui/ButtonText.vue';

defineProps(['left', 'rightTop', 'rightBottom']);

function getUrl(service: string) {
  switch (service) {
    case 'web':
      return 'web-design';
    case 'app':
      return 'app-design';
    case 'graphic':
      return 'graphic-design';
    default:
      return '#';
  }
}
</script>

<template>
  <div class="services-row">
    <div class="left-col" :class="[left]">
      <h2>{{ left }} design</h2>
      <ButtonText :to="getUrl(left)">VIEW PROJECTS</ButtonText>
    </div>
    <div class="right-col">
      <div class="right-top" :class="[rightTop]">
        <h2>{{ rightTop }} design</h2>
        <ButtonText :to="getUrl(rightTop)">VIEW PROJECTS</ButtonText>
      </div>
      <div class="right-bottom" :class="[rightBottom]">
        <h2>{{ rightBottom }} design</h2>
        <ButtonText :to="getUrl(rightBottom)">VIEW PROJECTS</ButtonText>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-row {
  @apply aspect-[1.81/1] grid grid-cols-2 gap-x-7 relative max-w-m mx-auto;
}
.left-col,
.right-top,
.right-bottom {
  @apply relative rounded-2xl bg-no-repeat bg-cover flex items-center justify-center text-white flex-col uppercase;
}
.left-col::before,
.right-top::before,
.right-bottom::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
.right-col {
  @apply grid grid-rows-2 gap-y-6;
}
.web {
  background-image: url('../../assets/home/desktop/image-web-design-large.jpg');
}
.app {
  background-image: url('../../assets/home/desktop/image-app-design.jpg');
}
.graphic {
  background-image: url('../../assets/home/desktop/image-graphic-design.jpg');
}
h2 {
  @apply z-10 mb-6;
}
</style>
