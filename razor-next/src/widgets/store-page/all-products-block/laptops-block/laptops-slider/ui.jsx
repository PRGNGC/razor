import styles from './styles.module.scss'
import { SliderTemplate } from '@/features/slider'
import { useQuery } from '@tanstack/react-query'
import { getSeveralLaptops } from './api'
import { ItemCard } from '@/entities/item-card'
import { Loader } from '@/shared/ui/loader'

export function LaptopsSlider(){
    const {isLoading, isError, data, error} = useQuery({queryKey: ['laptops'], queryFn: getSeveralLaptops})

    if(isLoading){
      return <Loader></Loader>
      // return <p>Loading...</p>
    }
    
    if(isError){
      return <p>{error.message}</p>
    }
  
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
                  data?.map(i => <ItemCard key={crypto.randomUUID()} deviceInfo={i}></ItemCard>)
              }
          </SliderTemplate>
      )
}