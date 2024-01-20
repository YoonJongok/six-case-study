import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import '@/styles/globals.css';
import { pretendardVariable } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={pretendardVariable.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
