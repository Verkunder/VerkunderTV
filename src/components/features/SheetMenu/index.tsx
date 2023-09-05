'use client';
import React from 'react';
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cn from './Style.module.sass';
import { useTheme } from 'next-themes';

const SheetMenu = () => {
    const { setTheme } = useTheme();

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Какую тему ты предпочитаешь?</SheetTitle>
                <SheetDescription className={cn.container}>
                    <Button variant='outline' onClick={() => setTheme('light')}>
                        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-100 mr-1' />
                        Светлая
                    </Button>
                    <Button onClick={() => setTheme('dark')}>
                        <Moon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-100 mr-1' />
                        Темная
                    </Button>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    );
};

export default SheetMenu;
