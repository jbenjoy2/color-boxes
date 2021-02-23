import React from 'react';
import { render } from '@testing-library/react';
import { v4 as uuid } from 'uuid';
import Box from './Box';

// smoke test
it('renders without crashing', () => {
	render(<Box id={uuid()} />);
});

// snapshot test
it('matches snapshot', () => {
	const { asFragment } = render(<Box id={uuid()} />);
	expect(asFragment).toMatchSnapshot();
});
