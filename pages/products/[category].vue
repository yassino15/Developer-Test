<template>
    <div class="container py-5" v-if="!isLoading">
        <h1 class="mb-4">Our Products</h1>
        <div class="row mb-4 justify-content-between align-items-center">
            <div class="col-md-3 mb-3 mb-md-0">
                <SearchBar @update:search="handleSearch" />
            </div>
            <div class="col-md-3">
                <SortDropdown @update:filter="handleFilter" />
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            <div v-for="product in filteredProducts" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>

        <div v-if="filteredProducts.length === 0 && !isLoading" class="text-center py-5">
            <div class="py-5">
                <i class="bi bi-search fs-1 text-muted"></i>
                <h3 class="mt-3">No products found</h3>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            </div>
        </div>
    </div>
    <div v-else><Loader /></div>
</template>

<script setup>
const route = useRoute()

const isLoading = ref(true)
const category = route.params.category
const searchQuery = ref('')
const sortBy = ref('default')

const productStore = useProductStore()
const products = await productStore.fetchProductsByCategory(category)

isLoading.value = false

function handleSearch(query) {
    searchQuery.value = query
}
function handleFilter(query) {
    console.log('hello query:', query)
    sortBy.value = query
}
const filteredProducts = computed(() => {
    let result = [...products]

    // Filter by search query
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        )
    }

    // Sort products
    switch (sortBy.value) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price)
            break
        case 'price-desc':
            result.sort((a, b) => b.price - a.price)
            break
        case 'rating-desc':
            result.sort((a, b) => b.rating.rate - a.rating.rate)
            break
    }

    return result
})
</script>
