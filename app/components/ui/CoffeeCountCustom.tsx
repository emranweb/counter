"use client";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toMySqlFormat } from "@/app/utils/utils";
type CoffeeCountCustomProps = {
    count: number;
    title: string;
};

const CoffeeCountCustom = (props: CoffeeCountCustomProps) => {
    const [dateOne, setDateOne] = useState(new Date());
    const [dateTwo, setDateTwo] = useState(new Date());
    const [data, setData] = useState<{ custom: any }[]>([]);

    const handleCustomCoffee = async () => {
        if (dateOne && dateTwo && dateOne < dateTwo) {
            const converDateOne = toMySqlFormat(dateOne);
            const converDateTwo = toMySqlFormat(dateTwo);
            const response = await fetch("/api/coffee/custom", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    converDateOne,
                    converDateTwo,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
        }
    };
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">
                {props.title}
                <div className="flex items-start gap-4">
                    <ReactDatePicker
                        className="border p-[2px] rounded-lg"
                        selected={dateOne}
                        onChange={(date: any) => setDateOne(date)}
                    />
                    <ReactDatePicker
                        className="border p-[2px] rounded-lg"
                        selected={dateTwo}
                        onChange={(date: any) => setDateTwo(date)}
                    />
                </div>

                <button
                    onClick={handleCustomCoffee}
                    className="btn btn-primary"
                >
                    Get Data
                </button>
            </h2>
            <div className="mt-2">
                <span className="text-3xl font-bold">
                    {data[0]?.custom ?? 0}
                </span>
            </div>
        </div>
    );
};

export default CoffeeCountCustom;
