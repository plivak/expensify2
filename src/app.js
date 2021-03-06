
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter } from './actions/filters';
import './firebase/firebase';
// import './playground/promises';


const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
// store.dispatch(addExpense({ description: 'Coffee', amount: 900}));

// store.dispatch(setTextFilter('water'));


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

// console.log (store.getState());
// console.log('test');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


  


