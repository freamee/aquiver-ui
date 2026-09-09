<template>
    <ElementHover v-slot="{ isHovered }">
        <div class="element-container">
            <slot :isHovered />
        </div>
    </ElementHover>
</template>

<script setup lang="ts">
import ElementHover from './ElementHover.vue';
</script>

<style lang="scss" scoped>
.element-container {
    background: #0B1313;
    transition: ease 0.25s;
}
</style>