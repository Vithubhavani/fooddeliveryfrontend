import axios from 'axios'
import { addTokenHeader } from '../helper/helper'


export async function getPaymentMethods() {
    const header=addTokenHeader({headers:{}});

    const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/payment`,{headers:header});

    return res;
}

export async function postPayment(data) {
    const header=addTokenHeader({headers:{}});

    const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/food/payment`,data,{headers:header});

    return res;
}

export async function deletePayment(paymentId) {
    const header=addTokenHeader({headers:{}});

    const res=await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/food/payment/${paymentId}`,{headers:header});

    return res;
}

export async function editPayment(data,paymentId) {
   const header=addTokenHeader({headers:{}}); 

   const res=await axios.put(`${import.meta.env.VITE_BASE_URL}/api/food/payment/${paymentId}`,data,{headers:header});

   return res;
}