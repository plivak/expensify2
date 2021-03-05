import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//refactor editExpensePage to be class based component
//Setup mapDispatch to Props

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    //dispatch action to edit expense
    // redirect to the dashboard
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
      this.props.removeExpense({ id: this.props.expense.id });
      this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm 
          expense = {this.props.expense}
          onSubmit={this.onSubmit} 
          />
          <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};



//should render EditExpensePage
//snapshot

//should handle EditExpense using spies

//should handle removeExpense using spies

// const EditExpensePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <ExpenseForm 
//         expense = {props.expense}
//         onSubmit={(expense) => {
//             //dispatch action to edit expense
//             // redirect to the dashboard
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//           //console.log('updated', expense);
//          }}
//         />
//         <button onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push('/');
//         }}>Remove</button>

//     </div>
//   );
// };

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);