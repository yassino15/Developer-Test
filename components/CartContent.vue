<template>
    <div v-if="cart.length" class="card shadow-sm">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center flex-wrap">
            <h5 class="mb-0">🛒 Your Shopping Cart</h5>
            <button class="btn btn-outline-light btn-sm mt-2 mt-md-0" @click="clearAll">
                🗑️ Clear Cart
            </button>
        </div>

        <div class="list-group list-group-flush">
            <CartItem v-for="item in cart" :key="item.id" :item="item" @remove="remove" />
        </div>

    </div>

    <div v-else class="text-center my-5">
        <h4 class="text-muted">🛒 Your cart is empty</h4>
        <p class="text-muted">Looks like you haven't added any products yet.</p>
        <nuxt-link to="/" class="text-decoration-none">
            <button class="btn btn-primary mt-3">Start Shopping</button>
        </nuxt-link>
    </div>
</template>

<script setup>
const store = useCartStore();
store.fetchCart(2);

const cart = computed(() => store.cart);

const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const order = () => {
    store.confirmCart();
};

const remove = (id) => {
    store.removeFromCart(id);
};

const clearAll = () => {
    store.clearCart();
};
</script>