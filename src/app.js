//(use 'esversion:6');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({description: 'Water bill', amount: 200, createdAt: -3000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 30, createdAt: -1000 }));
store.dispatch(addExpense({description: 'Energy bill', amount: 217, createdAt: 9001}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleEspenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleEspenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));