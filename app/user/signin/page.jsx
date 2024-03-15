"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState("");
    const router = useRouter();
    useEffect(() => {
        if (loginError) {
            setTimeout(() => {
                setLoginError("");
            }, 2000);
        }
    }, [loginError]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await signIn("credentials", {
            redirect: false,
            email: userInfo.email,
            password: userInfo.password,
        });
        console.log(response);
        if (response.error) {
            setLoginError(response.error);
        } else {
            setLoginError("");
            router.push("/");
        }
    };
    return (
        <div className="my-20">
            <h3 className="text-2xl mb-4 max-w-md mx-auto">Login</h3>
            <form
                onSubmit={handleSubmit}
                className="flex gap-4 flex-col max-w-md mx-auto"
            >
                <div>
                    <input
                        className="input input-bordered w-full "
                        type="email"
                        required
                        value={userInfo.email}
                        onChange={(e) =>
                            setUserInfo({ ...userInfo, email: e.target.value })
                        }
                    />
                </div>
                <div>
                    <input
                        required
                        type="password"
                        placeholder="password"
                        className="input input-bordered w-full "
                        value={userInfo.password}
                        onChange={(e) =>
                            setUserInfo({
                                ...userInfo,
                                password: e.target.value,
                            })
                        }
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            <div className="max-w-md mx-auto my-10">
                {loginError && (
                    <div role="alert" className="alert alert-error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{loginError}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
