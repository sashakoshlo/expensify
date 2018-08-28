import React from 'react';
import { shallow } from 'enzyme';
import ExpenceDashboardPage from '../../components/ExpenseDashboardPage';

test('should render Expense dashboard page', () => {
  const wrapper = shallow(<ExpenceDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});