"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
const Navbar = () => {
  const { status, data: user } = useSession();
  console.log(user?.user);
  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100 p-4">
      <div className="navbar-start">
        <div className="dropdown">
          {status === "authenticated" && (
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          )}
          {/* authenticated port */}

          {status === "authenticated" && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-4 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href="/dashboard"
                  className={`${pathname === "/dashboard" ? "bg-neutral" : ""}`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`${pathname === "/projects" ? "bg-neutral" : ""}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/message"
                  className={`${pathname === "/message" ? "bg-neutral" : ""}`}
                >
                  Message
                </Link>
              </li>
              <li>
                <a href="">Groups</a>
              </li>
            </ul>
          )}
          {/* unauthenticated port*/}
          {status === "unauthenticated" && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-4 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li>
               <a>Projects</a>
             </li>
             <li>
               <a>Message</a>
             </li>
             <li>
               <a href="">Groups</a>
             </li> */}
            </ul>
          )}
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          DevHub
        </Link>
      </div>
      {status === "authenticated" && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <Link
                href="/dashboard"
                className={`${pathname === "/dashboard" ? "bg-neutral" : ""}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`${pathname === "/projects" ? "bg-neutral" : ""}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/message"
                className={`${pathname === "/message" ? "bg-neutral" : ""}`}
              >
                Message
              </Link>
            </li>
            <li>
              <a>Groups</a>
            </li>
          </ul>
        </div>
      )}
      {status === "authenticated" && (
        <div className="navbar-end flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              {user?.user?.image && (
                <Image
                  src={user.user.image}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-10 rounded-full"
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="ghost" onClick={() => signOut}>
                  Profile
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="ghost" onClick={() => signOut}>
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      {status === "unauthenticated" && (
        <div className="navbar-end flex space-x-4">
          <Link href="/api/auth/signin">
            <Button>Sign in</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
