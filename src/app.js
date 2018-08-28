import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoputer from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRoputer />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
