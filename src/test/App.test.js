import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "../main/App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * shallow function renders the component without rendering any of its children component
 * it puts place holder in the place of children components
 */

test("renders app without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders header without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='header']");
  expect(appComponent.length).toBe(1);
});

test("renders display for counter without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='counter-display']");
  //here there is two componet-display that why the length should be 2
  expect(appComponent.length).toBe(1);
});

test("renders button without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='increment-button']");
  expect(appComponent.length).toBe(1);
});

test("renders custom test without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[custom-test='counter-display']");
  expect(appComponent.length).toBe(1);
});

/**
 * @method setState is used to test a state on shallow wrappers
 * @method simulate is used to interact with rendered elements
 */

test("should increment on click", () => {
  //gotcha set the same state that is used in the component
  const count = 7;
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']");
  //simulationg a click
  wrapper.setState({ count });
  button.simulate("click");
  wrapper.update();
  //checking if the display updates correctly or not
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.text()).toContain(count + 1);
});

test("should derement the count on click", () => {
  const count = 7;
  const wrapper = shallow(<App />);
  wrapper.setState({ count });

  const button = wrapper.find("[data-test='decrement-button']");
  button.simulate("click");
  wrapper.update();

  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.text()).toContain(count - 1);
});
