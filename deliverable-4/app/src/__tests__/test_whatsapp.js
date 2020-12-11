import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import WhatsApp from '../components/WhatsApp/WhatsApp.js';

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WhatsApp />, div);
    });
    it('return button successful', () => {
        const { getByText } = render(<WhatsApp />);
      const button = getByText('Return To Main Menu');
      fireEvent.click(button);
    });
});