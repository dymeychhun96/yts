<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-0 border-bottom">
    <div class="container">
        <!-- Brand on the Left -->
        <a class="navbar-brand fw-bolder fs-3 ls-tight text-brand me-auto me-lg-4" href="{{ route('home') }}">CINEFlIX</a>

        <!-- Right side elements grouped -->
        <div class="d-flex align-items-center order-lg-3">
            <!-- Theme Toggle stays visible and right-aligned -->
            <button id="themeToggle" class="btn btn-link text-dark px-3 shadow-0" type="button"
                title="Toggle Dark/Light Mode">
                <i class="fas fa-moon fs-5"></i>
            </button>

            <!-- Navbar Toggler for mobile -->
            <button class="navbar-toggler ms-1" type="button" data-mdb-collapse-init data-mdb-target="#navbarMenu">
                <i class="fas fa-bars icon"></i>
            </button>
        </div>

        <!-- Links container pushed to the right on desktop -->
        <div class="collapse navbar-collapse order-lg-2" id="navbarMenu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="{{ route('home') }}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Hero Section -->
<header class="hero-banner text-center text-white py-5 mb-5">
    <div class="container py-5">
        <h1 class="display-3 fw-bold mb-4">Unlimited movies, TV shows, and more.</h1>
        <p class="lead mb-5 opacity-80">Browse the latest hits and find your next favorite story.</p>
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <div class="input-group input-group-lg shadow-5">
                    <input type="text" id="searchInput" class="form-control border-0"
                        placeholder="Search for movies..." />
                    <button class="btn btn-brand px-4" type="button" id="searchBtn">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
