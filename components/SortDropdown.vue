<template>
    <select class="form-select" v-model="modelValue" @change="onChange">
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Highest Rated</option>
    </select>
</template>

<script setup>
defineProps({
    modelValue: String
})

defineEmits(['update:modelValue'])

function onChange() {
    emit('update:modelValue', modelValue)
}
</script>