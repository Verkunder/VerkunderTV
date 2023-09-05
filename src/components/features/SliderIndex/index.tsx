'use client';

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
import cn from './Style.module.sass';

import 'swiper/css';

SwiperCore.use([EffectFade]);

interface SliderIndexProps {
    sliderContent: { title: string; image: string }[];
}

const SliderIndex: FC<SliderIndexProps> = ({ sliderContent }) => {
    return (
        <Swiper effect={'cube'}>
            {sliderContent.map(({ title, image }, idx) => {
                return (
                    <SwiperSlide key={idx}>
                        <div className={cn.slider}>
                            <img className={cn.Image} src={image} />
                            <div className={cn.ImageTitle}>{title}</div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SliderIndex;
