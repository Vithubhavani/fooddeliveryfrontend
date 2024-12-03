import axios from "axios"
import { addTokenHeader } from "../helper/helper";
export const register=async(data)=> {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/food/user/signup`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });

    return res;
}

export const login = async (data) => {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/api/food/user/signin`, data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}

export const getdata = async () => {
    const res = axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/user`,  {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    });
    return res;
}