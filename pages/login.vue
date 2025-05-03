<template>
    <div class="container d-flex justify-content-center align-items-center mt-4 mb-5">
        <div class="card shadow-sm p-4 w-100 my-5" style="max-width: 400px;">
            <h2 class="text-center mb-4 fw-bold">Login</h2>

            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email" required
                        placeholder="example@domain.com" />
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" required
                        placeholder="••••••••" />
                </div>

                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>

            <div class="text-center mt-3">
                <small class="text-muted">
                    Don't have an account?
                    <a href="#" class="text-decoration-none">Sign up</a>
                </small>
            </div>
        </div>
    </div>
</template>

<script setup>
const email = ref('')
const password = ref('')

const handleLogin = () => {
    console.log('login logic')
}
</script>
