"use client";

import React from "react";

const AddCoffeeButton = () => {
    const handleAddCoffee = () => {
        fetch("/api/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                count: 1,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <button onClick={handleAddCoffee} className="btn btn-lg">
            Add Coffee
        </button>
    );
};

export default AddCoffeeButton;
