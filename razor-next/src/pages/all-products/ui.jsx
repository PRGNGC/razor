'use client'
import { Categories } from "@/widgets/store-page/categories"
import { AllProducts } from "@/widgets/store-page/all-products-block"
import { SeparateProductsBlock } from "@/widgets/store-page/separate-products-block"
import { useState } from "react"

export function StorePage(){
    const [currentCategory, setCurrentCategory] = useState('');
    return(
        <>
            <Categories currentCategory={currentCategory} categoriesSetter={setCurrentCategory}></Categories>
            {currentCategory == '' && <AllProducts/>}
            {currentCategory == 'laptops' && <SeparateProductsBlock />}
            {/* {currentCategory != '' && <SeparateProductsBlock category={currentCategory} />} */}
        </>
    )
}