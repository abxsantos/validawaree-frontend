import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import HomePage from "./screens/HomePage/HomePage";
import LinearityPage from "./screens/LinearityPage/LinearityPage";

describe("App component", () => {
  describe("Must render page wrapper components", () => {
    it("Should render Scroll to top without errors.", () => {
      const wrapper = shallow(<App />);
      const scrollToTopCompoment = wrapper.find(".scrollToTop");
      expect(scrollToTopCompoment.exists()).toBe(true);
    });
    describe("The pages nested in wrapper components", () => {
      it.each`
        expectedPath    | expectedRouteClassName   | expectedComponent
        ${"/"}          | ${".homePageRoute"}      | ${HomePage}
        ${"/linearity"} | ${".linearityPageRoute"} | ${LinearityPage}
      `(
        "When the user enters the $expectedPath path the component $expectedComponent at the route $expectedRouteClassName should be rendered",
        ({ expectedPath, expectedRouteClassName, expectedComponent }) => {
          const wrapper = shallow(<App />);
          const route = wrapper.find(expectedRouteClassName).prop("path");
          const routeComponent = wrapper
            .find(expectedRouteClassName)
            .prop("component");
          expect(() => route.toBe(expectedPath));
          expect(() => routeComponent.toBe(expectedComponent));
        }
      );
    });
  });
});
