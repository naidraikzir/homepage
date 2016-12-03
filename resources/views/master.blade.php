<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="csrf_token" content="{{ csrf_token() }}">
	<meta name="theme-color" content="#000000">
	<title></title>
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
	@if (env('APP_ENV') == 'production')
		<link rel="stylesheet" href="{{ asset('css/app.css') }}">
	@endif
	@yield('css')
</head>
<body>
	@yield('page')
	@yield('js')
</body>
</html>
