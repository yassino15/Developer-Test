<template>
    <div class="hero-sale-container">
        <Swiper :modules="[Pagination, Autoplay]" :pagination="{
            clickable: true,
            el: '.swiper-custom-pagination'
        }" :breakpoints="{
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: slidesPerView || 4,
                spaceBetween: 20
            }
        }" class="my-swiper">
            <SwiperSlide v-for="(product, i) in products" :key="i">
                <ProductCard :product="product">
                    <slot name="product-info" :product="product"></slot>
                </ProductCard>
            </SwiperSlide>
            <div class="swiper-custom-pagination"></div>
        </Swiper>
    </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
defineProps({
    products: {
        type: Array,
        required: true
    },
    slidesPerView: Number,
    default: 4
})
</script>

<style scoped>
@import url('@/assets/css/hero.css');
</style>
