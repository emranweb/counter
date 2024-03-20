"use client";
import { toMySqlFormat } from "@/app/utils/utils";
import React from "react";

type RquestCoffeeProps = {
    id: number;
};

const RequestCoffee = (props: RquestCoffeeProps) => {
    const handleCoffeeRequest = () => {
        fetch("/api/coffee/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: props.id,
                delivery_time: toMySqlFormat(new Date()),
            }),
        });
    };
    return (
        <button onClick={handleCoffeeRequest} className="btn btn-primary">
            Requet a Coffee
        </button>
    );
};

export default RequestCoffee;
