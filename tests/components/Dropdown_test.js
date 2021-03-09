/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import { mount } from "enzyme";

import icons from "../../src/icons";
import Dropdown from "../../src/components/Dropdown";
import DropdownItem from "../../src/components/DropdownItem";

describe("Dropdown Component", () => {
  let testContext;

  beforeEach(() => {
    testContext = {};
    testContext.selected = "metal";
    testContext.onChange = jest.fn();
    const dropdownItems = [
      { key: "pagode", icon: icons.MediaMediumIcon, label: "Pagode" },
      { key: "metal", icon: icons.MediaBigIcon, label: "Metal" },
      { key: "samba", icon: icons.MediaSmallIcon, label: "Samba" }
    ];

    testContext.component = mount(
      <Dropdown
        items={dropdownItems}
        selected={testContext.selected}
        onChange={testContext.onChange}
      />
    );
  });

  it("renders without problems", () => {
    expect(testContext.component).toBeDefined();
  });

  it("renders dropdown items", () => {
    const items = testContext.component.find(DropdownItem);
    expect(items).toHaveLength(4);
  });

  it("renders default selected dropdown item", () => {
    const selected = testContext.component.find(DropdownItem).first();

    const text = selected.find("span");
    expect(text.text()).toEqual("Metal");
  });

  it("is possible to click on the dropdrown item", () => {
    const item = testContext.component.find(DropdownItem).at(1);

    expect(testContext.onChange).not.toHaveBeenCalled();

    item.find("div").simulate("click");

    expect(testContext.onChange).toHaveBeenCalled();
  });

  it("toggles `isOpen` on click", () => {
    const wrapper = testContext.component.find("div").first();

    wrapper.simulate("click");
    expect(testContext.component.state("isOpen")).toBeTruthy();

    wrapper.simulate("click");
    expect(testContext.component.state("isOpen")).toBeFalsy();
  });
});
