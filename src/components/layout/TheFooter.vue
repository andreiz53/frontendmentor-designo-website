<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue';
import IconFacebook from '../icons/IconFacebook.vue';
import IconYoutube from '../icons/IconYoutube.vue';
import IconTwitter from '../icons/IconTwitter.vue';
import IconPinterest from '../icons/IconPinterest.vue';
import IconInstagram from '../icons/IconInstagram.vue';
</script>
<template>
  <footer>
    <section class="cta-section">
      <div class="cta-row">
        <div class="left-col">
          <h2>Let's talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div class="right-col">
          <BaseButton theme="white">Get in touch</BaseButton>
        </div>
      </div>
    </section>
    <section class="footer-section">
      <div class="footer-main-row">
        <div class="left-col">
          <img
            src="../../assets/shared/desktop/logo-light.png"
            alt="logo light"
            class="footer-logo"
          />
        </div>
        <div class="right-col">
          <nav>
            <ul class="footer-pages">
              <li>
                <router-link :to="{ name: 'about' }">Our Company</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'locations' }">Locations</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contact' }">Contact</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="footer-contact-row">
        <div class="address-col">
          <div class="address">
            <p><b>Designo Central Office</b></p>
            <p>
              3886 Wellington Street<br />
              Toronto, Ontario M9C 3J5
            </p>
          </div>
        </div>
        <div class="contact-col">
          <p><b>Contact Us (Central Office)</b></p>
          <p>
            <b>
              P : +1 253-863-8967 <br />
              M : contact@designo.co
            </b>
          </p>
        </div>
        <div class="social-col">
          <ul class="social-list">
            <li class="social-list-item"><IconFacebook /></li>
            <li class="social-list-item"><IconYoutube /></li>
            <li class="social-list-item"><IconTwitter /></li>
            <li class="social-list-item"><IconPinterest /></li>
            <li class="social-list-item"><IconInstagram /></li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped>
footer {
  @apply isolate;
}
.cta-section {
  @apply z-20 relative;
}
.footer-section {
  @apply z-10 relative;
}
.cta-row {
  @apply bg-primary rounded-2xl text-white pt-16 pb-11 max-w-m mx-auto px-20 flex items-center gap-8 justify-between -mb-16;
  background-image: url('../../assets/shared/desktop/bg-pattern-call-to-action.svg');
  background-size: 80%;
  background-position: right;
  background-repeat: no-repeat;
}
.cta-row h2 {
  @apply max-w-[270px] mb-5 tracking-normal;
}
.cta-row p {
  @apply max-w-[460px];
}
.footer-section {
  @apply bg-black text-white pb-20 pt-36;
}
.footer-main-row {
  @apply max-w-m mx-auto flex items-center justify-between gap-4 pb-10 border-b border-solid border-white border-opacity-10;
}
.footer-logo {
  @apply w-full max-w-[202px];
}
.footer-pages {
  @apply flex items-center gap-10 uppercase text-sm font-normal leading-none;
}
.footer-contact-row {
  @apply max-w-m mx-auto pt-8 grid grid-cols-[350px_350px_1fr] justify-between gap-8;
}
.footer-contact-row p {
  @apply text-opacity-50 text-white;
}
.social-col {
  @apply grid justify-end items-end;
}
.social-list {
  @apply flex gap-4 items-center;
}
</style>
