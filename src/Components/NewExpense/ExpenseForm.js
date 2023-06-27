import React, { useState } from 'react';
import './ExpenseForm.css';
//this component will listen to the user inputs and will gather data entered by the user into a single object
//and will return that object to NewExpense component 
const ExpenseForm = (props) =>{
    //we can have multiple slices of states within the same component, all will get updated separately
    const [enteredTitle,setEnteredTitle] = useState(''); //initially, the value was nothing so ''
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);//this function's execution will not only assign new value 
        //to the title, but will also lead the ExpenseForm component to be called again for getting 
        //re-rendered with these changes
        // console.log(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, //The unary plus (+) operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
            date: new Date(enteredDate)
        }
        //we are calling the function that helps in sending expenseData to the parent ie to the NewExpense
        props.onSaveExpenseData(expenseData);//executing the function even if it is not present inside this component 
        //is possible coz the reference of function is passed as a prop to this component

        // console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    }
    return (
        <form onSubmit = {submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type = 'text' 
                        value = {enteredTitle}
                        onChange = {titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' 
                        value = {enteredAmount}
                        onChange = {amountChangeHandler} 
                        min = '0.01' 
                        step = '0.01'
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type = 'date' 
                        value = {enteredDate}
                        onChange = {dateChangeHandler} 
                        min = '2019-01-01' 
                        max = '2022-12-31'
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick = {props.onCancel} type = 'button'>Cancel</button>
                <button type = 'submit'>Add New Expense</button>
                
            </div>
        </form>
    );
}
export default ExpenseForm;