<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Services\V1\HomeService;
use Illuminate\Http\Request;

class HomeController extends Controller {

    private HomeService $homeService;

    public function __construct(HomeService $homeService)
    {
        $this->homeService = $homeService;
    }

    public function index(Request $request)
    {
        $data = $this->homeService->index($request);

        return view('home', compact('data'));
    }
    public function search(Request $request)
    {
        $data = $this->homeService->search($request);

        return view('search', compact('data'));
    }
    public function detail(Request $request)
    {
        $data = $this->homeService->detail($request);

        return view('movie-detail', compact('data'));
    }
}
