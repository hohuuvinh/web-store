<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Models\categoris;
use App\Models\posts;
use Carbon\Carbon;
use DB;

class CategorisController extends Controller
{   

    //GET http://127.0.0.1:8000/api/GetCategoris
    public function GetCategoris(){
        $GetCategori = DB::table('categoris')->get();
        return response()->json($GetCategori);
    }

    //POST http://127.0.0.1:8000/api/AddCategoris
    public function AddCategoris(Request $request){
        $InputsCategoris = $request->input('title');
        $AddCategoris = new categoris;
        $AddCategoris->title = $InputsCategoris;
        $AddCategoris->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
		$AddCategoris->created_at = Carbon::now('Asia/Ho_Chi_Minh');
        $AddCategoris->save();
        return response()->json("Add success");    
    }

    //POST http://127.0.0.1:8000/api/UpdateCategoris
    public function UpdateCategoris(Request $request){
        $InputsIdCategoris = $request->input('id');
        $InputsTitleCategoris = $request->input('title');
        $SelectCategoris = categoris::where('id',$InputsIdCategoris)->first();
        // $SelectCategoris = categoris::findOrFail($InputsIdCategoris);
        $SelectCategoris ->title = $InputsTitleCategoris;
        $SelectCategoris ->updated_at = Carbon::now('Asia/Ho_Chi_Minh');
        $SelectCategoris ->save();
        return response()->json("Update success");    
    }

    //POST http://127.0.0.1:8000/api/DeleteCategoris
    public function DeleteCategoris(Request $request){
        $InputsIdCategoris = $request->input('id');
        $SelectCategoris = categoris::where('id',$InputsIdCategoris)->first();
        $SelectCategoris ->delete();
        return response()->json("Delete success");    
    }

    //GET http://127.0.0.1:8000/api/DetailCategoris/$id
    public function DetailCategoris($id){
        $SelectCategoris = categoris::where('id',$id)->first();
        return response()->json($SelectCategoris);
    }

    //GET http://127.0.0.1:8000/api/GetPostFromCategory/$slug
    public function GetPostFromCategory($slug){
		$getCategory = categoris::where('slug',$slug)->first();
        $Result = posts::where('type',$getCategory->id)->get();
        return response()->json($Result);
    }
}
