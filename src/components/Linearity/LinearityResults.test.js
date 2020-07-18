import React from "react";
import { shallow } from "enzyme";

import LinearityResults from "./LinearityResults";

describe("LinearityResults", () => {
  const wrapper = shallow(<LinearityResults />);
  describe("Main grid container", () => {
    const mainContainer = wrapper.find(`[_test="mainContainer"]`);
    it("Should be rendered", () => {
      expect(mainContainer.exists()).toBe(true);
    });
    it.each`
      expectedProperty | expectedAttribute
      ${"direction"}   | ${"row"}
      ${"justify"}     | ${"space-between"}
      ${"alignItems"}  | ${"center"}
      ${"spacing"}     | ${0}
    `(
      "Should have the following property $expectedProperty with the attribute $expectedAttriute",
      ({ expectedProperty, expectedAttribute }) => {
        expect(mainContainer.prop(expectedProperty)).toBe(expectedAttribute);
      }
    );
    it("Should have two grid children", () => {
      expect(mainContainer.length).toBe(1);
    });
    describe("Nested inside these grids", () => {
      it.each`
        expectedCommponent     | expectedContainer
        ${"regressionGraph"}   | ${"regressionContainer"}
        ${"anovaTable"}        | ${"regressionContainer"}
        ${"residuesChart"}     | ${"residuesContainer"}
        ${"statisticsTable"}   | ${"residuesContainer"}
        ${"coefficientsTable"} | ${"residuesContainer"}
      `(
        "Must be rendered the component $expectedCommponent",
        ({ expectedComponent, expectedContainer }) => {
          const childContainer = mainContainer.find(
            `[_test='${expectedContainer}']`
          );
          console.log(childContainer.debug())
          expect(
            childContainer.dive().find(`[_test='${expectedComponent}']`).exists()
          ).toBe(true);
        }
      );
    });
  });
});
