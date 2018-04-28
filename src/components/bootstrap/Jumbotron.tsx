import * as React from "react";

interface IProps {
    children: React.ReactNode;
    applyClass?: string;
    id?: string;
}
const Jumbotron: React.StatelessComponent<IProps> = (prop) => {
    let applyClass = "";
    if (!!prop.applyClass) {
        applyClass =  ` ${prop.applyClass}`; 
    }

    return (
        <div id={prop.id} className={"jumbotron" + applyClass}>
            {prop.children}
        </div>
        );
};

export default Jumbotron;