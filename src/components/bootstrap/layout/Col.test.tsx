import * as React from "react";
import * as ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Col from "./Col";

describe("<Col />", () => {

    it("No params -> class='col'", () => {
        const component = shallow(<Col>hi!</Col>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("col='1' -> class='col-1'", () => {
        const component = shallow(<Col col={1}>hi</Col>);
        expect(true).toBe(component.hasClass("col-1"));
    });

    it("col='auto' -> class='col-auto'", () => {
        const component = shallow(<Col col="auto">hi</Col>);
        expect(true).toBe(component.hasClass("col-auto"));
    });

    it("Col test", () => {
        expect(true).toBe(true);
    });
});

