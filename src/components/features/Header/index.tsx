'use client';

import * as React from 'react';
import cn from './Style.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import SheetMenu from '@/components/features/SheetMenu';
import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';

const Header = () => {
    return (
        <div className={`${cn.container} dark:border-b border-gray-500`}>
            <Link href={'/'}>
                <Image
                    className='light:block dark:hidden'
                    src='/LOGO.svg'
                    width={130}
                    height={30}
                    alt='logo'
                />
                <Image
                    className='light:hidden dark:block'
                    src='/VerkunderTVDark.svg'
                    width={130}
                    height={30}
                    alt='logo'
                />
            </Link>
            <Sheet>
                <SheetTrigger>
                    <Button variant='outline'>
                        <AlignJustify />
                    </Button>
                </SheetTrigger>
                <SheetMenu />
            </Sheet>
        </div>
    );
};

export default Header;
