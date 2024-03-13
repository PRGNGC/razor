'use client'
import styles from './styles.module.scss'
import { getStores } from '../location-map/api'
import { ButtonLink } from '@/shared/ui/button-link'
import { useQuery } from '@tanstack/react-query'

export function LocationStore({country}){
    
  const {isLoading, isError, data, error} = useQuery({queryKey: ['stores'], queryFn: getStores})

  if(isLoading){
    return <p>Loading...</p>
  }
  
  if(isError){
    return <p>{error.message}</p>
  }

    return(
        <div className={styles.storesCards}>
        {data?.map(store => {
          if(store.storeCountry == country.label){
            return(
              <div key={crypto.randomUUID()} className={styles.storeCardContainer}>
                  <div className={styles.storeImg} style={{backgroundImage: 'url("' + store.storeImg + '")'}}></div>
                  <h2 className={styles.storeTitle}>{store.storeTitle}</h2>
                  <p className={styles.storeText}>{store.storeText}</p>
                  <ButtonLink color='green'>VISIT STORE</ButtonLink>
              </div>
            )
          }
        })}
      </div>
    )
}