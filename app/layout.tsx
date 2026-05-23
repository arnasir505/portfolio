import type { Metadata } from 'next';
import { Funnel_Display } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const funnelDisplay = Funnel_Display({
  variable: '--font-funnel-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Ariet's Portfolio",
  description:
    'Welcome to my portfolio! I am a passionate software developer with expertise in web development, backend systems, and cloud technologies. Explore my projects and experience to see how I can contribute to your next big idea.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <body className={`${funnelDisplay.variable} antialiased`}>
        {children}
        <Script
          src='https://louisabraham.github.io/nekojs/neko.js'
          data-autostart=''
          strategy='afterInteractive'
        />
      </body>
    </html>
  );
}
