import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Row from "./Row";
import AlignItem from "./enums/AlignItem";
import JustifyContent from "./enums/JustifyContent";

describe("<Row />", () => {

    it("no params -> class='row'", () => {
        const component = shallow(<Row >hi</Row>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("applyClass='main' -> class='row main'", () => {
        const component = shallow(<Row applyClass='main'>hi</Row>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("align='Start' -> class='row align-item-start'", () => {
        const component = shallow(<Row align={ AlignItem.Start }>hi</Row>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("applyClass='main' + align='Start' -> class='row align-item-start'", () => {
        const component = shallow(<Row applyClass="main" align={ AlignItem.Start }>hi</Row>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

    it("applyClass='main' + align='JustifyContent.Around' => class='row justify-content-around main", () => {
        const component = shallow(<Row applyClass="main" align={JustifyContent.Around}>hi</Row>);
        const tree = toJson(component);
        expect(tree).toMatchSnapshot();
    });

});

