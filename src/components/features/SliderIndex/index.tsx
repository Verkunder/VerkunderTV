'use client';

import React, { FC, useRef, useEffect, ReactNode, RefObject } from 'react';
import Image from 'next/image';
import cn from './Style.module.sass';
import { register } from 'swiper/element/bundle';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperSlideProps } from 'swiper/react';

register();

interface SliderIndexProps {
    sliderContent: { title: string; image: string }[];
}

type Kebab<
    T extends string,
    A extends string = ''
> = T extends `${infer F}${infer R}`
    ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
    : A;

/**
 * Helper for converting object keys to kebab case because Swiper web components parameters are available as kebab-case attributes.
 * @link https://swiperjs.com/element#parameters-as-attributes
 */
type KebabObjectKeys<T> = {
    [key in keyof T as Kebab<key & string>]: T[key] extends Object
        ? KebabObjectKeys<T[key]>
        : T[key];
};

/**
 * Swiper 9 doesn't support Typescript yet, we are watching the following issue:
 * @link https://github.com/nolimits4web/swiper/issues/6466
 *
 * All parameters can be found on the following page:
 * @link https://swiperjs.com/swiper-api#parameters
 */
type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': SwiperContainerAttributes;
            'swiper-slide': SwiperSlideAttributes;
        }

        interface SwiperContainerAttributes
            extends KebabObjectKeys<SwiperOptions> {
            ref?: RefObject<SwiperRef>;
            children?: ReactNode;
        }
        interface SwiperSlideAttributes
            extends KebabObjectKeys<SwiperSlideProps> {}
    }
}

const SliderIndex: FC<SliderIndexProps> = ({ sliderContent }) => {
    const swiperElRef = useRef<SwiperRef>(null);

    useEffect(() => {
        swiperElRef.current.addEventListener('progress', e => {
            const [swiper, progress] = e.detail;
        });
    }, []);
    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view='1'
            navigation='true'
            pagination='true'
            effect='fade'
            loop='true'
        >
            {sliderContent.map(({ title, image }, idx) => {
                return (
                    <swiper-slide key={idx}>
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
                    </swiper-slide>
                );
            })}
        </swiper-container>
    );
};

export default SliderIndex;
