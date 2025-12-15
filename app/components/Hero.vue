<script setup lang="ts">
import { useApps } from "~/composables/useApps";

const { apps } = useApps();
</script>

<template>
  <section class="hero">
    <!-- Background Effects -->
    <div class="hero__bg">
      <div class="hero__gradient"></div>
      <div class="hero__gradient hero__gradient--secondary"></div>
      <div class="hero__grid"></div>
    </div>

    <!-- Content -->
    <div class="container hero__content">
      <span class="hero__badge animate-fade-in">
        <span>🍎</span> macOS Native Apps
      </span>

      <h1 class="hero__title animate-fade-in-up">
        macOS Apps
        <span class="text-gradient">by Steven</span>
      </h1>

      <p class="hero__subtitle animate-fade-in-up delay-100">
        Productivity tools that live in your menu bar.<br />
        Built with Swift. Free and open source.
      </p>

      <!-- Mini app icons preview -->
      <div class="hero__apps-preview animate-fade-in-up delay-200">
        <div
          v-for="app in apps"
          :key="app.slug"
          class="hero__app-icon"
          :style="{ '--app-color': app.accentColor }"
        >
          <img :src="app.icon" :alt="app.name" />
        </div>
      </div>

      <UiButton href="#apps" class="hero__cta animate-fade-in-up delay-300">
        View All Apps
        <template #icon>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </template>
      </UiButton>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll-indicator">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.hero {
  position: relative;
  min-height: 100vh;
  @include flex-center;
  overflow: hidden;

  // Background
  &__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &__gradient {
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 80%;
    background: radial-gradient(
      ellipse at center,
      rgba($primary-500, 0.1) 0%,
      transparent 60%
    );
    animation: pulse-glow 4s ease-in-out infinite;

    &--secondary {
      top: -20%;
      width: 100%;
      height: 60%;
      background: radial-gradient(
        ellipse at center,
        rgba($accent-blue, 0.05) 0%,
        transparent 50%
      );
      animation-delay: 2s;
    }
  }

  &__grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
    -webkit-mask-image: radial-gradient(
      ellipse at center,
      black 20%,
      transparent 70%
    );
  }

  // Content
  &__content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding-top: 80px;
  }

  &__badge {
    @include badge;
    margin-bottom: $spacing-xl;
  }

  &__title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: $spacing-lg;
    letter-spacing: -0.02em;

    .text-gradient {
      display: block;
    }
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: $neutral-400;
    max-width: 500px;
    margin: 0 auto $spacing-2xl;
    line-height: 1.6;
  }

  // App icons preview
  &__apps-preview {
    display: flex;
    justify-content: center;
    gap: $spacing-lg;
    margin-bottom: $spacing-2xl;
  }

  &__app-icon {
    width: 64px;
    height: 64px;
    border-radius: $radius-xl;
    overflow: hidden;
    box-shadow: $shadow-lg,
      0 0 30px color-mix(in srgb, var(--app-color) 20%, transparent);
    transition: all $transition-base;
    animation: float 4s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    &:nth-child(3) {
      animation-delay: 1s;
    }

    &:hover {
      transform: translateY(-5px) scale(1.05);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__cta {
    font-size: 1.125rem;
  }

  // Scroll indicator
  &__scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.5;
    animation: fade-in 1s ease-out 1s forwards;
    animation-fill-mode: both;
  }

  &__scroll-mouse {
    width: 24px;
    height: 40px;
    border: 2px solid $neutral-500;
    border-radius: 12px;
    position: relative;
  }

  &__scroll-wheel {
    width: 4px;
    height: 8px;
    background: $neutral-400;
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll-wheel 1.5s ease-in-out infinite;
  }

  @include mobile-only {
    &__apps-preview {
      gap: $spacing-md;
    }

    &__app-icon {
      width: 48px;
      height: 48px;
    }

    &__scroll-indicator {
      display: none;
    }
  }
}
</style>
