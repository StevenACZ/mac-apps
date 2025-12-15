<script setup lang="ts">
defineProps<{
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  href?: string;
  external?: boolean;
}>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="btn"
    :class="[
      variant === 'secondary' ? 'btn--secondary' : 'btn--primary',
      size === 'sm' && 'btn--sm',
    ]"
  >
    <span v-if="$slots.icon" class="btn__icon">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.btn {
  @include btn-base;

  &--primary {
    background: linear-gradient(135deg, $primary-500 0%, $primary-600 100%);
    color: white;
    box-shadow: 0 4px 14px rgba($primary-500, 0.3);
    padding: $spacing-md $spacing-xl;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba($primary-500, 0.4);
    }
  }

  &--secondary {
    background: $bg-dark-tertiary;
    color: $neutral-200;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: $spacing-md $spacing-xl;

    &:hover {
      background: $bg-dark-secondary;
      border-color: rgba(255, 255, 255, 0.2);
    }
  }

  &--sm {
    @include btn-sm;
  }

  &__icon {
    display: flex;
    align-items: center;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
