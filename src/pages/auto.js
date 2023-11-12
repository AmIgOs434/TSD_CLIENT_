import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'

import '../css/one1.css'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import $ from 'jquery'
import pencil from '../css/svg/pencil-svgrepo-com.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Auto  = observer( ()=>{



   

    const navigate = useNavigate()
    return (
      <div class='bg1'> 

      <img  class='Auto_img' src='https://sun9-18.userapi.com/impg/2VIuxfXom2Z90B5BAJYCW2PwjqknC3-slm1ALA/OjenfZ2gRzk.jpg?size=1280x540&quality=96&sign=e8a0692c864fdda239f8a98b107e3d09&type=album' />
 <div >


       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
    </div>
        </div>
    );
});

export default Auto;
