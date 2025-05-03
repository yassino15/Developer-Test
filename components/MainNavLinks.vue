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
    { title: 'Electronics', path: '/products/electronics', id: '' },
    { title: 'jewelery', path: '/products/jewelery', id: '' },
    { title: 'Men Clothing', path: "/products/men's clothing", id: '' },
    { title: 'Women Clothing', path: "/products/women's clothing" , id: ''}
];
</script>
