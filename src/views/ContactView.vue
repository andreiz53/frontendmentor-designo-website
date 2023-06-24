<script setup lang="ts">
import LocationsRow from '../components/locations/LocationsRow.vue';
import ContactRow from '../components/contact/ContactRow.vue';
</script>

<template>
  <div class="contact-form-section">
    <ContactRow />
  </div>
  <div class="contact-locations-section">
    <LocationsRow />
  </div>
</template>

<style scoped>
.contact-form-section,
.contact-locations-section {
  @apply mb-40 relative px-6;
}
.contact-locations-section::after {
  @apply bg-light -z-10 rounded-[300px] rounded-bl-none;
  content: '';
  position: absolute;
  top: 90px;
  right: 0;
  width: 70%;
  aspect-ratio: 1.69 / 1;
}
</style>
