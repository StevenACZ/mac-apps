<script setup lang="ts">
const isScrolled = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__container">
      <a href="/" class="navbar__logo">
        <img src="/favicon.png" alt="macOS Apps" class="navbar__logo-icon" />
        <span class="navbar__logo-text">macOS Apps</span>
      </a>

      <div class="navbar__links">
        <UiIconLink href="https://github.com/StevenACZ" external>
          <template #icon><IconsGitHubIcon /></template>
          GitHub
        </UiIconLink>
        <a
          href="https://stevenacz.com"
          target="_blank"
          rel="noopener noreferrer"
          class="navbar__portfolio"
        >
          Portfolio
          <IconsExternalLinkIcon class="navbar__arrow" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: $spacing-md 0;
  background: rgba($bg-dark, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all $transition-base;
  z-index: 1000;

  &--scrolled {
    background: rgba($bg-dark, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  &__container {
    @include flex-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-weight: 700;
    font-size: 1.125rem;
    color: $neutral-50;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 0.8;
    }

    &-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      object-fit: contain;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
  }

  &__portfolio {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    padding: $spacing-sm $spacing-md;
    background: rgba(255, 255, 255, 0.05);
    border-radius: $radius-md;
    color: $neutral-200;
    font-size: 0.9375rem;
    font-weight: 500;
    transition: background $transition-fast;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &__arrow {
    @include icon(14px);
    transition: transform $transition-fast;
  }

  &__portfolio:hover &__arrow {
    transform: translate(2px, -2px);
  }

  @include mobile-only {
    &__logo-text {
      display: none;
    }
  }
}
</style>
