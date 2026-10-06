<template>
    <div class="element-bar-chart">
        <div
            v-for="(item, index) in normalizedData"
            :key="item.label ?? index"
            class="element-bar-chart__item"
        >
            <div class="element-bar-chart__bar-container">
                <div
                    class="element-bar-chart__bar"
                    :class="{
                        'is-active': activeIndex === index,
                    }"
                    :style="{
                        height: `${item.percentage}%`,
                    }"
                    @mouseenter="activeIndex = index"
                    @mouseleave="activeIndex = null"
                >
                    <div
                        v-if="activeIndex === index"
                        class="element-bar-chart__tooltip"
                    >
                        {{ item.value }}
                    </div>
                </div>
            </div>

            <ElementText class="element-bar-chart__label">
                {{ item.label }}
            </ElementText>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ElementText from "./ElementText.vue";

interface IBarData {
    label: string;
    value: number;
}

interface IProps {
    data: IBarData[];
    color?: string;
    max?: number;
}

const props = withDefaults(defineProps<IProps>(), {
    color: "#49caad",
});

const activeIndex = ref<number | null>(null);

const maxValue = computed(() => {
    if (props.max) {
        return props.max;
    }

    return Math.max(...props.data.map((item) => item.value), 1);
});

const normalizedData = computed(() => {
    return props.data.map((item) => ({
        ...item,
        percentage: Math.max((item.value / maxValue.value) * 100, 2),
    }));
});
</script>

<style scoped>
.element-bar-chart {
    display: flex;
    align-items: flex-end;

    width: 100%;
    height: 160px;

    gap: 0.5rem;
}

.element-bar-chart__item {
    flex: 1;

    min-width: 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.4rem;
}

.element-bar-chart__bar-container {
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;
}

.element-bar-chart__bar {
    position: relative;

    width: 100%;
    min-height: 3px;

    border-radius: 0.2rem 0.2rem 0 0;

    background: v-bind(color);

    opacity: 0.7;

    cursor: pointer;

    transition:
        height 250ms ease,
        opacity 150ms ease,
        transform 150ms ease;
}

.element-bar-chart__bar:hover,
.element-bar-chart__bar.is-active {
    opacity: 1;
    transform: translateY(-2px);
}

.element-bar-chart__tooltip {
    position: absolute;

    left: 50%;
    bottom: calc(100% + 0.4rem);

    transform: translateX(-50%);

    padding: 0.25rem 0.45rem;

    white-space: nowrap;

    font-size: 0.65rem;
    font-weight: 600;

    color: white;

    background: rgba(15, 17, 18, 0.95);

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.2rem;

    pointer-events: none;
}

.element-bar-chart__label {
    flex-shrink: 0;

    font-size: 0.6rem;
    opacity: 0.4;
}
</style>
