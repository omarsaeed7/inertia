<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    {{-- <x-inertia::head /> --}}
    @inertiaHead
</head>

<body>
    @inertia
    {{-- <x-inertia::app /> --}}
</body>

</html>
