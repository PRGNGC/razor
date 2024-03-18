'use client'
import { useContext, useState } from 'react'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getAllCategoryProducts } from './api'
import { CategoryContext } from '@/pages/all-products/ui'
import { ItemCard } from '@/entities/item-card'
import { ProductsSorting } from '@/features/products-sorting'

export function ProductsBlock({filters, category}){
    // const {currentCategory, setCurrentCategory} = useContext(CategoryContext);
    const [triage, setTriage] = useState("Newest");


    // const {isLoading, isError, data, error} = useQuery({queryKey: ['products', currentCategory, filters], queryFn: () => getAllCategoryProducts})
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['products', category, filters], queryFn: () => getAllCategoryProducts(category, filters)})
    // const { isLoading, isError, data, error } = useQuery({ queryKey: ['products', category], queryFn: () => getAllCategoryProducts(category)})

    if(isLoading){
        return <p>Loading...</p>
    }

    if(isError){
        return <p>{error.message}</p>
    }

    switch(triage){
        case "Cheapest":
        {
            data.sort((a, b) => a.deviceActualPrice - b.deviceActualPrice);
            break;
        }
    case "Most Expensive":
        {
            data.sort((a, b) => b.deviceActualPrice - a.deviceActualPrice);
            break;
        }
    }   

    return(
        <div className={styles.productsContainer}>
            <div className={styles.additionalInfo}>
                <div className={styles.productsSort}>
                    <ProductsSorting sortSetter={setTriage}/>
                </div>
                <p className={styles.productsCount}>{data?.length} products</p>
            </div>
            <div className={styles.productsBlock}>
                {
                    data?.map(i => {
                        return(
                            <ItemCard key={crypto.randomUUID()} deviceInfo={i}></ItemCard>
                            )
                        })
                    }
            </div>
        </div>
    )
}