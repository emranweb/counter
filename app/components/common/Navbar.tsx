"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7 justify-between w-full">
                        <div>
                            <Link href="/" className="items-center py-4 px-2">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/logo.png"
                                    alt="Logo"
                                />
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                href="/coffee"
                                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                            >
                                Couter
                            </Link>

                            <Link
                                href="/user"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                            >
                                User
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button">
                            <svg
                                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden mobile-menu">
                <ul className="">
                    <li>
                        <a
                            href="index.html"
                            className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;