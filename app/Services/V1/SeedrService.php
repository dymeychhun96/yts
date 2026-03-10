<?php

namespace App\Services\V1;


use Illuminate\Support\Facades\Http;

class SeedrService
{
    private $cookie;

    public function __construct()
    {
        $this->cookie = config('app.seedr_cookie');
    }

    public function scrapeTorrent($request)
    {
        $header = [
            'Cookie' => $this->cookie,
        ];

        $respone = Http::withHeaders($header)
            ->post('https://www.seedr.cc/scrape/html/torrents', [
                'url' => 'https://yts.bz/torrent/download/E70B6A744044DD0CAAA33335F4B620DBC47018CB'
            ]);

        if ($respone->failed()) {
            return response()->json([
                'status' => 'failed',
                'message' => $respone->status(),
            ]);
        }

        $respone = $respone->json();

        return $respone;

    }


}