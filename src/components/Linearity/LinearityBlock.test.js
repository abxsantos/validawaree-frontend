import React from "react";
import { shallow } from "enzyme";

import { LinearityBlock } from "./LinearityBlock";


const mockProps = {
  count: 0,
  actualComponent: '',
};

describe("LinearityBlock", () => {
  const wrapper = shallow(<LinearityBlock {...mockProps} />);
  const mainContainer = wrapper.find(`[data-test="MainContainer"]`);
  it("Must render a main grid container", () => {
    expect(mainContainer.exists()).toBe(true);
  });
  describe("The main grid must contain children components", () => {
    describe("The second one is the text button", () => {
      it("The text button should be rendered inside the grid component", () => {});
        const nextTextButton = mainContainer.find(`[data-test="nextButton"]`);
        expect(nextTextButton.exists()).toBe(true)
    });
  });
});
