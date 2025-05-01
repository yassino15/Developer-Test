<template>
    <div :class="containerClass">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path" :class="linkClass">
            {{ link.title }}
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    containerClass: {
        type: String,
        default: ''
    },
    linkClass: {
        type: String,
        default: ''
    }
})
const links = [
    { title: 'Electronics', path: '/electronics' },
    { title: 'Jewelry', path: '/jewelry' },
    { title: 'Men Clothing', path: '/men-clothing' },
    { title: 'Women Clothing', path: '/women-clothing' }
];
</script>
