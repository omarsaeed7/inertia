<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('created_at')->get();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function store(Request $request)
    { 
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|decimal:2',
            'image' => 'nullable|string',
            'description' => 'nullable|string',
        ],[
            'name.required' => 'Name is required',
            'price.required' => 'Price is required',
            'price.decimal' => 'Price must be a decimal number',
        ]);

        Product::create($request->all());

        return redirect('/products');
    }


    public function show(string $id) {
        return Inertia::render('Products/Show', ['product' => Product::find($id)]);
    }

    public function edit(string $id) {}

    public function update(Request $request, string $id) {}

    public function destroy(string $id) {}
}
