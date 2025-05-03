<template>
    <div class="container-fluid footer text-white footer-link pt-4">
        <div class="row px-5 pt-3 align-items-center">
            <div class="col-12 col-md-3 px-0">
                <NuxtLink to="/">
                    <NuxtImg src="/Icons/logo.png" alt="Developer Test Logo" class="w-100" />
                </NuxtLink>
            </div>
            <SecondaryNavLinks containerClass="col-12 col-md-2 offset-0 offset-md-1 gap-3 text-center text-md-start"
                linkClass="nav-link my-4 text-white font-dubai-light footer-link" />

            <MainNavLinks containerClass="col-12 col-md-4 gap-3 text-center text-md-start"
                linkClass="font-dubai-light nav-link text-uppercase my-4 text-white footer-link" />

            <div class="col-12 col-md-2 text-center text-md-start pe-0">
                <h2 class="font-dubai-medium footer-link">Contact us</h2>
                <p>+971 00 000 0000</p>
                <p>+971 00 000 0000</p>
                <a href="mailto:info@sample.com" class="text-decoration-none text-white"
                    target="_blank">info@sample.com</a>
            </div>
            <div class="col-12 col-md-3 px-0 social-media">
                <div class="d-flex gap-3 mt-3 mb-1 justify-content-center">
                    <a href="https://www.facebook.com/" target="_blank">
                        <NuxtImg src="/Icons/facebook.png" alt="facebook" height="30" class="logo" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <NuxtImg src="/Icons/youtube.png" alt="youtube" height="30" class="logo" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <NuxtImg src="/Icons/instagram.png" alt="instagram" height="30" class="logo" />
                    </a>
                    <a href="https://x.com/" target="_blank">
                        <NuxtImg src="/Icons/twitter.png" alt="twitter" height="30" class="logo" />
                    </a>
                </div>
            </div>

        </div>
        <hr class="footer-divider">
        <p class="text-center pb-3 mb-0">
            &copy; Developer Test 2024. All Right Reserved.
        </p>
    </div>
</template>
<script setup></script>
<style scoped>
@import url('@/assets/css/footer.css');
</style>