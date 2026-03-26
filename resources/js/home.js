const API_URL = "https://movies-api.accel.li/api/v2/list_movies.json";
const movieGrid = document.getElementById("movieGrid");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("error-message");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const paginationContainer = document.getElementById("paginationContainer");
const paginationInfo = document.getElementById("paginationInfo");
const sectionTitle = document.getElementById("sectionTitle");
const modalContent = document.getElementById("modalContent");
const movieModalElement = document.getElementById("movieDetailsModal");
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

const movieDetailsModal = new mdb.Modal(movieModalElement);

let currentPage = 1;
let currentSearch = "";
let currentSort = "date_added";
const moviesPerPage = 12;
let currentMovies = [];

// --- Theme Management ---
function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    const targetTheme = savedTheme || systemTheme;

    applyTheme(targetTheme);
}

function applyTheme(theme) {
    htmlElement.setAttribute("data-mdb-theme", theme);
    localStorage.setItem("theme", theme);

    // Update Toggle Icon
    const icon = themeToggle.querySelector("i");
    if (theme === "dark") {
        icon.className = "fas fa-sun fs-5 text-warning";
        themeToggle.classList.replace("text-dark", "text-light");
    } else {
        icon.className = "fas fa-moon fs-5";
        themeToggle.classList.replace("text-light", "text-dark");
    }
}

themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-mdb-theme");
    applyTheme(currentTheme === "dark" ? "light" : "dark");
});

