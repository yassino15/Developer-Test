<template>
  <header>
    <div class="container-fluid nav-container">
      <!-- Top row: Secondary links (desktop only) -->
      <div class="row d-none d-md-flex justify-content-end py-2 pt-4">
        <div class="col-auto">
          <SecondaryNavLinks containerClass="d-flex" linkClass="nav-link mx-2">
            <NuxtLink to="#" class="font-dubai-bold nav-link mx-2">AR</NuxtLink>
          </SecondaryNavLinks>
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
        <MainNavLinks containerClass="col-md-6 d-none d-md-flex justify-content-center ps-0"
          linkClass="font-dubai-medium nav-link main-link text-uppercase mx-3" />

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
          <MainNavLinks linkClass="nav-link text-uppercase fw-bold py-2" />
          <SecondaryNavLinks linkClass="nav-link my-2">
            <NuxtLink to="#" class="nav-link font-dubai-bold py-2">AR</NuxtLink>
          </SecondaryNavLinks>
        </nav>
      </div>

    </div>
  </header>
</template>

<script setup></script>

<style>
@import url('../assets/css/header.css');
</style>