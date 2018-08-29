import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenceListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenceDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenceListFilters />
    <ExpenseList />
  </div>
);

export default ExpenceDashboardPage;