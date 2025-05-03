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
      const productsToSend = cart.value.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }));

      const data = await $fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: {
          userId: userId.value,
          date: new Date().toISOString().split("T")[0],
          products: productsToSend,
        },
      });
      clearCart();
      alert(`order confirmed!`);
      return data;
    } catch (error) {
      console.error("Error confirming cart:", error);
    }
  };

  // const fetchCart = async () => {
  //   try {
  //     const carts = await $fetch(
  //       `https://fakestoreapi.com/carts/user/${userId.value}`
  //     );
  //     const latestCart = carts.at(-1);
  //     if (latestCart) {
  //       cart.value = latestCart.products;
  //     }
  //     return latestCart;
  //   } catch (error) {
  //     console.error("Error fetching user cart:", error);
  //   }
  // };

  return {
    cart,
    userId,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    confirmCart,
    // fetchCart,
  };
});
