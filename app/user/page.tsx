import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { connection } from "../database/dbconnect";
import { RowDataPacket } from "mysql2";
import { userInfo } from "os";

interface User extends RowDataPacket {
    user_id: number;
    names: string;
    email: string;
    password: string;
}

interface UserCoffee extends RowDataPacket {
    coffee_id: number;
    count: number;
    user_id: number;
    coffee_type: string;
    datetime: string;
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
        return null;
    }
    let userInfo = null;
    if (session && session.user?.email) {
        userInfo = await getData(session.user.email);
    }

    let userCoffee = null;

    if (Array.isArray(userInfo)) {
        userCoffee = await userInfoCoffee(userInfo[0].user_id);
    }
    console.log(userCoffee);

    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="">
                        <p>AL Emran</p>
                        <p>Dhaka Bangladesh</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Page;
