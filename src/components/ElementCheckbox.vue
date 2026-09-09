<template>
    <ElementHover v-slot="{ isHovered }" style="width: fit-content">
        <ElementContainer bordered :rounded="0.25" no-flex :theme="isHovered ? 'dark-1' : 'dark'">
            <input :style="styles" type="checkbox" :disabled="disabled" :checked v-model="modelValue" />
        </ElementContainer>
    </ElementHover>
</template>

<script lang="ts" setup>
import type { StyleValue } from 'vue';
import { computed } from 'vue';
import ElementContainer from './ElementContainer.vue';
import ElementHover from './ElementHover.vue';

interface iProps {
    size?: number;
    disabled?: boolean;
    checked?: boolean;
}

const props = withDefaults(defineProps<iProps>(), {
    size: 1.25,
    disabled: false
});

const modelValue = defineModel<boolean>({
    required: false,
    default: false
});

const styles = computed<StyleValue>(() => {
    return {
        height: props.size + 'vw',
        width: props.size + 'vw'
    };
});
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
    padding: 0;
    margin: 0;
    appearance: none;
    outline: none;
    border-radius: 0.25vw;
}

input[type='checkbox']:disabled {
    background-color: rgba(100, 100, 100, 0.98);
}

input[type='checkbox']:checked {
    background-size: 70%;
}

input[type='checkbox']:not(:disabled):checked {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 32 32" xml:space="preserve"><path style="fill: %23274c77" d="M11.941,28.877l-11.941-11.942l5.695-5.696l6.246,6.246l14.364-14.364L32,8.818"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
}
</style>