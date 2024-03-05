'use client'

import { getExclusives } from '../api';
import { useState, useEffect } from 'react'
import { SliderTemplate } from '@/features/slider/ui'
import { ItemCard } from '@/entities/item-card';

export function ExcSlider(){
  const [exclusives, setExclusives] = useState([]);
 
    
  async function FetchData(){
      const response = await getExclusives();
      setExclusives(response)
  }
  
  useEffect(() => {
      FetchData()
  }, [])


    return(
        <SliderTemplate personalSettings={{
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                    breakpoint: 769,
                    settings: {
                      arrows: false,
                      dots: false, 
                    },
                  },
                {
                  breakpoint: 768,
                  settings: "unslick"
                },
              ]
        }}>
            {
                exclusives.map(i => <ItemCard key={crypto.randomUUID()} deviceInfo={i}></ItemCard>)
            }
        </SliderTemplate>
    )
}