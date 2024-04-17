"use client"
import "./style.scss"
import { Barlow_Condensed } from "next/font/google";
import { useRouter } from 'next/navigation'

const barlow=  Barlow_Condensed({
  weight: ['300'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col p-14 md:p-24 home-bg ">
      <div className="flex flex-col lg:flex-row relative w-full top-24 lg:top-80">
        <div className="w-full lg:w-3/4 text-center lg:text-left">
          <h5 className={barlow.className}>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p className={barlow.className + " home-text w-full lg:w-1/2"}>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="self-end">
          <button onClick={() => router.push('/destnation')} className="explore-button rounded-full">
            Explore
          </button>
        </div>
      </div>
    </main>
  );
}
