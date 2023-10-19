import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Todo:");
    const btn = queryByText("Add Todo");
    expect(queryByText('Walk Dog')).not.toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'Walk Dog' } });
    fireEvent.click(btn);

    expect(queryByText('Walk Dog')).toBeInTheDocument();
});
  
it("should remove a box when X is clicked", () => {
    const { queryByText, getByLabelText, getByText } = render(<TodoList />);
    const input = getByLabelText("Todo:");
    const btn = queryByText("Add Todo");
    
    fireEvent.change(input, { target: { value: 'Walk Dog' } });
    fireEvent.click(btn);

    const xBtn = getByText('X', { selector: '.Todo-container:last-child .X' });

    fireEvent.click(xBtn);
  
    expect(queryByText('Walk Dog')).not.toBeInTheDocument();
    
})
 