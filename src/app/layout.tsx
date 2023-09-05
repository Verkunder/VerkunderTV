import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/features/ThemeProvider';
import Header from '@/components/features/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'VerkunderTV',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
