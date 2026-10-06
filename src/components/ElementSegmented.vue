<template>
    <div
        class="element-segmented"
        :class="{
            'no-transition': !transition,
        }"
        :style="{
            transform: `skew(${skewX}deg)`,
        }"
    >
        <div
            v-for="(_, index) in segments"
            :key="index"
            class="element-segmented-segment"
        >
            <div
                class="element-segmented-segment-fill"
                :style="{
                    width: fillPercentage(index) + '%',
                    background: fillColor.toString(),
                    borderRadius: borderRadius + 'vw',
                    height: barHeight + 'vw',
                }"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as chroma from "chroma.ts";

interface iProps {
    percentage: number;
    segments: number;
    fillColor?: chroma.Color;
    borderRadius?: number;
    skewX?: number;
    barHeight?: number;
    transition?: boolean;
}

const props = withDefaults(defineProps<iProps>(), {
    fillColor: () => chroma.color(0, 130, 153),
    borderRadius: 0.15,
    skewX: -15,
    barHeight: 0.5,
    transition: false,
});

function fillPercentage(index: number) {
    const segmentPercentage = 100 / props.segments;
    const actualFill = Math.min(
        Math.max(props.percentage - index * segmentPercentage, 0),
        segmentPercentage,
    );
    return (actualFill / segmentPercentage) * 100;
}
</script>

<style lang="scss" scoped>
.element-segmented {
    display: flex;
    gap: 0.25vw;
    flex: 1;

    &.transition {
        * {
            transition: none !important;
        }

        transition: none !important;
    }

    &-segment {
        flex: 1;
        background-color: rgba(25, 25, 25, 0.85);
        border-radius: 0.1vw !important;

        &-fill {
            height: 100%;
            border-radius: inherit;
            transition: transform 0.25s ease-in-out;
        }
    }
}
</style>
