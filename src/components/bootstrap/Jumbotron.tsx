import * as React from "react";
import * as helper from "./helpers/StatelessHelper";
import { default as Props } from "./interfaces/IComponentProps";

const Jumbotron: React.StatelessComponent<Props> = (prop) => {
    return (
        <div id={prop.id} className={"jumbotron" + helper.mergeClassName(prop.applyClass)}>
            {prop.children}
        </div>
        );
};

export default Jumbotron;