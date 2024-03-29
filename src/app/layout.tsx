import type { Metadata } from 'next';
import '@/styles/globals.css';
import SessionProvider from '@/context/SessionProvider';
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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
