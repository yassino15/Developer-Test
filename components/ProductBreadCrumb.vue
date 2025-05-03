<template>
    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <NuxtLink to="/" class="text-decoration-none">Home</NuxtLink>
            </li>
            <li class="breadcrumb-item">
                <NuxtLink :to="`/products/${product.category}`" class="text-decoration-none">{{ product.category }} products
                </NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ product?.title || 'Product Detail' }}</li>
        </ol>
    </nav>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: false
    }
})
</script>