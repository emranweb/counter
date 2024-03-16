"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

type AuthSessionProps = {
    children: React.ReactNode;
    session: Session;
};

const AuthSession = (props: AuthSessionProps) => {
    return (
        <SessionProvider session={props.session}>
            {props.children}
        </SessionProvider>
    );
};

export default AuthSession;
