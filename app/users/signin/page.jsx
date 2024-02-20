"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Page = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = () => {
        signIn("Credentials", {
            email: data.email,
            password: data.password,
        });
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>

                    <input
                        className="input input-bordered w-full max-w-xs"
                        type="email"
                        required
                        value={data.email}
                        onChange={(e) => setData({ email: e.target.value })}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        required
                        type="password"
                        placeholder=""
                        className="input input-bordered w-full max-w-xs"
                        value={data.password}
                        onChange={(e) => setData({ password: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Page;
