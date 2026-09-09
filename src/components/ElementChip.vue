<template>
    <div class="element-chip" :style>
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue';
import * as chroma from "chroma.ts";

interface iProps {
    bgColor?: chroma.Color;
}

const props = withDefaults(defineProps<iProps>(), {
    bgColor: () => chroma.color('red'),
});

const style: StyleValue = {
    background: props.bgColor.toString()
};
</script>

<style lang="scss" scoped>
.element-chip {
    height: fit-content;
    width: fit-content;
    padding: 0 0.5vw;
}
</style>