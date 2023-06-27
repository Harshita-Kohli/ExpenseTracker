import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = (props) =>{
    //the default value for expensesContent is 'No Expenses Found' when no expenses are present
    //but if the filteredExpenses array has some expenses in it, then we want to render them,so we 
    if(props.expenses.length===0)
    {
        return <h1 className='expenses-list__fallback'>No Expenses Found</h1>
    }
    return (
        <ul className='expenses-list'> 
        {props.expenses.map(expense =>  //we use props to access the filteredExpenses coz we passed those to this component as the attributes
            <ExpenseItem //we return expenses items as an Unordered list
            key = {expense.id}
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date}/>
        )}
    </ul>
    );
};
export default ExpensesList;
