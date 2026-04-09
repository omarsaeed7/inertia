<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $file = $request->file('filepond') ?? $request->file('file');

        if ($file) {
            $folder = 'uploads/users';
            $filename = time().'_'.Str::random(10).'.'.$file->getClientOriginalExtension();

            $path = $file->storeAs($folder, $filename, 'public');

            return response()->json([
                'serverId' => 'storage/'.$path,
                'success' => true,
            ]);
        }

        return response()->json(['error' => 'No file uploaded'], 422);
    }

    public function revert(Request $request)
    {
        $filepath = $request->getContent();
        if ($filepath) {
            $path = str_replace('storage/', '', $filepath);
            Storage::disk('public')->delete($path);
        }

        return response()->json(['status' => 'success']);
    }
}
