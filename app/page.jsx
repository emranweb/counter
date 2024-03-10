"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function Page() {
    const { data: todayData, error: todayError } = useSWR(
        "/api/coffee/today",
        (url) => fetch(url).then((res) => res.json())
    );
    const { data: coffeeHistory, error: coffeeHistoryError } = useSWR(
        "/api/coffee",
        (url) => fetch(url).then((res) => res.json())
    );

    console.log("render");
    console.log(todayData);
    console.log(coffeeHistory);

    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Todays Count
                        </h2>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">{0}</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Monthly Count
                        </h2>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">100</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Yearly Count
                        </h2>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">1011</span>
                        </div>
                    </div>
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
                                    </thead>
                                    {/* <tbody>
                                        {coffeeHistory.map((transaction) => (
                                            <tr
                                                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                                key={transaction.coffee_id}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {transaction.coffee_id}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {transaction.coffee_type}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {transaction.count}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {new Date(
                                                        transaction.datetime
                                                    ).toLocaleDateString(
                                                        "bd-BD"
                                                    )}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {transaction.request_id ??
                                                        "No"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
