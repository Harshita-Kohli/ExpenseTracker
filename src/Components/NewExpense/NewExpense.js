import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
//this component returns a form for taking user input
const NewExpense = (props) =>{
    //we have a state for deciding whether to show or hide the form
    const [isEditing,setIsEditing] = useState(false);
    //We want to use the expense data from expenseForm in the NewExpense component
    //to pass data from parent to child, we use this way: we pass a function as a prop 
    //from parent to child component, and call it from inside the child component with an argument 
    const saveExpenseDataHandler = (enteredExpenseData) =>{ //this function expects to get expenseData as an argument
            const expenseData = {
                ...enteredExpenseData, //using spread to pull out all the key value pairs from the parameter wala object 
                id: Math.random().toString() //we add a key 'id' to the expenseData object as a unique id
            };
            //now we want to call the addExpenseHandler function of App component to send it the expense
            props.onAddExpense(expenseData);
            // console.log(expenseData);
            //we also want once the form is submitted, it should get closed
            setIsEditing(false);//so make isEditing = false
    }
    //this handler function simply sets the setIsEditing to true
    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
    //we are passing a reference of the method as a prop to the ExpenseForm component:
    return (
        //if isEditing is false, we need to show the button, otherwise, show the expenseForm.
        //If in the expenseForm component, the cancel button is clicked, we want to call the stopEditing function so that the isEditing = false
        //we do so by adding a prop called 'OnCancel' becuase we try to change the state of one component from other component
        <div className='new-expense'>
            {!isEditing && <button onClick = {startEditingHandler}>Add an Expense</button>} 
            {isEditing && <ExpenseForm onCancel = {stopEditingHandler} onSaveExpenseData = {saveExpenseDataHandler}/> }
        </div>
    );
}
export default NewExpense;