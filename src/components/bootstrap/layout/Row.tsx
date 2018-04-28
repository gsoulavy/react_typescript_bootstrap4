import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import { default as Props } from "./../interfaces/IComponentProps";

const Row : React.StatelessComponent<Props> = (prop) => {
    return (
        <div className={"row" + helper.mergeClassName(prop.applyClass)}>
            {prop.children}
        </div>
    );
};

export default Row;