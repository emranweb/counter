import Link from "next/link";
import React from "react";

type MenuItemProps = {
    href: string;
    text: string;
};

const MenuItem = (props: MenuItemProps) => {
    return (
        <li>
            <Link
                href={props.href}
                className="bg-blue-600 text-white hover:bg-blue-700"
            >
                {props.text}
            </Link>
        </li>
    );
};

export default MenuItem;
