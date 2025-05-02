<template>
    <div class="hero-sale-container">
        <Swiper :modules="[Pagination, Autoplay]" :autoplay="{ delay: 200000 }" :pagination="{
            clickable: true,
            el: '.swiper-custom-pagination'
        }" class="my-swiper">
            <SwiperSlide v-for="(slide, i) in slides" :key="i">
                <div class="hero-slide">
                    <div class="hero-slide-image" :style="{ backgroundImage: `url(${slide.image})` }"></div>

                    <div class="hero-content">
                        <h2 class="hero-title font-dubai-bold">{{ slide.title }}</h2>
                        <p class="hero-text font-dubai-medium ms-1 my-2 mt-md-4 mb-md-5">
                            {{ slide.text }}
                        </p>
                        <nuxt-link :to="slide.link">
                            <CustomButton class="hero-button" :text="slide.buttonText" />
                        </nuxt-link>
                    </div>
                </div>
            </SwiperSlide>

            <div class="swiper-custom-pagination"></div>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

const slides = ref([
    {
        image: '/Images/Header.jpg',
        title: 'sale',
        link: '/',
        text: 'access a limited selection with up to 70% off',
        buttonText: 'shop now'
    },
    {
        image: '/Images/Header.jpg',
        title: 'deal',
        link: '/',
        text: 'access a section with up to 25% off',
        buttonText: 'check out'
    }
])
</script>

<style>
@import url('@/assets/css/hero.css');
</style>
