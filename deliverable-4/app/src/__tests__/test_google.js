import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Google from '../components/Google/Google.js';


describe('App', () => {
  	it('renders without crashing', () => {
	  	const div = document.createElement('div');
	  	ReactDOM.render(<Google />, div);
	});

  	it('return button successful', () => {
  	  	const { getByText } = render(<Google />);
	  	const button = getByText('Return');
	  	fireEvent.click(button);
	});

	it('return button exists with correct text', () => {
	  	const { getByTestId } = render(<Google />);
	  	expect(getByTestId(/return-button/i).textContent).toBe("Return");
	});
});