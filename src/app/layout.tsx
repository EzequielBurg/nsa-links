import type { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const tenorSans = Tenor_Sans({
  weight: '400',
  variable: "--font-tenor-sans",
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
      <body
        className={`${tenorSans.variable} antialiased`}
      >
        {children}
        <footer className="absolute bottom-0 w-full border-t pt-1 border-[#cfc5b3]">
          <p className="flex justify-center items-center text-xs">
            Desenvolvido com ❤️ por <Link className="ml-1 text-blue-400" href="https://wa.me/5534999849695">Ezequiel Burg</Link>.
          </p>
        </footer>
      </body>
    </html>
  );
}
