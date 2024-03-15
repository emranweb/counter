import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { createContext, useState } from "react";
import { connection } from "../database/dbconnect";
import Image from "next/image";
import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
    user_id: number;
    names: string;
    email: string;
    password: string;
}

interface CoffeeHistory extends RowDataPacket {
    coffee_id: number;
    user_id: number;
    coffee_type: string;
    coffee_date: string;
}

const getData = async (email: string) => {
    const [results] = await connection.query<User[]>(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
    return results;
};

const getUserCoffeeHistory = async (id: number) => {
    const [results] = await connection.query<CoffeeHistory[]>(
        "SELECT * FROM coffee WHERE user_id = ?",
        [id]
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

    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="">
                        <Image
                            src="https://placehold.co/60x60"
                            width="200"
                            height="200"
                            alt="user info"
                        />
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
