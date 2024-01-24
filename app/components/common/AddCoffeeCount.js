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
        <div className="flex items-center space-x-3">
            <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="px-4 py-2 border rounded-md text-gray-700 bg-white border-gray-300"
            />
            <button
                onClick={handleAddCoffee}
                className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
                Add Coffee(s)
            </button>
        </div>
    );
};

export default AddCoffeeWithCount;
