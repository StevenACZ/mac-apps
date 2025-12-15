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
        <span class="navbar__logo-icon">🍎</span>
        <span class="navbar__logo-text">macOS Apps</span>
      </a>

      <div class="navbar__links">
        <a
          href="https://github.com/StevenACZ"
          target="_blank"
          rel="noopener noreferrer"
          class="navbar__link"
        >
          <svg
            class="navbar__link-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://stevenacz.com"
          target="_blank"
          rel="noopener noreferrer"
          class="navbar__link navbar__link--portfolio"
        >
          Portfolio
          <svg
            class="navbar__link-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md) 0;
  background: transparent;
  transition: all var(--transition-base);
  z-index: 1000;
}

.navbar--scrolled {
  background: rgba(10, 10, 11, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-neutral-50);
  transition: opacity var(--transition-fast);
}

.navbar__logo:hover {
  opacity: 0.8;
}

.navbar__logo-icon {
  font-size: 1.25rem;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.navbar__link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-neutral-400);
  transition: color var(--transition-fast);
}

.navbar__link:hover {
  color: var(--color-neutral-50);
}

.navbar__link-icon {
  width: 18px;
  height: 18px;
}

.navbar__link--portfolio {
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  color: var(--color-neutral-200);
}

.navbar__link--portfolio:hover {
  background: rgba(255, 255, 255, 0.1);
}

.navbar__link-arrow {
  width: 14px;
  height: 14px;
  transition: transform var(--transition-fast);
}

.navbar__link--portfolio:hover .navbar__link-arrow {
  transform: translate(2px, -2px);
}

@media (max-width: 640px) {
  .navbar__logo-text {
    display: none;
  }

  .navbar__links {
    gap: var(--spacing-md);
  }

  .navbar__link span {
    display: none;
  }
}
</style>
