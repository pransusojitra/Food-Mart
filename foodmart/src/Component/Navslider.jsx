import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import "./Navslider.css"
const Navslider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.7,
                        spaceBetween: 20,
                    },
                    550: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper px-3"
            >
                <SwiperSlide className='sld'><a href="women" className='text-dark text-decoration-none'>Women</a></SwiperSlide>
                <SwiperSlide className='sld'>Men</SwiperSlide>
                <SwiperSlide className='sld'>Kids</SwiperSlide>
                <SwiperSlide className='sld'>Accessories</SwiperSlide>
                <SwiperSlide className='sld'>Brand</SwiperSlide>
                <SwiperSlide className='sld'>Sale</SwiperSlide>
                <SwiperSlide className='sld'>Blog</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Navslider;
