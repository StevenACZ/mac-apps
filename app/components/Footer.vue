<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__brand">
        <a href="/" class="footer__logo">
          <span class="footer__logo-icon">🍎</span>
          <span class="footer__logo-text">macOS Apps</span>
        </a>
        <p class="footer__tagline">
          Made with <span class="footer__heart">❤️</span> by StevenACZ
        </p>
      </div>

      <div class="footer__links">
        <UiIconLink href="https://github.com/StevenACZ" external>
          <template #icon><IconsGitHubIcon /></template>
          GitHub
        </UiIconLink>
        <UiIconLink href="https://stevenacz.com" external>
          <template #icon><IconsGlobeIcon /></template>
          Portfolio
        </UiIconLink>
      </div>

      <div class="footer__copyright">
        <p>© {{ new Date().getFullYear() }} Steven. All rights reserved.</p>
        <p class="footer__tech">Built with Swift for macOS</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.footer {
  padding: $spacing-3xl 0 $spacing-xl;
  background: $bg-dark;
  border-top: 1px solid rgba(255, 255, 255, 0.04);

  &__container {
    @include flex-column-center;
    gap: $spacing-xl;
    text-align: center;
  }

  &__brand {
    @include flex-column-center;
    gap: $spacing-sm;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-weight: 700;
    font-size: 1.25rem;
    color: $neutral-50;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 0.8;
    }

    &-icon {
      font-size: 1.5rem;
    }
  }

  &__tagline {
    @include small-text;
    color: $neutral-500;
  }

  &__heart {
    display: inline-block;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  &__links {
    display: flex;
    gap: $spacing-lg;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__copyright {
    padding-top: $spacing-lg;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    width: 100%;

    p {
      font-size: 0.875rem;
      color: $neutral-600;
    }
  }

  &__tech {
    margin-top: $spacing-xs;
  }
}
</style>
