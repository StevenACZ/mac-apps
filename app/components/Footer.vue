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
        <a
          href="https://github.com/StevenACZ"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__link"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            class="footer__link-icon"
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
          class="footer__link"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="footer__link-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            />
          </svg>
          Portfolio
        </a>
      </div>

      <div class="footer__copyright">
        <p>© {{ new Date().getFullYear() }} Steven. All rights reserved.</p>
        <p class="footer__tech">Built with Swift for macOS</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  background: var(--bg-dark);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.footer__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
  text-align: center;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-neutral-50);
  transition: opacity var(--transition-fast);
}

.footer__logo:hover {
  opacity: 0.8;
}

.footer__logo-icon {
  font-size: 1.5rem;
}

.footer__tagline {
  font-size: 0.9375rem;
  color: var(--color-neutral-500);
}

.footer__heart {
  display: inline-block;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.footer__links {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  justify-content: center;
}

.footer__link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.9375rem;
  color: var(--color-neutral-400);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-primary-400);
}

.footer__link-icon {
  width: 18px;
  height: 18px;
}

.footer__copyright {
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  width: 100%;
}

.footer__copyright p {
  font-size: 0.875rem;
  color: var(--color-neutral-600);
}

.footer__tech {
  margin-top: var(--spacing-xs);
}

@media (max-width: 640px) {
  .footer__links {
    gap: var(--spacing-md);
  }
}
</style>
