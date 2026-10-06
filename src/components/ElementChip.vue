<template>
    <div class="element-chip" :style>
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { StyleValue } from "vue";
import * as chroma from "chroma.ts";

interface iProps {
    color?: chroma.Color;
    rounded?: number;
}

const props = withDefaults(defineProps<iProps>(), {
    color: () => chroma.color("red"),
    rounded: 0,
});

const style: StyleValue = {
    background: props.color.toString(),
    borderRadius: props.rounded + "vw",
};
</script>

<style lang="scss" scoped>
.element-chip {
    height: fit-content;
    width: fit-content;
    padding: 0 0.5vw;
}
</style>
