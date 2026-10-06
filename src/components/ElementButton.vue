<template>
    <ElementHover
        :class="{
            centered,
            active,
            disabled,
        }"
        v-slot="{ isHovered }"
    >
        <ElementContainer
            v-bind="$props"
            hover
            :active
            :rounded="0.5"
            :borderSize="0.15"
            :opacity="0.6"
            class="element-button"
        >
            <slot :isHovered :isActive="active" />
        </ElementContainer>
    </ElementHover>
</template>

<script setup lang="ts">
import type { Color } from "chroma.ts";
import ElementContainer from "./ElementContainer.vue";
import ElementHover from "./ElementHover.vue";

interface iProps {
    centered?: boolean;
    active?: boolean;
    disabled?: boolean;
    color?: Color;
}

withDefaults(defineProps<iProps>(), {
    centered: true,
    active: false,
    disabled: false,
});
</script>

<style lang="scss" scoped>
.element-button {
    display: flex;
    height: fit-content;
    border-left: 0.35vw solid rgba(60, 60, 60, 0.5);
    align-items: center;
    gap: 0.25vw;
    transition: ease-in-out 0.25s;
    cursor: pointer;
}
</style>
