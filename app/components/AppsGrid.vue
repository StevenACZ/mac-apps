<script setup lang="ts">
import { useApps } from "~/composables/useApps";

const { apps } = useApps();
</script>

<template>
  <section id="apps" class="apps-section section">
    <div class="container">
      <div class="apps-section__header">
        <h2 class="apps-section__title">
          All <span class="text-gradient">Apps</span>
        </h2>
        <p class="apps-section__subtitle">
          Free, open source, and built with ❤️ for the macOS community
        </p>
      </div>

      <div class="apps-grid">
        <AppCard v-for="app in apps" :key="app.slug" :app="app" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.apps-section {
  position: relative;
}

.apps-section__header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.apps-section__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

.apps-section__subtitle {
  font-size: 1.125rem;
  color: var(--color-neutral-400);
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

@media (max-width: 1024px) {
  .apps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .apps-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>
