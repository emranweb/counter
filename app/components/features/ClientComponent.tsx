"use client";
import React, { Suspense } from "react";

type ClientComponentProps = {
    children: React.ReactNode;
};

const ClientComponent = ({ children }: ClientComponentProps) => {
    return <Suspense fallback={<div>loadin...</div>}>{children}</Suspense>;
};

export default ClientComponent;
