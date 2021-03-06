<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Post;
use DB;

class PostController extends Controller
{

	public function __construct(Request $request)
	{
		$this->middleware('auth', ['except' => ['index', 'show']]);
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		return !$request->ajax() ? view('index') : Post::all();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$request->merge([
			'status' => 2,
			'slug' => $this->makeSlug($request->title)
		]);
		Post::create($request->except(['id']));
		return 'Post Published';
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		return Post::find($id);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		return Post::find($id);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		$request->merge([ 'slug' => $this->makeSlug($request->title) ]);
		Post::find($id)->update($request->all());
		return 'Post Updated';
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		Post::find($id)->delete();
		return 'Post deleted';
	}

	/**
	 * Generate slug from title
	 * 
	 * @param  string $title
	 * @return string $slug
	 */
	protected function makeSlug($title)
	{
		return Post::where('slug', 'like', '%'.str_slug($title).'%')->count() > 0 ?
			str_slug($title . ' ' . strval(DB::table('posts')->max('id') + 1)) :
			str_slug($title);
	}
}
