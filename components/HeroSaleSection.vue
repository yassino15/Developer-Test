<template>
    <div class="hero-sale-container">
        <Swiper :modules="[Pagination, Autoplay]" :autoplay="{ delay: 20000 }" :pagination="{
            clickable: true,
            el: '.swiper-custom-pagination'
        }" class="my-swiper">
            <SwiperSlide v-for="(slide, i) in slides" :key="i">
                <div class="hero-slide" :style="{ backgroundImage: `url(${slide.image})` }"></div>
            </SwiperSlide>
        </Swiper>

        <div class="swiper-custom-pagination"></div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

const slides = ref([
    { image: '/Images/Header.jpg', title: 'Slide 1 Title', buttonImg: '/icons/button.png' },
    { image: '/Images/Header.jpg', title: 'Slide 2 Title', buttonImg: '/icons/button.png' },
])
</script>

<style>
@import url('@/assets/css/hero.css');
</style>
