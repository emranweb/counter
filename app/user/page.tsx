"use client";
import React, { createContext, useState } from "react";
import useSWR from "swr";
import { useSession, signIn, signOut } from "next-auth/react";

function Page() {
    const { data: session } = useSession();
    console.log(session);
    const { data: userInfo, error } = useSWR("/api/user/info", (url) =>
        fetch(url).then((res) => res.json())
    );
    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div className="flex">
                    <div className=""></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Page;
