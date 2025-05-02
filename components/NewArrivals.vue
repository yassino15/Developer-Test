<template>
    <div class="px-5">
        <h1 class="title">new arrivals</h1>
        <ProductsSwiper :products="products" :slidesPerView="4">
            <template #product-info="{ product }">
                <div class="ms-4 mt-1">
                    <p class="card-text fs-3 mb-2 font-dubai-light">{{ product.title }}</p>
                    <p class="card-text fs-4">
                        {{ product.currency }}
                        {{ product.price }}
                    </p>
                </div>
            </template>
        </ProductsSwiper>
    </div>
</template>

<script setup>
const products = [
    {
        image: '/Images/new-arrivals/D.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
    {
        image: '/Images/new-arrivals/F.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
    {
        image: '/Images/new-arrivals/G.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
    {
        image: '/Images/new-arrivals/H.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
    {
        image: '/Images/new-arrivals/D.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
    {
        image: '/Images/new-arrivals/F.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
    {
        image: '/Images/new-arrivals/G.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
    {
        image: '/Images/new-arrivals/H.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        price: '899.00'
    },
]
</script>

<style scoped></style>