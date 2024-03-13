'use client'
import { useState } from 'react'
import { Filter } from '@/features/filter'
import { ProductsBlock } from '../products-block'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getAllCategoryProducts } from './api'

export function SeparateProductsBlock(){
    const [currentFilters, setCurrentFilters] = useState([]);

    const category = 'laptops';

    const {isLoading, isError, data, error} = useQuery({queryKey: ['products', category, currentFilters], queryFn: () => getAllCategoryProducts})

    if(isLoading){
        return <p>Loading...</p>
    }

    if(isError){
        return <p>{error.message}</p>
    }

    return(<>
        <div className={styles.container}>
            <div className={styles.content}>
                <Filter filtersSetter={setCurrentFilters}></Filter>
                <ProductsBlock products={data}></ProductsBlock>
            </div>
        </div>
    </>)
}