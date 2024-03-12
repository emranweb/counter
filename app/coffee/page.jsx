import React from "react";
import { connection } from "@/app/database/dbconnect";

async function getAllCoffee() {
    const [results] = await connection.execute("SELECT * FROM coffees");
    console.log(results);
    return results;
}

function CoffeeItem(props) {
    const { coffee_id, count, coffee_type, datetime } = props.coffee;

    return (
        <tr>
            <th>{coffee_id}</th>
            <td>{count}</td>
            <td>{coffee_type}</td>
        </tr>
    );
}

export default async function Page() {
    const coffess = await getAllCoffee();

    return (
        <div>
            <h1>Coffee List</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coffee ID</th>
                            <th>Coffee Count</th>
                            <th>Coffee Type</th>
                            <th>Coffee Request</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coffess &&
                            coffess.map((coffee, index) => (
                                <CoffeeItem key={index} coffee={coffee} />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
