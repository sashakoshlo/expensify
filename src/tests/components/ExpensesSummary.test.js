import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('should render expenses summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
