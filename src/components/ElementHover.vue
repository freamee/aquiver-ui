<template>
    <div @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <slot :isHovered="isHovered" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isHovered = ref(false);
</script>