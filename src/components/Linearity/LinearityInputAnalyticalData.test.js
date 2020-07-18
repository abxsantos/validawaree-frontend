import React from "react";
import { shallow } from "enzyme";

import {LinearityInputAnalyticalData} from "./LinearityInputAnalyticalData";

const mockProps = {
  props: { numColumns: '3', numRows: '1', analyticalData: [['','','']], dilutionFactor: ['']},
};

describe("LinearityInputAnalyticalData", () => {
  const wrapper = shallow(<LinearityInputAnalyticalData {...mockProps} />);
  it("Must render a title", () => {
    const titleComponent = wrapper.find(`[data-test="title"]`);
    expect(titleComponent.exists()).toBe(true);
  });
  it("must render a table", () => {
    const simpleTableComponent = wrapper.find(`[data-test="simpleTable"]`);
    expect(simpleTableComponent.exists()).toBe(true);
  });
});
