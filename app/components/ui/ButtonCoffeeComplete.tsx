"use client";
import { useRouter } from "next/navigation";
import React from "react";

type ButtonCoffeeCompleteProps = {
    userId: number;
    requestId: number;
};

const ButtonCoffeeComplete = (props: ButtonCoffeeCompleteProps) => {
    const router = useRouter();
    const handleCoffeeComplete = async () => {
        const response = await fetch("/api/coffee/complete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: props.userId,
                request_id: props.requestId,
            }),
        });
        if (response.ok) {
            router.refresh();
        }
    };
    return (
        <button onClick={handleCoffeeComplete} className="btn btn-primary">
            Mark Complete
        </button>
    );
};

export default ButtonCoffeeComplete;
