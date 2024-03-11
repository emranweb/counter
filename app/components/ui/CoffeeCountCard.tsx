import React from "react";

type CoffeeCountCardProps = {
    count: number;
    title: string;
};

const CoffeeCountCard = (props: CoffeeCountCardProps) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">
                {props.title}
            </h2>
            <div className="mt-2">
                <span className="text-3xl font-bold">{props.count}</span>
            </div>
        </div>
    );
};

export default CoffeeCountCard;
