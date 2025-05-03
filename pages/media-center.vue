<template>
    <div class="container py-5">
        <h2 class="text-center fw-bold mb-4">Media Center</h2>
        <p class="text-center text-muted mb-5">
            Discover the latest updates, announcements, and product stories from our e-commerce platform.
        </p>

        <div class="row g-4">
            <div class="col-md-6 col-lg-4" v-for="(item, index) in mediaItems" :key="index">
                <div class="p-4 border rounded shadow-sm h-100 d-flex flex-column justify-content-between bg-light">
                    <div>
                        <h5 class="fw-bold mb-2">{{ item.title }}</h5>
                        <p class="text-muted small">{{ item.date }}</p>
                        <p class="text-muted">{{ item.description }}</p>
                    </div>
                    <button class="btn btn-outline-dark btn-sm mt-3 w-100" disabled>
                        Coming Soon
                    </button>
                </div>
            </div>
        </div>

        <div class="text-center mt-5">
            <p class="text-muted">📰 Stay tuned for more content and updates!</p>
        </div>
    </div>
</template>

<script setup>
const mediaItems = [
    {
        title: 'New Payment Methods Coming',
        date: 'April 28, 2025',
        description: 'We’re expanding our payment options to support more secure and faster checkouts.',
    },
    {
        title: 'Spring Sale Launch Recap',
        date: 'March 15, 2025',
        description: 'Thousands of happy customers enjoyed exclusive deals — see the highlights.',
    },
    {
        title: 'Meet the Makers Behind the Brand',
        date: 'February 10, 2025',
        description: 'A behind-the-scenes look at the people building your favorite e-commerce platform.',
    },
]
</script>
