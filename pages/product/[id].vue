<template>
    <div class="container py-5" v-if="product">

        <ProductDetail :product="product" />
        
       
    </div>
</template>

<script setup>
const route = useRoute()
const productStore = useProductStore()

const product = ref(null)

const isLoading = ref(true)
const error = ref(null)

const productId = computed(() => route.params.id)

const fetchProduct = async () => {
    try {
        isLoading.value = true
        error.value = null

        product.value = await productStore.getProductById(productId.value)

    } catch (err) {
        error.value = err.message || 'Failed to load product'
        console.error('Error fetching product:', err)
    } finally {
        isLoading.value = false
    }
}


fetchProduct()
</script>
