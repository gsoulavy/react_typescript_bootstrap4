import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import ComponentProps from "./../interfaces/IComponentProps";
import AlignItem from "./enums/AlignItem";

interface Props extends ComponentProps {
    align?: AlignItem
}

const Row : React.StatelessComponent<Props> = (prop) => {
    return (
        <div className={`row${helper.mergeClassName(prop.align)}${helper.mergeClassName(prop.applyClass)}`.trim()}>
            {prop.children}
        </div>
    );
};

export default Row;