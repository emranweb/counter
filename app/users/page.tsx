"use client";
import React, { createContext, useState } from "react";

const UserPage = () => {
    const [isRequested, setIsRequested] = useState(false);

    async function requestCoffee() {
        setIsRequested(true);
        const response = await fetch("/api/coffee/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: 1,
                delivery_time: "2024-1-25 12:00:00",
            }),
        });
        const data = await response.json();
    }

    return (
        <div>
            <h1>Hello User</h1>
            <h1>User Name: Emran</h1>
            <form>
                <input type="time" />
                <button onClick={requestCoffee}>Request Coffee</button>
            </form>
        </div>
    );
};

export default UserPage;
