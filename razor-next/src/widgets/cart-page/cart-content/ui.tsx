'use client'
import styles from './styles.module.scss'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getAllCartProducts, changeProductAmount } from './api'
import { ItemCard } from "@/entities/item-card"
import { Loader } from '@/shared/ui/loader'
import { FormEvent, useState } from 'react'

interface DeviceType {
    id: string,
    deviceId: string,
    deviceType: string,
    deviceAddInfo: string,
    devicePriceOff: boolean,
    deviceExclusive: boolean,
    deviceNew: boolean,
    deviceOtherInfo: boolean,
    deviceImg: string,
    deviceRating: string,
    deviceReviewsCount: string,
    deviceTitle: string,
    deviceActualPrice: string,
    deviceOldPrice: string,
    deviceAmount: number
}

export function CartContent(){
    const [count, setCount] = useState<number>(1);
    
    const {isLoading, isError, data, error} = useQuery({queryKey: ["cartproducts"], queryFn: getAllCartProducts})

    const queryClient = useQueryClient();
    
    const patch = useMutation({
        mutationFn: changeProductAmount,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cartproducts"] });
        },
    })
    
    if(isLoading){
        return <Loader/>
    }
    
    if(isError){
        return <p>{error.message}</p>
    }

    return(
        <div className={styles.cartContent}>
            <div className={styles.container}>
                    {                 
                        data.map((i: DeviceType) => {
                            return(
                                <div className={styles.product}>
                                    <ItemCard deviceInfo={i} productRoute=''></ItemCard>
                                    <div className={styles.productCounter}>
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                        }}>
                                            <span className={styles.counterIncrement} onClick={ () => {
                                                let newAmount = i.deviceAmount + 1
                                                let id = i.id
                                                patch.mutate({newAmount, id})
                                            }
                                            }>+</span>
                                            {/* <span className={styles.counterIncrement} onClick={() => setCount((prevCount: number) => prevCount + 1)}>+</span> */}
                                            <p className={styles.counterValue}>{count}</p>
                                            <span className={styles.counterDecrement} onClick={ () => {
                                                let newAmount = i.deviceAmount - 1
                                                let id = i.id
                                                patch.mutate({newAmount, id})
                                            }
                                            }>-</span>
                                            {/* <span className={styles.counterDecrement} onClick={() => setCount((prevCount: number) => prevCount - 1)}>-</span> */}
                                        </form>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}