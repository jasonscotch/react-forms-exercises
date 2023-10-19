import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
    const { queryByText, getByLabelText, container } = render(<BoxList />);
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const colorInput = getByLabelText("Background Color:");
    const btn = queryByText("Add Box");
    expect(container).not.toHaveStyle('background-color: black');
    fireEvent.change(widthInput, { target: { value: '250px' } });
    fireEvent.change(heightInput, { target: { value: '250px' } });
    fireEvent.change(colorInput, { target: { value: 'black' } });
    fireEvent.click(btn);

    const lastBoxContainer = container.querySelectorAll('.Box-container:last-child')[0];
    const innerBox = lastBoxContainer.querySelector('div:first-child');
  
    expect(innerBox).toHaveStyle('width: 250px; height: 250px; background-color: black;');
});
  
it("should remove a box when X is clicked", () => {
    const { getByText, container } = render(<BoxList />);
    const lastBoxContainer = container.querySelectorAll('.Box-container:last-child')[0];
    const firstBoxContainer = container.querySelectorAll('.Box-container:first-child')[0];
    const lastInnerBox = lastBoxContainer.querySelector('div:first-child');
    const firstInnerBox = firstBoxContainer.querySelector('div:first-child');
    const xBtn = getByText('X', { selector: '.Box-container:nth-child(1) .X' });

    fireEvent.click(xBtn);
  
    expect(lastInnerBox).toHaveStyle('width: 250px; height: 250px; background-color: orange;');
    expect(firstInnerBox).not.toHaveStyle('width: 250px; height: 250px; background-color: orange;');
    
})
 
