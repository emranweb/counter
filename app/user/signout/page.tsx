"use client";
import { signOut } from "next-auth/react";
import React from "react";

const Page = () => {
    return (
        <div className="my-20">
            <div className="container max-auto">
                <div className="max-w-sm mx-auto text-center">
                    <button
                        onClick={() =>
                            signOut({ callbackUrl: "/", redirect: true })
                        }
                        className="btn btn-primary"
                    >
                        SignOut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
