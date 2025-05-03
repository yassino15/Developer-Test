<template>
    <div class="container py-5" v-if="product">
        <ProductBreadCrumb :product="product" />

        <ProductDetail :product="product" />

        <!-- Related Products -->
        <div v-if="relatedProducts.length > 0" class="mt-5">
            <h3 class="mb-4">You May Also Like</h3>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="col">
                    <ProductCard :product="relatedProduct" />
                </div>
            </div>
        </div>
    </div>
    <div v-else><Loader /></div>
</template>

<script setup>
const route = useRoute()
const productStore = useProductStore()

const product = ref(null)
const relatedProducts = ref([])
const isLoading = ref(true)
const error = ref(null)

const productId = computed(() => route.params.id)

const fetchProduct = async () => {
    try {
        isLoading.value = true
        error.value = null

        product.value = await productStore.getProductById(productId.value)
        if (product.value) {
            await fetchRelatedProducts()
        } else {
            error.value = 'Product not found'
        }
    } catch (err) {
        error.value = err.message || 'Failed to load product'
        console.error('Error fetching product:', err)
    } finally {
        isLoading.value = false
    }
}

const fetchRelatedProducts = async () => {
    try {
        if (!product.value?.category) return
        const allCategoryProducts = await productStore.fetchProductsByCategory(product.value.category)
        // limit to 4 items
        relatedProducts.value = allCategoryProducts
            .filter(p => p.id !== Number(productId.value))
            .slice(0, 4)
    } catch (err) {
        console.error('Error fetching related products:', err)
    }
}

fetchProduct()
</script>
