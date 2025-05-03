<template>
    <div class="button-container">
        <button class="custom-button" :style="{ backgroundColor: bgColor, color: color }" @mouseover="isHovered = true"
            @mouseleave="isHovered = false" @click="$emit('click')">
            <span class="button-text font-dubai-medium" :class="{ 'text-hovered': isHovered }">{{ text }}</span>
            <span class="arrow-icon" :class="{ 'arrow-hovered': isHovered }">
                <ArrowIcon :fill="color" />
            </span>
        </button>
        <div class="button-outline" :class="{ 'outline-active': isHovered }" :style="{ borderColor: bgColor }"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'SHOP NOW'
    },
    bgColor: {
        type: String,
        default: '#000000'
    },
    color: {
        type: String,
        default: '#ffffff'
    },
});

defineEmits(['click']);
const isHovered = ref(false);
</script>

<style scoped>
.button-container {
    position: relative;
    display: inline-block;
    height: fit-content;
}

.custom-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    z-index: 2;
    transition: transform 0.3s ease;
    min-width: max-content;
    width: 220px;
}

.button-outline {
    position: absolute;
    top: 5px;
    left: 5px;
    right: -5px;
    bottom: -5px;
    border: 1px solid;
    z-index: 1;
    transition: transform 0.3s ease;
}

.button-outline.outline-active {
    transform: translate(-5px, -5px);
}

.button-text {
    font-size: 1.2rem;
    transition: letter-spacing 0.3s ease;
    text-transform: uppercase;
}

.button-text.text-hovered {
    letter-spacing: 2px;
}

.arrow-icon {
    display: flex;
    align-items: center;
    margin-left: 10px;
    transition: transform 0.3s ease;
    /* width: 40px; */
    /* height: 24px; */
}

.arrow-icon.arrow-hovered {
    transform: translateX(5px);
}

@media screen and (max-width: 768px) {
    .custom-button {
        padding: 5px 9px;
        width: 125px;
        letter-spacing: .2px;
    }

    .button-text {
        font-size: .6rem;
    }

    .arrow-icon {
        margin: 8px;
    }
}
</style>