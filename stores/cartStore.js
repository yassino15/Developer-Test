import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const userId = ref(2);

  const addToCart = (product) => {
    const item = cart.value.find((p) => p.id === product.id);
    if (item) item.quantity += product.quantity;
    else cart.value.push(product);
  };

  const removeFromCart = (productId) => {
    cart.value = cart.value.filter((p) => p.id !== productId);
  };

  const clearCart = () => {
    cart.value = [];
  };

  const updateQuantity = (productId, quantity) => {
    const item = cart.value.find((p) => p.productId === productId);
    if (item) item.quantity = quantity;
  };

  const confirmCart = async () => {
    try {
      const data = await $fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: {
          id: 0,
          userId: userId.value,
          date: new Date().toISOString(),
          products: cart.value,
        },
      });
      return data.value;
    } catch (error) {
      console.error("Error posting cart:", error);
    }
  };

  const fetchCart = async (id) => {
    try {
      const data = await $fetch(`https://fakestoreapi.com/carts/${id}`);
      // cart.value.push(...data.value.products);
      return data.value;
    } catch (error) {
      console.error("Error posting cart:", error);
    }
  };

  return {
    cart,
    userId,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    confirmCart,
    fetchCart,
  };
});
