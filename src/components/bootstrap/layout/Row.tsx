import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import IComponentProps from "./../interfaces/IComponentProps";
import AlignItem from "./enums/AlignItem";
import JustifyContent from "./enums/JustifyContent";

interface IProps extends IComponentProps {
    align?: AlignItem | JustifyContent
}

const Row : React.StatelessComponent<IProps> = (prop) => {
    return (
        <div className={`row${helper.mergeClass(prop.align)}${helper.mergeClass(prop.applyClass)}`.trim()}>
            {prop.children}
        </div>
    );
};

export default Row;