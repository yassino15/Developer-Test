<template>
    <div class="card-footer">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h5 class="mb-2 mb-md-0">Total Amount:</h5>
            <h5 class="text-primary">${{ total.toFixed(2) }}</h5>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <nuxt-link to="/" class="text-decoration-none">
                <button class="btn btn-outline-secondary">Continue Shopping</button>
            </nuxt-link>
            <button class="btn btn-success" @click="$emit('placeOrder')">
                ✅ Place Order
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps(['total']);
defineEmits(['placeOrder']);
</script>