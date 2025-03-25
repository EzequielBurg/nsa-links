import Image from "next/image";
import Link from "next/link";

import nay from "./assets/nay.png";

export default function Home() {
  const spotifyUrl = "https://open.spotify.com/playlist/73I6W37rLtYPF68NlZtFzy?si=gx3cX-2sTLm-Vg6Ke5ZM7Q&pi=s3WpFYiQR0KQZ"

  return (
    <main className="flex flex-col flex-1 h-ful relative">
      <header className="bg-[#cfc5b3]/45 h-38">
        <div className="w-full h-full bg-[url(./assets/cab-textura.png)] sm:bg-[url(./assets/cabecalhotext-hor.png)] opacity-40">
          <div className="w-full h-full bg-[url(./assets/folhagem-vertical.gif)] md:bg-[url(./assets/folhagem-hor.svg)] bg-cover z-10 absolute" />
        </div>
      </header>
      <div className="grid grid-template-col gap-4 justify-center items-center pt-34">
        <Image src={nay} alt="Nayara Sousa" width={160} height={160} className="flex rounded-full w-40 h-40 -mt-48 m-auto z-10" />
        <Link href='https://wa.me/c/553499195853' className="justify-center bg-white flex border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Informações sobre procedimentos</h1>
        </Link>

        <Link href='https://wa.me/message/6ZRCBCWTR6Y5H1' className="justify-center bg-white flex border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Agendamento de horários</h1>
        </Link>

        <Link href={spotifyUrl} className="justify-center bg-white flex border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Playist Ateliê</h1>
        </Link>

        <Link href='https://maps.app.goo.gl/FnRDaSPWdasHzubK7' className="justify-center bg-white flex border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Localização / como chegar</h1>
        </Link>
      </div>
    </main>
  );
}
