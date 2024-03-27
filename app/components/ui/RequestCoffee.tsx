"use client";
import { toMySqlFormat } from "@/app/utils/utils";
import { useRouter } from "next/navigation";
import React from "react";

type RquestCoffeeProps = {
    id: number;
};

const RequestCoffee = (props: RquestCoffeeProps) => {
    const router = useRouter();
    const handleCoffeeRequest = async () => {
        const response = await fetch("/api/coffee/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: props.id,
                delivery_time: toMySqlFormat(new Date()),
            }),
        });

        if (response.ok) {
            router.refresh();
        }
    };
    return (
        <button onClick={handleCoffeeRequest} className="btn btn-primary">
            Requet a Coffee
        </button>
    );
};

export default RequestCoffee;
