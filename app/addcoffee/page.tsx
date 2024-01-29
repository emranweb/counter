import React from "react";
import AddCoffeeButton from "../components/common/AddCoffeeButton";
import AddCoffeeWithCount from "../components/common/AddCoffeeCount";

const CoffeePage = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-4 max-w-96 mx-auto my-40">
            <AddCoffeeButton />
            <div className="divider"></div>
            <AddCoffeeWithCount />
        </div>
    );
};

export default CoffeePage;
