<script setup lang="ts">
const technologies = [
  { name: "Swift 5.9", icon: "swift" },
  { name: "SwiftUI", icon: "swiftui" },
  { name: "AppKit", icon: "appkit" },
  { name: "Vision Framework", icon: "vision" },
  { name: "Speech Framework", icon: "speech" },
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
          <span
            v-for="tech in technologies"
            :key="tech.name"
            class="tech-badge"
          >
            <component :is="getTechIcon(tech.icon)" class="tech-badge__icon" />
            {{ tech.name }}
          </span>
        </div>

        <div class="tech-stack__features">
          <div class="tech-feature">
            <div class="tech-feature__icon">⚡</div>
            <h3 class="tech-feature__title">Lightning Fast</h3>
            <p class="tech-feature__text">
              Native performance with minimal resource usage
            </p>
          </div>
          <div class="tech-feature">
            <div class="tech-feature__icon">🔒</div>
            <h3 class="tech-feature__title">Privacy First</h3>
            <p class="tech-feature__text">
              All processing happens locally on your Mac
            </p>
          </div>
          <div class="tech-feature">
            <div class="tech-feature__icon">🎨</div>
            <h3 class="tech-feature__title">Native UI</h3>
            <p class="tech-feature__text">
              Designed to feel right at home on macOS
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// Simple SVG icons for technologies
const getTechIcon = (icon: string) => {
  return {
    template: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    `,
  };
};
</script>

<style scoped>
.tech-stack {
  position: relative;
  background: var(--bg-dark-secondary);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.tech-stack__content {
  text-align: center;
}

.tech-stack__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

.tech-stack__subtitle {
  font-size: 1.125rem;
  color: var(--color-neutral-400);
  margin-bottom: var(--spacing-2xl);
}

.tech-stack__badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-3xl);
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-primary-400);
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.tech-badge:hover {
  background: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.tech-badge__icon {
  width: 18px;
  height: 18px;
}

.tech-stack__features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.tech-feature {
  padding: var(--spacing-xl);
  background: var(--bg-dark-tertiary);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: all var(--transition-base);
}

.tech-feature:hover {
  border-color: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
}

.tech-feature__icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.tech-feature__title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--color-neutral-100);
}

.tech-feature__text {
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .tech-stack__features {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .tech-badge {
    font-size: 0.875rem;
    padding: var(--spacing-sm) var(--spacing-md);
  }
}
</style>
