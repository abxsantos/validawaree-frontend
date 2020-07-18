import React from "react";
import { shallow } from "enzyme";

import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import Footer from "./Footer";

describe("Footer component", () => {
  const wrapper = shallow(<Footer />);
  describe("Must render icons with contact reference", () => {
    it.each`
      expectedId         | expectedLink                                       | expectedIcon
      ${"gitHubLink"}   | ${"https://github.com/abxsantos?tab=repositories"} | ${GitHubIcon}
      ${"linkedinLink"} | ${"https://www.linkedin.com/in/alexandrebxs/"}     | ${LinkedInIcon}
      ${"emailLink"}    | ${"mailto:ale.bxsantos@gmail.com"}                 | ${EmailIcon}
    `(
      "The link id should be $expectedId  with the link $expectedLink and the $expectedIcon",
      ({ expectedId, expectedLink, expectedIcon }) => {
        const linkComponent = wrapper.find(`[data-test='${expectedId}']`);
        expect(linkComponent.exists()).toBe(true);
        expect(linkComponent.prop("href")).toBe(expectedLink);
        expect(linkComponent.find(expectedIcon).exists()).toBe(true);
      }
    );
    it("Must contain a message with the year", () => {
      const copyrightComponent = wrapper.find(`[data-test="copyright"]`);
      expect(copyrightComponent.exists()).toBe(true);
    });
  });
});
