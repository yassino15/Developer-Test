// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'nuxt-swiper', '@pinia/nuxt'],
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/autoplay',
  ],
  plugins: ['~/plugins/bootstrap.client.ts'],
})