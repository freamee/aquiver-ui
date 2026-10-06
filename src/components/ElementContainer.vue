<template>
    <div
        class="element-container"
        :style
        :class="[
            `theme-${props.theme}`,
            {
                'is-hoverable': props.hover,
                'is-active': props.active,
            },
        ]"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <slot :isHovered="isHovered" :isActive="props.active" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type StyleValue } from "vue";

interface iProps {
    borderSize?: number;
    rounded?: number;
    opacity?: number;
    theme?: "primary" | "secondary" | "tertiary";
    hover?: boolean;
    active?: boolean;
    spacing?: "xs" | "sm" | "md" | "lg" | "xl";
    blur?: number;
}

const props = withDefaults(defineProps<iProps>(), {
    rounded: 0,
    borderSize: 0,
    opacity: 1.0,
    theme: "primary",
    hover: false,
    active: false,
    spacing: "md",
    blur: 12,
});

const isHovered = ref(false);

const style = computed<StyleValue>(() => ({
    borderRadius: `${props.rounded}vw`,
    borderWidth: `${props.borderSize}vw`,
    padding: `var(--spacing-${props.spacing})`,
    backdropFilter: `blur(${props.blur}px)`,
    WebkitBackdropFilter: `blur(${props.blur}px)`,
}));
</script>

<style lang="scss" scoped>
.element-container {
    height: fit-content;
    border-style: solid;
    border-color: mix($color-border, transparent, 30%);

    transition:
        background var(--transition-normal),
        border-color var(--transition-normal),
        box-shadow var(--transition-normal),
        backdrop-filter var(--transition-normal);

    &.theme-primary {
        background: mix($color-background-primary, transparent, 35%);
    }

    &.theme-secondary {
        background: mix($color-background-secondary, transparent, 35%);
    }

    &.theme-tertiary {
        background: mix($color-background-tertiary, transparent, 35%);
    }

    &.is-hoverable:not(.is-active) {
        &:hover {
            background: mix($color-background-hover, transparent, 75%);
            border-color: mix($color-border-hover, transparent, 55%);
        }
    }

    &.is-active {
        background: mix($color-background-active, transparent, 80%);
        border-color: mix($color-border-selected, transparent, 60%);
    }
}
</style>
