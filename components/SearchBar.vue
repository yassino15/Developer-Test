<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search products..." v-model="inputValue"
            @input="emitSearch" />
        <button class="btn btn-primary" type="button" @click="onSearch">
            Search
        </button>
    </div>
</template>

<script setup>
const inputValue = ref('')
const emit = defineEmits(['update:search'])
function emitSearch() {
    emit('update:search', inputValue.value)
}
</script>