"use client";
import React from "react";

const ButtonCoffeeComplete = () => {
    const handleCoffeeComplete = () => {
        console.log("Coffee Complete");
    };
    return (
        <button onClick={handleCoffeeComplete} className="btn btn-primary">
            Mark Complete
        </button>
    );
};

export default ButtonCoffeeComplete;
