import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import VerifAcces from '@/context/auth_verif';
import HeaderPage from '@/component/header/header';
import FooterPage from '@/component/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: "Anniversaire d'EVe",
  description: "Réseau social pour l'anniversaire d'eve",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full   ">
        <Suspense fallback={<div>Chargement...</div>}>
          <VerifAcces>
            <HeaderPage />

            {children}

            <FooterPage />
          </VerifAcces>
        </Suspense>
      </body>
    </html>
  );
}
