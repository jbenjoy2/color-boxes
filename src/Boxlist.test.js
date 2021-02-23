import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// smoke test
it('renders without crashing', () => {
	render(<BoxList />);
});

// snapshot test
it('matches snapshot', () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment).toMatchSnapshot();
});

it('should accept inputs and add new box', () => {
	const boxList = render(<BoxList />);

	const widthInput = boxList.getByLabelText('Box Width');
	const heightInput = boxList.getByLabelText('Box height');
	const colorInput = boxList.getByLabelText('Box color');
	const addButton = boxList.queryByText('Add box!');

	// no box yet so no delete button
	expect(boxList.queryByText('Delete')).not.toBeInTheDocument();
	fireEvent.change(widthInput, { target: { value: '3' } });
	fireEvent.change(heightInput, { target: { value: '3' } });
	fireEvent.change(colorInput, { target: { value: 'green' } });
	fireEvent.click(addButton);
	const removeButton = boxList.queryByText('Delete');
	// expect to see a 3emx3em green box
	expect(removeButton.previousSibling).toHaveStyle(`
  width: 3em;
  height: 3em;
  background-color: green`);

	// form inputs should be empty now
	expect(widthInput).toHaveTextContent('');
	expect(heightInput).toHaveTextContent('');
	expect(colorInput).toHaveTextContent('');
});

it('should be able to remove a box', () => {
	const boxList = render(<BoxList />);

	const widthInput = boxList.getByLabelText('Box Width');
	const heightInput = boxList.getByLabelText('Box height');
	const colorInput = boxList.getByLabelText('Box color');
	const addButton = boxList.queryByText('Add box!');

	// no box yet so no delete button
	fireEvent.change(widthInput, { target: { value: '3' } });
	fireEvent.change(heightInput, { target: { value: '3' } });
	fireEvent.change(colorInput, { target: { value: 'green' } });
	fireEvent.click(addButton);
	// box should be there
	expect(boxList.queryByText('Delete')).toBeInTheDocument();
	const removeButton = boxList.queryByText('Delete');
	fireEvent.click(removeButton);
	// no box should be in the document
	expect(boxList.queryByText('Delete')).not.toBeInTheDocument();
});
