"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";

const AddCoffeeButton = () => {
    const router = useRouter();
    const handleAddCoffee = async () => {
        await fetch("/api/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                count: 1,
            }),
        });
        router.refresh();
    };

    return (
        <button onClick={handleAddCoffee} className="btn btn-lg">
            Add Coffee
        </button>
    );
};

export default AddCoffeeButton;
