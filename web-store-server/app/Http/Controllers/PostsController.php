<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Models\posts;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Str;

class PostsController extends Controller
{   

    //GET http://127.0.0.1:8000/api/GetPosts
    public function GetPosts(){
        $GetPosts = DB::table('posts')->get();
        return response()->json($GetPosts);
    }

    //POST http://127.0.0.1:8000/api/AddPosts
    public function AddPosts(Request $request){   
        $AddPosts = new posts;
        $AddPosts->title = $request->input('title');
        $AddPosts->note = $request->input('note');
        $AddPosts->content = $request->input('content');
        $AddPosts->feature = $request->input('feature');
        $AddPosts->sale = $request->input('sale');
        $AddPosts->image = $request->input('image');
        $AddPosts->active = $request->input('active');
        $AddPosts->type = $request->input('type');
        $AddPosts->image1 = $request->input('image1');
        $AddPosts->image2 = $request->input('image2');
        $AddPosts->image3 = $request->input('image3');  
        $AddPosts->created_at = Carbon::now('Asia/Ho_Chi_Minh');
        $AddPosts->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
        $AddPosts->slug = Str::slug($request->input('title').Carbon::now('Asia/Ho_Chi_Minh'), '-');
        $AddPosts->linkdemo = $request->input('linkdemo');
        $AddPosts->save();
        return response()->json("Add success");    
    }

    //POST http://127.0.0.1:8000/api/UpdatePosts
    public function UpdatePosts(Request $request){
        $InputsIdPosts = $request->input('id');
        $SelectPosts = posts::where('id',$InputsIdPosts)->first();

        $SelectPosts->title = $request->input('title');
        $SelectPosts->note = $request->input('note');
        $SelectPosts->content = $request->input('content');
        $SelectPosts->feature = $request->input('feature');
        $SelectPosts->sale = $request->input('sale');
        $SelectPosts->image = $request->input('image');
        $SelectPosts->active = $request->input('active');
        $SelectPosts->type = $request->input('type');
        $SelectPosts->image1 = $request->input('image1');
        $SelectPosts->image2 = $request->input('image2');
        $SelectPosts->image3 = $request->input('image3');  
        $SelectPosts->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
        $SelectPosts->linkdemo = $request->input('linkdemo');
        $SelectPosts->save();
        return response()->json("update success");    
    }

    //POST http://127.0.0.1:8000/api/DeletePosts
    public function DeletePosts(Request $request){
        $InputsIdPosts = $request->input('id');
        $SelectPosts = posts::where('id',$InputsIdPosts)->first();
        $SelectPosts ->delete();
        return response()->json("Delete success");    
    }

    //GET http://127.0.0.1:8000/api/DetailPosts/$id
    public function DetailPosts($slug){
        $SelectPosts = posts::where('slug',$slug)->first();
        return response()->json($SelectPosts);
    }
}
