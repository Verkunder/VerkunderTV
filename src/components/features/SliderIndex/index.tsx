'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderIndexProps {
    sliderContent: {
        title: string;
    }[];
}

const SliderIndex: FC<SliderIndexProps> = ({ sliderContent }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {sliderContent.map(({ title }, idx) => (
                <SwiperSlide key={idx}>{title}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderIndex;
