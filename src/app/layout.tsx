import type { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const tenorSans = Tenor_Sans({
  weight: '400',
  variable: "--font-tenor-sans",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Nayara Sousa Ateliê | Links Úteis e Agendamentos",
  description: "Agende seu atendimento no Nayara Sousa Ateliê e realce sua beleza com um design de sobrancelhas personalizado. Acesse nossos links úteis e descubra serviços exclusivos!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7723172245511866" crossOrigin="anonymous"></Script>
      </head>
      <body
        className={`${tenorSans.variable} antialiased`}
      >
        {children}
        <footer className="absolute bottom-0 w-full border-t py-1 border-[#cfc5b3]">
          <p className="flex justify-center items-center text-xs">
            Desenvolvido com ❤️ por <Link className="ml-1 text-blue-400" href="https://wa.me/5534999849695">Ezequiel Burg</Link>.
          </p>
        </footer>
      </body>
    </html>
  );
}
