import React from "react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="navbar bg-base-100 p-4">
      <div className="navbar-start">
        <div className="dropdown">
          {userId && (
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

          {userId && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-4 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Message</a>
              </li>
              <li>
                <a href="">Groups</a>
              </li>
            </ul>
          )}
          {/* unauthenticated port*/}
          {!userId && (
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
      {userId && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a href="">Messages</a>
            </li>
            <li>
              <a>Groups</a>
            </li>
          </ul>
        </div>
      )}
      {userId && (
        <div className="navbar-end flex space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
      {!userId && (
        <div className="navbar-end flex space-x-4">
          <Link href="/login">
            <button className="btn btn-primary text-white">Sign in</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
