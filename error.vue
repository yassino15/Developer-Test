<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style="max-width: 400px; width: 100%;">
      <div class="card-body text-center">
        <h1 class="display-4 text-danger mb-3">Error {{ error.statusCode }}</h1>
        <p class="lead mb-4">{{ error.statusMessage }}</p>
        <button @click="clearErr" class="btn btn-primary">Back to home</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['error']);
const clearErr = () => {
  clearError({ redirect: '/' });
};
</script>
