import { Header } from '@/src/components/header';
import { Toaster } from '@/src/components/ui/toaster';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isProduction = process.env.NODE_ENV === 'production';
    return (
        <html lang='en' className='h-full'>
            <body
                className={`${geistSans.variable} font-sans ${geistMono.variable} font-mono antialiased h-full max-w-lg p-4`}
                suppressHydrationWarning={isProduction}
            >
                <div className='flex flex-col gap-4'>
                    <Header />
                    {children}
                    <Toaster />
                </div>
            </body>
        </html>
    );
}
