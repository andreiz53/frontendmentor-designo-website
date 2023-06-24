<script setup lang="ts">
import FeatureList from '../components/features/FeatureList.vue';
import HomeHero from '../components/heros/HomeHero.vue';
import HighlightServiceList from '../components/services/HighlightServiceList.vue';
</script>

<template>
  <div>
    <section class="home-hero-section">
      <HomeHero />
    </section>
    <section class="home-services-section">
      <HighlightServiceList left="web" rightTop="app" rightBottom="graphic" />
    </section>
    <section class="home-features-section">
      <FeatureList />
    </section>
  </div>
</template>

<style scoped>
.home-hero-section,
.home-services-section,
.home-features-section {
  @apply pb-40 px-6 relative;
}
.home-hero-section::after {
  @apply content-[''] bg-light absolute w-[70%] aspect-[1.69/1] left-0 top-[40%] -z-10 rounded-tl-[300px] rounded-tr-[300px] rounded-br-[300px];
}
.home-features-section::after {
  @apply content-[''] bg-light absolute w-[70%] aspect-[1.69/1] right-0 top-[20%] -z-10 rounded-tl-[300px] rounded-bl-[300px] rounded-br-[300px];
}
</style>
