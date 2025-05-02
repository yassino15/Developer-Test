// stores/productStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const loading = ref(false);

  const fetchProducts = async () => {
    loading.value = true;
    const { data, error } = await useFetch("https://fakestoreapi.com/products");
    if (!error.value) {
      products.value = data.value;
    } else {
      console.error("Error:", error.value);
    }
    loading.value = false;
  };

  const getProductsByCategory = (category) => {
    return computed(() =>
      products.value.filter((p) => p.category === category)
    );
  };

  const getProductById = async (id) => {
    const { data, error } = await useFetch(
      `https://fakestoreapi.com/products/${id}`
    );
    if (error.value) {
      console.error("Failed to load product:", error.value);
      return null;
    }
    return data.value;
  };

  return {
    products,
    loading,
    fetchProducts,
    getProductsByCategory,
    getProductById,
  };
});
