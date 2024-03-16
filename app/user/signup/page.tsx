"use client";
import React, { useState } from "react";

type UserData = {
    fullName: string;
    email: string;
    password: string;
};

const Page = () => {
    const [userData, setUserData] = useState<UserData>({
        fullName: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
    };
    return (
        <div className="my-20">
            <h3 className="text-2xl mb-4 max-w-md mx-auto">Login</h3>
            <div className="container mx-auto">
                <form
                    className="flex gap-4 flex-col max-w-md mx-auto"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered w-full"
                        required
                        value={userData.fullName}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                fullName: e.target.value,
                            })
                        }
                    />
                    <input
                        type="email"
                        placeholder="Full Name"
                        className="input input-bordered w-full"
                        required
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                email: e.target.value,
                            })
                        }
                    />
                    <input
                        type="password"
                        placeholder="Full Name"
                        className="input input-bordered w-full"
                        required
                        value={userData.password}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                password: e.target.value,
                            })
                        }
                    />
                    <button type="submit" className="btn btn-primary">
                        {" "}
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
