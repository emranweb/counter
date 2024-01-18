import Image from "next/image";

export default function Home() {
    const transactions = [
        { id: 1, type: "Today", count: 123, date: "2024-01-18" },
        { id: 2, type: "Weekly", count: 456, date: "2024-01-11" },
        { id: 3, type: "Monthly", count: 789, date: "2023-12-18" },
        { id: 4, type: "Yearly", count: 1011, date: "2023-01-01" },
        // ... add more transactions as needed
    ];

    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Todays Count
                        </h2>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">123</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Weekly Count
                        </h2>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">456</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Monthly Count
                        </h2>
                        <div className="mt-2">
                            <span className="text-3xl font-bold">789</span>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map((transaction) => (
                                            <tr
                                                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                                key={transaction.id}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {transaction.id}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {transaction.type}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {transaction.count}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {transaction.date}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
