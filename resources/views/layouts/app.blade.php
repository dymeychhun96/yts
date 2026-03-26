<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon">
    <title>YTS</title>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />

    <!-- style -->
    {{-- <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=4k,close,home,menu,search,travel_explore&display=block" /> --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    @stack('css')
</head>

<body>
    @include('partials.navbar')

    @yield('content')

    @include('partials.footer')

    <!-- script -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script>
        let navbarMenu = document.getElementById('navbarMenu');

        navbarMenu.addEventListener('show.mdb.collapse', function() {
            $('#hamburgerIcon').text('close');
        });

        navbarMenu.addEventListener('hide.mdb.collapse', function() {
            $('#hamburgerIcon').text('menu');
        });
    </script>

    @stack('js')
</body>

</html>
