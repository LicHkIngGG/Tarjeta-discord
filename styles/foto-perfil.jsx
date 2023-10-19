import React from 'react'
import "../styles/foto-perfil.css";
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

function Fotoperfil(props) {
  const places = props.places;
  return (
    <section className='container'>
      <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        places.map(place=>{
          return(
            
      <SwiperSlide><Card places={place}/></SwiperSlide>
    
          )
        }

        )
      }
    </Swiper>
    </section>
    
  )
}

export default foto-perfil