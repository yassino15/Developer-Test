<template>
    <div class="container py-5">
        <h1 class="mb-4">Our Products</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>

        <div v-if="products.length === 0 && !isLoading" class="text-center py-5">
            <div class="py-5">
                <i class="bi bi-search fs-1 text-muted"></i>
                <h3 class="mt-3">No products found</h3>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

const isLoading = ref(true)
const category = route.params.category

const productStore = useProductStore()
const products = await productStore.fetchProductsByCategory(category)

isLoading.value = false
</script>
