"use client"
import styles from './styles.module.scss'
import Link from 'next/link'
import { ButtonLink } from '@/shared/ui/button-link'
import Image from 'next/image'
import star from '@/shared/ui/icon/assets/star.svg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addProductCart, deleteProductCart } from './api/requsts'
import { useState } from 'react'

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
    deviceOldPrice: string
}

interface ItemCardProps {
    deviceInfo: DeviceType,
    productRoute: string
}

export function ItemCard({deviceInfo, productRoute}: ItemCardProps){
    const [added, setAdded] = useState<boolean>(false);
    console.log('render - ' + deviceInfo.deviceTitle)

    const queryClient = useQueryClient();

    const add = useMutation({
        mutationFn: addProductCart, 
    })

    const del = useMutation({
        mutationFn: deleteProductCart, 
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(added){
            del.mutate(deviceInfo.id)
            return setAdded(false);
        }
        add.mutate(deviceInfo)
        return setAdded(true);
    }

    return(
        <div className={styles.deviceCard}>
            <div className={styles.commonInfo}>
                <p className={styles.deviceType}>{deviceInfo.deviceType}</p>
                {deviceInfo.devicePriceOff && <p className={styles.devicePriceOff}>{deviceInfo.deviceAddInfo}</p>}
                {deviceInfo.deviceExclusive && <p className={styles.deviceExclusive}>{deviceInfo.deviceAddInfo}</p>}
                {deviceInfo.deviceNew && <p className={styles.deviceNew}>{deviceInfo.deviceAddInfo}</p>}
                {deviceInfo.deviceOtherInfo && <p className={styles.deviceOtherInfo}>{deviceInfo.deviceAddInfo}</p>}
            </div>
            <div className={styles.deviceImg}>
                <Image src={deviceInfo.deviceImg} alt='img' priority={true} height={200} width={300}></Image>
            </div>
            <div className={styles.deviceText}>
                <div className={styles.deviceComments}>
                    <p className={styles.deviceRating}>{deviceInfo.deviceRating}</p>
                    <Image src={star} alt='star'></Image>
                    <p className={styles.deviceReviewsCount}>{deviceInfo.deviceReviewsCount}</p>
                    <Link href='/'>reviews</Link>
                </div>
                <p className={styles.deviceDescription}>{deviceInfo.deviceTitle}</p>
            </div>
            <div className={styles.deviceMainInfo}>
                <div className={styles.devicePrices}>
                    <p className={styles.actualPrice}>${deviceInfo.deviceActualPrice}</p>
                    {deviceInfo.deviceOldPrice && <p className={styles.oldPrice}>${deviceInfo.deviceOldPrice}</p>}
                </div>
                <ButtonLink element={productRoute} color='green'>BUY</ButtonLink>

                <form onSubmit={handleSubmit}>
                    <button>
                        <Image 
                            src='/icons/shopping-cart.svg' 
                            alt='cart' 
                            width={24}
                            height={24} 
                            className={added ? styles.cartCard : ''}     
                        />
                    </button>
                </form>
            </div>
        </div>
    )
}