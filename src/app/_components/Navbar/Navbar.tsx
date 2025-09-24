"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Logo from "../../../../public/logo.svg";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import userProfile from "../../../../public/Home _ FreshCart - eCommerce Theme/download.jpg";

export default function Navbar() {
  const { numberOfCartItem } = useContext(CartContext)!;
  const { data: session } = useSession();
 

  function logout() {
    signOut({ callbackUrl: "/login" });
  }

  return (
    <nav className="bg-emerald-500 text-white">
      <div className="container w-full lg:w-[80%] mx-auto p-5 flex flex-col lg:flex-row justify-between items-center gap-4">
      
        <div className="left"></div>

       
        <div className="right">
          <ul className="flex gap-4 lg:gap-6 items-center">
            <li>
              <Link href="/">
                <Image className="lg:w-[150px]" src={Logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            {session && <>
            
            
              <li>
                <Link className="relative" href="/cart">
                  Cart{" "}
                  {numberOfCartItem > 0 && (
                    <span className="absolute top-[-10px] end-[-10px] flex size-5 bg-white text-emerald-600 rounded-full justify-center items-center">
                      {numberOfCartItem}
                    </span>
                  )}
                </Link>
              </li>
              
                <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
                  </>

              
          }
            <li>
              <Link href="/products">Products</Link>
            </li>
          
           
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </div>

      
        <div className="right">
          <ul className="flex gap-2 items-center">
            {!session ? (
              <>
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i className="fab fa-tiktok"></i>
                </li>
                <li>
                  <i className="fab fa-linkedin"></i>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
            
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                {/* User Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="focus:outline-none cursor-pointer">
                      <Image
                        src={
                          userProfile
                        }
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full border w-[50px] "
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {session.user?.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {session.user?.email}
                        </span>
                  
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/updatePassword">Change Password</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/updateUser">Update User Data</Link>
                    </DropdownMenuItem>
                  
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={logout}
                      className="text-red-600 cursor-pointer"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
