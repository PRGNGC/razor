import { CommonAxios } from "@/shared/api";
import axios from "axios";

async function getAllCategoryProducts(category: string, filters: URLSearchParams){
    // const response = await CommonAxios.get(category);
    // const response = await axios.get('http://localhost:8000/keyboards?size=Tenkeyless:switchesKeys=Linear+Optical+%28Red%29');
    // const response = await CommonAxios.get(`${category}?size=Tenkeyless&switchesKeys=Clicky+Optical+%28Purple%29`);
    const response = await CommonAxios.get(`${category}?${filters}`);
    // const response = await CommonAxios.get("keyboards", {params: {
    //     size: "Tenkeyless",
    //     productFamily: "Razer Turret"
    // }});
    return response.data
}

export { getAllCategoryProducts }