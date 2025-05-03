<template>
    <select class="form-select" v-model="inputValue" @change="onChange">
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Highest Rated</option>
    </select>
</template>

<script setup>
const inputValue = ref('default')
const emit = defineEmits(['update:filter'])
function onChange() {
    emit('update:filter', inputValue.value)
}
</script>