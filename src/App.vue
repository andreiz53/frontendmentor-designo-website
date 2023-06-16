<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div id="page-container">
    <div id="header">
      <TheHeader />
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
    <div id="footer">
      <TheFooter />
    </div>
  </div>
</template>
