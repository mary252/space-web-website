"use client"
import Image from "next/image";
import Logo from "../assets/shared/logo.svg"
import menuIcon from  "../assets/shared/icon-hamburger.svg"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import clsx from 'clsx';
import "./styles.scss"
export default function Header() {
  let menuOpen=false
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex fixed top-0 lg:top-5 left-5 w-full">
      {
        // menuOpen && 
        // <div className="small-nav">


        // </div>
      }
      <Image
        src={Logo}
        alt="Vercel Logo"
        className="dark mt-7"
        width={50}
        height={24}
        priority
      />
      <div className="line hidden lg:block"/>
      <div className="nav-div pt-9 pl-4 lg:pl-32 hidden md:flex">
        <div 
        className={clsx(
          'nav-item mx-3 lg:mx-5 flex font-bold text-base lg:text-lg',
          {
            'selected': pathname === '/',
            '': pathname !== '/',
          },
        )}
        >
          <p className=" mr-2 hidden lg:block	">00</p>
          <span className="font-medium">HOME</span>
        </div>

        <div 
        className={clsx(
          'nav-item mx-3 lg:mx-5 flex font-bold text-base lg:text-lg',
          {
            'selected': pathname === '/destnation',
            '': pathname !== '/destnation',
          },
        )}
        onClick={() => router.push('/destnation')}
        >
          <p className=" mr-2 hidden lg:block	">01</p>
          <span className="font-medium">DESTINATION</span>
        </div>

        <div 
        className={clsx(
          'nav-item mx-3 lg:mx-5 flex font-bold text-base lg:text-lg',
          {
            'selected': pathname === '/crew',
            '': pathname !== '/crew',
          },
        )}
        >
          <p className=" mr-2 hidden lg:block	">02 </p>
          <span className="font-medium">CREW</span>
        </div>

        <div 
        className={clsx(
          'nav-item mx-1 lg:mx-5 flex font-bold text-base lg:text-lg',
          {
            'selected': pathname === '/technology',
            '': pathname !== '/technology',
          },
        )}
        >
          <p className=" mr-2 hidden lg:block	">03</p>
          <span className="font-medium">TECHNOLOGY</span>
        </div>
      </div>
      <Image
        src={menuIcon}
        alt="Vercel Logo"
        className="dark mt-7 block md:hidden self-end pointer burger-icon "
        width={50}
        height={20}
        priority
        onClick={()=>{menuOpen=true}}
      />
      
    </div>
  );
}