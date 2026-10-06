<template>
    <div class="component" :style="styles" :key="url" />
</template>

<script lang="ts" setup>
import { useImage } from "@vueuse/core";
import type { CSSProperties, StyleValue } from "vue";
import { computed, watch } from "vue";

interface Props {
    url: string;
    imageSize?: number | "contain" | "cover";
    height?: number;
    width?: number;
    flex?: boolean;
    borderRadius?: number;
    sizeToParent?: boolean;
    alignSelf?: CSSProperties["alignSelf"];
}

const props = withDefaults(defineProps<Props>(), {
    imageSize: 90,
    flex: false,
    borderRadius: 0,
    sizeToParent: false,
});

const { execute } = useImage({
    src: props.url,
});

watch(
    () => props.url,
    async () => {
        await execute();
    },
);

const styles = computed<StyleValue>(() => {
    const ret: StyleValue = {
        backgroundSize:
            typeof props.imageSize === "number"
                ? props.imageSize + "%"
                : props.imageSize,
        backgroundImage: "url(" + props.url + ")",
        height: props.height + "vw" || "inherit",
        width: props.width + "vw" || "inherit",
        flex: props.flex ? 1 : "0 1 auto",
        borderRadius: props.borderRadius + "vw",
        alignSelf: props.alignSelf,
    };

    if (props.sizeToParent) {
        ret.height = "100%";
        ret.width = "100%";
    }

    return ret;
});
</script>

<style lang="scss" scoped>
.component {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.15s ease-in-out;
}
</style>
