import { SliderTemplate } from '@/features/slider/ui'

export function ExcSlider(){
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
                // exclusives.map(i => <DeviceCard key={crypto.randomUUID()} deviceInfo={i}></DeviceCard>)
            }
        </SliderTemplate>
    )
}