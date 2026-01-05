import React from 'react';
import "./Newlyslid.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import "./Categoryslider.css";
import img from "../assets/product-thumb-14.jpg"
import img1 from "../assets/product-thumb-11.jpg"
import img3 from "../assets/product-thumb-12.jpg"
import img2 from "../assets/product-thumb-13.jpg"
import img4 from "../assets/product-thumb-14.jpg"
import img5 from "../assets/product-thumb-12.jpg"

const category = [
    { img: img, title: "Instant Meal Mix", title1: "Quick and easy to prepare Made with natural ingredients" },
    { img: img1, title: "Canned Fish", title1: "High protein nutritious meal Freshly packed and sealed" },
    { img: img2, title: "Natural Honey Jar", title1: "100% pure organic honey No added sugar or chemicals" },
    { img: img3, title: "Herbal Tea Leaves", title1: "Naturally dried tea leaves Refreshing aroma and taste" },
    { img: img4, title: "Instant Meal Mix", title1: "Quick and easy to prepare Made with natural ingredients" },
    { img: img5, title: "Herbal Tea Leaves", title1: "Naturally dried tea leaves Refreshing aroma and taste" },
]

const Navslider = () => {
    return (
        <div className='mt-4'>
            <div className='p-3'><h3>Newly Arrived Brands</h3></div>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper px-3"
            >
                {category.map((item, index) => (
                    <SwiperSlide key={index} className='new rounded-4'>
                        <div className='category-card h-100 d-flex flex-row align-items-center justify-content-center text-center gap-3 p-3'>
                            <img src={item.img} alt={item.title} className='rounded-3' style={{height:"90px"}}></img>
                            <div className='category-text text-start text-lg-start'>
                                <h6 className='mb-1'>{item.title}</h6>
                                <p className='mb-0 small'>{item.title1}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default Navslider;
