@extends('layouts.app')

@section('content')
    <!-- Main Content -->
    <main class="container mb-5">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <h2 id="sectionTitle" class="h4 border-start border-4 border-danger ps-3 mb-0">Latest Releases</h2>
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle text-dark shadow-0" type="button" id="sortMenu"
                    data-mdb-dropdown-init data-mdb-ripple-init aria-expanded="false">
                    <i class="fas fa-sort-amount-down me-2"></i>Sort By
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow-3 border-0">
                    <li><a class="dropdown-item sort-option" href="#" data-sort="date_added">Date Added</a></li>
                    <li><a class="dropdown-item sort-option" href="#" data-sort="rating">Rating</a></li>
                    <li><a class="dropdown-item sort-option" href="#" data-sort="year">Year</a></li>
                    <li><a class="dropdown-item sort-option" href="#" data-sort="title">Title</a></li>
                </ul>
            </div>
        </div>

        <div id="error-message" class="alert alert-danger shadow-2 border-0" role="alert" style="display: none;">
            <i class="fas fa-exclamation-circle me-2"></i> Failed to fetch movies. Please try again later.
        </div>

        <div id="loader" class="text-center py-5" style="display: none;">
            <div class="spinner-border text-danger" role="status" style="width: 3rem; height: 3rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4" id="movieGrid"></div>

        <nav class="mt-5 pt-4 border-top">
            <ul class="pagination flex-wrap justify-content-center mb-0" id="paginationContainer"></ul>
            <p class="text-center text-muted small mt-3 pagination-info-text" id="paginationInfo"></p>
        </nav>
    </main>

    <!-- Movie Details Modal -->
    <div class="modal fade" id="movieDetailsModal" tabindex="-1" aria-labelledby="movieDetailsModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content border-0 rounded-5 shadow-5 overflow-hidden">
                <div class="modal-header border-0 pb-0">
                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4 p-md-5 pt-0">
                    <div id="modalContent"></div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js')
    <script src="{{ asset('js/home.js') }}"></script>
@endpush
