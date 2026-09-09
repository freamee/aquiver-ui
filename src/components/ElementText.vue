<template>
    <div class="element-text">
        <slot />
    </div>
</template>

<script setup lang="ts">
interface iProps {
    size?: number;
}

withDefaults(defineProps<iProps>(), {
    size: 0.65
})
</script>

<style lang="scss" scoped>
.element-text {
    color: white;
    font-size: 36px;
}
</style>