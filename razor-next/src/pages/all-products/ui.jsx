'use client'
import { Categories } from "@/widgets/store-page/categories"
import { AllProducts } from "@/widgets/store-page/all-products-block"
import { SeparateProductsBlock } from "@/widgets/store-page/separate-products-block"
import { useState, createContext } from "react"
// import { createContext } from "vm"

export const CategoryContext = createContext('Category');

export function StorePage(){
    const [currentCategory, setCurrentCategory] = useState('');
    // alert(currentCategory);
    return(
        <>
            {/* <Categories currentCategory={currentCategory} categoriesSetter={setCurrentCategory}></Categories>
            {currentCategory == '' && <AllProducts/>}
            {currentCategory == 'laptops' && <SeparateProductsBlock />} */}
            
            {/* <CategoryContext.Provider value={{currentCategory, setCurrentCategory}}>    */}
                {/* <Categories></Categories> */}
                <AllProducts/>
                {/* {currentCategory == '' && <AllProducts/>}
                {currentCategory != '' && <SeparateProductsBlock />} */}
                {/* {currentCategory == 'laptops' && <SeparateProductsBlock />} */}
            {/* </CategoryContext.Provider>  */}
        </>
    )
}