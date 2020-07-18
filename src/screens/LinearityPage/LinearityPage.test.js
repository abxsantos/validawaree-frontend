import React from "react";
import { shallow } from "enzyme";

import LinearityPage from "./LinearityPage";
import LinearityBlock from "../../components/Linearity/LinearityBlock"

describe("LinearityPage component", () => {
  describe("Must have a grid container", () => {
    const wrapper = shallow(<LinearityPage />);
    const gridComponent = wrapper.find(".LinearityMainContainer");
    it("The grid container should be rendered", () => {
      expect(gridComponent.exists()).toBe(true);
    });
    it.each`
      property        |   expectedPropertyValue
      ${'justify'}    |   ${"justify"}
      ${'direction'}  |   ${"column"}
      ${'alignItems'} |   ${"center"}
    `("Must have the property $property  with value $expectedPropertyValue", ({property, expectedPropertyValue}) => {
      const gridComponentProperty = gridComponent.prop(property);
      expect(() => gridComponentProperty.toBe(expectedPropertyValue));
    });
    describe("Must have as children", () => {
        it("The Linearity block containing all the input components and result components should be rendered", () => {
            const linearityBlockComponent = gridComponent.find(LinearityBlock);
            expect(linearityBlockComponent.exists()).toBe(true);
        });
    });
  });
});

