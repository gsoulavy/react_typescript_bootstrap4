import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import { default as Props } from "./../interfaces/IComponentProps";

const ContainerFluid: React.StatelessComponent<Props> = (prop) => {
    return (
        <div id={prop.id} className={"container-fluid" + helper.mergeClassName(prop.applyClass)}>
            {prop.children}
        </div>
    );
};

export default ContainerFluid;