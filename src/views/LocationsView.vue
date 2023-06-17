<script setup lang="ts">
import LocationSingle from '../components/locations/LocationSingle.vue';
</script>

<template>
  <section class="locations-section">
    <LocationSingle>
      <template v-slot:title>
        <h2 class="title">Canada</h2>
      </template>
      <template v-slot:address>
        <p><b>Designo Central Office</b></p>
        <p>3886 Wellington Street <br />Toronto, Ontario M9C 3J5</p>
      </template>
      <template v-slot:contact>
        <p><b>Contact</b></p>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
      </template>
      <template v-slot:map>
        <img src="../assets/locations/desktop/image-map-canada.png" />
      </template>
    </LocationSingle>
    <LocationSingle reversed="reversed">
      <template v-slot:title>
        <h2 class="title">Australia</h2>
      </template>
      <template v-slot:address>
        <p><b>Designo AU Office</b></p>
        <p>
          19 Balonne Street,<br />
          New South Wales 2443
        </p>
      </template>
      <template v-slot:contact>
        <p><b>Contact</b></p>
        <p>P : (02) 6720 9092</p>
        <p>M : contact@designo.au</p>
      </template>
      <template v-slot:map>
        <img src="../assets/locations/desktop/image-map-australia.png" />
      </template>
    </LocationSingle>
    <LocationSingle>
      <template v-slot:title>
        <h2 class="title">United Kingdom</h2>
      </template>
      <template v-slot:address>
        <p><b>Designo UK Office</b></p>
        <p>
          13 Colorado Way,<br />
          Rhyd-y-fro SA8 9GA
        </p>
      </template>
      <template v-slot:contact>
        <p><b>Contact</b></p>
        <p>P : 078 3115 1400</p>
        <p>M : contact@designo.uk</p>
      </template>
      <template v-slot:map>
        <img src="../assets/locations/desktop/image-map-united-kingdom.png" />
      </template>
    </LocationSingle>
  </section>
</template>

<style scoped>
.locations-section {
  @apply grid gap-8 pb-40;
}
.title {
  @apply text-primary;
}
</style>
