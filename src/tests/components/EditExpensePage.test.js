import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    //initiaize using spies
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        history={history} 
        expense={expenses[2]}
        />
        );
    }
);

//should render EditExpensePage
//snapshot
test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

//should handle EditExpense using spies
test('should handle EditExpense using spies', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('//should handle removeExpense using spies', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[2].id
    });
});





//should handle removeExpense using spies