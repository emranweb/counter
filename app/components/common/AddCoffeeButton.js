"use client";

import React from "react";

const AddCoffeeButton = () => {
    const handleAddCoffee = () => {
        fetch("/api/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <button
            onClick={handleAddCoffee}
            className="px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out dark:hover:bg-blue-500"
        >
            Add Coffee
        </button>
    );
};

export default AddCoffeeButton;
