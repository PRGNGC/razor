'use client'
import styles from './styles.module.scss'
import { getStores } from '../location-map/api'
import { useState, useEffect } from 'react'
import { ButtonLink } from '@/shared/ui/button-link'
import Image from 'next/image'

export function LocationStore({country}){
    const [stores, setStores] = useState([]);

    async function fetchData(){
        const response = await getStores();
        setStores(response);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div className={styles.storesCards}>
        {stores.map(store => {
          if(store.storeCountry == country.label){
            return(
              <div key={crypto.randomUUID()} className={styles.storeCardContainer}>
                  <div className={styles.storeImg} style={{backgroundImage: 'url("' + store.storeImg + '")'}}></div>
                  {/* <Image src={store.storeImg} alt='img' fill={true}></Image> */}
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