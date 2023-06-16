<script setup lang="ts"></script>

<template>
  <div class="features-row">
    <div class="feature">
      <div class="image-passionate">
        <img src="../../assets/home/desktop/illustration-passionate.svg" />
      </div>
      <h3>Passionate</h3>
      <p>
        Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions.
      </p>
    </div>
    <div class="feature">
      <div class="image-resourceful">
        <img src="../../assets/home/desktop/illustration-resourceful.svg" />
      </div>
      <h3>Resourceful</h3>
      <p>
        Everything that we do has a strategic purpose. We use an agile approach
        in all of our projects and value customer collaboration. It guarantees
        superior results that fulfill our clients' needs.
      </p>
    </div>
    <div class="feature">
      <div class="image-friendly">
        <img src="../../assets/home/desktop/illustration-friendly.svg" />
      </div>
      <h3>Friendly</h3>
      <p>
        We are a group of enthusiastic folks who know how to put people first.
        Our success depends on our customers, and we strive to give them the
        best experience a company can provide.
      </p>
    </div>
  </div>
</template>

<style scoped>
.features-row {
  @apply max-w-m mx-auto grid grid-cols-3 gap-8;
}
.image-passionate,
.image-resourceful,
.image-friendly {
  @apply relative w-48 mx-auto mb-12;
}
.image-passionate::before,
.image-resourceful::before,
.image-friendly::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.image-passionate::before {
  background: linear-gradient(
    270deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.2;
}
.image-resourceful::before {
  background: linear-gradient(
    180deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.2;
}
.image-friendly::before {
  background: linear-gradient(
    0deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.2;
}
img {
  @apply relative z-10;
}
h3,
p {
  @apply text-center;
}
h3 {
  @apply uppercase mb-8;
}
</style>
