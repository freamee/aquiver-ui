<script setup lang="ts">
import { ref } from "vue";

interface Polygon {
    points: string;
    duration: number;
    delay: number;
}

const polygons = ref<Polygon[]>([
    {
        points: "0,0 280,0 180,220 0,320",
        duration: 18,
        delay: -4,
    },
    {
        points: "280,0 520,80 390,300 180,220",
        duration: 22,
        delay: -10,
    },
    {
        points: "0,320 180,220 300,480 50,600",
        duration: 20,
        delay: -7,
    },
    {
        points: "520,80 700,0 620,300 390,300",
        duration: 25,
        delay: -15,
    },
]);
</script>

<template>
    <div class="aq-geometric-background">
        <svg viewBox="0 0 700 600" preserveAspectRatio="none">
            <polygon
                v-for="(polygon, index) in polygons"
                :key="index"
                :points="polygon.points"
                :style="{
                    '--duration': `${polygon.duration}s`,
                    '--delay': `${polygon.delay}s`,
                }"
            />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.aq-geometric-background {
    position: absolute;
    inset: 0;

    overflow: hidden;
    pointer-events: none;

    svg {
        width: 100%;
        height: 100%;
    }

    polygon {
        fill: rgba(255, 255, 255, 0.08);

        animation: polygon-float var(--duration) ease-in-out var(--delay)
            infinite alternate;
    }
}

@keyframes polygon-float {
    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(25px, -15px);
    }

    100% {
        transform: translate(-15px, 25px);
    }
}
</style>
