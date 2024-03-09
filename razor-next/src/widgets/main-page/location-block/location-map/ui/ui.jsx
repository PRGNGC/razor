'use client'
import styles from './styles.module.scss'
import './cssForMap.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from 'react'
import { getStores } from '../api'

function LocationSetter({location}) {
    const map = useMap();
    map.setView([location.latitude, location.longitude], location.zoom)
    return null
  }

  export function LocationMap({country}){
  const [activeMarker, setActiveMarker] = useState(null);
    const storeIcon = new Icon({
        iconUrl: '/icons/map-marker.svg',
        iconSize: [25, 25]
    })


    const [stores, setStores] = useState([]);

    async function FetchData(){
      const response = await getStores();
      setStores(response)
    }

    useEffect(() => {
      FetchData();
    }, [])

    let mapCenter = [country.latitude, country.longitude];

    return(
        <div className={styles.mapContainer}>
        {/* <MapContainer > */}
        <MapContainer center={mapCenter} zoom={4}>
          <LocationSetter location={country}/>
          <TileLayer
            attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
          />
            {
              stores.map(store => {
                return(
                  <div key={crypto.randomUUID()}>
                    <Marker
                        position= {[store.storeLocationLatitude, store.storeLocationLongitude]}
                        icon={storeIcon}
                        eventHandlers={{ click: () => setActiveMarker(store) }}
                    >
                    { activeMarker && (
                        <Popup
                          key={crypto.randomUUID()}
                          closeOnClick={()=>{ setActiveMarker(null) }}
                          closeOnEscapeKey={()=>{ setActiveMarker(null) }}
                          position={ [activeMarker.storeLocationLatitude, activeMarker.storeLocationLongitude] }
                        >
                          <div className={styles.popupContainer}>
                            <div className={styles.popupImg} style={{backgroundImage: 'url(' + activeMarker.storeImg + ')'}}></div>
                            <div className={styles.popupText}>
                              <h4 className={styles.popupTitle}>{activeMarker.storeTitle}</h4>
                              <p className={styles.popupLocation}>{activeMarker.storeText}</p>
                            </div> 
                          </div>
                        </Popup>
                      )
                    }
                    </Marker>
                  </div>
                )
              })
            }
        </MapContainer>
    </div>
    )
}