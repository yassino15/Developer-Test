<template>
  <header>
    <div class="container-fluid nav-container">
      <!-- Top row: Secondary links (desktop only) -->
      <div class="row d-none d-md-flex justify-content-end py-2 pt-4">
        <div class="col-auto">
          <div class="d-flex">
            <NuxtLink to="/" class="nav-link mx-2">Home</NuxtLink>
            <NuxtLink to="/about-us" class="nav-link mx-2">About Us</NuxtLink>
            <NuxtLink to="/media-center" class="nav-link mx-2">Media Center</NuxtLink>
            <NuxtLink to="/contact-us" class="nav-link mx-2">Contact Us</NuxtLink>
            <NuxtLink to="#" class="font-dubai-bold nav-link mx-2">AR</NuxtLink>
          </div>
        </div>
      </div>

      <div class="row align-items-center">
        <!-- Logo(left) -->
        <div class="col-md-2 col-6 d-flex align-items-center">
          <NuxtLink to="/">
            <NuxtImg src="/icons/logo-black.png" alt="Developer Test Logo" height="90" class="logo" />
          </NuxtLink>
        </div>

        <!-- Main category links (center) -->
        <div class="col-md-6 d-none d-md-flex justify-content-center ps-0">
          <NuxtLink to="/electronics" class="font-dubai-medium nav-link main-link text-uppercase mx-3">Electronics
          </NuxtLink>
          <NuxtLink to="/jewelry" class="font-dubai-medium nav-link main-link text-uppercase mx-3">Jewelry</NuxtLink>
          <NuxtLink to="/men-clothing" class="font-dubai-medium nav-link main-link text-uppercase mx-3">Men Clothing
          </NuxtLink>
          <NuxtLink to="/women-clothing" class="font-dubai-medium nav-link main-link text-uppercase mx-3">Women Clothing
          </NuxtLink>
        </div>

        <!-- Search and Icons(right) -->
        <div class="col-md-4 d-none d-md-flex align-items-center justify-content-end">
          <form class="me-3 search-form">
            <div class="input-group search-wrapper">
              <input class="form-control border-0 search-input" type="search" placeholder="Search"
                aria-label="Search" />
              <span class="input-group-text border-0 bg-transparent search-icon-wrapper">
                <NuxtImg src="/icons/search.png" alt="search" width="16" />
              </span>
            </div>
          </form>

          <HeaderIcon containerClass="justify-content-end" />

        </div>

        <!-- menu (for mobile) -->
        <div class="col-6 d-flex d-md-none justify-content-end">
          <button class="btn btn-link text-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
            <NuxtImg src="/icons/menu.png" alt="" width="35" />
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
      <div class="offcanvas-header">
        <h5 id="mobileMenuLabel" class="offcanvas-title">Menu</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <form class="mb-3">
          <input class="form-control border-0" type="search" placeholder="Search" aria-label="Search" />
        </form>

        <!-- Icons for mobile -->
        <div class="d-flex justify-content-start my-3">
          <HeaderIcon containerClass="justify-content-start my-3" />
        </div>

        <nav class="nav flex-column">
          <NuxtLink to="/electronics" class="nav-link text-uppercase fw-bold py-2">Electronics</NuxtLink>
          <NuxtLink to="/jewelry" class="nav-link text-uppercase fw-bold py-2">Jewelry</NuxtLink>
          <NuxtLink to="/men-clothing" class="nav-link text-uppercase fw-bold py-2">Men Clothing</NuxtLink>
          <NuxtLink to="/women-clothing" class="nav-link text-uppercase fw-bold py-2">Women Clothing</NuxtLink>
          <NuxtLink to="/" class="nav-link py-2">Home</NuxtLink>
          <NuxtLink to="/about-us" class="nav-link py-2">About Us</NuxtLink>
          <NuxtLink to="/media-center" class="nav-link py-2">Media Center</NuxtLink>
          <NuxtLink to="/contact-us" class="nav-link py-2">Contact Us</NuxtLink>
          <NuxtLink to="#" class="nav-link font-dubai-bold py-2">AR</NuxtLink>
        </nav>
      </div>

    </div>
  </header>
</template>

<script setup></script>

<style scoped>
@import url('../assets/css/header.css');
</style>