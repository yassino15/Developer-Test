<template>
    <div class="card border-0">
        <NuxtImg class="card-img-top rounded-0" :src="product.image" alt="product image" />
        <div class="card-body pt-1">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped></style>