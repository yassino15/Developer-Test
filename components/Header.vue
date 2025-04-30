<template>
    <header>
        <div class="nav-container">
            <div class="header-content">
                <!-- Left Section - Logo -->
                <div class="logo-section">
                    <nuxt-link to="/">
                        <NuxtImg src="/Icons/DEVELOPER TEST - Logo Black.png" format="webp" alt="Logo" height="90" />
                    </nuxt-link>
                </div>

                <!-- Middle Section - Main Navigation -->
                <div class="main-nav-section">
                    <nav class="main-nav">
                        <ul class="category-nav">
                            <li class="category-item font-dubai-bold">
                                <nuxt-link to="/electronics" class="nav-link">ELECTRONICS</nuxt-link>
                            </li>
                            <li class="category-item font-dubai-bold">
                                <nuxt-link to="/jewelry" class="nav-link">JEWELRY</nuxt-link>
                            </li>
                            <li class="category-item font-dubai-bold">
                                <nuxt-link to="/men-clothing" class="nav-link">MEN CLOTHING</nuxt-link>
                            </li>
                            <li class="category-item font-dubai-bold">
                                <nuxt-link to="/women-clothing" class="nav-link">WOMEN CLOTHING</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- Right Section - Utility Navigation & Actions -->
                <div class="right-section">
                    <!-- Top Row - Secondary Navigation -->
                    <div class="secondary-nav">
                        <ul class="nav-list">
                            <li class="nav-item">
                                <nuxt-link to="/home" class="nav-link secondary-link">Home</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/about-us" class="nav-link secondary-link">About Us</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/media-center" class="nav-link secondary-link">Media Center</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/contact-us" class="nav-link secondary-link">Contact Us</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link to="/ar" class="nav-link font-dubai-bold">AR</nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Bottom Row - Search & Action Icons -->
                    <div class="actions-row">
                        <div class="search-container">
                            <input type="text" class="search-input" placeholder="Search" />
                            <button class="search-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </button>
                        </div>
                        <div class="action-icons">
                            <nuxt-link to="/account" class="icon-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </nuxt-link>
                            <nuxt-link to="/wishlist" class="icon-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                            </nuxt-link>
                            <nuxt-link to="/cart" class="icon-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="8" cy="21" r="1" />
                                    <circle cx="19" cy="21" r="1" />
                                    <path
                                        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup></script>

<style scoped>
.header-content {
    display: flex;
    align-items: flex-end;
    padding: 1.8rem 4rem 1.4rem 3.5rem;
}

.main-nav-section {
    flex: 1;
    display: flex;
    justify-content: center;
}

.category-nav {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 2.5rem;
}

.right-section {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.secondary-nav .nav-list {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}

.secondary-link {
    font-size: 0.9rem;
}

.actions-row {
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
    gap: 1rem;
}

.search-container {
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 4px;
    padding: 0.3rem;
}

.search-input {
    border: none;
    background: transparent;
    padding: 0.5rem 0.75rem;
    outline: none;
    width: 250px;
    font-size: 0.9rem;
}

.search-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
}

/* Action Icons */
.action-icons {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.icon-link {
    color: #333;
    transition: color 0.2s;
}

.icon-link:hover {
    color: #000;
}

.nav-link {
    color: #000;
    text-decoration: none;
    position: relative;
}

.nav-link::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0px;
    left: 0;
    background-color: #000;
    transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
    width: 100%;
}
</style>
