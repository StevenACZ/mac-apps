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
      <img :src="app.icon" :alt="app.name" class="app-card__icon" />
      <div class="app-card__info">
        <h3 class="app-card__name">{{ app.name }}</h3>
        <p class="app-card__tagline">{{ app.tagline }}</p>
      </div>
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
        <IconsCheckIcon class="app-card__check" />
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
      <span class="app-card__requirement"
        >macOS {{ app.requirements.macos }}</span
      >
      <span class="app-card__requirement">{{
        app.requirements.architecture
      }}</span>
    </div>

    <!-- Actions -->
    <div class="app-card__actions">
      <UiButton :href="app.downloadUrl" external size="sm">
        <template #icon><IconsDownloadIcon /></template>
        Download
      </UiButton>
      <UiButton :href="app.githubUrl" external variant="secondary" size="sm">
        <template #icon><IconsGitHubIcon /></template>
        GitHub
      </UiButton>
      <UiButton
        v-if="app.landingUrl"
        :href="app.landingUrl"
        external
        variant="secondary"
        size="sm"
      >
        <template #icon><IconsExternalLinkIcon /></template>
        Website
      </UiButton>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.app-card {
  @include card;
  @include flex-column;
  @include fade-in-up;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:hover {
    @include card-hover(var(--accent));
  }

  // Header
  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-lg;
  }

  &__icon {
    width: 64px;
    height: 64px;
    border-radius: $radius-xl;
    box-shadow: $shadow-md;
  }

  &__name {
    @include heading(1.5rem);
    margin-bottom: $spacing-xs;
  }

  &__tagline {
    font-size: 0.9375rem;
    color: var(--accent);
    font-weight: 500;
  }

  // Description
  &__description {
    @include small-text;
    line-height: 1.6;
    margin-bottom: $spacing-lg;
  }

  // Features
  &__features {
    @include flex-column;
    gap: $spacing-sm;
    margin-bottom: $spacing-lg;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-size: 0.875rem;
    color: $neutral-300;
  }

  &__check {
    @include icon(16px);
    color: var(--accent);
  }

  // Hotkey
  &__hotkey {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-md;
    background: $bg-dark-tertiary;
    border-radius: $radius-lg;
    margin-bottom: $spacing-lg;
  }

  &__hotkey-label {
    @include small-text;
  }

  &__kbd {
    @include kbd-style;
  }

  // Requirements
  &__requirements {
    display: flex;
    gap: $spacing-lg;
    margin-bottom: $spacing-lg;
    flex-wrap: wrap;
  }

  &__requirement {
    font-size: 0.75rem;
    color: $neutral-500;
  }

  // Actions
  &__actions {
    display: flex;
    gap: $spacing-sm;
    flex-wrap: wrap;
    margin-top: auto;

    .btn {
      flex: 1;
      min-width: fit-content;
    }
  }

  @include mobile-only {
    padding: $spacing-lg;

    &__icon {
      width: 48px;
      height: 48px;
    }

    &__name {
      font-size: 1.25rem;
    }

    &__actions {
      flex-direction: column;

      .btn {
        width: 100%;
      }
    }
  }
}
</style>
