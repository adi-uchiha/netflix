import { BellIcon, SearchIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import Test from "./test";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () =>{
        if (window.scrollY > 0) {
            setIsScrolled(true)
            console.log("scrolleddd")
        } else {
            setIsScrolled(false)
        }
      }
      window.addEventListener("scroll", handleScroll)
    
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])
    

    return (
        <div>
        <header className={`${isScrolled && "bg-[#141414]"}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden md:flex space-x-4" >
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">News & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>



            </div>
            <div className="flex items-center space-x-4 text-sm font-light ">
                <SearchIcon className="hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href="/account">
                    <UserIcon className="h-8 w-8" />
                </Link>

            </div>

            

        </header>
        </div>
    )
}

export default Header