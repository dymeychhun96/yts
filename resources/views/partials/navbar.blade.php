<!--<nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ route('home') }}">
            <img src="{{ asset('storage/images/logo-YTS.svg') }}" alt="YTS Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="{{ route('home') }}">Home</a>
                </li>
                {{-- <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li> --}}
</ul>
<form class="d-flex" role="search" action="{{ route('search') }}" method="get">
    <input class="form-control rounded" type="search" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon" name="query_term" autocomplete="off" />
    <span class="input-group-text border-0 material-symbols-rounded fs-4">
        search
    </span>
</form>
</div>
</div>
</nav>-->

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button data-mdb-collapse-init class="navbar-toggler" type="button" data-mdb-target="#navbarMenu"
            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="material-symbols-rounded" id="hamburgerIcon">
                menu
            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form class="d-flex input-group w-auto" action="{{ route('search') }}" method="get">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" name="query_term" autocomplete="off" />
                <span class="input-group-text border-0 material-symbols-rounded fs-4" id="search-addon">
                    search
                </span>
            </form>
        </div>
    </div>
</nav>
