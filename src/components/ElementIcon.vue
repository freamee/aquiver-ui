<template>
    <i :class="[icon, fixed && 'fa-fw']" :style="styles"></i>
</template>

<script lang="ts" setup>
import { color, type Color } from "chroma.ts";
import { type StyleValue, computed } from "vue";

interface iProps {
    size?: number;
    icon: string;
    center?: boolean;
    fixed?: boolean;
    color?: Color;
}

const props = withDefaults(defineProps<iProps>(), {
    size: 1.0,
    center: true,
    fixed: true,
    color: color("whitesmoke"),
});

const styles = computed<StyleValue>(() => {
    return {
        fontSize: props.size + "vw",
        textAlign: props.center ? "center" : "left",
        color: props.color.toString(),
    };
});
</script>

<style lang="scss" scoped>
i {
    transition: ease 0.25s;
}
</style>
