import React, { useState } from 'react'
import Image1 from '../Images/image1.webp';
import Image2 from '../Images/image2.webp';
import Image3 from "../Images/image3.webp";
import Image4 from "../Images/image4.webp";
import Image5 from "../Images/image5.webp";
import cls from "./mainSlider.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/swiper.css"

const MainSlider = ()=>{
    return(
        <div className={cls.MainSlider}>
            <Swiper
                modules={[EffectFade, Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                pagination = {{
                    clickable: true,
                    clickableClass: `${cls.bulletsWrapper}`,
                    bulletClass: `${cls.bulletClass} swiper-pagination-bullet`,
                    bulletActiveClass: `${cls.activeBulletClass} swiper-pagination-bullet-active`         
                }}
                loop={true}
                effect ={"fade"}
                autoplay = {{
                    delay: 5000,
                    disableOnInteraction:true
                }}
                navigation= {true}
                className = {cls.mySlider}

            >
                <>
                <SwiperSlide className={cls.swiperSlider}>
                    <div className={cls.sliderPage}>
                        <img src={Image1.src} alt='slider1'/>
                    </div>
                </SwiperSlide>  
                <SwiperSlide className={cls.swiperSlider}>
                    <div className={cls.sliderPage}>
                        <img src={Image2.src} alt='slider2'/>
                    </div>
                </SwiperSlide>  
                <SwiperSlide className={cls.swiperSlider}>
                    <div className={cls.sliderPage}>
                        <img src={Image3.src} alt='slider3'/>
                    </div>
                </SwiperSlide> 
                <SwiperSlide className={cls.swiperSlider}>
                    <div className={cls.sliderPage}>
                        <img src={Image4.src} alt='slider4'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.swiperSlider}>
                    <div className={cls.sliderPage}>
                        <img src={Image5.src} alt='slider5'/>
                    </div>
                </SwiperSlide>               
                </>
            </Swiper>
        </div>

    )
}

export default MainSlider