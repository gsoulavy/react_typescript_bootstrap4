import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Col from "./Col";
import AlignSelf from "./enums/AlignSelf";

describe("<Col />", () => {

    it("No params -> class='col'", () => {
        const component = shallow(<Col>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("offset={2} -> class='col offset-3'", () => {
        const component = shallow(<Col offset={3}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("No params + applyClass='main' -> class='col main'", () => {
        const component = shallow(<Col applyClass="main">hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("col='1' -> class='col-1'", () => {
        const component = shallow(<Col col={1}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("col='1' offsetLg={4} -> class='col-1 offset-lg-4'", () => {
        const component = shallow(<Col col={1} offsetLg={4}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("col='auto' -> class='col-auto'", () => {
        const component = shallow(<Col col="auto">hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("sm={true} -> class='col-sm'", () => {
        const component = shallow(<Col sm={true}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("col='true' lg={2} md='auto' -> class='col col-md-auto col-lg-2", () => {
        const component = shallow(<Col col={true} md="auto" lg={2}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("align={AlignSelf.End} -> class='col align-self-end'", () => {
        const component = shallow(<Col align={AlignSelf.End}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("align={AlignSelf.End} applyClass='some' -> class='col align-self-end some'", () => {
        const component = shallow(<Col align={AlignSelf.End} applyClass="some">hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("sm={true} order={1} -> class='col-sm order=1'", () => {
        const component = shallow(<Col sm={true} order={1}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("sm={true} orderSm={1} orderLg={5}-> class='col-sm order-sm-1 order-lg-5'", () => {
        const component = shallow(<Col sm={true} orderSm={1} orderLg={5} orderMd={3}>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

});

