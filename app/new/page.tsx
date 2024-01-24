import React from "react";
import AddCoffeeButton from "../components/common/AddCoffeeButton";
import AddCoffeeWithCount from "../components/common/AddCoffeeCount";

const CoffeePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Coffee Maker Dashboard
            </h1>
            <AddCoffeeButton />
            <AddCoffeeWithCount />
        </div>
    );
};

export default CoffeePage;
