<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Services\V1\SeedrService;
use Illuminate\Http\Request;

class SeedrController extends Controller
{
    private SeedrService $seedrService;

    public function __construct(SeedrService $seedrService)
    {
        $this->seedrService = $seedrService;
    }

    public function scrapeTorrent(Request $request)
    {
        return $this->seedrService->scrapeTorrent($request);
    }
}