// --- Movie Data ---
async function fetchMovies(page = 1, query = "", sort = "date_added") {
    loader.style.display = "block";
    movieGrid.innerHTML = "";
    errorMessage.style.display = "none";
    paginationContainer.innerHTML = "";

    try {
        const url = new URL(API_URL);
        url.searchParams.append("page", page);
        url.searchParams.append("limit", moviesPerPage);
        if (query) url.searchParams.append("query_term", query);
        url.searchParams.append("sort_by", sort);

        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        if (data.status === "ok" && data.data.movie_count > 0) {
            currentMovies = data.data.movies;
            renderMovies(currentMovies);
            updatePagination(data.data.movie_count);
        } else {
            movieGrid.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="fas fa-search-minus fa-3x mb-3 text-muted"></i>
                        <p class="text-muted fs-5">No movies found matching your criteria.</p>
                        <button class="btn btn-outline-brand btn-sm" onclick="location.reload()">Reset Search</button>
                    </div>
                `;
            paginationInfo.textContent = "";
        }
    } catch (error) {
        console.error("Fetch error:", error);
        errorMessage.style.display = "block";
    } finally {
        loader.style.display = "none";
    }
}

function renderMovies(movies) {
    movieGrid.innerHTML = movies
        .map((movie) => {
            const ratingColor =
                movie.rating >= 7
                    ? "success"
                    : movie.rating >= 5
                      ? "warning"
                      : "danger";
            const poster =
                movie.large_cover_image ||
                "https://via.placeholder.com/400x600?text=No+Poster";

            return `
                <div class="col">
                    <div class="card h-100 shadow-2-strong border-0 rounded-4 overflow-hidden" style="transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='translateY(-8px)'" onmouseout="this.style.transform='translateY(0)'">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-init data-mdb-ripple-color="light">
                            <img src="${poster}" class="img-fluid movie-poster w-100" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/400x600?text=Image+Unavailable'"/>
                            <span class="badge badge-${ratingColor} position-absolute top-0 end-0 m-3 shadow-1 p-2">
                                <i class="fas fa-star me-1"></i> ${movie.rating}
                            </span>
                            <a href="#!" onclick="showMovieDetails(${movie.id})">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body d-flex flex-column p-4">
                            <h5 class="card-title text-truncate fw-bold mb-1" title="${movie.title}">${movie.title}</h5>
                            <div class="d-flex justify-content-between text-muted small mb-3">
                                <span><i class="far fa-calendar-alt me-1"></i> ${movie.year}</span>
                                <span><i class="far fa-clock me-1"></i> ${movie.runtime}m</span>
                            </div>
                            <!-- <p class="card-text text-muted small mb-4 flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.5;">
                                ${movie.summary || "No description available for this movie."}
                            </p> -->
                            <div class="mt-auto">
                                <div class="mb-3">
                                    ${(movie.genres || [])
                                        .slice(0, 2)
                                        .map(
                                            (g) =>
                                                `<span class="badge rounded-pill bg-body-secondary text-body border me-1">${g}</span>`,
                                        )
                                        .join("")}
                                </div>
                                <button class="btn btn-outline-brand btn-rounded w-100 shadow-0" onclick="showMovieDetails(${movie.id})">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");
}

window.showMovieDetails = function (movieId) {
    const movie = currentMovies.find((m) => m.id === movieId);
    if (!movie) return;

    const ratingColor =
        movie.rating >= 7
            ? "success"
            : movie.rating >= 5
              ? "warning"
              : "danger";

    const torrentsHtml = (movie.torrents || [])
        .map((t) => {
            const typeLower = (t.type || "").toLowerCase();
            let typeClass = "type-default";
            let icon = "fas fa-compact-disc";

            if (typeLower.includes("bluray")) {
                typeClass = "type-bluray";
                icon = "fas fa-compact-disc";
            } else if (typeLower.includes("web")) {
                typeClass = "type-web";
                icon = "fas fa-globe";
            }

            return `
                <div class="col-sm-6 col-md-4">
                    <div class="torrent-card h-100 d-flex flex-column">
                        <div class="torrent-header ${typeClass}">
                            <span><i class="${icon} me-1"></i> ${t.type + "." + t.video_codec || "Standard"}</span>
                            <span class="quality-label" style="opacity: 0.7;">${t.quality}</span>
                        </div>
                        <div class="p-3 text-center flex-grow-1 d-flex flex-column justify-content-center">
                            <div class="mb-3">
                                <h4 class="fw-bold mb-0 text-body">${t.quality}</h4>
                                <span class="text-muted small">${t.size}</span>
                            </div>
                            <a href="${t.url}" class="btn btn-brand btn-rounded btn-sm shadow-0 w-100 mb-2">
                                <i class="fas fa-cloud-download-alt me-2"></i>Torrent Link
                            </a>
                            <button data-hash="${t.hash}" class="btn btn-brand btn-rounded btn-sm shadow-0 w-100 btn-download">
                                <i class="fas fa-cloud-download-alt me-2"></i>Direct Download
                            </button>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");

    modalContent.innerHTML = `
            <div class="row g-5">
                <div class="col-lg-4 text-center text-lg-start">
                    <img src="${movie.large_cover_image}" class="modal-movie-poster img-fluid mb-4 shadow-3" alt="${movie.title}">
                    <div class="d-flex justify-content-center justify-content-lg-start gap-2 mb-4">
                        <span class="badge badge-${ratingColor} p-2 fs-6 shadow-0"><i class="fas fa-star me-1"></i> ${movie.rating}</span>
                        <span class="badge bg-body-secondary text-body border p-2 fs-6 shadow-0"><i class="far fa-calendar-alt me-1"></i> ${movie.year}</span>
                    </div>
                    <div class="mb-4">
                        <h6 class="fw-bold mb-3 text-uppercase small text-muted">Genres</h6>
                        <div class="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                            ${(movie.genres || []).map((g) => `<span class="badge rounded-pill bg-body-secondary text-body border">${g}</span>`).join("")}
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <h2 class="fw-bold mb-1 text-body">${movie.title}</h2>
                    <p class="text-muted mb-4 fs-5">${movie.runtime} minutes • Movie</p>
                    
                    <div class="mb-5">
                        <h5 class="fw-bold mb-3 border-start border-4 border-danger ps-3 text-body">Synopsis</h5>
                        <p class="text-muted lh-lg">
                            ${movie.description_full || movie.summary || "No detailed description available for this movie."}
                        </p>
                    </div>

                    <div>
                        <h5 class="fw-bold mb-4 border-start border-4 border-danger ps-3 text-body">Available Downloads</h5>
                        <div class="row g-3">
                            ${torrentsHtml || '<div class="col-12 text-center p-4 bg-body-secondary rounded-4"><p class="text-muted mb-0">No download links available for this title.</p></div>'}
                        </div>
                        <div class="p-3 text-center loading">
                        </div>
                        <div class="p-3 text-center info">
                        </div>
                    </div>
                </div>
            </div>
        `;

    movieDetailsModal.show();
};

function createPageItem(label, page, active = false, disabled = false) {
    const li = document.createElement("li");
    li.className = `page-item ${active ? "active" : ""} ${disabled ? "disabled" : ""}`;
    const a = document.createElement("a");
    a.className = "page-link shadow-0";
    a.href = "#";
    a.innerHTML = label;
    if (!disabled && !active) {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = page;
            fetchMovies(currentPage, currentSearch, currentSort);
            window.scrollTo({ top: 450, behavior: "smooth" });
        });
    }
    li.appendChild(a);
    return li;
}

function updatePagination(totalCount) {
    const totalPages = Math.ceil(totalCount / moviesPerPage);
    paginationContainer.innerHTML = "";
    if (totalPages <= 1) return;
    const isMobile = window.innerWidth < 576;
    const pageRange = isMobile ? 1 : 2;
    paginationContainer.appendChild(
        createPageItem(
            '<i class="fas fa-angle-double-left"></i>',
            1,
            false,
            currentPage === 1,
        ),
    );
    paginationContainer.appendChild(
        createPageItem(
            '<i class="fas fa-angle-left"></i>',
            currentPage - 1,
            false,
            currentPage === 1,
        ),
    );
    let startPage = Math.max(1, currentPage - pageRange);
    let endPage = Math.min(totalPages, currentPage + pageRange);
    if (startPage > 1) {
        paginationContainer.appendChild(createPageItem("1", 1));
        if (startPage > 2)
            paginationContainer.appendChild(
                createPageItem("...", null, false, true),
            );
    }
    for (let i = startPage; i <= endPage; i++) {
        paginationContainer.appendChild(
            createPageItem(i.toString(), i, i === currentPage),
        );
    }
    if (endPage < totalPages) {
        if (endPage < totalPages - 1)
            paginationContainer.appendChild(
                createPageItem("...", null, false, true),
            );
        paginationContainer.appendChild(
            createPageItem(totalPages.toString(), totalPages),
        );
    }
    paginationContainer.appendChild(
        createPageItem(
            '<i class="fas fa-angle-right"></i>',
            currentPage + 1,
            false,
            currentPage === totalPages,
        ),
    );
    paginationContainer.appendChild(
        createPageItem(
            '<i class="fas fa-angle-double-right"></i>',
            totalPages,
            false,
            currentPage === totalPages,
        ),
    );
    paginationInfo.textContent = isMobile
        ? `Pg ${currentPage} / ${totalPages}`
        : `Showing page ${currentPage} of ${totalPages} (${totalCount.toLocaleString()} total movies)`;
}

searchBtn.addEventListener("click", () => {
    currentSearch = searchInput.value;
    currentPage = 1;
    sectionTitle.textContent = currentSearch
        ? `Search Results for "${currentSearch}"`
        : "Latest Releases";
    fetchMovies(currentPage, currentSearch, currentSort);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchBtn.click();
});

document.querySelectorAll(".sort-option").forEach((option) => {
    option.addEventListener("click", (e) => {
        e.preventDefault();
        currentSort = e.target.getAttribute("data-sort");
        currentPage = 1;
        fetchMovies(currentPage, currentSearch, currentSort);
    });
});

let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (paginationInfo.textContent) {
            fetchMovies(currentPage, currentSearch, currentSort);
        }
    }, 250);
});

window.onload = () => {
    initTheme();
    fetchMovies();
};
