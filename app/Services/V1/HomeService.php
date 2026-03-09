<?php

namespace App\Services\V1;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Http;

class HomeService
{
    private $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('app.yts_base_url');
    }

    public function index($request)
    {
        $page = $request->get('page', 1);

        if (!$page) {
            abort(404);
        }

        $response = Http::acceptJson()
            ->get("{$this->baseUrl}/list_movies.json", ['page' => $page]);

        if ($response->failed()) {
            return new LengthAwarePaginator([], 0, 20);
        }

        $response = $response->json();

        $movies = $response['data']['movies'] ?? [];
        $currentPage = $response['data']['page_number'] ?? 1;
        $total = $response['data']['movie_count'] ?? 0;
        $perPage = $response['data']['limit'] ?? 20;

        $paginator = new LengthAwarePaginator($movies, $total, $perPage, $currentPage, ['path' => $request->url(), 'query' => $request->query()]);

        return $paginator;
    }

    public function search($request)
    {
        $query = $request->get('query_term', '');
        $page = $request->get('page', 1);

        if (!$query || !$page) {
            abort(404);
        }

        $response = Http::acceptJson()
            ->get("{$this->baseUrl}/list_movies.json", ["query_term" => $query, "page" => $page]);

        if ($response->failed()) {
            return new LengthAwarePaginator([], 0, 20);
        }

        $response = $response->json();

        $movies = $response['data']['movies'] ?? [];
        $currentPage = $response['data']['page_number'] ?? 1;
        $total = $response['data']['movie_count'] ?? 0;
        $perPage = $response['data']['limit'] ?? 20;

        $paginator = new LengthAwarePaginator($movies, $total, $perPage, $currentPage, ['path' => $request->url(), 'query' => $request->query()]);

        return $paginator;
    }

    public function detail($request, $movie_id)
    {
        if (!$movie_id) {
            abort(404);
        }

        $response = Http::acceptJson()
            ->get("{$this->baseUrl}/movie_details.json", ["movie_id" => $movie_id]);

        if ($response->failed()) {
            return [];
        }

        $response = $response->json();

        if ($response == null) {
            return [];
        }

        return $response;
    }

    public function browseMovies($request)
    {
        $quality = $request->get('quality', '2160p');
        $page = $request->get('page', 1);

        if (!$page) {
            abort(404);
        }

        $response = Http::acceptJson()
            ->get("{$this->baseUrl}/list_movies.json", ['quality' => $quality, 'page' => $page]);

        if ($response->failed()) {
            return new LengthAwarePaginator([], 0, 20);
        }

        $response = $response->json();

        $movies = $response['data']['movies'] ?? [];
        $currentPage = $response['data']['page_number'] ?? 1;
        $total = $response['data']['movie_count'] ?? 0;
        $perPage = $response['data']['limit'] ?? 20;

        $paginator = new LengthAwarePaginator($movies, $total, $perPage, $currentPage, ['path' => $request->url(), 'query' => $request->query()]);

        return $paginator;
    }


}