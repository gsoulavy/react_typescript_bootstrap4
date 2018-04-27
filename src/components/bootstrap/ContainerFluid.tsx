import * as React from "react";

interface IProps {
    children: React.ReactNode;
    applyClass?: string;
    id?: string;
}

const ContainerFluid: React.StatelessComponent<IProps> = (prop) => {
    let applyClass = "";
    if (!!prop.applyClass) {
        applyClass =  ` ${prop.applyClass}`; 
    }

    return (
        <div id={prop.id} className={"container-fluid" + applyClass}>
            {prop.children}
        </div>
    );
};

export default ContainerFluid;