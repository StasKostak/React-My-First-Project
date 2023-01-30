import React, { useRef, useState } from 'react'
import wallpaper1 from 'assets/wallpaper1.jpg'
import wallpaper2 from 'assets/wallpaper2.png'
import wallpaper3 from 'assets/wallpaper3.png'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'

import { Navigation } from 'swiper'
import { Pagination } from 'swiper'

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={wallpaper1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={wallpaper2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={wallpaper3} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
