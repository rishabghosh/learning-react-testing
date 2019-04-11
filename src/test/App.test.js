import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "../main/App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * shallow function renders the component without rendering any of its children component
 * it puts place holder in the place of children components
 * @method setState is used to test a state on shallow wrappers
 */

const setUp = function(props = {}, state = null) {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttribute = function(wrapper, attribute) {
  return wrapper.find(`[data-test='${attribute}']`);
};

const simulateClick = function(wrapper, clickable, clickCount = 1) {
  for (let count = 0; count < clickCount; count++) {
    clickable.simulate("click");
  }
  wrapper.update();
};

test("renders app without crashing", () => {
  const wrapper = setUp();
  const appComponent = findByTestAttribute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders header without crashing", () => {
  const wrapper = setUp();
  const header = findByTestAttribute(wrapper, "header");
  expect(header.length).toBe(1);
});

test("renders counter display for counter without crashing", () => {
  const wrapper = setUp();
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("renders button without crashing", () => {
  const wrapper = setUp();
  const incrementButton = findByTestAttribute(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});

test("should increment on click", () => {
  const count = 7;
  const wrapper = setUp(null, { count });
  const button = findByTestAttribute(wrapper, "increment-button");
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  simulateClick(wrapper, button);

  expect(counterDisplay.text()).toContain(count + 1);
});

test("should derement the count on click", () => {
  const count = 7;
  const wrapper = setUp(null, { count });
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  const decrementButton = findByTestAttribute(wrapper, "decrement-button");
  simulateClick(wrapper, decrementButton);

  expect(counterDisplay.text()).toContain(count - 1);
});

test("counter should never go below zero", () => {
  const count = 1;
  const wrapper = setUp(null, { count });
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  const decrementButton = findByTestAttribute(wrapper, "decrement-button");
  simulateClick(wrapper, decrementButton, 2);

  expect(counterDisplay.text()).toContain(count - 1);
});

test("should display a error message when counter is decremented below 0", () => {
  const count = 0;
  const wrapper = setUp(null, { count });
  const counterDisplay = findByTestAttribute(wrapper, "error-display");
  const decrementButton = findByTestAttribute(wrapper, "decrement-button");
  simulateClick(wrapper, decrementButton);

  expect(counterDisplay.text()).toBeTruthy();
});

test("should not display error when increment button is clicked", () => {
  const count = 0;
  const wrapper = setUp(null, { count });
  const counterDisplay = findByTestAttribute(wrapper, "error-display");
  
  const decrementButton = findByTestAttribute(wrapper, "decrement-button");
  const incrementButton = findByTestAttribute(wrapper, "increment-button");
  simulateClick(wrapper, decrementButton);
  simulateClick(wrapper, incrementButton);

  expect(counterDisplay.text()).toBeFalsy();
});
