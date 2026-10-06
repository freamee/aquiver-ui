<template>
    <label
        class="toggle"
        :class="{
            'toggle--checked': modelValue,
            'toggle--disabled': disabled,
        }"
        :style="styles"
    >
        <input v-model="modelValue" type="checkbox" :disabled="disabled" />

        <span class="toggle__track">
            <span class="toggle__thumb"></span>
        </span>
    </label>
</template>

<script lang="ts" setup>
import type { StyleValue } from "vue";
import { computed } from "vue";

interface iProps {
    size?: number;
    disabled?: boolean;
}

const props = withDefaults(defineProps<iProps>(), {
    size: 1.25,
    disabled: false,
});

const modelValue = defineModel<boolean>({
    default: false,
});

const styles = computed<StyleValue>(() => ({
    "--toggle-height": `${props.size}vw`,
    "--toggle-width": `${props.size * 1.8}vw`,
}));
</script>

<style lang="scss" scoped>
.toggle {
    position: relative;
    display: block;

    width: var(--toggle-width);
    height: var(--toggle-height);

    cursor: pointer;
    user-select: none;

    transition: opacity 0.2s ease;
}

.toggle input {
    position: absolute;

    width: 0;
    height: 0;

    opacity: 0;
    pointer-events: none;
}

.toggle__track {
    position: relative;

    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 0.12vw;

    box-sizing: border-box;

    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.08);

    transition:
        background 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
}

.toggle__thumb {
    position: absolute;
    left: 0.12vw;

    width: calc(var(--toggle-height) - 0.24vw);
    height: calc(var(--toggle-height) - 0.24vw);

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.75);

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);

    transition:
        transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
        background 0.2s ease,
        box-shadow 0.2s ease;
}

/* Checked */

.toggle--checked .toggle__track {
    background: rgba(73, 202, 174, 0.25);
    border-color: rgba(73, 202, 174, 0.65);

    box-shadow:
        inset 0 0 8px rgba(73, 202, 174, 0.08),
        0 0 8px rgba(73, 202, 174, 0.08);
}

.toggle--checked .toggle__thumb {
    transform: translateX(calc(var(--toggle-width) - var(--toggle-height)));

    background: rgb(73, 202, 174);

    box-shadow:
        0 1px 4px rgba(0, 0, 0, 0.35),
        0 0 8px rgba(73, 202, 174, 0.25);
}

/* Hover */

.toggle:not(.toggle--disabled):hover .toggle__track {
    border-color: rgba(255, 255, 255, 0.22);
}

.toggle--checked:not(.toggle--disabled):hover .toggle__track {
    background: rgba(73, 202, 174, 0.32);
    border-color: rgba(73, 202, 174, 0.8);
}

.toggle:not(.toggle--disabled):hover .toggle__thumb {
    background: rgba(255, 255, 255, 0.9);
}

.toggle--checked:not(.toggle--disabled):hover .toggle__thumb {
    background: rgb(73, 202, 174);

    box-shadow:
        0 1px 4px rgba(0, 0, 0, 0.35),
        0 0 10px rgba(73, 202, 174, 0.35);
}

/* Disabled */

.toggle--disabled {
    cursor: not-allowed;
    opacity: 0.45;
}

.toggle--disabled .toggle__track {
    background: rgba(100, 100, 100, 0.2);
    border-color: rgba(100, 100, 100, 0.25);
}

.toggle--disabled .toggle__thumb {
    background: rgba(150, 150, 150, 0.7);
}

.toggle--disabled.toggle--checked .toggle__track {
    background: rgba(100, 100, 100, 0.3);
    border-color: rgba(120, 120, 120, 0.35);
}

.toggle--disabled.toggle--checked .toggle__thumb {
    background: rgba(170, 170, 170, 0.7);
}
</style>
