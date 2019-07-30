import React from 'react';
import ReactDOM from 'react-dom';
import Doglist from './Doglist';
import { shallow, mount } from 'enzyme';

it('renders without crashing', function () {
    shallow(<Doglist />);
});

it('renders without crashing', function () {
    mount(<Doglist />);
});
