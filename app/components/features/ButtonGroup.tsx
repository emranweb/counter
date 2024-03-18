import Link from "next/link";
import React from "react";

const ButtonGroup = () => {
    return (
        <div className="flex gap-4">
            <div className="">
                <Link href="/user/signin">
                    <button className="btn btn-primary">SignIn</button>
                </Link>
            </div>
            <div className="">
                <Link href="/user/signout">
                    <button className="btn btn-primary">Sign Out</button>
                </Link>
            </div>
        </div>
    );
};

export default ButtonGroup;
