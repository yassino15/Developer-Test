<template>
    <div class="card h-100 shadow-sm product-card hover-scale">
        <div class="position-relative">
            <img :src="props.product.image" class="card-img-top p-3 img-hover" :alt="props.product.title"
                style="height: 200px; object-fit: contain;">
            <div class="position-absolute top-0 end-0 p-2">
                <span class="badge bg-primary">{{ props.product.rating.rate }} ★</span>
            </div>
        </div>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" :title="props.product.title">{{ props.product.title }}</h5>
            <p class="card-text flex-grow-1 text-muted">{{ truncatedDescription }}</p>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <span class="h5 mb-0 text-primary fw-bold">${{ props.product.price.toFixed(2) }}</span>
                <span class="text-muted small">{{ props.product.rating.count }} reviews</span>
            </div>
            <nuxt-link :to="`/product/${props.product.id}`" class="btn btn-outline-primary w-100 mt-3">
                Visit Product
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const truncatedDescription = computed(() => {
    return props.product.description?.length > 100
        ? props.product.description.substring(0, 100) + '...'
        : props.product.description;
})
</script>


<style scoped>
@import url('@/assets/css/card.css');
</style>