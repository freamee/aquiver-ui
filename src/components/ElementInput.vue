<template>
    <ElementContainer
        class="container"
        :active="focused"
        :class="{ centered }"
        :opacity="0.6"
        :rounded="0.5"
        :border-size="0.15"
    >
        <slot name="prepend" />

        <ElementIcon v-if="prependIcon" :icon="prependIcon" />

        <input
            :style="{
                fontSize: fontSize + 'vw',
            }"
            ref="inputReference"
            @change="emit('change')"
            @keyup.enter="emit('enter')"
            :disabled="disabled"
            v-model="modelValue"
            :placeholder="placeholder"
            :type="type"
            @focus="focused = true"
            @blur="focused = false"
        />

        <ElementIcon v-if="appendIcon" :icon="appendIcon" />

        <slot name="append" />
    </ElementContainer>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue";
import { onMounted, ref, useTemplateRef } from "vue";
import ElementContainer from "./ElementContainer.vue";
import ElementIcon from "./ElementIcon.vue";
import ElementText from "./ElementText.vue";

const focused = ref(false);
const inputReference = useTemplateRef("inputReference");

interface iProps {
    centered?: boolean;
    placeholder?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    type?: InputTypeHTMLAttribute;
    appendIcon?: string;
    prependIcon?: string;
    fontSize?: number;
}

const props = withDefaults(defineProps<iProps>(), {
    centered: false,
    autoFocus: false,
    type: "text",
    noFlex: false,
    rounded: 0.25,
    fontSize: 1.25,
});

onMounted(() => {
    if (props.autoFocus) {
        inputReference.value?.focus();
    }
});

const modelValue = defineModel<number | string | null>({
    required: true,
    default: null,
});

const emit = defineEmits<{
    (e: "enter"): void;
    (e: "change"): void;
}>();
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5vw;
    align-self: stretch;

    &.centered {
        input {
            text-align: center;
        }
    }

    input {
        outline: 0;
        border: 0;
        margin: 0;
        padding: 0;
        flex: 1;
        width: 100%;
        color: rgb(220, 220, 220);
        transition: ease-in-out 0.25s;
        background: transparent !important;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
}
</style>
