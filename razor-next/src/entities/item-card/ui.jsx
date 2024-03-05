import styles from './styles.module.scss'
import Link from 'next/link'
import { ButtonLink } from '@/shared/ui/button-link'
import Image from 'next/image'
import star from '@/shared/ui/icon/assets/star.svg'

export function ItemCard({deviceInfo}){
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
                <Image src={deviceInfo.deviceImg} alt='img' height={200} width={300}></Image>
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
                    <p className={styles.actualPrice}>{deviceInfo.deviceActualPrice}</p>
                    {deviceInfo.deviceOldPrice && <p className={styles.oldPrice}>{deviceInfo.deviceOldPrice}</p>}
                </div>
                <ButtonLink color='green'>BUY</ButtonLink>
            </div>
        </div>
    )
}