import React from "react";

type ButtonPropsType = {
    children: React.ReactNode;
};

const Button = (props: ButtonPropsType) => {
    return <button className="btn btn-primary">{props.children}</button>;
};

export default Button;
