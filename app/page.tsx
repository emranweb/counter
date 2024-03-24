import React from "react";
import CoffeeCountCard from "./components/ui/CoffeeCountCard";
import { connection } from "./database/dbconnect";
import { RowDataPacket } from "mysql2";
import { convertToClientDateTime } from "./utils/utils";
import ClientComponent from "./components/features/ClientComponent";
import CoffeeCountCustom from "./components/ui/CoffeeCountCustom";
// Dynamic Data
export const revalidate = 0;
interface TodayCoffeeType extends RowDataPacket {
    today: number;
}

interface CoffeeMonth extends RowDataPacket {
    month: number;
}

interface CoffeeYear extends RowDataPacket {
    year: number;
}

interface CoffeeHistoryType extends RowDataPacket {
    coffee_id: number;
    count: number;
    coffee_type: string;
    datetime: string;
    request_id: number;
}

async function getTodayData() {
    const [results] = await connection.query<TodayCoffeeType[]>(
        "SELECT COUNT(*) as today FROM coffees WHERE DATE(datetime) = CURDATE()"
    );
    return results;
}

async function getMonthData() {
    const [results] = await connection.query<CoffeeMonth[]>(
        "SELECT COUNT(*) as month FROM coffees WHERE MONTH(datetime) = MONTH(CURDATE())"
    );
    return results;
}

async function getYearData() {
    const [results] = await connection.query<CoffeeYear[]>(
        "SELECT COUNT(*) as year FROM coffees WHERE YEAR(datetime) = YEAR(CURDATE())"
    );
    return results;
}

async function getCoffeeHistory() {
    const [results] = await connection.query<CoffeeHistoryType[]>(
        "SELECT * FROM coffees ORDER BY coffee_id DESC"
    );
    return results;
}

export async function Page() {
    const [{ today }] = await getTodayData();
    const [{ month }] = await getMonthData();
    const [{ year }] = await getYearData();
    const coffeeHistory = await getCoffeeHistory();

    return (
        <div>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <CoffeeCountCard title="Todays Count" count={today} />
                    <CoffeeCountCard title="Monthly Count" count={month} />

                    <ClientComponent>
                        <CoffeeCountCustom
                            title="Select Date"
                            count={coffeeHistory.length}
                        />
                    </ClientComponent>
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

export default Page;
