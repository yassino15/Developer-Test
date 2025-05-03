<template>
    <div class="d-flex align-items-center gap-3 mb-4 w-50">
        <label for="quantity" class="form-label mb-0 fw-semibold">Quantity:</label>
        <div class="input-group input-group-sm quantity-group w-50">
            <button class="btn btn-outline-primary" type="button" @click="decrementQuantity">
                <i>-</i>
            </button>
            <input type="number" class="form-control text-center" id="quantity" v-model="localQuantity" min="1"
                max="99" />
            <button class="btn btn-outline-primary" type="button" @click="incrementQuantity">
                <i>+</i>
            </button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: Number,
        required: true,
        default: 1,
    },
})

const localQuantity = ref(props.modelValue)

const incrementQuantity = () => {
    if (localQuantity.value < 99) localQuantity.value++
}

const decrementQuantity = () => {
    if (localQuantity.value > 1) localQuantity.value--
}

watch(localQuantity, (newVal) => {
    emit('update:modelValue', newVal)
})
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>