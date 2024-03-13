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

export { getFilters }