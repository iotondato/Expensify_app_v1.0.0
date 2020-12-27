import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expense';

test('should expense list item render a expese', () =>{
    const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />);
    expect(wrapper).toMatchSnapshot();
});

