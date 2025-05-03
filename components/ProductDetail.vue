<template>
    <div class="card shadow-sm border-0">
        <div class="row g-0">
            <div class="col-md-6 p-4 d-flex align-items-center justify-content-center bg-light">
                <img :src="product.image" :alt="product.title" class="img-fluid">
            </div>

            <div class="col-md-6">
                <div class="card-body p-4 p-md-5">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="text-uppercase text-muted small">{{ product.category }}</h5>
                        <span class="badge bg-primary">{{ product.rating.rate }} ★ ({{ product.rating.count }}
                            reviews)</span>
                    </div>

                    <h1 class="card-title mb-3">{{ product.title }}</h1>
                    <p class="card-text fs-4 fw-bold text-primary mb-4">${{ product.price.toFixed(2) }}</p>

                    <p class="card-text mb-4">{{ product.description }}</p>

                    <QuantityInput v-model="quantity" />

                    <div class="d-grid gap-2">
                        <button class="btn btn-primary btn-lg" @click="addToCart" :disabled="isAddingToCart">
                            <span v-if="isAddingToCart" class="spinner-border spinner-border-sm me-2" role="status"
                                aria-hidden="true"></span>
                            <i v-else class="bi bi-cart-plus me-2"></i>
                            Add to Cart
                        </button>
                        <NuxtLink :to="`/products/${product.category}`" class="btn btn-outline-secondary">
                            Continue Shopping
                        </NuxtLink>
                    </div>

                    <ShippingAccordion />
                </div>
            </div>
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
const quantity = ref(1)
const isAddingToCart = ref(false)
const addToCart = async () => {
    try {
        isAddingToCart.value = true

        // Here you would typically call your cart API
        // This is a simulated API call
        await new Promise(resolve => setTimeout(resolve, 800))

        // Show success toast or notification
        alert(`Added ${quantity.value} x ${props.product.title} to cart!`)

        quantity.value = 1
    } catch (err) {
        console.error('Error adding to cart:', err)
        alert('Failed to add item to cart. Please try again.')
    } finally {
        isAddingToCart.value = false
    }
}

</script>