import styles from './styles.module.scss'
import { BlockTitle } from '@/entities/block-title'
import { MapCountrySelect } from '@/features/map-country-select'

export function LocationTitle({toggleCountry, country}){
    return(
        <BlockTitle header='RAZERSTORE LOCATIONS' text='Experience the unfair advantage yourself with the ultimate Razer experience.'>
            <MapCountrySelect country={toggleCountry} currentCountry={country}></MapCountrySelect>
        </BlockTitle>
    )
}