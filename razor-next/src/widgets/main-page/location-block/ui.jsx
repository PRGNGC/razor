'use client'
import styles from './styles.module.scss'
import { LocationTitle } from './location-title'
import { LocationMap } from './location-map/ui'
import { useState, useEffect } from 'react'
import { LocationStore } from './location-stores'
import { SubscriptionForm } from './subscription-form'
import { getStoresCountries } from './api'
// import { get } from '../news-block/news-slider/api'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

export function LocationBlock(){
    
    // const {isLoading, isError, data, error} = useQuery({queryKey: ['mapCountries'], queryFn: getStoresCountries })
    
    // const store = useSelector(state => state.countryReducer.mapCountry)

    // alert(store);
    
    // console.log(data?.find(i => i.label == store))
    
    // const [currentMapCountry, setCurrnetMapCountry] = useState(data == undefined ?
    //                                                             { value: 'Singapore', label: 'Singapore', latitude: '1.372501', longitude: '103.801277', zoom: 11 } :
    //                                                             data?.find(i => i.label == store));
    
    // useEffect(() => {
    //     const {isLoading, isError, data, error} = useQuery({queryKey: ['mapCountries'], queryFn: getStoresCountries })
        
    // }, [])

    // const [storesCountries, setStoresCountries] = useState([]);
    
    const [currentMapCountry, setCurrnetMapCountry] = useState({ value: 'Singapore', label: 'Singapore', latitude: '1.372501', longitude: '103.801277', zoom: 11 });

    // async function FetchData(){
    //     const response  = await getStoresCountries();
    //     setStoresCountries(response);
    // }
    
    // useEffect(() => {
    //     // setCurrnetMapCountry({ value: 'Singapore', label: 'Singapore', latitude: '1.372501', longitude: '103.801277', zoom: 11 })
    //     FetchData();
    //                 // setCurrnetMapCountry(storesCountries.find(i => i.label == store))

    //     console.log(storesCountries);
    // }, []);

    // console.log(1)
    
    // setCurrnetMapCountry(storesCountries.find(i => i.label == store));
    
    // console.log(store);
    // console.log(storesCountries.find(i => i.label == store))
    // console.log({ value: 'Singapore', label: 'Singapore', latitude: '1.372501', longitude: '103.801277', zoom: 11 })


    return(
        <section className={styles.locationsBlock}>
            <div className={styles.container}>
                <LocationTitle toggleCountry={setCurrnetMapCountry} country={currentMapCountry}></LocationTitle>
                <LocationMap country={currentMapCountry}></LocationMap>
                <LocationStore country={currentMapCountry}></LocationStore>
                <SubscriptionForm></SubscriptionForm>
            </div>
        </section>
    )
}