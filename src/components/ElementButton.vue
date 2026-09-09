<template>
    <ElementHover v-slot="{ isHovered }">
        <ElementContainer class="container" :class="{
            centered,
            active,
            disabled
        }" v-bind="$props" :theme="isHovered ? 'dark-1' : 'dark'">
            <slot :isHovered :isActive="active" />
        </ElementContainer>
    </ElementHover>

</template>

<script setup lang="ts">
import ElementContainer from './ElementContainer.vue';
import ElementHover from './ElementHover.vue';

interface iProps {
    name?: string;
    centered?: boolean;
    active?: boolean;
    disabled?: boolean;
}

withDefaults(defineProps<iProps>(), {
    centered: true,
    active: false,
    disabled: false
});
</script>

<style lang="scss" scoped>
.container {
    flex-direction: row;
    align-items: center;
    gap: 0.25vw;

    &.centered {
        justify-content: center;
    }

}
</style>