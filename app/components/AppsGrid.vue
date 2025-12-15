<script setup lang="ts">
import { useApps } from "~/composables/useApps";

const { apps } = useApps();
</script>

<template>
  <section id="apps" class="apps-section section">
    <div class="container">
      <header class="apps-section__header">
        <h2 class="apps-section__title">
          All <span class="text-gradient">Apps</span>
        </h2>
        <p class="apps-section__subtitle">
          Free, open source, and built with ❤️ for the macOS community
        </p>
      </header>

      <div class="apps-grid">
        <AppCard v-for="app in apps" :key="app.slug" :app="app" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.apps-section {
  position: relative;
  scroll-margin-top: 60px;

  &__header {
    text-align: center;
    margin-bottom: $spacing-3xl;
  }

  &__title {
    @include heading(clamp(2rem, 5vw, 3rem));
    margin-bottom: $spacing-md;
  }

  &__subtitle {
    font-size: 1.125rem;
    color: $neutral-400;
  }
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-xl;

  @include lg {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: calc(#{$breakpoint-lg} - 1px)) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile-only {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }
}
</style>
