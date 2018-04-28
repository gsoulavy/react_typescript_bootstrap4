import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import * as SuperProps  from "./../interfaces/IComponentProps";

interface Props extends SuperProps.default {
    col?: number | boolean | string;
    sm?: number | boolean | string;
    md?: number | boolean | string;
    lg?: number | boolean | string;
    xl?: number | boolean | string;
}

const Col: React.StatelessComponent<Props> = (prop) => {
    let classResult = "";

    if (!!prop.col) {
        let subResult = "";
        if (typeof prop.col === "number") {
            subResult = `col-${prop.col}`;
        }
        if (typeof prop.col === "string" && prop.col == "auto") {
            subResult = "col-auto";
        }
        if (typeof prop.col === "boolean" && prop.col) {
            subResult = "col"
        }
        classResult = subResult;
    }

    if (!!prop.sm) {
        classResult += ` ${buildClassAttribute("sm", prop.sm)}`;
    }

    if (!!prop.md) {
        classResult += ` ${buildClassAttribute("md", prop.md)}`;
    }

    if (!!prop.lg) {
        classResult += ` ${buildClassAttribute("ls", prop.lg)}`;
    }

    if (!!prop.xl) {
        classResult += ` ${buildClassAttribute("xl", prop.xl)}`;
    }

    if (classResult.length == 0) {
        classResult = "col"
    }

    return (
        <div className={helper.mergeClassName(classResult).trim()}>{prop.children}</div>
    );
};

function buildClassAttribute(size: string, value: string | boolean | number): string {
    let subResult = "";
    if (typeof value === "number") {
        subResult = `col-${size}-${value}`;
    }
    if (typeof value === "string" && value == "auto") {
        subResult = `col-${size}-auto`;
    }
    if (typeof value === "boolean" && value) {
        subResult = `col-${size}`
    }
    return subResult;

}

export default Col;