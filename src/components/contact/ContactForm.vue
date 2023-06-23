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
        :validation-messages="{ required: 'Can`t be empty' }"
      />
      <FormKit
        type="email"
        placeholder="Email Address"
        name="email"
        id="email"
        validation="required|email"
        :validation-messages="{ required: 'Can`t be empty' }"
      />
      <FormKit
        type="number"
        placeholder="Phone"
        id="phone"
        name="phone"
        validation="required"
        :validation-messages="{ required: 'Can`t be empty' }"
      />
      <FormKit
        type="textarea"
        placeholder="Your Message"
        validation="required"
        name="message"
        id="message"
        :validation-messages="{ required: 'Can`t be empty' }"
      />
    </FormKit>
  </div>
</template>

<style>
.formkit-input:not([type='submit']) {
  @apply w-full border-0 border-b border-b-white border-opacity-50 bg-transparent text-white font-normal text-base leading-6 py-3 px-4;
}
.formkit-input:not([type='submit'])::placeholder {
  @apply text-white opacity-50;
}
textarea.formkit-input {
  @apply resize-none;
}
.formkit-outer {
  @apply mb-3;
}
.formkit-input[type='submit'] {
  @apply text-dark bg-white rounded-lg text-base font-medium leading-5 tracking-[1px] 
  py-4 px-12 uppercase mt-6 block ml-auto duration-300;
}
.formkit-input[type='submit']:hover {
  @apply bg-primary-light text-white;
}
.formkit-input:focus-visible {
  @apply outline-none border-opacity-100;
}
.formkit-input:focus-visible::placeholder {
  @apply opacity-100;
}
.formkit-message {
  @apply italic text-sm flex items-center gap-2;
}
.formkit-outer {
  @apply relative;
}
.formkit-messages {
  @apply absolute right-0 top-0 h-full flex items-center;
}
.formkit-message::after {
  @apply content-['!'] font-bold w-4 aspect-square bg-white text-primary flex justify-center items-center rounded-full leading-none;
}
</style>
