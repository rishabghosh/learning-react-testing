import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "../main/App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='header']");
  expect(appComponent.length).toBe(1);
});

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='counter-display']");
  //here there is two componet-display that why the length should be 2
  expect(appComponent.length).toBe(2);
});

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='increment-button']");
  expect(appComponent.length).toBe(1);
});

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[custom-test='counter-display']");
  expect(appComponent.length).toBe(1);
});
