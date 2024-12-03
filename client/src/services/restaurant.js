import axios from 'axios';
import { addTokenHeader } from '../helper/helper';

export async function getFoodItems(){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/foodItem`,{headers

});
return res;
}

export async function getVariety(varietyId){
    const headers=addTokenHeader({headers:{}})

    const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/foodItem/variety/${varietyId}`,{headers

});
return res;
}


export function searchFood(title){
    const res=axios.get(`${import.meta.env.VITE_BASE_URL}/api/food/foodItem/search/${title}`);
    return res;
}





