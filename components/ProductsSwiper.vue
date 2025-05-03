<template>
    <div class="hero-sale-container">
        <Swiper :modules="[Pagination, Autoplay, Navigation]" :pagination="{
            clickable: true,
            el: '.swiper-custom-pagination'
        }" :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
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
                <ProductCardSlide :product="product">
                    <slot name="product-info" :product="product"></slot>
                </ProductCardSlide>
            </SwiperSlide>
            <div class="swiper-custom-pagination"></div>
            <div class="swiper-button-prev custom-nav" v-if="showNavButtons">
                <ArrowIcon :flip="true" />
            </div>
            <div class="swiper-button-next custom-nav" v-if="showNavButtons">
                <ArrowIcon :flip="false" />
            </div>
        </Swiper>
    </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

defineProps({
    products: {
        type: Array,
        required: true
    },
    slidesPerView: {
        type: Number,
        default: 4
    },
    showNavButtons: {
        type: Boolean,
        default: false
    }
})
</script>
