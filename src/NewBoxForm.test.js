import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it("renders without crashing", function () {
    render(<NewBoxForm />);
    });
    
it("matches snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
    });

it('adds a new box on form submission and resets the form', () => {
    // Define a mock addBox function
    const mockAddBox = jest.fn();

    const { getByLabelText, queryByText } = render(
    <NewBoxForm addBox={mockAddBox} />
    );

    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const bgColorInput = getByLabelText('Background Color:');
    const submitButton = queryByText('Add Box');

    fireEvent.change(widthInput, { target: { value: '250px' } });
    fireEvent.change(heightInput, { target: { value: '250px' } });
    fireEvent.change(bgColorInput, { target: { value: 'teal' } });
    fireEvent.click(submitButton);

    expect(mockAddBox).toHaveBeenCalledWith({
    width: '250px',
    height: '250px',
    backgroundColor: 'teal',
    });

    expect(widthInput).toHaveValue(''); 
    expect(heightInput).toHaveValue(''); 
    expect(bgColorInput).toHaveValue('');
});
