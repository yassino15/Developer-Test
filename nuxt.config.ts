// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxt/image', 'nuxt-swiper', '@pinia/nuxt'],
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/autoplay',
    'swiper/swiper-bundle.css',
    '@/assets/css/hero.css'
  ],
  plugins: ['~/plugins/bootstrap.client.ts'],
})