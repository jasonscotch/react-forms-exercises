import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it("renders without crashing", function () {
    render(<NewTodoForm />);
    });
    
it("matches snapshot", function () {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
    });

it('adds a new box on form submission and resets the form', () => {
    // Define a mock addBox function
    const mockAddTodo = jest.fn();

    const { getByLabelText, queryByText } = render(
    <NewTodoForm addTodo={mockAddTodo} />
    );

    const input = getByLabelText('Todo:');
    const submitButton = queryByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Walk Dog' } });
    fireEvent.click(submitButton);

    expect(mockAddTodo).toHaveBeenCalledWith({
        todo: 'Walk Dog'
    });

    expect(input).toHaveValue(''); 
    
});
