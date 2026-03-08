@extends('layouts.app')

@section('content')
    <div class="mt-4 row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
        @if (count($data) > 0)
            @foreach ($data as $movie)
                <div class="col">
                    <div class="card h-100">
                        <div class="bg-image hover-zoom">
                            <a href="/detail/{{ $movie['id'] }}">
                                <img class="card-img-top img-fluid" src="{{ $movie['medium_cover_image'] }}">
                            </a>

                        </div>

                        <div class="card-body">
                            <a href="/detail/{{ $movie['id'] }}">
                                <h5 class="card-title text-truncate" data-mdb-popover-init data-mdb-trigger="hover"
                                    data-mdb-content="{{ $movie['title_long'] }}" data-mdb-placement="top">
                                    {{ $movie['title'] }}
                                </h5>
                            </a>
                            <h6 class="card-subtitle text-muted">{{ $movie['year'] }}</h6>
                        </div>
                    </div>
                </div>
            @endforeach
        @else
            <div class="col offset-5 text-center">
                <h5 class="fw-bold">No movie found!</h5>
            </div>
        @endif

    </div>

    <div class="my-4">
        {{ $data->links() }}
    </div>
@endsection
