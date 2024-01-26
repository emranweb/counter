"use client";
import React, { useState } from "react";

const AddCoffeeWithCount = () => {
    const [count, setCount] = useState(1);

    const handleAddCoffee = () => {
        console.log(`Adding ${count} coffees`);
        fetch("/api/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ count }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div className="items-center">
            <input
                type="text"
                placeholder="input coffee count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="input input-bordered w-full max-w-xs"
            />
            <button onClick={handleAddCoffee} className="btn btn-lg my-4">
                Button
            </button>
        </div>
    );
};

export default AddCoffeeWithCount;
