"use client";
import React from "react";
import navItems from "@/app/data/navItems.json";

const Navbar = () => {
    const computerCategory = navItems.slice(0, 9);
    const fruitsCategory = navItems.slice(10);
    const [activeCategory, setActiveCategory] = React.useState("computer");

    return (
        <div className="absolute left-0 top-0 bg-slate-200 w-32 text-black h-full">
            <div className="flex flex-col gap-4">
                <div className="">
                    <h3
                        className="text-2xl font-bold"
                        onClick={() => setActiveCategory("computer")}
                    >
                        Computer
                    </h3>
                    <div className="flex flex-col gap-4">
                        {activeCategory === "computer"
                            ? computerCategory.map((item) => (
                                  <span key={item.id}>{item.name}</span>
                              ))
                            : ""}
                    </div>
                </div>

                <div className="">
                    <h3
                        className="text-2xl font-bold"
                        onClick={() => setActiveCategory("fruit")}
                    >
                        Fruit
                    </h3>
                    <div className="flex flex-col gap-4 transition-all ease-in duration-300">
                        {activeCategory === "fruit"
                            ? fruitsCategory.map((item) => (
                                  <span key={item.id}>{item.name}</span>
                              ))
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
