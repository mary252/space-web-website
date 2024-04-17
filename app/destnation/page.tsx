"use client"
import Image from "next/image";
import "./styles.scss"
import { Barlow_Condensed } from "next/font/google";
import { data } from "./data";
import { useState } from "react";
import clsx from 'clsx';

const barlow = Barlow_Condensed({
  weight: ['300', "700"],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [tab, setTab] = useState(0)
  return (
    <div className="flex min-h-screen flex-col p-14 md:p-24 home-bg ">
      <div className="flex flex-col lg:flex-row mt-24 mx-5 w-full">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h5 className={barlow.className + " text-slate-500 font-extrabold"}>01
            <span className="text-white	font-light"> Pick your destination</span>
          </h5>
          <Image
            src={data[tab].image}
            alt="Vercel Logo"
            className="mt-24 ml-20 "
            width={450}
            height={450}
            priority
          />
        </div>
        <div className="w-1/2 mt-32 ml-24">
          <div className="flex">
            <div
              onClick={() => setTab(0)}
              className={clsx(
                'tab-item mx-3 lg:mx-5 flex  text-base lg:text-lg',
                {
                  'tab-selected': tab === 0,
                  '': tab !== 0,
                },
              )}
            >
              <p>Moon</p>
            </div>
            <div
              onClick={() => setTab(1)}

              className={clsx(
                'tab-item mx-3 lg:mx-5 flex  text-base lg:text-lg',
                {
                  'tab-selected': tab === 1,
                  '': tab !== 1,
                },
              )}
            >
              <p>Mars</p>
            </div>
            <div
              onClick={() => setTab(2)}

              className={clsx(
                'tab-item mx-3 lg:mx-5 flex  text-base lg:text-lg',
                {
                  'tab-selected': tab === 2,
                  '': tab !== 2,
                },
              )}
            >
              <p>Europa</p>
            </div>
            <div
              onClick={() => setTab(3)}

              className={clsx(
                'tab-item mx-3 lg:mx-5 flex  text-base lg:text-lg',
                {
                  'tab-selected': tab === 3,
                  '': tab !== 3,
                },
              )}
            >
              <p>Titan</p>
            </div>
          </div>
          <h2>{data[tab].name}</h2>
          <p className="description-text">{data[tab].description}</p>
          <div className="seperate-line mt-24 mb-8"/>
          <div className="flex">
              <div className="w-1/2">
                <p className={barlow.className+ " distance-name" }>AVG. DISTANCE</p>
                <p className="mt-3 text-3xl ">{data[tab].distance}</p>
              </div>
              <div className="w-1/2">
                <p className={barlow.className+ " distance-name" }>Est. travel time</p>
                <p className="mt-3 text-3xl ">{data[tab].time}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}