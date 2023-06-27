import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './ExpenseItems.css';
const ExpenseItems = (props) => {
    //we define the state for this ExpenseItems component, and the initial value of the year = 2020
    const [expenseYear, setExpenseYear] = useState('2020');
    //this function takes the expenseYear from the ExpenseFilter component as a parameter
    const expenseYearChangeHandler = (enteredExpenseYear) =>{ 
        console.log(enteredExpenseYear);
        setExpenseYear(enteredExpenseYear);
    }
    const filteredExpenses = props.expenses.filter(expense =>{  //filter() is a built-in method that takes a method as argument, that method returns true or false.If true, then filter keeps that element in the new array else it does not. Filter creates a new array!
        return expense.date.getFullYear().toString()===expenseYear; //does the date for the specific expense mathces the filter date or not?
    });
    //==============================
    //Conditional Rendering logic is in a separate file called ExpensesList.js:

    //Here we actually return the JSX 
    return (
        <div>
        <Card className = "expenses">
            <ExpensesFilter onExpenseYearChange = {expenseYearChangeHandler} value = {expenseYear}/>
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList expenses = {filteredExpenses}/>
        </Card>
        </div>

    );
}
export default ExpenseItems;