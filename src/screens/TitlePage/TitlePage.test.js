import React from "react";
import { shallow } from "enzyme";

import TitlePage from "./TitlePage";

describe("TitlePage component", () => {
  describe("Must have a grid container", () => {
    const wrapper = shallow(<TitlePage />);
    const gridComponent = wrapper.find(".LinearityInputComponent");
    it("The Grid component must be rendered", () => {
      expect(gridComponent.exists()).toBe(true);
    });
    it("The Grid Container must direct the children as a column", () => {
      const gridComponentDirection = gridComponent.prop("direction");
      expect(gridComponentDirection).toBe("column");
    });
    describe("The Grid component must have as children", () => {
      it("A Main title component that must be rendered", () => {
        const mainTitleCompoment = gridComponent.find(".mainTitle");
        expect(mainTitleCompoment.exists()).toBe(true);
      });
      it("A subtitle component that must be rendered", () => {
        const subtitleCompoment = gridComponent.find(".subtitle");
        expect(subtitleCompoment.exists()).toBe(true);
      });
    });
  });
});
