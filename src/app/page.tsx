import Image from "next/image";
import nay from './assets/nay.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 h-full">
      <header className="bg-[#cfc5b3]/20 h-38 flex justify-center items-center">
        <Image src={nay} alt="Nayara Sousa" className="flex rounded-full w-40 h-40 -mb-46 bg-red" />
      </header>
      <div className="grid grid-template-col gap-3 justify-center items-center pt-30">
        <Link href='https://google.com' className="flex justify-center bg-white flex border border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Informações sobre procedimentos</h1>
        </Link>

        <Link href='https://wa.me/message/6ZRCBCWTR6Y5H1' className="flex justify-center bg-white flex border border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Agendamento de horários</h1>
        </Link>

        <Link href='https://google.com' className="flex justify-center bg-white flex border border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Playist Ateliê</h1>
        </Link>
        
        <Link href='https://google.com' className="flex justify-center bg-white flex border border-2 border-[#cfc5b3] px-3 py-5 rounded-3xl">
          <h1 className="text-xl'">Localização / como chegar</h1>
        </Link>
      </div>
    </main>
  );
}
