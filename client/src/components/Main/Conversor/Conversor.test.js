import React from "react";
import { shallow } from "enzyme";
import Convertor from "./Convertor";

describe("Convertor", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Convertor />);
    expect(wrapper).toMatchSnapshot();
  });
});
