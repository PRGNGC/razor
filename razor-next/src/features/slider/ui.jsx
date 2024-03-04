'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../slider/styles.scss'
import la from '@/shared/ui/icon/assets/left-arrow.svg'
import ra from '@/shared/ui/icon/assets/right-arrow.svg'

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return(
      <div 
        className={className} 
        onClick={onClick} 
        style={{ ...style,     
          width: "15px",
          height: "15px",
          backgroundColor: "#f7f7f7",
          border: "1px solid",
          borderColor: "#f7f7f7",
          borderRadius: "50%",
          backgroundImage: `url(${ra.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          cursor: "pointer" }}
      ></div>
  )
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return(
      <div 
        className={className} 
        onClick={onClick} 
        style={{ ...style,     
          width: "15px",
          height: "15px",
          backgroundColor: "#f7f7f7",
          border: "1px solid",
          borderColor: "#f7f7f7",
          borderRadius: "50%",
          backgroundImage: `url(${la.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          cursor: "pointer" }}
      ></div>
  )
}

export function SliderTemplate({personalSettings, children}){
    const commonSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        swipe: false, 
        customPaging: i => (<div className='sliderToggler'></div>)
    }

    return(
        <Slider {...Object.assign(commonSettings, personalSettings)}>{children}</Slider>
    )
}