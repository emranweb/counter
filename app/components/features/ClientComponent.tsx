"use client";
import React from "react";

type ClientComponentProps = {
    children: React.ReactNode;
};

const ClientComponent = ({ children }: ClientComponentProps) => {
    const isServer = typeof window === "undefined";

    if (isServer) {
        return null;
    }
    return <>{children}</>;
};

export default ClientComponent;
