import { useState } from 'react'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getAllCategoryProducts } from './api'
import { ItemCard } from '@/entities/item-card'
import { ProductsSorting } from '@/features/products-sorting'
import { useParams } from 'next/navigation'
import { Loader } from '@/shared/ui/loader'

export function ProductsBlock({filters, category}){
    const [triage, setTriage] = useState("Newest");
    const [page, setPage] = useState(1);
    const params = useParams();
    // console.log(params)

    // const {isLoading, isError, data, error} = useQuery({queryKey: ['products', currentCategory, filters], queryFn: () => getAllCategoryProducts})
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['products', category, filters, page], queryFn: () => getAllCategoryProducts(category, filters, page)})
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
            data.data.sort((a, b) => a.deviceActualPrice - b.deviceActualPrice);
            break;
        }
    case "Most Expensive":
        {
            data.data.sort((a, b) => b.deviceActualPrice - a.deviceActualPrice);
            break;
        }
    }   

    // console.log(data)

    return(
        <>
            {/* {isLoading && <p>Loading...</p>}
            {isError && <p>{error.message}</p>} */}
            <div className={styles.productsContainer}>
                <div className={styles.additionalInfo}>
                    <div className={styles.productsSort}>
                        <ProductsSorting sortSetter={setTriage}/>
                    </div>
                    <p className={styles.productsCount}>{data?.data?.length} products</p>
                </div>
                <div className={styles.productsBlock}>
                    {
                        data?.data?.map(i => {
                            return(
                                <ItemCard productRoute={`/store/${params.slug}/${i.deviceId}`} key={crypto.randomUUID()} deviceInfo={i}></ItemCard>
                                )
                            })
                        }
                </div>
                {/* <Loader></Loader> */}
            </div>
        </>
    )
}