import axios from 'axios'
import { addTokenHeader } from '../helper/helper'

export async function getProfileData() {
    const headers=addTokenHeader({headers:{}})

    const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/profile`,{headers})
    return res
}

export async function updateProfile(data) {
   const headers=addTokenHeader({headers:{}}) 

   const res=await axios.put(`${import.meta.env.VITE_BASE_URL}/api/food/profile`,data,{headers}) 
   return res; 
}