"use client";
import React, { useState } from "react";

const AddCoffeePage: React.FC = () => {
    const [coffeeCount, setCoffeeCount] = useState(1);

    const handleCoffeeCountChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCoffeeCount(Number(e.target.value));
    };

    const addCoffee = () => {
        console.log(`Adding ${coffeeCount} coffee(s)`);
        // Implement the logic to add coffee(s) here
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Add Coffee</h1>

            <div className="flex justify-center items-center mb-8">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded inline-flex items-center text-lg">
                    <svg
                        className="w-8 h-8 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h4v1a2 2 0 01-2 2v1zm6.38-3.08a6 6 0 00-8.56-8.56"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 19H5a2 2 0 01-2-2V10a2 2 0 012-2h3v9a2 2 0 01-2 2z"
                        ></path>
                    </svg>
                    Add Coffee
                </button>
            </div>

            <div className="flex justify-center">
                <input
                    type="number"
                    min="1"
                    value={coffeeCount}
                    onChange={handleCoffeeCountChange}
                    className="form-input block w-1/4 px-4 py-3 rounded-l bg-gray-200 border border-r-0 border-gray-300 text-gray-700 focus:bg-white"
                    placeholder="Count"
                />
                <button
                    onClick={addCoffee}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-r text-lg"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddCoffeePage;
