<script setup lang="ts">
import { ref } from 'vue';
const isMobileMenuActive = ref(false);
</script>

<template>
  <header class="header-container">
    <div class="left-col">
      <router-link :to="{ name: 'home' }">
        <img
          src="../../assets/shared/desktop/logo-dark.png"
          alt="logo dark"
          class="header-logo"
        />
      </router-link>
    </div>
    <div class="right-col">
      <nav>
        <div class="mobile-menu">
          <button
            class="mobile-menu-button"
            @click="isMobileMenuActive = !isMobileMenuActive"
          >
            <span class="top"></span>
            <span class="center"></span>
            <span class="bottom"></span>
          </button>
          <ul class="mobile-menu-list" v-if="isMobileMenuActive">
            <li class="mobile-menu-list-item">
              <router-link :to="{ name: 'about' }">Our Company</router-link>
            </li>
            <li class="mobile-menu-list-item">
              <router-link :to="{ name: 'locations' }">Locations</router-link>
            </li>
            <li class="mobile-menu-list-item">
              <router-link :to="{ name: 'contact' }">Contact</router-link>
            </li>
          </ul>
        </div>
        <ul class="menu-list">
          <li class="menu-list-item">
            <router-link :to="{ name: 'about' }">Our Company</router-link>
          </li>
          <li class="menu-list-item">
            <router-link :to="{ name: 'locations' }">Locations</router-link>
          </li>
          <li class="menu-list-item">
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* General settings */
.header-container {
  @apply max-w-m mx-auto flex items-center justify-between gap-4 p-9 relative z-10;
}
.header-logo {
  @apply w-full max-w-[202px];
}
.mobile-menu-button {
  @apply w-[24px] grid gap-1;
}
.mobile-menu-button > span {
  @apply w-full bg-dark h-[3px];
}
.menu-list-item {
  @apply text-sm leading-none font-normal text-dark uppercase tracking-[2px];
}
.menu-list {
  @apply hidden;
}
.mobile-menu-list {
  @apply absolute w-full top-full left-0 bg-white flex flex-col items-center py-4 gap-3;
}
.mobile-menu {
  @apply md:hidden;
}
/* Desktop settings */
.header-container {
  @apply lg:py-16 lg:px-6;
}
.menu-list {
  @apply md:flex md:items-center md:gap-10;
}
</style>
