import React, { useRef, useState } from 'react'
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
                    <img src="/images/wallpaper1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/wallpaper2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/wallpaper3.png" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
