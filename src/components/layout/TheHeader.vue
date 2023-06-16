<script setup lang="ts"></script>

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
        <ul class="desktop-menu-list">
          <li class="desktop-menu-list-item">
            <router-link :to="{ name: 'about' }">Our Company</router-link>
          </li>
          <li class="desktop-menu-list-item">
            <router-link :to="{ name: 'locations' }">Locations</router-link>
          </li>
          <li class="desktop-menu-list-item">
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  @apply py-16 max-w-m mx-auto flex items-center gap-4 justify-between;
}
.header-logo {
  @apply w-full max-w-[202px];
}
.desktop-menu-list {
  @apply flex items-center gap-10;
}
.desktop-menu-list-item {
  @apply text-sm leading-none font-normal text-dark uppercase tracking-[2px];
}
</style>
