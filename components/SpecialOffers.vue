<template>
    <div class="px-5 mt-5 pt-5 pb-2">
        <h1 class="title">special offers</h1>
        <Products :products="products" :slidesPerView="4.5">
            <template #product-info="{ product }">
                <div class="text-center">
                    <p class="card-text fs-3 mb-2 font-dubai-light">{{ product.title }}</p>
                    <p class="card-text fs-4">
                        {{ product.currency }}
                        <span class="text-decoration-line-through text-muted me-2">
                            {{ product.oldPrice }}
                        </span>
                        {{ product.price }}
                    </p>
                </div>
            </template>
        </Products>
    </div>
</template>

<script setup>
const products = [
    {
        image: '/Images/special-offers/1.jpg',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },
    {
        image: '/Images/special-offers/2.jpg',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },
    {
        image: '/Images/special-offers/3.jpg',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },
    {
        image: '/Images/special-offers/4.jpg',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },
    {
        image: '/Images/special-offers/F.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },
    {
        image: '/Images/special-offers/D.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },
    {
        image: '/Images/special-offers/G.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },
    {
        image: '/Images/special-offers/H.png',
        title: 'Lorem ipsum dolor',
        currency: 'AED',
        oldPrice: '800.00',
        price: '899.00'
    },

]
</script>

<style lang="scss" scoped></style>