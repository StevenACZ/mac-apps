<script setup lang="ts">
defineProps<{
  href: string;
  external?: boolean;
}>();
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="icon-link"
  >
    <span v-if="$slots.icon" class="icon-link__icon">
      <slot name="icon" />
    </span>
    <slot />
  </a>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as *;
@use "~/assets/scss/mixins" as *;

.icon-link {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font-size: 0.9375rem;
  font-weight: 500;
  color: $neutral-400;
  @include link-hover;

  &__icon {
    display: flex;
    align-items: center;

    :deep(svg) {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
