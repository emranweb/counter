import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { connection } from "../database/dbconnect";
import { RowDataPacket } from "mysql2";
import ButtonGroup from "../components/features/ButtonGroup";
import { convertToClientDateTime } from "../utils/utils";
import ClientComponent from "../components/features/ClientComponent";
import RequestCoffee from "../components/ui/RequestCoffee";
export const revalidate = 0;

interface User extends RowDataPacket {
    user_id: number;
    names: string;
    email: string;
    password: string;
}

interface UserCoffee extends RowDataPacket {
    user_id: number;
    coffee_id: number;
    count: number;
    coffee_type: string;
    request_status: string;
    request_time: string;
}

interface RequestCoffeeProps extends RowDataPacket {
    request_id: number;
    status: string;
}

async function requestCoffesHistory(id: number) {
    const [results] = await connection.query<RequestCoffeeProps[]>(
        "SELECT * FROM request_coffees WHERE user_id=? AND status='pending'",
        [id]
    );
    return results;
}

async function userInfoCoffee(id: number) {
    const [results] = await connection.query<UserCoffee[]>(
        "SELECT * FROM coffees WHERE user_id = ?",
        [id]
    );
    return results;
}

const getData = async (email: string) => {
    const [results] = await connection.query<User[]>(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
    return results;
};

async function Page() {
    const session = await getServerSession();

    if (!session) {
        redirect("/user/signin");
    }
    let userInfo = null;
    if (session && session.user?.email) {
        userInfo = await getData(session.user.email);
    }

    let userCoffee = null;
    let requestCoffee = null;

    if (Array.isArray(userInfo)) {
        userCoffee = await userInfoCoffee(userInfo[0].user_id);
        requestCoffee = await requestCoffesHistory(userInfo[0].user_id);
    }

    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-full">
                        <p>AL Emran</p>
                        <p>Dhaka Bangladesh</p>
                    </div>
                    <div className="w-full">
                        <ButtonGroup />
                        <ClientComponent>
                            <RequestCoffee
                                id={
                                    userInfo && userInfo[0]
                                        ? userInfo[0].user_id
                                        : 1
                                }
                            />
                        </ClientComponent>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="overflow-x-auto">
                        <div className="flex items-start gap-8">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Coffee Id</th>
                                        <th>Count</th>
                                        <th>Coffee Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userCoffee?.map((item: UserCoffee) => {
                                        return (
                                            <tr key={item.user_id}>
                                                <td>{item.coffee_id}</td>
                                                <td>{item.count}</td>

                                                <td>{item.coffee_type}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Request Id</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requestCoffee?.map(
                                        (item: RequestCoffeeProps) => {
                                            return (
                                                <tr key={item.request_id}>
                                                    <td>{item.request_id}</td>
                                                    <td>{item.status}</td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
