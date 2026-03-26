<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found!</title>

    <!-- style -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body class="bg-body-tertiary">
    <div class="vh-100 d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h1>404 Not Found</h1>
            <p>The page you are looking for could not be found.</p>
            <a href="{{ route('home') }}" class="btn btn-danger">
                Back to Home</a>
        </div>
    </div>
</body>

</html>
