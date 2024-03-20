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

async function userInfoCoffee(id: number) {
    const [results] = await connection.query<UserCoffee[]>(
        "SELECT c.user_id as user_id, c.coffee_id as coffee_id, c.count as count, c.coffee_type as coffee_type, r.status as reqest_status, r.request_time as request_time FROM coffees as c LEFT JOIN request_coffees as r ON c.user_id=r.user_id WHERE c.user_id=? = r.user_id=? ORDER BY c.coffee_id DESC;",
        [id, id]
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

    if (Array.isArray(userInfo)) {
        userCoffee = await userInfoCoffee(userInfo[0].user_id);
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
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>Coffee Id</th>
                                    <th>Count</th>
                                    <th>Coffee Type</th>
                                    <th>Request status</th>
                                    <th>Reqeust Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userCoffee?.map((item: UserCoffee) => {
                                    return (
                                        <tr key={item.user_id}>
                                            <td>{item.user_id}</td>
                                            <td>{item.coffee_id}</td>
                                            <td>{item.count}</td>

                                            <td>{item.coffee_type}</td>
                                            <td>{item.reqest_status}</td>
                                            <td>
                                                {convertToClientDateTime(
                                                    item.request_time
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
