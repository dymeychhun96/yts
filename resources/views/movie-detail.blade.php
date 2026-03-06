@extends('layouts.app')

@section('content')
    <div class="vh-100 d-flex justify-content-center align-items-center"
        style="background: url('{{ $data['data']['movie']['background_image'] }}') center center / cover no-repeat;">
        @if ($data['data'])
            <div class="text-center text-light">
                <img class="img-fluid img-thumbnail" src="{{ $data['data']['movie']['medium_cover_image'] }}"
                    alt="movie poster">
                <h1 class="my-3">{{ $data['data']['movie']['title_long'] }}</h1>
                <p>{{ implode(' / ', $data['data']['movie']['genres']) }}</p>

                @foreach ($data['data']['movie']['torrents'] as $torrent)
                    <a href="{{ $torrent['url'] }}" class="btn btn-success mt-2"
                        data-mdb-ripple-init>{{ $torrent['quality'] . '.' . $torrent['type'] . '.' . $torrent['video_codec'] }}</a>
                @endforeach
            </div>
        @endif
    </div>
@endsection
