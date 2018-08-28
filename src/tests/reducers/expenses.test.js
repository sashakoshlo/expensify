import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove any expenses if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '104',
    description: 'Coffee',
    amount: 450,
    createdAt: 1000,
    note: 'Monday'
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Rent May',
    amount: 200000,
    createdAt: moment(),
    note: 'Rent changed'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({ ...expenses[1], ...updates });
});

test('should not edit expense if expense not found', () => {
  const updates = {
    description: 'Rent May',
    amount: 200000,
    createdAt: moment(),
    note: 'Rent changed'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});