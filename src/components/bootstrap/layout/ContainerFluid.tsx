import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import { default as Props } from "./../interfaces/IComponentProps";

interface IProps {
    children: React.ReactNode;
    applyClass?: string;
    id?: string;
}

const ContainerFluid: React.StatelessComponent<IProps> = (prop) => {
    return (
        <div id={prop.id} className={"container-fluid" + helper.mergeClassName(prop.applyClass)}>
            {prop.children}
        </div>
    );
};

export default ContainerFluid;