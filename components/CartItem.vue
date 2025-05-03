<template>
    <div class="list-group-item">
        <div class="row align-items-center">
            <div class="col-4 col-md-2 text-center mb-2 mb-md-0">
                <img :src="item.image" alt="Product" class="img-fluid rounded"
                    style="max-width: 80px; height: 80px; object-fit: contain;" />
            </div>
            <div class="col-8 col-md-4">
                <h6 class="fw-bold mb-1 text-truncate">{{ item.title }}</h6>
                <p class="text-muted small mb-0">Unit Price: ${{ item.price.toFixed(2) }}</p>
            </div>
            <div class="col-12 col-md-3 mt-2 mt-md-0">
                <QuantityInput v-model="item.quantity" class="w-100" />
            </div>
            <div class="col-12 col-md-3 mt-2 mt-md-0 text-md-end text-start">
                <p class="fw-bold mb-1">${{ (item.price * item.quantity).toFixed(2) }}</p>
                <button class="btn btn-sm btn-outline-danger" @click="$emit('remove', item.id)">
                    Remove
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['item']);
defineEmits(['remove']);
</script>