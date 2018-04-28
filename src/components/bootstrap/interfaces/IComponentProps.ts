import * as React from "react";

export default interface IComponentProps {
    children: React.ReactNode;
    applyClass?: string;
    id?: string;
}