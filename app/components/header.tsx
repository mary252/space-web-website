import Image from "next/image";
import Logo from "../assets/shared/logo.svg"
export default function Header() {
  return (
    <div className="flex ">
      <Image
        src={Logo}
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}