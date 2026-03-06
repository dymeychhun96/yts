<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="{{ asset('storage/images/favicon.ico') }}">
    <title>YTS</title>

    <!-- style -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    @stack('css')
</head>

<body class="d-flex flex-column h-100">
    <div class="container-fluid">
        @include('partials.navbar')

        @yield('content')

        @include('partials.footer')
    </div>

    <!-- script -->
    <script>
        const data = @json($data);
        console.log(data);
    </script>
    <script src="{{ asset('js/app.js') }}"></script>

    @stack('js')
</body>

</html>
