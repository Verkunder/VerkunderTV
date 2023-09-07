'use client';

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import cn from './Style.module.sass';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderIndexProps {
    sliderContent: { title: string; image: string }[];
}

const SliderIndex: FC<SliderIndexProps> = ({ sliderContent }) => {
    return (
        <Swiper
            effect='fade'
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, EffectFade]}
        >
            {sliderContent.map(({ title, image }, idx) => {
                return (
                    <SwiperSlide key={idx}>
                        <div className={cn.slider}>
                            <Image
                                width={1344}
                                height={755}
                                className={cn.Image}
                                src={image}
                                alt={title}
                            />
                            <span className={`${cn.ImageTitle} text-white`}>
                                {title}
                            </span>
                        </div>
                    </SwiperSlide>
                );
            })}
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
        </Swiper>
    );
};

export default SliderIndex;
