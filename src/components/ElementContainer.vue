<template>
    <ElementHover v-slot="{ isHovered }">
        <div class="element-container" :style>
            <slot :isHovered />
        </div>
    </ElementHover>
</template>

<script setup lang="ts">
import { computed, type StyleValue } from 'vue';
import ElementHover from './ElementHover.vue';
import * as chroma from "chroma.ts";

type Theme = "dark" | "dark-1";

interface iProps {
    rounded?: number;
    theme?: Theme;
}

const props = withDefaults(defineProps<iProps>(), {
    rounded: 0.0,
    theme: "dark"
})

const themeColor = computed(() => {
    switch (props.theme) {
        case 'dark':
            return chroma.color(11, 19, 19)
        case 'dark-1':
            return chroma.color(25, 29, 29)
        default:
            return chroma.color(11, 19, 19)
    }
})

const style = computed<StyleValue>(() => ({
    borderRadius: props.rounded + 'vw',
    background: themeColor.value.toString()
}))
</script>

<style lang="scss" scoped>
.element-container {
    padding: 0.45vw 0.75vw;
    transition: ease 0.25s;
}
</style>