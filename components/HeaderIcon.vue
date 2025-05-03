<template>
    <div class="d-flex" :class="containerClass">
        <NuxtLink to="/login" class="mx-2" aria-label="Account">
            <NuxtImg src="/Icons/login.png" alt="login" width="25" />
        </NuxtLink>
        <NuxtLink to="/wish-list" class="mx-2" aria-label="Wishlist">
            <NuxtImg src="/Icons/heart.png" alt="fav" width="25" />
        </NuxtLink>
        <NuxtLink to="/cart" class="ms-2" aria-label="Cart">
            <NuxtImg src="/Icons/Cart.png" alt="cart" width="25" />
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    containerClass: {
        type: String,
        default: ''
    },
});
</script>