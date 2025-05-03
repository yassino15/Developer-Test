<template>
    <div :class="containerClass">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path" :class="linkClass">
            {{ link.title }}
        </NuxtLink>
        <slot></slot>
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
        default: 'nav-link mx-2'
    }
});
const links = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Media Center', path: '/media-center' },
    { title: 'Contact Us', path: '/contact-us' }
];
</script>
