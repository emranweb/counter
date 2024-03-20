"use client";
import React from "react";

type ClientComponentProps = {
    children: React.ReactNode;
};

const ClientComponent = ({ children }: ClientComponentProps) => {
    return <>{children}</>;
};

export default ClientComponent;
