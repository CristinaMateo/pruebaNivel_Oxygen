import React from "react";
import { shallow } from "enzyme";
import Saved from "./Saved";

describe("Saved", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Saved />);
    expect(wrapper).toMatchSnapshot();
  });
});
