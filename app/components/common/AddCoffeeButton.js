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
        // create a tailwindcss large button with a coffee icon
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-8 rounded-full"
            onClick={handleAddCoffee}
        >
            Add Coffee
        </button>
    );
};

export default AddCoffeeButton;
