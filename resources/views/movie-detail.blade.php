@extends('layouts.app')

@section('content')
    @if ($data)
        <div class="vh-100 d-flex justify-content-center align-items-center"
            style="background: url('{{ $data['data']['movie']['background_image'] }}') center center / cover no-repeat fixed;">

            <div class="text-center text-light">
                <img class="img-fluid img-thumbnail" src="{{ $data['data']['movie']['medium_cover_image'] }}"
                    alt="movie poster">
                <h1 class="my-3">{{ $data['data']['movie']['title_long'] }}</h1>
                <p>{{ implode(' / ', $data['data']['movie']['genres']) }}</p>

                <p class="fw-bold">Torrent available</p>
                <div class="container">
                    <div class="btn-group">
                        @foreach ($data['data']['movie']['torrents'] as $torrent)
                            <button type="button" data-url="{{ $torrent['url'] }}"
                                class="btn btn-success btn-rounded btn-download" data-mdb-ripple-init
                                title="{{ $torrent['size'] }}">{{ $torrent['quality'] . '.' . $torrent['type'] . '.' . $torrent['video_codec'] }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        </div>
    @else
        <div class="vh-100 d-flex justify-content-center align-items-center">
            <h2 class="text-center text-danger">No movie found!</h2>
        </div>
    @endif
@endsection

@push('js')
    <script src="{{ asset('js/index.js') }}"></script>
@endpush
