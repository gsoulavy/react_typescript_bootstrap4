import * as React from "react";
import * as helper from "./../helpers/StatelessHelper";
import IComponentProps  from "./../interfaces/IComponentProps";
import AlignSelf from "./enums/AlignSelf";

interface IProps extends IComponentProps {
    col?: number | boolean | string;
    sm?: number | boolean | string;
    md?: number | boolean | string;
    lg?: number | boolean | string;
    xl?: number | boolean | string;
    align?: AlignSelf;
    order?: number;
    orderSm?: number;
    orderMd?: number;
    orderLg?: number;
    orderXl?: number;
}

const Col: React.StatelessComponent<IProps> = (prop) => {
    return (
        <div className={`${getColumnClass(prop)}${helper.mergeClass(prop.align)}${getOrderClass(prop)}${helper.mergeClass(prop.applyClass)}`.trim()}>{prop.children}</div>
    );
};

function getColumnClass(prop: IProps) {
    let column = "";

    if (!!prop.col) {
        column = buildClassAttribute("col", null, prop.col);
    }

    if (!!prop.sm) {
        column += buildClassAttribute("col", "sm", prop.sm);
    }

    if (!!prop.md) {
        column += buildClassAttribute("col", "md", prop.md);
    }

    if (!!prop.lg) {
        column += buildClassAttribute("col", "lg", prop.lg);
    }

    if (!!prop.xl) {
        column += buildClassAttribute("col", "xl", prop.xl);
    }

    if (column.length == 0) {
        column = "col"
    }

    return column;
}

function getOrderClass(prop: IProps){
    let order = "";
    if (!!prop.order) {
        order = buildClassAttribute("order", null, prop.order);
    }

    if (!!prop.orderSm) {
        order += buildClassAttribute("order", "sm", prop.orderSm);
    }

    if (!!prop.orderMd) {
        order += buildClassAttribute("order", "md", prop.orderMd);
    }

    if (!!prop.orderLg) {
        order += buildClassAttribute("order", "lg", prop.orderLg);
    }

    if (!!prop.orderXl) {
        order += buildClassAttribute("order", "xl", prop.orderXl);
    }

    return order;
}

function buildClassAttribute(type: string, size: string, value: string | boolean | number): string {
    let subResult = "";
    if (typeof value === "number") {
        subResult = ` ${type}${size ? "-" + size  : ""}-${value}`;
    }
    if (typeof value === "string" && value == "auto") {
        subResult = ` ${type}${size ? "-" + size : ""}-auto`;
    }
    if (typeof value === "boolean" && value) {
        subResult = ` ${type}${size ? "-" + size : ""}`
    }
    return subResult;

}

export default Col;