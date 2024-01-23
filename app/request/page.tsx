import React from "react";

const CoffeeRequestDashboard = () => {
    // Dummy data - replace this with real data from your backend
    const coffeeRequests = [
        {
            id: 1,
            name: "John Doe",
            type: "Latte",
            quantity: 2,
            status: "Pending",
        },
        {
            id: 2,
            name: "Jane Doe",
            type: "Cappuccino",
            quantity: 1,
            status: "Done",
        },
        // ... more requests
    ];

    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold text-gray-900">
                    Coffee Requests Dashboard
                </h1>
            </div>

            <div className="mt-6">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Request ID</th>
                                <th className="px-6 py-3">Requester Name</th>
                                <th className="px-6 py-3">Coffee Type</th>
                                <th className="px-6 py-3">Quantity</th>
                                <th className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coffeeRequests.map((request) => (
                                <tr
                                    key={request.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {request.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request.type}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                                                request.status === "Pending"
                                                    ? "text-yellow-600 bg-yellow-200"
                                                    : "text-green-600 bg-green-200"
                                            }`}
                                        >
                                            {request.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CoffeeRequestDashboard;
