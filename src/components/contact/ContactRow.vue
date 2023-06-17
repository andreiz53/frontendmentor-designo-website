<script setup lang="ts">
import ContactForm from './ContactForm.vue';
</script>

<template>
  <div class="row">
    <div class="left-col">
      <h1>Contact Us</h1>
      <p class="desc">
        Ready to take it to the next level? Let's talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that's relatable to your users, drop us a
        line.
      </p>
    </div>
    <div class="right-col">
      <ContactForm />
    </div>
  </div>
</template>

<style scoped>
.row {
  @apply max-w-m w-full mx-auto bg-primary rounded-2xl py-14 px-24 text-white grid grid-cols-[1.7fr_1fr] gap-8 items-center relative overflow-hidden;
}
.row::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60%;
  aspect-ratio: 1;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.31;
  transform: matrix(0, 1, 1, 0, 0, 0);
  border-radius: 100%;
}
.row > div {
  @apply z-10;
}
h1 {
  @apply mb-8;
}
.desc {
  @apply max-w-md;
}
</style>
