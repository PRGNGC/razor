import { CommonAxios } from "@/shared/api";

interface I{
  currentCategory: string
}

async function getFilters(currentCategory: string){
    const response = await CommonAxios.get('filters', {
        params: {
          category: currentCategory
        }
      });
      return response.data
}

async function getAllCategoryProducts(currentCategory: string){
  // const response = await CommonAxios.get(category);
  // const response = await CommonAxios.get(`${category}?${filters}`);
  const response = await CommonAxios.get(currentCategory);
  return response.data
}

export { getFilters, getAllCategoryProducts }