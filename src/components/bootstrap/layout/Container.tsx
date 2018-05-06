import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import { default as Props } from "./../interfaces/IComponentProps";

const Container: React.StatelessComponent<Props> = (prop) => {
    return (
        <div id={prop.id} className={"container" + helper.mergeClass(prop.applyClass)}>
            {prop.children}
        </div>
    );
};

export default Container;