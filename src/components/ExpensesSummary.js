import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const expensesCount = props.expenses.length;
  const expensesTotal = selectExpensesTotal(props.expenses);
  return (
    <div>
      {expensesCount === 1 ?
        <p>Viewing 1 expense totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
        :
        <p>Viewing {expensesCount} expenses totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({ expenses: selectExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpensesSummary);