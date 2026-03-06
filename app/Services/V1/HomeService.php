<?php

namespace App\Services\V1;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Http;

class HomeService {
    private $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('app.yts_base_url');
    }

    public function index($request)
    {
        $page = $request->get('page', 1);

        $response = Http::withoutVerifying()
            ->acceptJson()
            ->get("{$this->baseUrl}list_movies.json", ['page' => $page])
            ->json();

        $movies = $response['data']['movies'];
        $currentPage = $response['data']['page_number'];
        $total = $response['data']['movie_count'];
        $perPage = $response['data']['limit'];

        $paginator = new LengthAwarePaginator($movies, $total, $perPage, $currentPage, ['path' => $request->url(), 'query' => $request->query()]);

        return $paginator;
    }

    public function search($request)
    {
        $query = $request->get('query_term', '');

        $response = Http::withoutVerifying()
            ->acceptJson()
            ->get("{$this->baseUrl}list_movies.json?query_term={$query}")
            ->json();



        $movies = $response['data']['movies'] ?? [];
        $currentPage = $response['data']['page_number'];
        $total = $response['data']['movie_count'];
        $perPage = $response['data']['limit'];

        $paginator = new LengthAwarePaginator($movies, $total, $perPage, $currentPage, ['path' => $request->url(), 'query' => $request->query()]);

        return $paginator;
    }

    public function detail($request)
    {
        $movie_id = $request->get('movie_id', '');

        if (!$movie_id) {
            abort(404);
        }

        $response = Http::withoutVerifying()
            ->acceptJson()
            ->get("{$this->baseUrl}movie_details.json?movie_id={$movie_id}")
            ->json();

        return $response;
    }


}