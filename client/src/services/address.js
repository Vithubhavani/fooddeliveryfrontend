import axios from 'axios'
import { addTokenHeader } from '../helper/helper'


export async function getaddress(){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/address`,{headers})

    return res;
}

export async function deleteAddress(addressId){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/food/address/${addressId}`,{headers})

    return res;
}


export async function postAddress(data){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/food/address`,data,{headers})

    return res;

}

export async function editAddress(data,id){
    const headers=addTokenHeader({headers:{}});
    const res=await axios.put(`${import.meta.env.VITE_BASE_URL}/api/food/address/${id}`,data,{headers})
    return res;
}

export async function getAddressId(addressId){
    const headers=addTokenHeader({headers:{}})
    const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/address/${addressId}`,{headers})
return res
}