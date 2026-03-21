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
        $response = Http::asForm()
            ->withHeaders([
                'accept' => '*/*',
                'user-agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
                'x-csrf-token' => 'G2DwBXSXuDTjW0bpAn4pNO96ijI=',
                'x-layout' => '{{ template "main" . }}',
                'x-requested-with' => 'XMLHttpRequest',
                'Content-Type' => 'application/x-www-form-urlencoded',
            ])
            ->post('https://webtor.io/download-file', [
                'resource-id' => '4ac05990388d6c9654255011fc29d389ac67ec95',
                'item-id' => '9e58f19d7ff432ae1efd15feb76b997cd10418ec',
            ]);

        return $response->body();

    }


}