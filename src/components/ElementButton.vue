<template>
    <ElementContainer class="container" :class="{ centered, active, disabled }" v-bind="$props" v-slot="{
        isHovered
    }" :theme="disabled ? 'dark' : 'dark-lighten'">
        <slot :isHovered :isActive="active" />
    </ElementContainer>
</template>

<script setup lang="ts">
import ElementContainer from './ElementContainer.vue';

interface iProps {
    name?: string;
    centered?: boolean;
    active?: boolean;
    disabled?: boolean;
}

withDefaults(defineProps<iProps>(), {
    centered: true,
    active: false,
    disabled: false
});
</script>

<style lang="scss" scoped>
.container {
    flex-direction: row;
    align-items: center;
    padding: 0.4vw 0.5vw;
    gap: 0.25vw;

    &.centered {
        justify-content: center;
    }

    &:not(&.disabled) {

        &.active,
        &:hover {
            background-color: red !important;
        }
    }
}
</style>