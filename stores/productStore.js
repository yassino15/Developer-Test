// stores/productStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const loading = ref(false);

  const fetchProducts = async () => {
    loading.value = true;
    try {
      const data = await $fetch("https://fakestoreapi.com/products");
      products.value = data;
    } catch (error) {
      console.error("Error:", error);
    }
    loading.value = false;
  };

  const fetchProductsByCategory = async (category) => {
    loading.value = true;
    try {
      const data = await $fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    } finally {
      loading.value = false;
    }
  };

  const getProductsByCategory = (category) => {
    return computed(() =>
      products.value.filter((p) => p.category === category)
    );
  };

  const getProductById = async (id) => {
    try {
      const data = await $fetch(`https://fakestoreapi.com/products/${id}`);
      return data;
    } catch (error) {
      console.error("Failed to load product:", error);
      return null;
    }
  };

  return {
    products,
    loading,
    fetchProducts,
    getProductsByCategory,
    getProductById,
    fetchProductsByCategory,
  };
});
