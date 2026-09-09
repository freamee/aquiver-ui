<template>
    <i :class="[icon, fixed && 'fa-fw']" :style="styles"></i>
</template>

<script lang="ts" setup>
import { type StyleValue, computed } from 'vue';

interface iProps {
    size?: number;
    icon: string;
    center?: boolean;
    fixed?: boolean;
}

const props = withDefaults(defineProps<iProps>(), {
    size: 0.65,
    center: true,
    fixed: true
});

const styles = computed<StyleValue>(() => {
    return {
        fontSize: props.size + 'vw',
        textAlign: props.center ? 'center' : 'left',
        color: 'white'
    };
});
</script>

<style lang="scss" scoped>
i {
    transition: ease 0.25s;
}
</style>