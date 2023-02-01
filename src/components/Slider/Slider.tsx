import { Swiper, SwiperSlide } from 'swiper/react'
import articlesArray from 'components/Articles/articlesArray'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slider.scss'

import { Autoplay, Pagination, Navigation } from 'swiper'

type Props = {}
type ArticlesProps = {
    id: number
    title: string
    author: string
    content: string
    date: string
    image: string
    category?: string
}

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
                    {articlesArray
                        .filter(
                            ({ category }: ArticlesProps) =>
                                category === 'space'
                        )
                        .map(
                            ({
                                title,
                                author,
                                content,
                                date,
                                image,
                            }: ArticlesProps) => (
                                <SwiperSlide>
                                    <div className="container-slide">
                                        <img src={image} alt="" />
                                        <p className="title-slide">{title}</p>
                                        <p className="content-slide">
                                            {content}
                                        </p>
                                        <div className="info-slide">
                                            <p className="date-slide">{date}</p>
                                            <p className="author-slide">
                                                {author}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                </Swiper>
            </div>
        </>
    )
}
export default Slider
