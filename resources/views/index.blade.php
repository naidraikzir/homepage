@extends('master')

@section('page')
	<div id="app"></div>
@endsection

@section('js')
	@if (env('APP_ENV') == 'local')
		<script src="http://localhost:8080/js/app.js"></script>
	@elseif (env('APP_ENV') == 'production')
		<script src="{{ asset('js/app.js') }}"></script>
	@endif
@endsection
