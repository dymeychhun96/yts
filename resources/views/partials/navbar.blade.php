<nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
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
</nav>
