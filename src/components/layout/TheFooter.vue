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
          <BaseButton theme="white" to="contact">Get in touch</BaseButton>
        </div>
      </div>
    </section>
    <section class="footer-section">
      <div class="footer-main-row">
        <div class="left-col">
          <router-link to="/">
            <img
              src="../../assets/shared/desktop/logo-light.png"
              alt="logo light"
              class="footer-logo"
            />
          </router-link>
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
              <a href="https://goo.gl/maps/baHgKYJkVJjEMa1Q7" target="_blank"
                >3886 Wellington Street<br />
                Toronto, Ontario M9C 3J5</a
              >
            </p>
          </div>
        </div>
        <div class="contact-col">
          <p><b>Contact Us (Central Office)</b></p>
          <p>
            <a href="tel:+12538638967">P : +1 253-863-8967</a> <br />
            <a href="mailto:contact@designo.co">M : contact@designo.co</a>
          </p>
        </div>
        <div class="social-col">
          <ul class="social-list">
            <li class="social-list-item">
              <a target="_blank" href="https://facebook.com"
                ><IconFacebook
              /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://youtube.com"><IconYoutube /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://twitter.com"><IconTwitter /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://pinterest.com"
                ><IconPinterest
              /></a>
            </li>
            <li class="social-list-item">
              <a target="_blank" href="https://instagram.com"
                ><IconInstagram
              /></a>
            </li>
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
.footer-pages > li > a:hover {
  @apply underline;
}
.social-list-item svg {
  @apply duration-300;
}
.social-list-item:hover svg {
  @apply brightness-125;
}
</style>
