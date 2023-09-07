'use client';

import React, { FC } from 'react';
import { Scrollbar, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import cn from './Style.module.sass';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

interface SliderIndexProps {
    sliderContent: { title: string; image: string }[];
}

const SliderIndex: FC<SliderIndexProps> = ({ sliderContent }) => {
    return (
        <Swiper effect={'cube'} modules={[Scrollbar, EffectFade]}>
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
        </Swiper>
    );
};

export default SliderIndex;
