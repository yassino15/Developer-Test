import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const userId = ref(1);

  const addToCart = (productId, quantity = 1) => {
    const item = cart.value.find((p) => p.productId === productId);
    if (item) item.quantity += quantity;
    else cart.value.push({ productId, quantity });
  };

  const removeFromCart = (productId) => {
    cart.value = cart.value.filter((p) => p.productId !== productId);
  };

  const updateQuantity = (productId, quantity) => {
    const item = cart.value.find((p) => p.productId === productId);
    if (item) item.quantity = quantity;
  };

  const confirmCart = async () => {
    const { data, error } = await useFetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: {
        userId: userId.value,
        date: new Date().toISOString(),
        products: cart.value,
      },
    });
    if (error.value) {
      console.error("Error posting cart:", error.value);
    }
    return data.value;
  };

  const fetchCart = async (id) => {
    const { data, error } = await useFetch(
      `https://fakestoreapi.com/carts/${id}`
    );
    if (error.value) {
      console.error("Failed to fetch cart:", error.value);
      return null;
    }
    return data.value;
  };

  return {
    cart,
    userId,
    addToCart,
    removeFromCart,
    updateQuantity,
    confirmCart,
    fetchCart,
  };
});
