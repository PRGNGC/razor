'use client'
import styles from './styles.module.scss'
import { LocationTitle } from './location-title'
import { LocationMap } from './location-map/ui'
import { useState } from 'react'

export function LocationBlock(){
    const [currentMapCountry, setCurrnetMapCountry] = useState({ value: 'USA', label: 'USA', latitude: '40.290128', longitude: '-101.312934', zoom: 4});

    return(
        <section className={styles.locationsBlock}>
            <div className={styles.container}>
                <LocationTitle toggleCountry={setCurrnetMapCountry}></LocationTitle>
                <LocationMap country={currentMapCountry}></LocationMap>
            </div>
        </section>
    )
}