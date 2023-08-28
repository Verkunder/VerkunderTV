'use client';

import * as React from 'react';
import cn from './Style.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenuDemo } from '../NavigationMenuDemo';

const index = () => {
    return (
        <div className={cn.container}>
            <Link href={'/'}>
                <Image src='/LOGO.svg' width={90} height={30} alt='logo' />
            </Link>
            <div className={cn.menu}>
                <NavigationMenuDemo />
            </div>
            <div className=''>123</div>
        </div>
    );
};

export default index;
