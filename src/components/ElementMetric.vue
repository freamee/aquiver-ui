<template>
    <div class="element-metric">
        <div class="element-metric__header">
            <div class="element-metric__label">
                <ElementIcon v-if="icon" :icon="icon" />

                <ElementText :weight="300">
                    {{ label }}
                </ElementText>
            </div>

            <div
                v-if="change"
                class="element-metric__change"
                :class="`is-${changeType}`"
            >
                {{ change }}
            </div>
        </div>

        <ElementText>
            {{ value }}
            {{ suffix }}
        </ElementText>

        <div v-if="data?.length > 1" class="element-metric__chart">
            <svg viewBox="0 0 300 70" preserveAspectRatio="none">
                <defs>
                    <linearGradient
                        :id="gradientId"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stop-color="white"
                            stop-opacity="0.25"
                        />

                        <stop offset="100%" stop-opacity="0" />
                    </linearGradient>
                </defs>

                <!-- Area -->
                <polygon :points="areaPoints" :fill="`url(#${gradientId})`" />

                <!-- Line -->
                <polyline
                    :points="linePoints"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>

        <ElementText>
            {{ description }}
        </ElementText>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import ElementIcon from "./ElementIcon.vue";
import ElementText from "./ElementText.vue";

interface IProps {
    label: string;
    value: string | number;

    data?: number[];

    icon?: string;
    suffix?: string;

    change?: string;
    changeType?: "positive" | "negative" | "neutral";

    description?: string;
}

const props = withDefaults(defineProps<IProps>(), {
    data: () => [],
    changeType: "neutral",
});

const gradientId = `metric-${Math.random().toString(36).substring(2, 9)}`;

const normalizedData = computed(() => {
    if (!props.data.length) {
        return [];
    }

    const min = Math.min(...props.data);
    const max = Math.max(...props.data);

    const range = max - min || 1;

    return props.data.map((value) => (value - min) / range);
});

const points = computed(() => {
    if (normalizedData.value.length < 2) {
        return [];
    }

    const width = 300;
    const height = 60;

    const padding = 4;

    return normalizedData.value.map((value, index) => {
        const x =
            padding +
            (index / (normalizedData.value.length - 1)) * (width - padding * 2);

        const y = height - value * (height - padding * 2) - padding;

        return {
            x,
            y,
        };
    });
});

const linePoints = computed(() => {
    return points.value.map((point) => `${point.x},${point.y}`).join(" ");
});

const areaPoints = computed(() => {
    if (!points.value.length) {
        return "";
    }

    const first = points.value[0];
    const last = points.value[points.value.length - 1];

    return [
        `${first.x},60`,
        ...points.value.map((point) => `${point.x},${point.y}`),
        `${last.x},60`,
    ].join(" ");
});
</script>

<style scoped>
.element-metric {
    display: flex;
    flex-direction: column;

    gap: 0.35rem;
}

.element-metric__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.element-metric__label {
    display: flex;
    align-items: center;
    gap: 0.45rem;

    opacity: 0.55;
}

.element-metric__change {
    font-size: 0.7rem;
    font-weight: 600;
}

.element-metric__change.is-positive {
    color: #49caad;
}

.element-metric__change.is-negative {
    color: #ff6565;
}

.element-metric__change.is-neutral {
    opacity: 0.5;
}

.element-metric__value {
    font-size: 1.5rem;
    font-weight: 700;
}

.element-metric__value span {
    font-size: 0.75rem;
    opacity: 0.45;
    margin-left: 0.15rem;
}

.element-metric__chart {
    width: 100%;
    height: 3rem;

    margin-top: 0.25rem;

    color: #49caad;
}

.element-metric__chart svg {
    display: block;

    width: 100%;
    height: 100%;

    overflow: visible;
}

.element-metric__description {
    font-size: 0.65rem;
    opacity: 0.4;
}
</style>
