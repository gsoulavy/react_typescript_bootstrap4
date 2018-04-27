import * as React from "react";

interface IProps {
    children: React.ReactNode;
    applyClass?: string;
    id?: string;
}

const Container: React.StatelessComponent<IProps> = (prop) => {
    let applyClass = "";
    if (!!prop.applyClass) {
        applyClass =  ` ${prop.applyClass}`; 
    }

    return (
        <div id={prop.id} className={"container" + applyClass}>
            {prop.children}
        </div>
    );
};

export default Container;