import { CommonAxios } from "@/shared/api";

async function getAllCategoryProducts(category: string, filters: []){
    const response = await CommonAxios.get(category, 
    //     {params: {
    //         filters
    // }}
    );
    return response.data
}

export { getAllCategoryProducts }