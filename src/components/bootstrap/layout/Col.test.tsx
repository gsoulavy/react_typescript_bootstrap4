import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Col from "./Col";

describe("<Col />", () => {

    it("No params -> class='col'", () => {
        const component = shallow(<Col>hi</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("No params + applyClass='main' -> class='col main'", () => {
        const component = shallow(<Col applyClass="main">hi</Col>);
        expect(component.hasClass("col")).toBe(true);
        expect(component.hasClass("main")).toBe(true);
    });

    it("col='1' -> class='col-1'", () => {
        const component = shallow(<Col col={1}>hi</Col>);
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
        const component = shallow(<Col col={true} md="auto" lg={2}>hi</Col>)
        expect(component.hasClass("col")).toBe(true);
        expect(component.hasClass("col-md-auto")).toBe(true);
        expect(component.hasClass("col-lg-2")).toBe(true);
    });

});

