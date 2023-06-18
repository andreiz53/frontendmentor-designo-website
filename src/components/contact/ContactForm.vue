<script setup lang="ts"></script>

<template>
  <div class="form-wrapper">
    <FormKit type="form" submit-label="Submit">
      <FormKit
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        validation="required"
      />
      <FormKit
        type="email"
        placeholder="Email Address"
        name="email"
        id="email"
        validation="required|email"
      />
      <FormKit
        type="number"
        placeholder="Phone"
        id="phone"
        name="phone"
        validation="required"
      />
      <FormKit
        type="textarea"
        placeholder="Your Message"
        validation="required"
        name="message"
        id="message"
      />
    </FormKit>
  </div>
</template>

<style>
.formkit-input:not([type='submit']) {
  @apply w-full border-0 border-b border-b-white border-opacity-50 bg-transparent text-white font-normal text-base leading-6 py-3 px-4;
}
.formkit-input:not([type='submit'])::placeholder {
  color: white;
  opacity: 0.5;
}
textarea {
  @apply resize-none;
}
.formkit-outer {
  @apply mb-3;
}
.formkit-input[type='submit'] {
  @apply text-dark bg-white rounded-lg text-base font-medium leading-5 tracking-[1px] py-4 px-12 uppercase mt-6 block ml-auto;
}
</style>
