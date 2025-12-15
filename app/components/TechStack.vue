<script setup lang="ts">
const technologies = [
  "Swift 5.9",
  "SwiftUI",
  "AppKit",
  "Vision Framework",
  "Speech Framework",
];

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    text: "Native performance with minimal resource usage",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    text: "All processing happens locally on your Mac",
  },
  {
    icon: "🎨",
    title: "Native UI",
    text: "Designed to feel right at home on macOS",
  },
];
</script>

<template>
  <section class="tech-stack section">
    <div class="container">
      <div class="tech-stack__content">
        <h2 class="tech-stack__title">
          Built with <span class="text-gradient">Swift</span>
        </h2>
        <p class="tech-stack__subtitle">
          Native macOS apps using Apple's latest frameworks and technologies
        </p>

        <div class="tech-stack__badges">
          <span v-for="tech in technologies" :key="tech" class="tech-badge">
            {{ tech }}
          </span>
        </div>

        <div class="tech-stack__features">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="tech-feature"
          >
            <div class="tech-feature__icon">{{ feature.icon }}</div>
            <h3 class="tech-feature__title">{{ feature.title }}</h3>
            <p class="tech-feature__text">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.tech-stack {
  position: relative;
  background: $bg-dark-secondary;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  &__content {
    text-align: center;
  }

  &__title {
    @include heading(clamp(2rem, 5vw, 3rem));
    margin-bottom: $spacing-md;
  }

  &__subtitle {
    font-size: 1.125rem;
    color: $neutral-400;
    margin-bottom: $spacing-2xl;
  }

  &__badges {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $spacing-md;
    margin-bottom: $spacing-3xl;
  }

  &__features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-xl;

    @include mobile-only {
      grid-template-columns: 1fr;
      gap: $spacing-md;
    }
  }
}

.tech-badge {
  @include badge;
  @include hover-lift(-2px);

  &:hover {
    background: rgba($primary-500, 0.15);
    border-color: rgba($primary-500, 0.3);
  }
}

.tech-feature {
  padding: $spacing-xl;
  background: $bg-dark-tertiary;
  border-radius: $radius-xl;
  border: 1px solid rgba(255, 255, 255, 0.04);
  @include hover-lift;

  &:hover {
    border-color: rgba(255, 255, 255, 0.08);
  }

  &__icon {
    font-size: 2rem;
    margin-bottom: $spacing-md;
  }

  &__title {
    @include heading(1.125rem, 600);
    margin-bottom: $spacing-sm;
  }

  &__text {
    @include small-text;
    line-height: 1.5;
  }
}
</style>
