<template>
    <div class="element-text" :style>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { color, type Color } from "chroma.ts";
import { computed, type StyleValue } from "vue";

interface iProps {
    size?: number;
    weight?: number;
    color?: Color;
    italic?: boolean;
    letterSpacing?: number;
}

const props = withDefaults(defineProps<iProps>(), {
    size: 1.0,
    weight: 100,
    color: color("whitesmoke"),
    italic: false,
    letterSpacing: 0.0,
});

const style = computed<StyleValue>(() => ({
    fontSize: props.size + "vw",
    color: props.color.toString(),
    fontWeight: props.weight,
    fontStyle: props.italic ? "italic" : "normal",
    letterSpacing: props.letterSpacing + "vw",
}));
</script>

<style lang="scss" scoped>
.element-text {
    line-height: normal;
}
</style>
