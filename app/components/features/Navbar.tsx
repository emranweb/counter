"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuItem from "../ui/MenuItem";

const Navbar = () => {
    return (
        <div className="navbar bg-slate-200">
            <div className="container mx-auto">
                <div className="navbar-start">
                    <Link href="/" className="">
                        <Image
                            src="/logo.png"
                            width={64}
                            height={64}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="navbar-end  lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <MenuItem href="/addcoffee" text="Coffes" />
                        <MenuItem href="/users" text="Users" />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
