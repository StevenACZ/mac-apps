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

      <a
        href="#apps"
        class="btn btn-primary hero__cta animate-fade-in-up delay-300"
      >
        View All Apps
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
      </a>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll-indicator">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__gradient {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 80%;
  background: radial-gradient(
    ellipse at center,
    rgba(16, 185, 129, 0.1) 0%,
    transparent 60%
  );
  animation: pulse-glow 4s ease-in-out infinite;
}

.hero__gradient--secondary {
  top: -20%;
  width: 100%;
  height: 60%;
  background: radial-gradient(
    ellipse at center,
    rgba(59, 130, 246, 0.05) 0%,
    transparent 50%
  );
  animation-delay: 2s;
}

.hero__grid {
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

/* Content */
.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 80px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary-400);
  margin-bottom: var(--spacing-xl);
}

.hero__title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  letter-spacing: -0.02em;
}

.hero__title .text-gradient {
  display: block;
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-neutral-400);
  max-width: 500px;
  margin: 0 auto var(--spacing-2xl);
  line-height: 1.6;
}

/* App icons preview */
.hero__apps-preview {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.hero__app-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg),
    0 0 30px color-mix(in srgb, var(--app-color) 20%, transparent);
  transition: all var(--transition-base);
  animation: float 4s ease-in-out infinite;
}

.hero__app-icon:nth-child(2) {
  animation-delay: 0.5s;
}

.hero__app-icon:nth-child(3) {
  animation-delay: 1s;
}

.hero__app-icon:hover {
  transform: translateY(-5px) scale(1.05);
}

.hero__app-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__cta {
  font-size: 1.125rem;
}

/* Scroll indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.5;
  animation: fade-in 1s ease-out 1s forwards;
  animation-fill-mode: both;
}

.hero__scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--color-neutral-500);
  border-radius: 12px;
  position: relative;
}

.hero__scroll-wheel {
  width: 4px;
  height: 8px;
  background: var(--color-neutral-400);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 1.5s ease-in-out infinite;
}

@keyframes scroll-wheel {
  0%,
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 0.3;
    transform: translateX(-50%) translateY(10px);
  }
}

@media (max-width: 640px) {
  .hero__apps-preview {
    gap: var(--spacing-md);
  }

  .hero__app-icon {
    width: 48px;
    height: 48px;
  }

  .hero__scroll-indicator {
    display: none;
  }
}
</style>
