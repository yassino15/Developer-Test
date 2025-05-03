<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Developer test',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/icons/logo.png'
    }
  ]
})
</script>
