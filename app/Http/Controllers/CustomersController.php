<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerResource;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CustomerResource::collection(\App\Customer::paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer= \App\Customer::create($this->validateCustomer());
        return new CustomerResource($customer);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(\App\Customer $customer)
    {
        return new CustomerResource($customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, \App\Customer $customer)
    {
        $customer->update($this->ValidateCustomer());
        return new CustomerResource($customer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(\App\Customer $customer)
    {
        $customer->delete();
        return new CustomerResource($customer);
    }

    public function validateCustomer(){
        return request()->validate([
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required|email',
            'address'=>'required',
            'phone'=>'required',
//            'image'=>'sometimes|file|image'
        ]);
    }
//    public function storeImage($customer){
//        if(request()->has('image')){
//            $customer->update([
//                'image'=>request('image')->store('uploads','public'),
//            ]);
//        }
//    }

    public function search($field,$query){
        return  Customer::collection(\App\Customer::where($field,'LIKE',"%$query%")->latest()->paginate(10));
    }
}
