<script setup lang="ts">
import type { App } from "~/composables/useApps";

defineProps<{
  app: App;
}>();
</script>

<template>
  <article class="app-card" :style="{ '--accent': app.accentColor }">
    <!-- Header -->
    <div class="app-card__header">
      <div class="app-card__icon-wrapper">
        <img :src="app.icon" :alt="app.name" class="app-card__icon" />
      </div>
      <div class="app-card__info">
        <h3 class="app-card__name">{{ app.name }}</h3>
        <p class="app-card__tagline">{{ app.tagline }}</p>
      </div>
    </div>

    <!-- Screenshot -->
    <div class="app-card__screenshot">
      <img :src="app.screenshot" :alt="`${app.name} screenshot`" />
    </div>

    <!-- Description -->
    <p class="app-card__description">{{ app.description }}</p>

    <!-- Features -->
    <ul class="app-card__features">
      <li
        v-for="feature in app.features"
        :key="feature"
        class="app-card__feature"
      >
        <svg
          class="app-card__check"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        {{ feature }}
      </li>
    </ul>

    <!-- Hotkey (if exists) -->
    <div v-if="app.hotkey" class="app-card__hotkey">
      <span class="app-card__hotkey-label">{{ app.hotkeyLabel }}</span>
      <kbd class="app-card__kbd">{{ app.hotkey }}</kbd>
    </div>

    <!-- Requirements -->
    <div class="app-card__requirements">
      <span class="app-card__requirement">
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
          />
          <path d="M13 7h-2v6l5.25 3.15.75-1.23-4-2.4z" />
        </svg>
        macOS {{ app.requirements.macos }}
      </span>
      <span class="app-card__requirement">
        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path
            d="M9 3v2H7V3h2zm6 0v2h2V3h-2zM5 5v2H3V5h2zm14 0v2h2V5h-2zM5 19v2H3v-2h2zm14 0v2h2v-2h-2zM9 19v2H7v-2h2zm6 0v2h2v-2h-2zM3 9h2v6H3V9zm16 0h2v6h-2V9zM7 7h10v10H7V7z"
          />
        </svg>
        {{ app.requirements.architecture }}
      </span>
    </div>

    <!-- Actions -->
    <div class="app-card__actions">
      <a
        :href="app.downloadUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-sm"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download
      </a>
      <a
        :href="app.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary btn-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
        GitHub
      </a>
      <a
        v-if="app.landingUrl"
        :href="app.landingUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary btn-sm"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        Website
      </a>
    </div>
  </article>
</template>

<style scoped>
.app-card {
  background: var(--bg-dark-secondary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-xl);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: fade-in-up 0.6s ease-out forwards;
}

.app-card:nth-child(1) {
  animation-delay: 0.1s;
}
.app-card:nth-child(2) {
  animation-delay: 0.2s;
}
.app-card:nth-child(3) {
  animation-delay: 0.3s;
}

.app-card:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  box-shadow: var(--shadow-xl),
    0 0 60px color-mix(in srgb, var(--accent) 15%, transparent);
  transform: translateY(-6px);
}

/* Header */
.app-card__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.app-card__icon-wrapper {
  position: relative;
}

.app-card__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.app-card__info {
  flex: 1;
}

.app-card__name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-neutral-50);
  margin-bottom: var(--spacing-xs);
}

.app-card__tagline {
  font-size: 0.9375rem;
  color: var(--accent);
  font-weight: 500;
}

/* Screenshot */
.app-card__screenshot {
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--bg-dark-tertiary);
}

.app-card__screenshot img {
  width: 100%;
  height: auto;
  transition: transform var(--transition-slow);
}

.app-card:hover .app-card__screenshot img {
  transform: scale(1.02);
}

/* Description */
.app-card__description {
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

/* Features */
.app-card__features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.app-card__feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--color-neutral-300);
}

.app-card__check {
  width: 16px;
  height: 16px;
  color: var(--accent);
  flex-shrink: 0;
}

/* Hotkey */
.app-card__hotkey {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--bg-dark-tertiary);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
}

.app-card__hotkey-label {
  font-size: 0.875rem;
  color: var(--color-neutral-400);
}

.app-card__kbd {
  background: var(--bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-neutral-200);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
}

/* Requirements */
.app-card__requirements {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.app-card__requirement {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.75rem;
  color: var(--color-neutral-500);
}

/* Actions */
.app-card__actions {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-top: auto;
}

.app-card__actions .btn {
  flex: 1;
  min-width: fit-content;
}

@media (max-width: 480px) {
  .app-card {
    padding: var(--spacing-lg);
  }

  .app-card__icon {
    width: 48px;
    height: 48px;
  }

  .app-card__name {
    font-size: 1.25rem;
  }

  .app-card__actions {
    flex-direction: column;
  }

  .app-card__actions .btn {
    width: 100%;
  }
}
</style>
