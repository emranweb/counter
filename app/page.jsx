"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import CoffeeCountCard from "./components/ui/CoffeeCountCard";
import { convertToClientDateTime } from "./utils/utils";

export default function Page() {
    const { data: todayData, error: todayError } = useSWR(
        "/api/coffee/today",
        (url) =>
            fetch(url).then((res) => res.json(), {
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
            })
    );
    const { data: coffeeData, error: coffeeHistoryError } = useSWR(
        "/api/coffee",
        (url) =>
            fetch(url).then((res) => res.json(), {
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
            })
    );

    const todayCount = todayData ? todayData[0].today : 0;
    const coffeeHistory = coffeeData ? coffeeData : [];

    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <CoffeeCountCard
                        title="Todays Count"
                        count={todayCount ?? 0}
                    />
                    <CoffeeCountCard title="Monthly Count" count={0} />
                    <CoffeeCountCard title="Yearly Count" count={0} />

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Custom
                        </h2>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">1011</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-10">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Type
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Count
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Date
                                            </th>

                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Is Request
                                            </th>
                                        </tr>
                                        {coffeeHistory.map((item) => {
                                            return (
                                                <tr key={item.coffee_id}>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        {item.coffee_id}
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        {item.coffee_type}
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        {item.count}
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        {convertToClientDateTime(
                                                            item.datetime
                                                        )}
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        {item.request_id ??
                                                            "No"}
                                                    </th>
                                                </tr>
                                            );
                                        })}
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
