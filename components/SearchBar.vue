<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search products..." v-model="modelValue"
            @input="updateValue" />
        <button class="btn btn-primary" type="button" @click="onSearch">
            <i class="bi bi-search"></i> Search
        </button>
    </div>
</template>

<script setup>
defineProps({
    modelValue: String
})

defineEmits(['update:modelValue', 'search'])

function updateValue(event) {
    emit('update:modelValue', event.target.value)
}

function onSearch() {
    emit('search')
}
</script>