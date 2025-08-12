<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold navbar-custom-brand" href="#">
        <i class="bi bi-egg-fried me-2"></i>Biryani World
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active" exact>
              <i class="bi bi-house-door me-1"></i>Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/computed" active-class="active" exact>
              <i class="bi bi-calculator me-1"> </i>Computed
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/test" active-class="active" exact>
              <i class="bi bi-calculator me-1"> </i>Test
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
