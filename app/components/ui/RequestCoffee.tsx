"use client";
import React from "react";

const RequestCoffee = () => {
    const handleCoffeeRequest = () => {
        console.log("Requesting a coffee");
    };
    return (
        <button onClick={handleCoffeeRequest} className="btn btn-primary">
            Requet a Coffee
        </button>
    );
};

export default RequestCoffee;
