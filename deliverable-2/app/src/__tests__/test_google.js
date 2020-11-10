import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import Google from '../components/Google/Google.js';

import { shallow } from 'enzyme';

// test('it calls start logout on button click', () => {
//     const mockLogout = jest.fn();
//     const wrapper = shallow(<Google startLogout={mockLogout}/>);
//     wrapper.find('button').at(0).simulate('click');
//     expect(mockLogout).toHaveBeenCalled();
// });
