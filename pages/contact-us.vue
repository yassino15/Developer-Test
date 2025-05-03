<template>
    <div class="container py-5">
        <div class="row align-items-center">
            <div class="col-md-6 mb-4 mb-md-0">
                <NuxtImg src="/Icons/logo-black.png" format="webp" class="img-fluid rounded shadow-sm"
                    alt="Customer Service" />
            </div>
            <div class="col-md-6">
                <h2 class="fw-bold mb-3">Let’s Talk 👋</h2>
                <p class="text-muted">
                    Got questions about your order or need help? Our team is always ready to help you get the best
                    shopping experience.
                </p>

                <form @submit.prevent="submitContact">
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input v-model="name" type="text" class="form-control" required placeholder="Your name" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input v-model="email" type="email" class="form-control" required
                            placeholder="you@example.com" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Message</label>
                        <textarea v-model="message" class="form-control" rows="4" required
                            placeholder="How can we help?"></textarea>
                    </div>

                    <button type="submit" class="btn btn-dark w-100">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const message = ref('')

const submitContact = () => {
    alert('✅ Message sent successfully!')
    name.value = ''
    email.value = ''
    message.value = ''
}
</script>

<style scoped>
h2 {
    color: #222;
}
</style>