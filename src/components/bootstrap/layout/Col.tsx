import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import * as SuperProps  from "./../interfaces/IComponentProps";

interface Props extends SuperProps.default {
    col?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

const Col: React.StatelessComponent<Props> = (prop) => {
    let classResult = "";

    if (!!prop.col) {
        classResult = `col-${prop.col}`;
    }

    if (!!prop.sm) {
        classResult += ` col-sm-${prop.sm}`;
    }

    if (!!prop.md) {
        classResult += ` col-md-${prop.md}`;
    }

    if (!!prop.lg) {
        classResult += ` col-lg-${prop.lg}`;
    }

    if (!!prop.xl) {
        classResult += ` col-xl-${prop.xl}`;
    }

    if (classResult.length == 0) {
        classResult = "col"
    }

    return (
        <div className={helper.mergeClassName(classResult).trim()}>{prop.children}</div>
    );
};

export default Col;