import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slider.scss'

import { Autoplay, Pagination, Navigation } from 'swiper'

type Props = {}
const Slider = (props: Props) => {
    return (
        <>
            <div className="container-slider">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <p>Lorem ipsum dolor sit.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quos labore ipsum, doloremque exercitationem
                            amet aspernatur harum dolores odit impedit earum
                            quaerat laudantium distinctio cumque nisi pariatur
                            facilis eum sint veritatis.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default Slider
