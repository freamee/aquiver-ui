<template>
    <div
        class="element-divider"
        :class="`element-divider--${direction}`"
        :style="{
            backgroundColor: `var(--color-divider-primary)`,
        }"
    />
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        size?: number;
        direction?: "horizontal" | "vertical";
    }>(),
    {
        size: 0.075,
        direction: "horizontal",
    },
);
</script>

<style scoped>
.element-divider {
    flex-shrink: 0;
    margin-block: 16px;
}

.element-divider--horizontal {
    width: 100%;
    height: v-bind("`${size}vw`");
}

.element-divider--vertical {
    width: v-bind("`${size}vw`");
    height: 100%;
}
</style>
